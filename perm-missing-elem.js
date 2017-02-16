function solution(A) {
  const len = A.length
  let result

  if (!len) {
    return 1
  }

  const sorted = [...A].sort((a, b) => a - b)

  if (sorted[0] > 1) {
    return 1
  }

  for (var i = 0; i < len; i++) {
    let cur  = sorted[i]
    let next = sorted[i + 1]
    let diff = next - cur

    if (diff > 1) {
      result = cur + 1
      break
    }

    result = cur + 1
  }

  return result
}
