export const problems = [
  {
    id: 'hello-world',
    title: 'Hello World',
    difficulty: 'easy',
    description: 'Напишите программу, которая выводит "Hello, World!" в консоль.',
    examples: [
      {
        input: 'Нет входных данных',
        output: 'Hello, World!',
        explanation: 'Программа должна просто вывести строку "Hello, World!" в консоль.'
      }
    ],
    starterCode: {
      python: `def solution():
    # Ваше решение здесь
    print("Hello, World!")

solution()`,
      go: `package main

import "fmt"

func main() {
    // Ваше решение здесь
    fmt.Println("Hello, World!")
}`
    }
  },
  {
    id: 'sum-numbers',
    title: 'Сумма чисел',
    difficulty: 'easy',
    description: 'Напишите функцию, которая принимает два числа и возвращает их сумму.',
    examples: [
      {
        input: 'a = 5, b = 3',
        output: '8',
        explanation: '5 + 3 = 8'
      },
      {
        input: 'a = -1, b = 1',
        output: '0',
        explanation: '-1 + 1 = 0'
      }
    ],
    starterCode: {
      python: `def sum_numbers(a, b):
    # Ваше решение здесь
    pass

# Тестовые примеры
print(sum_numbers(5, 3))
print(sum_numbers(-1, 1))`,
      go: `package main

import "fmt"

func sumNumbers(a, b int) int {
    // Ваше решение здесь
    return 0
}

func main() {
    fmt.Println(sumNumbers(5, 3))
    fmt.Println(sumNumbers(-1, 1))
}`
    }
  },
  {
    id: 'reverse-string',
    title: 'Разворот строки',
    difficulty: 'easy',
    description: 'Напишите функцию, которая принимает строку и возвращает её в обратном порядке.',
    examples: [
      {
        input: '"hello"',
        output: '"olleh"',
        explanation: 'Каждый символ должен быть на противоположной позиции'
      },
      {
        input: '"12345"',
        output: '"54321"',
        explanation: 'Разворот строки из цифр'
      }
    ],
    starterCode: {
      python: `def reverse_string(s):
    # Ваше решение здесь
    pass

# Тестовые примеры
print(reverse_string("hello"))
print(reverse_string("12345"))`,
      go: `package main

import "fmt"

func reverseString(s string) string {
    // Ваше решение здесь
    return s
}

func main() {
    fmt.Println(reverseString("hello"))
    fmt.Println(reverseString("12345"))
}`
    }
  }
];
