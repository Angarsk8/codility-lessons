function solution(N) {
  const len = N.length
  let min = Infinity

  let [head, ..rest] = A

  for (var i = 0; i < len - 1; i++) {
    const left  = N.slice(0, i + 1).reduce((acc, n) => n + acc, 0)
    const right = N.slice(i + 1).reduce((acc, n) => n + acc, 0)
    const difference  = Math.abs(left - right)
    min = difference < min ? difference : min
  }

  return min
}

function solution(A) {
  const len = A.length
  let leftSum  = A[0]
  let rightSum = A.slice(1).reduce((acc, value) => acc + value, 0)
  let min = Math.abs(leftSum - rightSum)

  if (len === 2) {
    return min
  }

  for (var i = 1; i < len - 1; i++) {
    leftSum  += A[i]
    rightSum -= A[i]
    const diff = Math.abs(leftSum - rightSum)
    min = diff < min ? diff : min
  }

  return min
}
