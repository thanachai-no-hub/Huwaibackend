import { Box, Avatar, Typography, Paper } from '@mui/material'

const UserSelector = ({ users, selectedUser, onSelectUser }) => {
  return (
    <Paper className="p-4 mb-6 shadow-xl" elevation={3} sx={{ borderRadius: 3, bgcolor: 'rgba(255,255,255,0.95)' }}>
      <Typography variant="h6" className="mb-4 font-bold text-gray-800">
        👥 เลือกผู้ใช้
      </Typography>
      <Box className="flex gap-3 overflow-x-auto pb-2">
        {users.map((user) => (
          <Box
            key={user.id}
            onClick={() => onSelectUser(user)}
            className={`flex flex-col items-center cursor-pointer transition-all hover:scale-110 ${
              selectedUser.id === user.id ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <Avatar
              src={user.avatar}
              sx={{
                width: 60,
                height: 60,
                border: selectedUser.id === user.id ? '3px solid #1976d2' : 'none',
                boxShadow: selectedUser.id === user.id ? '0 0 15px rgba(25, 118, 210, 0.5)' : 'none'
              }}
            />
            <Typography variant="caption" className="mt-1 text-center font-semibold" sx={{ maxWidth: 70 }}>
              {user.name.split(' ')[0]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default UserSelector
