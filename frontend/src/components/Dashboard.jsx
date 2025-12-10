import { useState, useMemo } from 'react'
import './Dashboard.css'
import { users } from '../data/mockData'

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(users[0])
  const [activeTab, setActiveTab] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const getHealthAlerts = (user) => {
    const alerts = []
    
    // ตรวจสอบอัตราการเต้นหัวใจ
    if (user.healthData.heartRate.current > 100) {
      alerts.push({ type: 'danger', message: '⚠️ อัตราการเต้นหัวใจสูงผิดปกติ', value: `${user.healthData.heartRate.current} bpm` })
    } else if (user.healthData.heartRate.current < 60) {
      alerts.push({ type: 'warning', message: '⚠️ อัตราการเต้นหัวใจต่ำ', value: `${user.healthData.heartRate.current} bpm` })
    }
    
    // ตรวจสอบความดันโลหิต
    if (user.healthData.bloodPressure.systolic > 140 || user.healthData.bloodPressure.diastolic > 90) {
      alerts.push({ type: 'danger', message: '⚠️ ความดันโลหิตสูง', value: `${user.healthData.bloodPressure.systolic}/${user.healthData.bloodPressure.diastolic}` })
    } else if (user.healthData.bloodPressure.systolic < 90 || user.healthData.bloodPressure.diastolic < 60) {
      alerts.push({ type: 'warning', message: '⚠️ ความดันโลหิตต่ำ', value: `${user.healthData.bloodPressure.systolic}/${user.healthData.bloodPressure.diastolic}` })
    }
    
    // ตรวจสอบออกซิเจนในเลือด
    if (user.healthData.spo2.percent < 95) {
      alerts.push({ type: 'danger', message: '⚠️ ออกซิเจนในเลือดต่ำ', value: `${user.healthData.spo2.percent}%` })
    }
    
    // ตรวจสอบน้ำตาลในเลือด
    if (user.healthData.bloodGlucose.mgDl > 125) {
      alerts.push({ type: 'warning', message: '⚠️ น้ำตาลในเลือดสูง', value: `${user.healthData.bloodGlucose.mgDl} mg/dL` })
    } else if (user.healthData.bloodGlucose.mgDl < 70) {
      alerts.push({ type: 'danger', message: '⚠️ น้ำตาลในเลือดต่ำ', value: `${user.healthData.bloodGlucose.mgDl} mg/dL` })
    }
    
    // ตรวจสอบอุณหภูมิร่างกาย
    if (user.healthData.bodyTemperature.celsius > 37.5) {
      alerts.push({ type: 'warning', message: '⚠️ อุณหภูมิร่างกายสูง', value: `${user.healthData.bodyTemperature.celsius}°C` })
    }
    
    // ตรวจสอบ BMI
    if (user.healthData.weight.bmi > 30) {
      alerts.push({ type: 'warning', message: '⚠️ BMI สูง (อ้วน)', value: user.healthData.weight.bmi })
    } else if (user.healthData.weight.bmi < 18.5) {
      alerts.push({ type: 'warning', message: '⚠️ BMI ต่ำ (ผอม)', value: user.healthData.weight.bmi })
    }
    
    return alerts
  }

  const alerts = getHealthAlerts(selectedUser)

  return (
    <div className="dashboard">
      <header className="hospital-header">
        <div className="container">
          <div className="header-content">
            <div className="hospital-icon">🏥</div>
            <div>
              <h1>Hawui Health Center</h1>
              <p>ระบบติดตามสุขภาพและกิจกรรมประจำวัน</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container main-content">
        <div className="search-section">
          <input 
            type="text" 
            placeholder="🔍 ค้นหาผู้ใช้ (ชื่อ หรือ อีเมล)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="users-grid">
          {filteredUsers.map(user => {
            const userAlerts = getHealthAlerts(user)
            return (
              <div 
                key={user.id} 
                className={`user-card ${selectedUser.id === user.id ? 'selected' : ''} ${userAlerts.length > 0 ? 'has-alert' : ''}`}
                onClick={() => setSelectedUser(user)}
              >
                <img src={user.avatar} alt={user.name} />
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  {userAlerts.length > 0 && (
                    <div className="alert-badge">
                      {userAlerts.length} การแจ้งเตือน
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {alerts.length > 0 && (
          <div className="alerts-panel">
            <h3>🚨 การแจ้งเตือนสุขภาพ - {selectedUser.name}</h3>
            <div className="alerts-list">
              {alerts.map((alert, index) => (
                <div key={index} className={`alert-item ${alert.type}`}>
                  <span className="alert-message">{alert.message}</span>
                  <strong className="alert-value">{alert.value}</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid">
          <aside className="user-profile">
            <img src={selectedUser.avatar} alt={selectedUser.name} />
            <h2>{selectedUser.name}</h2>
            <p>{selectedUser.email}</p>
            <div className="profile-stats">
              <div className="stat-item">
                <span>อายุ</span>
                <strong>{selectedUser.age} ปี</strong>
              </div>
              <div className="stat-item">
                <span>ส่วนสูง</span>
                <strong>{selectedUser.healthData.height.cm} cm</strong>
              </div>
              <div className="stat-item">
                <span>น้ำหนัก</span>
                <strong>{selectedUser.healthData.weight.kg} kg</strong>
              </div>
              <div className="stat-item">
                <span>BMI</span>
                <strong>{selectedUser.healthData.weight.bmi}</strong>
              </div>
            </div>
          </aside>

          <main className="main-panel">
            <div className="tabs">
              <button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>📊 ภาพรวม</button>
              <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>🏃 กิจกรรมประจำวัน</button>
              <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>💊 ข้อมูลสุขภาพ</button>
              <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>🏋️ บันทึกการออกกำลังกาย</button>
            </div>

            {activeTab === 0 && (
              <div className="tab-content">
                <div className="cards-grid">
                  <div className="health-card pink">
                    <div className="card-header">
                      <span>อัตราการเต้นหัวใจ</span>
                      <div className="icon">❤️</div>
                    </div>
                    <h3>{selectedUser.healthData.heartRate.current}</h3>
                    <p>bpm</p>
                    {(selectedUser.healthData.heartRate.current > 100 || selectedUser.healthData.heartRate.current < 60) && (
                      <div className="warning-badge">ผิดปกติ</div>
                    )}
                  </div>

                  <div className="health-card blue">
                    <div className="card-header">
                      <span>จำนวนก้าว</span>
                      <div className="icon">🚶</div>
                    </div>
                    <h3>{selectedUser.dailyActivity.steps.count.toLocaleString()}</h3>
                    <p>ก้าว</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.steps.count / selectedUser.dailyActivity.steps.goal) * 100}%`}}></div>
                    </div>
                  </div>

                  <div className="health-card orange">
                    <div className="card-header">
                      <span>แคลอรี่</span>
                      <div className="icon">🔥</div>
                    </div>
                    <h3>{selectedUser.dailyActivity.calories.burned.toLocaleString()}</h3>
                    <p>kcal</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.calories.burned / selectedUser.dailyActivity.calories.goal) * 100}%`}}></div>
                    </div>
                  </div>

                  <div className="health-card purple">
                    <div className="card-header">
                      <span>การนอนหลับ</span>
                      <div className="icon">😴</div>
                    </div>
                    <h3>{selectedUser.healthData.sleep.hours}</h3>
                    <p>ชั่วโมง</p>
                  </div>
                </div>

                <div className="vital-signs">
                  <h3>🩺 สัญญาณชีพ (Vital Signs)</h3>
                  <div className="vital-grid">
                    <div className="vital-card">
                      <span>ความดันโลหิต</span>
                      <strong>{selectedUser.healthData.bloodPressure.systolic}/{selectedUser.healthData.bloodPressure.diastolic}</strong>
                      <span className="badge">{selectedUser.healthData.bloodPressure.status}</span>
                    </div>
                    <div className="vital-card">
                      <span>ออกซิเจนในเลือด</span>
                      <strong>{selectedUser.healthData.spo2.percent}%</strong>
                      <span className="badge">{selectedUser.healthData.spo2.status}</span>
                    </div>
                    <div className="vital-card">
                      <span>อุณหภูมิร่างกาย</span>
                      <strong>{selectedUser.healthData.bodyTemperature.celsius}°C</strong>
                      <span className="badge">ปกติ</span>
                    </div>
                    <div className="vital-card">
                      <span>ระดับความเครียด</span>
                      <strong>{selectedUser.healthData.stress.score}</strong>
                      <span className="badge">{selectedUser.healthData.stress.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="tab-content">
                <div className="cards-grid">
                  <div className="health-card blue">
                    <span>จำนวนก้าว</span>
                    <h3>{selectedUser.dailyActivity.steps.count.toLocaleString()}</h3>
                    <p>เป้าหมาย: {selectedUser.dailyActivity.steps.goal.toLocaleString()}</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.steps.count / selectedUser.dailyActivity.steps.goal) * 100}%`}}></div>
                    </div>
                  </div>

                  <div className="health-card orange">
                    <span>แคลอรี่ที่เผาผลาญ</span>
                    <h3>{selectedUser.dailyActivity.calories.burned.toLocaleString()}</h3>
                    <p>เป้าหมาย: {selectedUser.dailyActivity.calories.goal.toLocaleString()} kcal</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.calories.burned / selectedUser.dailyActivity.calories.goal) * 100}%`}}></div>
                    </div>
                  </div>

                  <div className="health-card green">
                    <span>ระยะทาง</span>
                    <h3>{selectedUser.dailyActivity.distance.km}</h3>
                    <p>เป้าหมาย: {selectedUser.dailyActivity.distance.goal} km</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.distance.km / selectedUser.dailyActivity.distance.goal) * 100}%`}}></div>
                    </div>
                  </div>

                  <div className="health-card purple">
                    <span>ความสูง</span>
                    <h3>{selectedUser.dailyActivity.altitude.meters}</h3>
                    <p>สูงสุด: {selectedUser.dailyActivity.altitude.max} m</p>
                  </div>

                  <div className="health-card red">
                    <span>ออกกำลังกายระดับปานกลาง-สูง</span>
                    <h3>{selectedUser.dailyActivity.moderateIntensity.minutes}</h3>
                    <p>เป้าหมาย: {selectedUser.dailyActivity.moderateIntensity.goal} นาที</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.moderateIntensity.minutes / selectedUser.dailyActivity.moderateIntensity.goal) * 100}%`}}></div>
                    </div>
                  </div>

                  <div className="health-card cyan">
                    <span>ชั่วโมงที่เคลื่อนไหว</span>
                    <h3>{selectedUser.dailyActivity.activeHours.count}</h3>
                    <p>เป้าหมาย: {selectedUser.dailyActivity.activeHours.goal} ชม.</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${(selectedUser.dailyActivity.activeHours.count / selectedUser.dailyActivity.activeHours.goal) * 100}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="tab-content">
                <div className="health-data-grid">
                  <div className="data-section">
                    <h3>ข้อมูลร่างกาย</h3>
                    <div className="data-item">
                      <span>ส่วนสูง</span>
                      <strong>{selectedUser.healthData.height.cm} cm</strong>
                    </div>
                    <div className="data-item">
                      <span>น้ำหนัก</span>
                      <strong>{selectedUser.healthData.weight.kg} kg</strong>
                    </div>
                    <div className="data-item">
                      <span>ไขมันในร่างกาย</span>
                      <strong>{selectedUser.healthData.weight.bodyFat}%</strong>
                    </div>
                    <div className="data-item">
                      <span>BMI</span>
                      <strong>{selectedUser.healthData.weight.bmi}</strong>
                    </div>
                  </div>

                  <div className="data-section">
                    <h3>การนอนหลับ</h3>
                    <div className="data-item">
                      <span>ชั่วโมงการนอน</span>
                      <strong>{selectedUser.healthData.sleep.hours} ชม.</strong>
                    </div>
                    <div className="data-item">
                      <span>คุณภาพการนอน</span>
                      <strong>{selectedUser.healthData.sleep.quality}%</strong>
                    </div>
                    <div className="data-item">
                      <span>หลับลึก</span>
                      <strong>{selectedUser.healthData.sleep.stages.deep} ชม.</strong>
                    </div>
                    <div className="data-item">
                      <span>REM</span>
                      <strong>{selectedUser.healthData.sleep.stages.rem} ชม.</strong>
                    </div>
                  </div>

                  <div className="data-section">
                    <h3>หัวใจและหลอดเลือด</h3>
                    <div className="data-item">
                      <span>อัตราการเต้นหัวใจปัจจุบัน</span>
                      <strong>{selectedUser.healthData.heartRate.current} bpm</strong>
                    </div>
                    <div className="data-item">
                      <span>อัตราการเต้นหัวใจขณะพัก</span>
                      <strong>{selectedUser.healthData.heartRate.resting} bpm</strong>
                    </div>
                    <div className="data-item">
                      <span>HRV</span>
                      <strong>{selectedUser.healthData.heartRate.hrv} ms</strong>
                    </div>
                    <div className="data-item">
                      <span>ความดันโลหิต</span>
                      <strong>{selectedUser.healthData.bloodPressure.systolic}/{selectedUser.healthData.bloodPressure.diastolic}</strong>
                    </div>
                  </div>

                  <div className="data-section">
                    <h3>ข้อมูลสุขภาพอื่นๆ</h3>
                    <div className="data-item">
                      <span>ระดับน้ำตาลในเลือด</span>
                      <strong>{selectedUser.healthData.bloodGlucose.mgDl} mg/dL</strong>
                    </div>
                    <div className="data-item">
                      <span>ออกซิเจนในเลือด (SpO2)</span>
                      <strong>{selectedUser.healthData.spo2.percent}%</strong>
                    </div>
                    <div className="data-item">
                      <span>VO2 Max</span>
                      <strong>{selectedUser.healthData.lungFunction.vo2Max} ml/kg/min</strong>
                    </div>
                    <div className="data-item">
                      <span>ECG</span>
                      <strong>{selectedUser.healthData.heartHealth.ecg}</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="tab-content">
                <div className="exercise-grid">
                  {selectedUser.exerciseRecords.map((record, index) => (
                    <div key={index} className="exercise-card">
                      <div className="exercise-header">
                        <h4>{record.type}</h4>
                        <span className="duration">{record.duration} นาที</span>
                      </div>
                      <p className="date">{record.date}</p>
                      <div className="exercise-stats">
                        <div>
                          <span>ระยะทาง</span>
                          <strong>{record.distance || '-'} km</strong>
                        </div>
                        <div>
                          <span>แคลอรี่</span>
                          <strong>{record.calories} kcal</strong>
                        </div>
                        <div>
                          <span>อัตราการเต้นหัวใจเฉลี่ย</span>
                          <strong>{record.avgHeartRate} bpm</strong>
                        </div>
                        <div>
                          <span>จังหวะ</span>
                          <strong>{record.pace}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="historical-data">
                  <h3>ข้อมูลย้อนหลัง</h3>
                  <div className="historical-grid">
                    <div className="historical-card blue">
                      <h4>{selectedUser.historicalData.week.steps.toLocaleString()}</h4>
                      <p>ก้าวในสัปดาห์นี้</p>
                    </div>
                    <div className="historical-card green">
                      <h4>{selectedUser.historicalData.month.steps.toLocaleString()}</h4>
                      <p>ก้าวในเดือนนี้</p>
                    </div>
                    <div className="historical-card purple">
                      <h4>{selectedUser.historicalData.year.steps.toLocaleString()}</h4>
                      <p>ก้าวในปีนี้</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
