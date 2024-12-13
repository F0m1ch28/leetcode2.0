import { useState, useEffect } from 'react'
import { Editor } from '@monaco-editor/react'
import './App.css'
import ProblemSelector from './components/ProblemSelector'
import ProblemDescription from './components/ProblemDescription'
import OutputPanel from './components/OutputPanel'
import EditorToolbar from './components/EditorToolbar'

const problems = [
  {
    id: 1,
    title: 'Hello World',
    description: 'Напишите программу, которая выводит "Hello, World!" в консоль.',
    examples: [
      {
        output: 'Hello, World!',
        explanation: 'Классическая программа для начинающих'
      }
    ],
    starterCode: {
      python: 'print("Hello, World!")',
      go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`
    }
  },
  {
    id: 2,
    title: 'Сложение чисел',
    description: 'Напишите программу, которая выводит сумму двух чисел: 5 и 3.',
    examples: [
      {
        output: '8',
        explanation: '5 + 3 = 8'
      }
    ],
    starterCode: {
      python: 'print(5 + 3)',
      go: `package main

import "fmt"

func main() {
    fmt.Println(5 + 3)
}`
    }
  },
  {
    id: 3,
    title: 'Умножение чисел',
    description: 'Напишите программу, которая выводит произведение чисел 6 и 7.',
    examples: [
      {
        output: '42',
        explanation: '6 * 7 = 42'
      }
    ],
    starterCode: {
      python: 'print(6 * 7)',
      go: `package main

import "fmt"

func main() {
    fmt.Println(6 * 7)
}`
    }
  }
]

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'python'
  })
  
  const [selectedProblemId, setSelectedProblemId] = useState(() => {
    const saved = localStorage.getItem('selectedProblemId')
    return parseInt(saved) || 1
  })

  const selectedProblem = problems.find(p => p.id === selectedProblemId) || problems[0]
  
  const [code, setCode] = useState(() => {
    const saved = localStorage.getItem('code')
    return saved || selectedProblem.starterCode[language]
  })
  
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('language', language)
    localStorage.setItem('selectedProblemId', selectedProblemId.toString())
    localStorage.setItem('code', code)
  }, [language, selectedProblemId, code])

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang)
    setCode(selectedProblem.starterCode[newLang])
  }

  const handleProblemChange = (problem) => {
    setSelectedProblemId(problem.id)
    setCode(problem.starterCode[language])
  }

  const handleRunCode = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3001/executions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ language, code })
      })
      const data = await response.json()
      if (data.status === 'error') {
        setOutput(data.error)
      } else {
        setOutput(data.output)
      }
    } catch (error) {
      setOutput('Ошибка выполнения: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-2 sm:p-4 min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-2 sm:gap-4">
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <ProblemSelector 
            problems={problems}
            selectedProblem={selectedProblem}
            onProblemChange={handleProblemChange}
          />
        </div>

        <ProblemDescription problem={selectedProblem} />

        <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4">
          <EditorToolbar
            language={language}
            onLanguageChange={handleLanguageChange}
            onRun={handleRunCode}
            isLoading={isLoading}
          />
          
          <Editor
            height="300px"
            language={language}
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              tabSize: 2,
              automaticLayout: true,
              wordWrap: 'on'
            }}
          />
        </div>

        <OutputPanel output={output} />
      </div>
    </div>
  )
}

export default App
