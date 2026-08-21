import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import * as admin from "firebase-admin";
import { getStorage } from 'firebase-admin/storage';
import multer from "multer";

let bucket: any;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize Firebase Admin lazily
  if (admin.getApps().length === 0) {
    admin.initializeApp({
      storageBucket: "ai-studio-remix-d57e934c-92dd-4a94-8f6c-3e3c46120a34.appspot.com"
    });
  }
  bucket = getStorage().bucket();
  const upload = multer({ storage: multer.memoryStorage() });

  // API health check route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // API upload route
  app.post("/api/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const folder = req.body.folder || "uploads";
    const filename = `${folder}/${Date.now()}_${req.file.originalname}`;
    const file = bucket.file(filename);

    await file.save(req.file.buffer, {
      contentType: req.file.mimetype,
    });

    await file.makePublic();
    const url = `https://storage.googleapis.com/${bucket.name}/${filename}`;
    res.json({ url });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
