import { Card, CardContent, Avatar, Typography, Box, Chip, Divider, LinearProgress } from '@mui/material'
import CakeIcon from '@mui/icons-material/Cake'
import HeightIcon from '@mui/icons-material/Height'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import FavoriteIcon from '@mui/icons-material/Favorite'

const UserProfile = ({ user }) => {
  const bmi = user.healthData.weight.bmi
  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return { text: 'น้ำหนักน้อย', color: 'info' }
    if (bmi < 25) return { text: 'ปกติ', color: 'success' }
    if (bmi < 30) return { text: 'น้ำหนักเกิน', color: 'warning' }
    return { text: 'อ้วน', color: 'error' }
  }

  const bmiStatus = getBMIStatus(bmi)

  return (
    <Card className="h-full shadow-lg" sx={{ background: 'linear-gradient(135deg, #00ACC1 0%, #26A69A 100%)', borderRadius: 2 }}>
      <CardContent>
        <Box className="flex flex-col items-center mb-4">
          <Avatar
            sx={{ width: 100, height: 100, mb: 2, border: '4px solid white', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            src={user.avatar}
          />
          <Typography variant="h5" className="font-bold text-white">
            {user.name}
          </Typography>
          <Typography variant="body2" className="text-white opacity-90">
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', my: 3 }} />

        <Box className="space-y-3">
          <Box className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
            <Box className="flex items-center gap-2">
              <CakeIcon className="text-white" />
              <Typography variant="body1" className="text-white">อายุ</Typography>
            </Box>
            <Typography variant="body1" className="font-bold text-white">
              {user.age} ปี
            </Typography>
          </Box>

          <Box className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
            <Box className="flex items-center gap-2">
              <HeightIcon className="text-white" />
              <Typography variant="body1" className="text-white">ส่วนสูง</Typography>
            </Box>
            <Typography variant="body1" className="font-bold text-white">
              {user.healthData.height.cm} cm
            </Typography>
          </Box>

          <Box className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
            <Box className="flex items-center gap-2">
              <MonitorWeightIcon className="text-white" />
              <Typography variant="body1" className="text-white">น้ำหนัก</Typography>
            </Box>
            <Typography variant="body1" className="font-bold text-white">
              {user.healthData.weight.kg} kg
            </Typography>
          </Box>

          <Box className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
            <Box className="flex items-center gap-2">
              <FitnessCenterIcon className="text-white" />
              <Typography variant="body1" className="text-white">BMI</Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <Typography variant="body1" className="font-bold text-white">
                {bmi}
              </Typography>
              <Chip label={bmiStatus.text} color={bmiStatus.color} size="small" sx={{ fontWeight: 'bold' }} />
            </Box>
          </Box>

          <Box className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
            <Box className="flex items-center gap-2">
              <FavoriteIcon className="text-white" />
              <Typography variant="body1" className="text-white">ความดันโลหิต</Typography>
            </Box>
            <Typography variant="body1" className="font-bold text-white">
              {user.healthData.bloodPressure.systolic}/{user.healthData.bloodPressure.diastolic} mmHg
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', my: 3 }} />

        <Box className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
          <Typography variant="body1" className="text-white font-bold mb-3">
            🎯 เป้าหมายรายวัน
          </Typography>
          <Box className="space-y-2">
            <Box>
              <Box className="flex justify-between mb-1">
                <Typography variant="body2" className="text-white">ก้าว</Typography>
                <Typography variant="body2" className="text-white font-bold">
                  {user.dailyActivity.steps.count.toLocaleString()} / {user.dailyActivity.steps.goal.toLocaleString()}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={(user.dailyActivity.steps.count / user.dailyActivity.steps.goal) * 100} 
                sx={{ height: 8, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.3)' }}
              />
            </Box>
            <Box>
              <Box className="flex justify-between mb-1">
                <Typography variant="body2" className="text-white">แคลอรี่</Typography>
                <Typography variant="body2" className="text-white font-bold">
                  {user.dailyActivity.calories.burned.toLocaleString()} / {user.dailyActivity.calories.goal.toLocaleString()}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={(user.dailyActivity.calories.burned / user.dailyActivity.calories.goal) * 100} 
                sx={{ height: 8, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.3)' }}
              />
            </Box>
            <Box>
              <Box className="flex justify-between mb-1">
                <Typography variant="body2" className="text-white">การนอน</Typography>
                <Typography variant="body2" className="text-white font-bold">
                  {user.healthData.sleep.hours} / 8 ชม.
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={(user.healthData.sleep.hours / 8) * 100} 
                sx={{ height: 8, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.3)' }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfile
