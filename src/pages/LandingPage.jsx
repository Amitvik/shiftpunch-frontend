import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold mb-12">Welcome to ShiftPunch</h1>
      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={() => navigate('/punch')}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Punch In / Punch Out
        </button>
        <button
          onClick={() => navigate('/admin')}
          className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LandingPage
