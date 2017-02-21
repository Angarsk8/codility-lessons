function solution(H) {
  class Stack extends Array {
    last() { return this[this.length - 1] }
    isEmpty() { return !this.length }
  }

  const N = H.length
  let stack = new Stack()
  let counter = 0

  for (let i = 0; i < N; i++) {
    while (!stack.isEmpty() && H[i] < stack.last()) {
      stack.pop()
      counter++
    }
    if (stack.isEmpty() || H[i] > stack.last()) {
      stack.push(H[i])
    }
  }

  counter += stack.length
  return counter
}
