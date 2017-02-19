function solution(A) {
  const N = A.length
  let maxProduct = -Infinity

  if (N === 3) {
    return A[0] * A[1] * A[2]
  }

  for (let P = 0; P < N - 2; P++) {
    for (let Q = P + 1; Q < N - 1; Q++) {
      for (let R = Q + 1; R < N; R++) {
        const product = A[P] * A[Q] * A[R]
        if (product > maxProduct) {
          maxProduct = product
        }
      }
    }
  }

  return maxProduct
}

/* 100% Solution */
function solution(A) {
  const N = A.length
  const sortedA = A.sort((a, b) => a - b)
  return Math.max(
    sortedA[0] * sortedA[1] * sortedA[N - 1],
    sortedA[N - 1] * sortedA[N - 2] * sortedA[N - 3]
  )
}
