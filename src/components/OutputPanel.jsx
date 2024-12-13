import React from 'react'

export default function OutputPanel({ output }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-sm font-medium text-gray-900 mb-2">
        Результат выполнения:
      </h3>
      <pre className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md whitespace-pre-wrap font-mono min-h-[100px]">
        {output || 'Здесь появится результат выполнения кода'}
      </pre>
    </div>
  )
}
