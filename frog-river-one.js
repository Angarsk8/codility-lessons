function solution(X, A) {
  const uniq = [...new Set(A)]
  return uniq.length !== X ? -1 : A.indexOf(uniq[uniq.length - 1])
}
