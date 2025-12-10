# Hawui Health Dashboard

Dashboard สำหรับแสดงข้อมูลสุขภาพจากนาฬิกา Hawui Watch

## เทคโนโลยีที่ใช้
- React 18
- Vite
- Tailwind CSS
- Material-UI (MUI)
- Recharts

## การติดตั้ง

```bash
cd frontend
npm install
```

## การรันโปรเจกต์

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ http://localhost:5173

## ฟีเจอร์
- แสดงอัตราการเต้นหัวใจ (Heart Rate)
- แสดงจำนวนก้าว (Steps)
- แสดงแคลอรี่ที่เผาผลาญ (Calories)
- แสดงเวลาการนอนหลับ (Sleep)
- แสดงระดับออกซิเจนในเลือด (Blood Oxygen)
- กราฟแสดงอัตราการเต้นหัวใจตลอดวัน

## โครงสร้างโปรเจกต์
```
frontend/
├── src/
│   ├── components/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
