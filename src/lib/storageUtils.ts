import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export async function uploadRawFile(file: File, folder: string): Promise<string> {
  if (!storage) throw new Error('Firebase Storage not initialized');
  
  const timestamp = Date.now();
  const filename = `${folder}/${timestamp}_${file.name}`;
  const storageRef = ref(storage, filename);
  
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  
  return downloadURL;
}
