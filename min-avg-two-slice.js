function solution(A) {
  let min = 100000
  let minIndex

  if (A.length === 2) {
    return 0
  }

  for (var i = 0; i < A.length - 2; i++) {
    const twoAvg = (A[i] + A[i + 1])/2
    const nextTwoAvg = (A[i + 1] + A[i + 2])/2
    const threeAvg = (A[i] + A[i + 1] + A[i + 2])/3

    if (twoAvg < min || threeAvg < min) {
      min = Math.min(twoAvg, threeAvg)
      minIndex = i
    }
    if (nextTwoAvg < min) {
      min = nextTwoAvg
      minIndex = i + 1
    }
  }

  return minIndex
}
