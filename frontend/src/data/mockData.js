export const users = [
  {
    id: 1,
    name: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    age: 32,
    avatar: 'https://i.pravatar.cc/150?img=12',
    dailyActivity: {
      steps: { count: 8543, goal: 10000 },
      calories: { burned: 2145, goal: 2500 },
      distance: { km: 6.8, goal: 8 },
      altitude: { meters: 45, max: 120, min: 10 },
      moderateIntensity: { minutes: 45, goal: 60 },
      activeHours: { count: 9, goal: 12 }
    },
    healthData: {
      height: { cm: 175 },
      weight: { kg: 70, bodyFat: 18.5, bmi: 22.9 },
      heartRate: { current: 72, resting: 65, hrv: 45 },
      stress: { score: 45, level: 'ปานกลาง' },
      sleep: { hours: 7.5, quality: 85, stages: { deep: 2.1, light: 4.2, rem: 1.2 }},
      bloodGlucose: { mgDl: 95 },
      bloodPressure: { systolic: 120, diastolic: 80, status: 'ปกติ' },
      spo2: { percent: 98, status: 'ดีเยี่ยม' },
      bodyTemperature: { celsius: 36.8 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 42 }
    },
    exerciseRecords: [
      { type: 'วิ่ง', date: '2024-01-20', duration: 35, distance: 5.2, calories: 420, avgHeartRate: 145, pace: '6:44 /km' }
    ],
    historicalData: { week: { steps: 58234 }, month: { steps: 245678 }, year: { steps: 2945678 }}
  },
  {
    id: 2,
    name: 'สมหญิง รักสุขภาพ',
    email: 'somying@example.com',
    age: 28,
    avatar: 'https://i.pravatar.cc/150?img=5',
    dailyActivity: {
      steps: { count: 9234, goal: 8000 },
      calories: { burned: 1890, goal: 2000 },
      distance: { km: 7.4, goal: 6.5 },
      altitude: { meters: 32, max: 95, min: 8 },
      moderateIntensity: { minutes: 52, goal: 50 },
      activeHours: { count: 10, goal: 10 }
    },
    healthData: {
      height: { cm: 162 },
      weight: { kg: 55, bodyFat: 22.3, bmi: 20.9 },
      heartRate: { current: 68, resting: 60, hrv: 52 },
      stress: { score: 32, level: 'ต่ำ' },
      sleep: { hours: 8.2, quality: 92, stages: { deep: 2.5, light: 4.5, rem: 1.2 }},
      bloodGlucose: { mgDl: 88 },
      bloodPressure: { systolic: 115, diastolic: 75, status: 'ดีเยี่ยม' },
      spo2: { percent: 99, status: 'ดีเยี่ยม' },
      bodyTemperature: { celsius: 36.6 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 38 }
    },
    exerciseRecords: [
      { type: 'โยคะ', date: '2024-01-20', duration: 50, distance: 0, calories: 180, avgHeartRate: 85, pace: '-' }
    ],
    historicalData: { week: { steps: 62456 }, month: { steps: 268900 }, year: { steps: 3124567 }}
  },
  {
    id: 3,
    name: 'ประยุทธ์ วิ่งเร็ว',
    email: 'prayut@example.com',
    age: 29,
    avatar: 'https://i.pravatar.cc/150?img=15',
    dailyActivity: {
      steps: { count: 14567, goal: 15000 },
      calories: { burned: 2890, goal: 3000 },
      distance: { km: 11.5, goal: 12 },
      altitude: { meters: 85, max: 200, min: 20 },
      moderateIntensity: { minutes: 90, goal: 80 },
      activeHours: { count: 13, goal: 14 }
    },
    healthData: {
      height: { cm: 180 },
      weight: { kg: 75, bodyFat: 15.2, bmi: 23.1 },
      heartRate: { current: 65, resting: 55, hrv: 58 },
      stress: { score: 28, level: 'ต่ำ' },
      sleep: { hours: 7.2, quality: 88, stages: { deep: 2.3, light: 3.8, rem: 1.1 }},
      bloodGlucose: { mgDl: 92 },
      bloodPressure: { systolic: 118, diastolic: 76, status: 'ดีเยี่ยม' },
      spo2: { percent: 99, status: 'ดีเยี่ยม' },
      bodyTemperature: { celsius: 36.7 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 52 }
    },
    exerciseRecords: [
      { type: 'วิ่ง', date: '2024-01-20', duration: 45, distance: 8.5, calories: 650, avgHeartRate: 155, pace: '5:18 /km' }
    ],
    historicalData: { week: { steps: 98456 }, month: { steps: 425678 }, year: { steps: 4856789 }}
  },
  {
    id: 4,
    name: 'นภา สวยงาม',
    email: 'napa@example.com',
    age: 35,
    avatar: 'https://i.pravatar.cc/150?img=9',
    dailyActivity: {
      steps: { count: 7845, goal: 9000 },
      calories: { burned: 1950, goal: 2100 },
      distance: { km: 6.2, goal: 7 },
      altitude: { meters: 38, max: 110, min: 12 },
      moderateIntensity: { minutes: 48, goal: 55 },
      activeHours: { count: 8, goal: 10 }
    },
    healthData: {
      height: { cm: 165 },
      weight: { kg: 58, bodyFat: 24.5, bmi: 21.3 },
      heartRate: { current: 70, resting: 63, hrv: 48 },
      stress: { score: 42, level: 'ปานกลาง' },
      sleep: { hours: 7.8, quality: 86, stages: { deep: 2.2, light: 4.3, rem: 1.3 }},
      bloodGlucose: { mgDl: 98 },
      bloodPressure: { systolic: 122, diastolic: 78, status: 'ปกติ' },
      spo2: { percent: 98, status: 'ดีเยี่ยม' },
      bodyTemperature: { celsius: 36.9 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 40 }
    },
    exerciseRecords: [
      { type: 'เดิน', date: '2024-01-20', duration: 40, distance: 3.5, calories: 250, avgHeartRate: 95, pace: '11:26 /km' }
    ],
    historicalData: { week: { steps: 54890 }, month: { steps: 235678 }, year: { steps: 2756789 }}
  },
  {
    id: 5,
    name: 'วิชัย แข็งแรง',
    email: 'wichai@example.com',
    age: 45,
    avatar: 'https://i.pravatar.cc/150?img=33',
    dailyActivity: {
      steps: { count: 11234, goal: 12000 },
      calories: { burned: 2654, goal: 2800 },
      distance: { km: 9.2, goal: 10 },
      altitude: { meters: 68, max: 180, min: 15 },
      moderateIntensity: { minutes: 72, goal: 70 },
      activeHours: { count: 11, goal: 12 }
    },
    healthData: {
      height: { cm: 178 },
      weight: { kg: 82, bodyFat: 24.1, bmi: 25.9 },
      heartRate: { current: 75, resting: 68, hrv: 38 },
      stress: { score: 58, level: 'ปานกลาง' },
      sleep: { hours: 6.8, quality: 78, stages: { deep: 1.8, light: 4.0, rem: 1.0 }},
      bloodGlucose: { mgDl: 102 },
      bloodPressure: { systolic: 125, diastolic: 82, status: 'ปกติ' },
      spo2: { percent: 97, status: 'ดี' },
      bodyTemperature: { celsius: 37.0 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 36 }
    },
    exerciseRecords: [
      { type: 'ฟิตเนส', date: '2024-01-20', duration: 55, distance: 0, calories: 480, avgHeartRate: 128, pace: '-' }
    ],
    historicalData: { week: { steps: 76890 }, month: { steps: 324567 }, year: { steps: 3845678 }}
  },
  {
    id: 6,
    name: 'สุรชัย ป่วยหนัก',
    email: 'surachai@example.com',
    age: 52,
    avatar: 'https://i.pravatar.cc/150?img=52',
    dailyActivity: {
      steps: { count: 3456, goal: 8000 },
      calories: { burned: 1200, goal: 2200 },
      distance: { km: 2.8, goal: 6 },
      altitude: { meters: 15, max: 45, min: 5 },
      moderateIntensity: { minutes: 15, goal: 50 },
      activeHours: { count: 4, goal: 10 }
    },
    healthData: {
      height: { cm: 172 },
      weight: { kg: 95, bodyFat: 32.5, bmi: 32.1 },
      heartRate: { current: 108, resting: 85, hrv: 25 },
      stress: { score: 78, level: 'สูง' },
      sleep: { hours: 5.2, quality: 58, stages: { deep: 0.8, light: 3.5, rem: 0.9 }},
      bloodGlucose: { mgDl: 145 },
      bloodPressure: { systolic: 155, diastolic: 98, status: 'สูง' },
      spo2: { percent: 93, status: 'ต่ำ' },
      bodyTemperature: { celsius: 37.8 },
      heartHealth: { ecg: 'ผิดปกติ' },
      lungFunction: { vo2Max: 28 }
    },
    exerciseRecords: [
      { type: 'เดิน', date: '2024-01-20', duration: 20, distance: 1.2, calories: 120, avgHeartRate: 105, pace: '16:40 /km' }
    ],
    historicalData: { week: { steps: 24567 }, month: { steps: 98456 }, year: { steps: 1245678 }}
  },
  {
    id: 7,
    name: 'มาลี ยิ้มสดใส',
    email: 'malee@example.com',
    age: 26,
    avatar: 'https://i.pravatar.cc/150?img=10',
    dailyActivity: {
      steps: { count: 6789, goal: 7000 },
      calories: { burned: 1750, goal: 1800 },
      distance: { km: 5.4, goal: 5.5 },
      altitude: { meters: 28, max: 75, min: 8 },
      moderateIntensity: { minutes: 42, goal: 45 },
      activeHours: { count: 7, goal: 8 }
    },
    healthData: {
      height: { cm: 160 },
      weight: { kg: 52, bodyFat: 21.8, bmi: 20.3 },
      heartRate: { current: 69, resting: 61, hrv: 54 },
      stress: { score: 30, level: 'ต่ำ' },
      sleep: { hours: 8.5, quality: 94, stages: { deep: 2.8, light: 4.5, rem: 1.2 }},
      bloodGlucose: { mgDl: 86 },
      bloodPressure: { systolic: 112, diastolic: 72, status: 'ดีเยี่ยม' },
      spo2: { percent: 99, status: 'ดีเยี่ยม' },
      bodyTemperature: { celsius: 36.5 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 39 }
    },
    exerciseRecords: [
      { type: 'โยคะ', date: '2024-01-20', duration: 45, distance: 0, calories: 170, avgHeartRate: 82, pace: '-' }
    ],
    historicalData: { week: { steps: 47890 }, month: { steps: 205678 }, year: { steps: 2456789 }}
  },
  {
    id: 8,
    name: 'ธนา หัวใจเต้นเร็ว',
    email: 'tana@example.com',
    age: 38,
    avatar: 'https://i.pravatar.cc/150?img=56',
    dailyActivity: {
      steps: { count: 8456, goal: 9000 },
      calories: { burned: 2100, goal: 2300 },
      distance: { km: 6.9, goal: 7.5 },
      altitude: { meters: 42, max: 125, min: 10 },
      moderateIntensity: { minutes: 55, goal: 60 },
      activeHours: { count: 9, goal: 10 }
    },
    healthData: {
      height: { cm: 176 },
      weight: { kg: 78, bodyFat: 22.5, bmi: 25.2 },
      heartRate: { current: 112, resting: 78, hrv: 32 },
      stress: { score: 68, level: 'สูง' },
      sleep: { hours: 6.2, quality: 72, stages: { deep: 1.5, light: 3.8, rem: 0.9 }},
      bloodGlucose: { mgDl: 108 },
      bloodPressure: { systolic: 138, diastolic: 88, status: 'สูง' },
      spo2: { percent: 96, status: 'ดี' },
      bodyTemperature: { celsius: 37.2 },
      heartHealth: { ecg: 'ผิดปกติเล็กน้อย' },
      lungFunction: { vo2Max: 38 }
    },
    exerciseRecords: [
      { type: 'วิ่ง', date: '2024-01-20', duration: 30, distance: 4.2, calories: 380, avgHeartRate: 158, pace: '7:08 /km' }
    ],
    historicalData: { week: { steps: 59234 }, month: { steps: 256789 }, year: { steps: 3045678 }}
  },
  {
    id: 9,
    name: 'ปิยะ สดใส',
    email: 'piya@example.com',
    age: 27,
    avatar: 'https://i.pravatar.cc/150?img=23',
    dailyActivity: {
      steps: { count: 7654, goal: 8000 },
      calories: { burned: 1850, goal: 1900 },
      distance: { km: 6.1, goal: 6.5 },
      altitude: { meters: 35, max: 95, min: 10 },
      moderateIntensity: { minutes: 46, goal: 50 },
      activeHours: { count: 8, goal: 9 }
    },
    healthData: {
      height: { cm: 163 },
      weight: { kg: 54, bodyFat: 23.2, bmi: 20.3 },
      heartRate: { current: 67, resting: 59, hrv: 56 },
      stress: { score: 35, level: 'ต่ำ' },
      sleep: { hours: 8.3, quality: 91, stages: { deep: 2.6, light: 4.4, rem: 1.3 }},
      bloodGlucose: { mgDl: 90 },
      bloodPressure: { systolic: 114, diastolic: 73, status: 'ดีเยี่ยม' },
      spo2: { percent: 99, status: 'ดีเยี่ยม' },
      bodyTemperature: { celsius: 36.6 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 41 }
    },
    exerciseRecords: [
      { type: 'เดิน', date: '2024-01-20', duration: 35, distance: 3.0, calories: 220, avgHeartRate: 88, pace: '11:40 /km' }
    ],
    historicalData: { week: { steps: 53678 }, month: { steps: 231456 }, year: { steps: 2789456 }}
  },
  {
    id: 10,
    name: 'อนุชา น้ำตาลต่ำ',
    email: 'anucha@example.com',
    age: 41,
    avatar: 'https://i.pravatar.cc/150?img=68',
    dailyActivity: {
      steps: { count: 5234, goal: 10000 },
      calories: { burned: 1450, goal: 2400 },
      distance: { km: 4.2, goal: 8 },
      altitude: { meters: 22, max: 65, min: 8 },
      moderateIntensity: { minutes: 28, goal: 60 },
      activeHours: { count: 5, goal: 12 }
    },
    healthData: {
      height: { cm: 174 },
      weight: { kg: 68, bodyFat: 17.8, bmi: 22.5 },
      heartRate: { current: 58, resting: 52, hrv: 48 },
      stress: { score: 52, level: 'ปานกลาง' },
      sleep: { hours: 7.0, quality: 80, stages: { deep: 2.0, light: 4.1, rem: 0.9 }},
      bloodGlucose: { mgDl: 65 },
      bloodPressure: { systolic: 108, diastolic: 68, status: 'ปกติ' },
      spo2: { percent: 97, status: 'ดี' },
      bodyTemperature: { celsius: 36.4 },
      heartHealth: { ecg: 'ปกติ' },
      lungFunction: { vo2Max: 44 }
    },
    exerciseRecords: [
      { type: 'ปั่นจักรยาน', date: '2024-01-20', duration: 40, distance: 12.5, calories: 420, avgHeartRate: 115, pace: '18.8 km/h' }
    ],
    historicalData: { week: { steps: 36789 }, month: { steps: 158456 }, year: { steps: 1956789 }}
  }
]
