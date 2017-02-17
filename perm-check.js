function solution(A) {
  const uniq = [...new Set(A)]
  const len  = A.length

  if (len === 1 && A[0] > 1 || uniq.length !== len) {
    return 0
  }

  if (len === 1) {
    return 1
  }

  const max = Math.max(...uniq)
  const sum = uniq.reduce((acc, number) => acc + number, 0)
  const expectedSum = (max * (max + 1)/2)

  return expectedSum !== sum ? 0 : 1
}
