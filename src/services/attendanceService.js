import API_BASE from '../config/apiConfig'

export const clockIn = async (employeeId, pin) => {
  const response = await fetch(`${API_BASE}/attendance/clock-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ employee_id: employeeId, pin }),
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data?.error || 'Clock In failed')
  }

  return await response.json()
}

export const clockOut = async (employeeId, pin) => {
  const response = await fetch(`${API_BASE}/attendance/clock-out`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ employee_id: employeeId, pin }),
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data?.error || 'Clock Out failed')
  }

  return await response.json()
}
