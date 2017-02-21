function solution(A) {
  const N = A.length
  const upperRange = Array(N).fill(0)
  const lowerRange = Array(N).fill(0)

  for (let i = 0; i < N; i++) {
    upperRange[i] = i + A[i]
    lowerRange[i] = i - A[i]
  }

  const sortedUpperRange = [...upperRange].sort((a, b) => a - b)
  const sortedLowerRange = [...lowerRange].sort((a, b) => a - b)

  let intersections = 0
  let lowerIndex = 0

  for (let upperIndex = 0; upperIndex < N; upperIndex++) {
    while (
      lowerIndex < N &&
      sortedUpperRange[upperIndex] >= sortedLowerRange[lowerIndex]
    ) { lowerIndex++ }

    intersections += lowerIndex - upperIndex - 1
    if (intersections > 10000000) {
      return -1
    }
  }

  return intersections
}
