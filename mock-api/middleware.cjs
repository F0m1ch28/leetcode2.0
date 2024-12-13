const middleware = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/executions') {
    const { language, code } = req.body
    
    if (!code || !language) {
      res.status(400).json({
        status: 'error',
        error: 'Код и язык программирования обязательны'
      })
      return
    }

    let output = ''
    try {
      if (language === 'python') {
        if (code.includes('print(')) {
          const match = code.match(/print\s*\((.*?)\)/)
          if (match) {
            const expression = match[1]
            if (expression.startsWith('"') || expression.startsWith("'")) {
              const stringMatch = expression.match(/^["'](.*?)["']$/)
              if (stringMatch) {
                output = stringMatch[1] + '\n'
              }
            } else {
              try {
                const result = eval(expression)
                output = result.toString() + '\n'
              } catch (e) {
                throw new Error('Ошибка в математическом выражении')
              }
            }
          }
        }
      } else if (language === 'go') {
        if (code.includes('fmt.Println(')) {
          const match = code.match(/fmt\.Println\s*\((.*?)\)/)
          if (match) {
            const expression = match[1]
            if (expression.startsWith('"') || expression.startsWith("'")) {
              const stringMatch = expression.match(/^["'](.*?)["']$/)
              if (stringMatch) {
                output = stringMatch[1] + '\n'
              }
            } else {
              try {
                const result = eval(expression)
                output = result.toString() + '\n'
              } catch (e) {
                throw new Error('Ошибка в математическом выражении')
              }
            }
          }
        }
      }

      if (!output) {
        throw new Error('Неверный формат вывода')
      }

      setTimeout(() => {
        res.json({
          status: 'success',
          output: output
        })
      }, Math.random() * 500 + 500)
    } catch (error) {
      res.json({
        status: 'error',
        error: error.message
      })
    }
    return
  }
  next()
}

module.exports = middleware
