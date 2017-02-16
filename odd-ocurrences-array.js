function solution(A) {
  let evaluated = {}
  let result

  for (number of A) {
    if (number in evaluated) {
      continue
    }

    const occurrences = A.filter(n => n === number).length

    if (occurrences % 2 !== 0) {
      result = number
      break
    }

    evaluated[number] = number
  }

  return result
}

function solution(A) {
  const len = A.length
  let evaluated = {}
  let result

  for (let i = 0; i < len; i++) {
    const _curr = A[i]
    let _temp = 0

    if (_curr in evaluated) {
      continue
    }

    for (var j = 0; j < A.length; j++) {
      if (A[j] === _curr) {
        _temp += 1
      }
    }

    if (_temp % 2 !== 0) {
      result = _curr
      break
    }

    evaluated[_curr] = _curr
  }

  return result
}

function solution(A) {
  const sorted = [...A].sort((a, b) => a - b)
  let prev = A[0]
  let occurrences = 0
  let result

  for (number of sorted) {
    if (number !== prev && occurrences % 2 !== 0) {
      result = prev
      break
    }

    if (number !== prev) {
      occurrences = 1
    }

    if (number === prev) {
      occurrences += 1
    }

    result = prev = number
  }

  return result
}
