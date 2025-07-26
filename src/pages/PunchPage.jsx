import { useState } from 'react'

const PunchPage = () => {
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState('')

  const handleClockIn = () => {
    setMessage(`⏱ Clock In clicked with PIN: ${pin}`)
  }

  const handleClockOut = () => {
    setMessage(`🔁 Clock Out clicked with PIN: ${pin}`)
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
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Clock In
        </button>
        <button
          onClick={handleClockOut}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Clock Out
        </button>
      </div>
      {message && <p className="text-gray-700">{message}</p>}
    </div>
  )
}

export default PunchPage
