function solution(N, A) {
  let counters = Array(N).fill(0)
  let max = 0

  for (X of A) {
    if (1 <= X <= N) {
      const increment = counters[X - 1] + 1
      max = increment > max ? increment : max
      counters[X - 1] = increment
    }
    if (X === N + 1) {
      counters = Array(N).fill(max)
    }
  }

  return counters
}
