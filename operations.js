const operationInput = document.querySelector('.operationInput')
const operationResult = document.querySelector('.operationResult')

operationInput.addEventListener('change', (e) => operations(e.target.value))

export default function operations(ops) {
  // empty result
  operationResult.innerHTML = ''
  let result = null

  //split input
  let splitOps = ops.split(' ')

  //remove character in array
  const deleteStringInArray = splitOps.filter((item) =>
    item.replace(/^\D+/g, '')
  )

  // operation R , D , +
  splitOps.forEach((item) => {
    let lastValue = deleteStringInArray[deleteStringInArray.length - 1]

    if (item === 'D') {
      const doubleLastValue = (parseInt(lastValue) * 2).toString(10)
      lastValue = doubleLastValue
      deleteStringInArray.push(doubleLastValue)
    } else if (item === 'R') {
      deleteStringInArray.pop()
    } else if (item === '+') {
      const preventValue = deleteStringInArray[deleteStringInArray.length - 2]
      console.log(preventValue)
      console.log(lastValue)
      const sum = (parseInt(preventValue) + parseInt(lastValue)).toString()
      deleteStringInArray.push(sum)
    }
  })

  // show result in new line
  let final = []
  deleteStringInArray.map((item) => {
    final.push(item)
    result = JSON.stringify(final)
    operationResult.innerHTML += result + '<br>'
  })

  // sum total array
  const total = deleteStringInArray.reduce(
    (acc, cur) => parseInt(acc) + parseInt(cur),
    0
  )

  //add total to result
  operationResult.innerHTML += total + '<br>'

  return result
}
