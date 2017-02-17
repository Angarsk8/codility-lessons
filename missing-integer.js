function solution(A) {
  const sorted = [...new Set(A)].sort((a, b) => a - b).filter(num => num > 0)
  const len = sorted.length
  const min = sorted[0]

  if (len === 0 || min > 1) {
    return 1
  }

  if (len === 1) {
    return 2
  }

  let result

  for (var i = 0; i < len - 1; i++) {
    const cur  = sorted[i]
    const next = sorted[i + 1]
    const diff = next - cur

    if (diff > 1) {
      result = cur + 1
      break
    }

    result = next + 1
  }

  return result
}
