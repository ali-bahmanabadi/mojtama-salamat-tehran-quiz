const balanceInput = document.querySelector('.balance')
const balanceResult = document.querySelector('.balanceResult')

balanceInput.addEventListener('input', (event) => isBalance(event.target.value))

export default function isBalance(input) {
  let result = null
  const curlyBracketLeftNumber = input.split('{').length - 1
  const curlyBracketRightNumber = input.split('}').length - 1
  const bracketLeftNumber = input.split('[').length - 1
  const bracketRightNumber = input.split(']').length - 1
  const parenthesesLeftNumber = input.split('(').length - 1
  const parenthesesRightNumber = input.split(')').length - 1

  // validation
  if (
    curlyBracketLeftNumber === curlyBracketRightNumber &&
    bracketLeftNumber === bracketRightNumber &&
    parenthesesLeftNumber === parenthesesRightNumber
  ) {
    balanceResult.textContent = 'Is Balance'
    result = true
  } else {
    balanceResult.textContent = 'Not Balance'
    result = false
  }

  // empty result when input empty
  if (balanceInput.value.length === 0) {
    balanceResult.textContent = ''
  }
  return result
}
