function solution(S, P, Q) {
  const M = P.length
  const factors = {'A': 1, 'C': 2, 'G': 3, 'T': 4}
  const S_ARRAY = S.split('').map(char => factors[char])
  const result = []

  for (var i = 0; i < M; i++) {
    result.push(Math.min(...S_ARRAY.slice(P[i], Q[i] + 1)))
  }

  return result
}
