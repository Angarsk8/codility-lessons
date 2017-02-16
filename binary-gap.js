function solution(N) {
  const binaryArray = (N >> 0).toString(2).split('')
  const [_, max, valid] = binaryArray.reduce(([cur, max, valid], bit) => {
    if (bit === '0') {
      return [cur + 1, max, valid]
    }

    if (bit === '1' && cur > max) {
      return [0, cur, true]
    }

    return [0, max, valid]
  }, [0, 0, false])

  return valid ? max : 0
}
