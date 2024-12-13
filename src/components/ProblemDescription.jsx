import React from 'react'

export default function ProblemDescription({ problem }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {problem.title}
        </h2>
        <div className="space-y-6 w-full">
          <div className="text-gray-600 text-center">
            {problem.description}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            {problem.examples.map((example, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-medium text-gray-700">Ожидаемый вывод:</span>
                  <code className="text-sm bg-gray-100 px-3 py-1 rounded text-gray-900">
                    {example.output}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
