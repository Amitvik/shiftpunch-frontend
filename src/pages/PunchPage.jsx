import { useState } from 'react'
import { clockIn, clockOut } from '../services/attendanceService'

const PunchPage = () => {
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClockIn = async () => {
    setLoading(true)
    setError('')
    setMessage('')
    try {
      const result = await clockIn(pin)
      setMessage(`✅ Clocked in at ${result?.clock_in || '...time not returned'}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleClockOut = async () => {
    setLoading(true)
    setError('')
    setMessage('')
    try {
      const result = await clockOut(pin)
      setMessage(`✅ Clocked out at ${result?.clock_out || '...time not returned'}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white px-4">
      <h1 className="text-2xl font-bold mb-8">Employee Punch In / Out</h1>
      <input
        type="password"
        placeholder="Enter PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="mb-4 px-4 py-3 border rounded-lg text-lg w-72 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleClockIn}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Clock In
        </button>
        <button
          onClick={handleClockOut}
          disabled={loading}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Clock Out
        </button>
      </div>

      {message && <p className="text-green-700 font-medium">{message}</p>}
      {error && <p className="text-red-600 font-medium">{error}</p>}
    </div>
  )
}

export default PunchPage
