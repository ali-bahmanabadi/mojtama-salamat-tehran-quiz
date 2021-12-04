const operationInput = document.querySelector('.operationInput')
const operationResult = document.querySelector('.operationResult')

operationInput.addEventListener('change', (e) => operations(e.target.value))

export default function operations(ops) {
  let result = null

  let splitOps = ops.split(' ')
  splitOps = splitOps.map((item) =>  parseInt(item ))
  const currentOps = splitOps[splitOps.length - 1]
  const preventOps = splitOps[splitOps.length - 2]


  console.log(splitOps)

  switch (currentOps) {
    case 'D':
      const value = parseInt(preventOps) * 2
      splitOps.pop()
      splitOps.push(value)

      console.log(splitOps)
      break
    case 'R':

      break
    case '+':
      break
    default:
       splitOps
  }
  

  result = JSON.stringify(splitOps)

  operationResult.textContent = result 
  return result
}
