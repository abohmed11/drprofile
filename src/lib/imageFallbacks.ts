/**
 * Image Fallback and Resilience Utilities
 * Ensures all images render smoothly on all desktop and mobile browsers,
 * regardless of ISP blocking, ad-blockers, or CDN downtime.
 */

// 1. Doctor Avatar fallbacks (high-reliability CDN and SVG fallbacks)
export const DOCTOR_AVATARS = [
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=160&h=160&q=80',
  'https://images.unsplash.com/photo-1594824813596-f9479e000494?auto=format&fit=crop&w=160&h=160&q=80',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=160&h=160&q=80',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&h=160&q=80',
];

// 2. High-quality vector SVG Brand Logo Data URI
export const FALLBACK_LOGO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <rect width="320" height="80" rx="16" fill="transparent"/>
  <!-- Medical Icon -->
  <g transform="translate(15, 12)">
    <rect x="0" y="0" width="56" height="56" rx="14" fill="#0051A8"/>
    <!-- Medical Cross & Pulse -->
    <path d="M28 14v28M14 28h28" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="28" cy="28" r="8" fill="#0051A8" stroke="#FFFFFF" stroke-width="2"/>
    <path d="M22 28h3l2-4 3 8 2-4h3" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <!-- Brand Text -->
  <text x="85" y="40" font-family="Tajawal, Cairo, sans-serif" font-size="26" font-weight="900" fill="#10244A">بروفايلي</text>
  <text x="85" y="58" font-family="Tajawal, Cairo, sans-serif" font-size="12" font-weight="700" fill="#0051A8">البوابة الطبية الشاملة</text>
</svg>
`)}`;

// 3. Fallback Payment Methods Banner Data URI
export const FALLBACK_PAYMENT_METHODS_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 70" fill="none">
  <rect width="420" height="70" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  <g transform="translate(15, 15)">
    <!-- Visa -->
    <rect x="0" y="0" width="65" height="40" rx="6" fill="#1A1F71"/>
    <text x="32" y="26" font-family="sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-style="italic">VISA</text>
    
    <!-- Mastercard -->
    <rect x="75" y="0" width="65" height="40" rx="6" fill="#0A0B0D"/>
    <circle cx="101" cy="20" r="12" fill="#EB001B"/>
    <circle cx="114" cy="20" r="12" fill="#F79E1B" fill-opacity="0.85"/>
    
    <!-- Meeza -->
    <rect x="150" y="0" width="65" height="40" rx="6" fill="#004F3B"/>
    <text x="182" y="25" font-family="Cairo, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">ميزة</text>
    
    <!-- Vodafone Cash -->
    <rect x="225" y="0" width="75" height="40" rx="6" fill="#E60000"/>
    <text x="262" y="24" font-family="Cairo, sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">فودافون كاش</text>
    
    <!-- InstaPay -->
    <rect x="310" y="0" width="80" height="40" rx="6" fill="#4B0082"/>
    <text x="350" y="24" font-family="sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle">InstaPay</text>
  </g>
</svg>
`)}`;

// 4. Fallback Profile Demo Mockup Data URI
export const FALLBACK_PROFILE_DEMO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none">
  <rect width="600" height="400" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
  <!-- Top Bar -->
  <rect x="0" y="0" width="600" height="50" rx="20" fill="#003B7A"/>
  <rect x="0" y="30" width="600" height="20" fill="#003B7A"/>
  <circle cx="30" cy="25" r="6" fill="#EF4444"/>
  <circle cx="50" cy="25" r="6" fill="#F59E0B"/>
  <circle cx="70" cy="25" r="6" fill="#10B981"/>
  <rect x="180" y="14" width="240" height="22" rx="11" fill="#FFFFFF" fill-opacity="0.2"/>
  <text x="300" y="29" font-family="Tajawal, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">drprofile.com/dr-ahmed</text>
  
  <!-- Profile Header Card -->
  <rect x="30" y="70" width="540" height="130" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  <!-- Doctor Avatar -->
  <circle cx="95" cy="135" r="42" fill="#E0F2FE" stroke="#0284C7" stroke-width="3"/>
  <path d="M95 110 C83 110 74 118 74 128 C74 138 83 145 95 145 C107 145 116 138 116 128 C116 118 107 110 95 110 Z" fill="#0284C7"/>
  <path d="M72 165 C72 150 82 147 95 147 C108 147 118 150 118 165 Z" fill="#0369A1"/>
  
  <!-- Doctor Info -->
  <text x="160" y="115" font-family="Cairo, sans-serif" font-size="20" font-weight="900" fill="#10244A">د. أحمد كمال</text>
  <text x="160" y="140" font-family="Tajawal, sans-serif" font-size="14" font-weight="700" fill="#64748B">استشاري جراحة العظام والمفاصل</text>
  <rect x="160" y="155" width="90" height="24" rx="12" fill="#ECFDF5"/>
  <text x="205" y="171" font-family="Tajawal, sans-serif" font-size="11" font-weight="800" fill="#059669" text-anchor="middle">متاح للحجز اليوم</text>
  
  <!-- Quick Booking Button -->
  <rect x="420" y="115" width="130" height="40" rx="10" fill="#0051A8"/>
  <text x="485" y="140" font-family="Tajawal, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle">احجز موعدك</text>
  
  <!-- Lower Services Grid -->
  <rect x="30" y="220" width="255" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  <rect x="50" y="240" width="36" height="36" rx="10" fill="#E0F2FE"/>
  <text x="96" y="262" font-family="Cairo, sans-serif" font-size="15" font-weight="800" fill="#10244A">كشف واستشارة</text>
  <text x="50" y="300" font-family="Tajawal, sans-serif" font-size="12" font-weight="600" fill="#64748B">فحص سريري شامل وتشخيص دقيق</text>
  <rect x="50" y="325" width="70" height="24" rx="8" fill="#F1F5F9"/>
  <text x="85" y="341" font-family="Tajawal, sans-serif" font-size="12" font-weight="800" fill="#0051A8" text-anchor="middle">400 ج.م</text>
  
  <rect x="315" y="220" width="255" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  <rect x="335" y="240" width="36" height="36" rx="10" fill="#FEF3C7"/>
  <text x="381" y="262" font-family="Cairo, sans-serif" font-size="15" font-weight="800" fill="#10244A">مواعيد العيادة</text>
  <text x="335" y="300" font-family="Tajawal, sans-serif" font-size="12" font-weight="600" fill="#64748B">السبت إلى الأربعاء (5 م - 10 م)</text>
  <rect x="335" y="325" width="100" height="24" rx="8" fill="#ECFDF5"/>
  <text x="385" y="341" font-family="Tajawal, sans-serif" font-size="11" font-weight="800" fill="#059669" text-anchor="middle">عيادة المهندسين</text>
</svg>
`)}`;

// 5. Feature Category 1 Fallback (البروفايل الطبي)
export const FALLBACK_FEATURE_PROFILE_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 420" fill="none">
  <rect width="500" height="420" rx="24" fill="#F0F6FE" stroke="#CBDDF5" stroke-width="2"/>
  <rect x="40" y="40" width="420" height="340" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Profile Header Inside Feature Box -->
  <circle cx="100" cy="110" r="40" fill="#E0F2FE" stroke="#0284C7" stroke-width="3"/>
  <path d="M100 88 C90 88 82 95 82 104 C82 113 90 119 100 119 C110 119 118 113 118 104 C118 95 110 88 100 88 Z" fill="#0284C7"/>
  <path d="M78 138 C78 124 88 122 100 122 C112 122 122 124 122 138 Z" fill="#0369A1"/>
  
  <rect x="160" y="85" width="160" height="14" rx="7" fill="#10244A"/>
  <rect x="160" y="110" width="120" height="10" rx="5" fill="#64748B"/>
  <rect x="160" y="130" width="80" height="18" rx="9" fill="#10B981" fill-opacity="0.2"/>
  
  <!-- Services Cards Mockup -->
  <rect x="65" y="180" width="370" height="55" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <circle cx="95" cy="207" r="14" fill="#E0F2FE"/>
  <rect x="125" y="198" width="130" height="10" rx="5" fill="#1E293B"/>
  <rect x="125" y="214" width="80" height="7" rx="3.5" fill="#94A3B8"/>
  <rect x="360" y="196" width="60" height="22" rx="8" fill="#0051A8"/>
  
  <rect x="65" y="250" width="370" height="55" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <circle cx="95" cy="277" r="14" fill="#FEF3C7"/>
  <rect x="125" y="268" width="150" height="10" rx="5" fill="#1E293B"/>
  <rect x="125" y="284" width="90" height="7" rx="3.5" fill="#94A3B8"/>
  <rect x="360" y="266" width="60" height="22" rx="8" fill="#0051A8"/>
  
  <!-- Interactive CTA Bar -->
  <rect x="65" y="320" width="370" height="40" rx="10" fill="#0051A8"/>
  <text x="250" y="345" font-family="Tajawal, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">موقع وبروفايل خاص باسمك</text>
</svg>
`)}`;

// 6. Feature Category 2 Fallback (إدارة المواعيد)
export const FALLBACK_FEATURE_APPOINTMENTS_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 420" fill="none">
  <rect width="500" height="420" rx="24" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="2"/>
  <rect x="40" y="40" width="420" height="340" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Calendar Header -->
  <rect x="65" y="65" width="370" height="50" rx="12" fill="#059669"/>
  <text x="250" y="96" font-family="Cairo, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">جدول المواعيد والحجوزات الذكية</text>
  
  <!-- Calendar Days Row -->
  <g transform="translate(65, 130)">
    <rect x="0" y="0" width="50" height="50" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
    <text x="25" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">السبت</text>
    <text x="25" y="40" font-family="sans-serif" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">12</text>
    
    <rect x="64" y="0" width="50" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="89" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">الأحد</text>
    <text x="89" y="40" font-family="sans-serif" font-size="13" font-weight="900" fill="#1E293B" text-anchor="middle">13</text>
    
    <rect x="128" y="0" width="50" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="153" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">الاثنين</text>
    <text x="153" y="40" font-family="sans-serif" font-size="13" font-weight="900" fill="#1E293B" text-anchor="middle">14</text>
    
    <rect x="192" y="0" width="50" height="50" rx="10" fill="#059669"/>
    <text x="217" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">الثلاثاء</text>
    <text x="217" y="40" font-family="sans-serif" font-size="13" font-weight="900" fill="#FFFFFF" text-anchor="middle">15</text>
    
    <rect x="256" y="0" width="50" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="281" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">الأربعاء</text>
    <text x="281" y="40" font-family="sans-serif" font-size="13" font-weight="900" fill="#1E293B" text-anchor="middle">16</text>
    
    <rect x="320" y="0" width="50" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="345" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle">الخميس</text>
    <text x="345" y="40" font-family="sans-serif" font-size="13" font-weight="900" fill="#1E293B" text-anchor="middle">17</text>
  </g>
  
  <!-- Booking Confirmation Card -->
  <rect x="65" y="200" width="370" height="155" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
  <circle cx="100" cy="240" r="18" fill="#10B981"/>
  <path d="M94 240l4 4 8-8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="130" y="238" font-family="Cairo, sans-serif" font-size="15" font-weight="900" fill="#065F46">حجز مؤكد عبر واتساب</text>
  <text x="130" y="258" font-family="Tajawal, sans-serif" font-size="12" font-weight="700" fill="#047857">المريض: محمد عبد الله (01012345678)</text>
  <text x="130" y="278" font-family="Tajawal, sans-serif" font-size="12" font-weight="600" fill="#065F46">الموعد: الثلاثاء 15 - الساعة 6:30 مساءً</text>
  
  <rect x="85" y="300" width="330" height="36" rx="8" fill="#059669"/>
  <text x="250" y="323" font-family="Tajawal, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">إشعار تلقائي للعيادة والطبيب</text>
</svg>
`)}`;

// 7. Feature Category 3 Fallback (التسويق والثقة)
export const FALLBACK_FEATURE_MARKETING_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 420" fill="none">
  <rect width="500" height="420" rx="24" fill="#FFFBEB" stroke="#FDE68A" stroke-width="2"/>
  <rect x="40" y="40" width="420" height="340" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Review Rating Top Box -->
  <rect x="65" y="65" width="370" height="85" rx="14" fill="#FEF3C7" stroke="#FCD34D" stroke-width="1"/>
  <text x="95" y="105" font-family="sans-serif" font-size="32" font-weight="900" fill="#B45309">4.9</text>
  <g transform="translate(150, 85)">
    <text x="0" y="18" font-family="Cairo, sans-serif" font-size="14" font-weight="900" fill="#92400E">تقييم ممتاز من +500 مريض</text>
    <text x="0" y="38" font-family="sans-serif" font-size="16" fill="#F59E0B">★★★★★</text>
  </g>
  
  <!-- QR Code & Social Media Card -->
  <rect x="65" y="170" width="175" height="185" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <rect x="95" y="195" width="115" height="115" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
  <!-- QR Code Graphics Mockup -->
  <rect x="105" y="205" width="30" height="30" fill="#10244A"/>
  <rect x="170" y="205" width="30" height="30" fill="#10244A"/>
  <rect x="105" y="270" width="30" height="30" fill="#10244A"/>
  <rect x="145" y="215" width="15" height="15" fill="#10244A"/>
  <rect x="145" y="245" width="25" height="25" fill="#0051A8"/>
  <text x="152" y="330" font-family="Tajawal, sans-serif" font-size="12" font-weight="800" fill="#10244A" text-anchor="middle">QR بروفايلك</text>
  
  <rect x="260" y="170" width="175" height="185" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <circle cx="347" cy="215" r="22" fill="#1877F2"/>
  <path d="M344 212h6v-3a3 3 0 013-3h3v5h-2a1 1 0 00-1 1v2h3l-1 4h-2v9h-6v-9h-2v-4z" fill="#FFFFFF"/>
  <text x="347" y="260" font-family="Cairo, sans-serif" font-size="13" font-weight="900" fill="#10244A" text-anchor="middle">روابط السوشيال</text>
  <text x="347" y="280" font-family="Tajawal, sans-serif" font-size="11" font-weight="600" fill="#64748B" text-anchor="middle">ربط مباشر بصفحاتك</text>
  <rect x="280" y="305" width="135" height="30" rx="8" fill="#10244A"/>
  <text x="347" y="325" font-family="Tajawal, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">توثيق الحساب</text>
</svg>
`)}`;

// 8. Feature Category 4 Fallback (لوحة التحكم والإدارة)
export const FALLBACK_FEATURE_ADMIN_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 420" fill="none">
  <rect width="500" height="420" rx="24" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="2"/>
  <rect x="40" y="40" width="420" height="340" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Dashboard Top Bar -->
  <rect x="65" y="65" width="370" height="40" rx="10" fill="#6B21A8"/>
  <text x="250" y="90" font-family="Cairo, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">لوحة تحكم الطبيب والسكرتارية</text>
  
  <!-- Stat Boxes -->
  <rect x="65" y="120" width="115" height="75" rx="10" fill="#F3E8FF"/>
  <text x="122" y="145" font-family="sans-serif" font-size="20" font-weight="900" fill="#7E22CE" text-anchor="middle">142</text>
  <text x="122" y="170" font-family="Tajawal, sans-serif" font-size="11" font-weight="700" fill="#6B21A8" text-anchor="middle">حجوزات الشهر</text>
  
  <rect x="192" y="120" width="115" height="75" rx="10" fill="#ECFDF5"/>
  <text x="250" y="145" font-family="sans-serif" font-size="20" font-weight="900" fill="#059669" text-anchor="middle">100%</text>
  <text x="250" y="170" font-family="Tajawal, sans-serif" font-size="11" font-weight="700" fill="#065F46" text-anchor="middle">بدون عمولات</text>
  
  <rect x="320" y="120" width="115" height="75" rx="10" fill="#EFF6FF"/>
  <text x="377" y="145" font-family="sans-serif" font-size="20" font-weight="900" fill="#1D4ED8" text-anchor="middle">24/7</text>
  <text x="377" y="170" font-family="Tajawal, sans-serif" font-size="11" font-weight="700" fill="#1E40AF" text-anchor="middle">دعم متواصل</text>
  
  <!-- Management Controls Mockup -->
  <rect x="65" y="210" width="370" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <rect x="85" y="230" width="160" height="35" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
  <text x="165" y="252" font-family="Tajawal, sans-serif" font-size="12" font-weight="700" fill="#1E293B" text-anchor="middle">تعديل الخدمات والأسعار</text>
  
  <rect x="260" y="230" width="160" height="35" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
  <text x="340" y="252" font-family="Tajawal, sans-serif" font-size="12" font-weight="700" fill="#1E293B" text-anchor="middle">مواعيد وساعات العمل</text>
  
  <rect x="85" y="280" width="335" height="40" rx="8" fill="#7E22CE"/>
  <text x="252" y="305" font-family="Tajawal, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">سهولة تامة من الموبايل والكمبيوتر</text>
</svg>
`)}`;
