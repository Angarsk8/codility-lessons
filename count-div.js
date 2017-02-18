function solution(A, B, K) {
  const first = A % K === 0 ? A : A + (K - A % K)
  const last  = B % K === 0 ? B : B - B % K
  return (last - first)/K + 1
}
