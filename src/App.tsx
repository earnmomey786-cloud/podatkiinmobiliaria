import React, { useState } from 'react'

function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Podatki in Mobiliaria
        </h1>
        <p className="text-gray-600 text-center mb-8">
          React + TypeScript + Tailwind CSS Project
        </p>
        
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 mr-2"
            onClick={() => setCount((count) => count + 1)}
          >
            Count: {count}
          </button>
          
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Features:</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ React 18</li>
            <li>✅ TypeScript</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Vite Build Tool</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App