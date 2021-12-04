const repetitiveInput = document.querySelector('.repetitiveInput')
const repetitiveResult = document.querySelector('.repetitiveResult')

repetitiveInput.addEventListener('input', (e) =>
  removerRepetitive(e.target.value)
)

export default function removerRepetitive(string) {
  let result = string

  const splitInput = result.split('')

  const removeRepetitive = new Set(splitInput)

  const arrayString = [...removeRepetitive]

  result = arrayString.join('')

  repetitiveResult.textContent = result

  return result
}
