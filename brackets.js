function solution(S) {
  const N = S.length

  if (!N) {
    return 1
  }

  if (N % 2 !== 0) {
    return 0
  }

  const openingTags = ['(', '[', '{']
  const closingTags = [')', ']', '}']

  if (!openingTags.includes(S[0])) {
    return 0
  }

  let opening = []

  for (let char of S) {
    if (openingTags.includes(char)) {
      opening.push(char)
      continue
    }

    if (
      openingTags[closingTags.indexOf(char)] ===
      opening[opening.length - 1]
    ) {
      opening.pop()
    } else {
      return 0
    }
  }

  return opening.length ? 0 : 1
}
