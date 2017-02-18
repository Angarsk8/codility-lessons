function solution(A) {
  let counter = 0
  const [east, west] = A.reduce((matrix, dir, i) => {
    if (dir === 0) {
      matrix[0] = [...matrix[0], i]
    } else {
      matrix[1] = [...matrix[1], i]
    }
    return matrix
  }, [[], []])

  for (P of east) {
    counter += west.filter(Q => P < Q).length
  }

  return counter
}

/* 100% Solution */
function solution(A) {
  const LIMIT = 1000000000
  let counter = 0
  let ones = 0

  for (let i = A.length - 1; i >= 0 ; i--) {
    if (A[i] === 0) {
      counter += ones
    } else {
      ones++
    }

    if (counter > LIMIT) {
      return -1
    }
  }

  return counter
}
