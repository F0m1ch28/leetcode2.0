import React from 'react'

const LANGUAGES = [
  { id: 'python', name: 'Python' },
  { id: 'go', name: 'Go' }
]

const EditorToolbar = ({ 
  language, 
  onLanguageChange, 
  onRun, 
  isRunning
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="block rounded-md border-gray-300 py-1.5 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-indigo-600 text-sm"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>

      <button
        onClick={onRun}
        disabled={isRunning}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isRunning ? 'Выполняется...' : 'Запустить'}
      </button>
    </div>
  )
}

export default EditorToolbar
