function solution(S) {
  const N = S.length

  if (!N) {
    return 1
  }

  if (N % 2 !== 0) {
    return 0
  }

  if (S[0] !== '(') {
    return 0
  }

  let opening = 0

  for (let char of S) {
    if (char === '(') {
      opening++
    } else {
      opening--
    }

    if (opening < 0) {
      return 0
    }
  }

  return opening === 0 ? 1 : 0
}
