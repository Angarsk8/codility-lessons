function solution(A, K) {
  const len = A.length
  const shifts = K % len

  if (shifts === 0) {
    return A
  }

  return A.reduce((acc, value, i) => {
    if (i + shifts + 1 > len) {
      acc[(shifts + i) - len] = value
    } else {
      acc[i + shifts] = value
    }
    return acc
  }, Array(len))
}


console.log(solution([1, 2, 3], 1))
