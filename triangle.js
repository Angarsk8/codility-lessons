/* 75% Solution */
function solution(A) {
  const N = A.length

  if (N < 3) {
    return 0
  }

  for (let P = 0; P < N - 2; P++) {
    for (let Q = P + 1; Q < N - 1; Q++) {
      for (let R = Q + 1; R < N; R++) {
        const cond1 = A[P] + A[Q] > A[R]
        const cond2 = A[Q] + A[R] > A[P]
        const cond3 = A[R] + A[P] > A[Q]
        if (cond1 && cond2 && cond3) {
          return 1
        }
      }
    }
  }

  return 0
}

/* 100% Solution */
function solution(A) {
  const N = A.length

  if (N < 3) {
    return 0
  }

  const sortedA = [...A].sort((a, b) => a - b)

  for (var i = 0; i < N - 2; i++) {
    if(sortedA[i] + sortedA[i + 1] > sortedA[i + 2]) {
      return 1
    }
  }

  return 0
}
