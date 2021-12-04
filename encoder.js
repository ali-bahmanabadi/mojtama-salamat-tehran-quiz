const encodeInput = document.querySelector('.encodeInput')
const repeatCount = document.querySelector('.repeatCount')
const encodeResult = document.querySelector('.encodeResult')
const encodeForm = document.querySelector('.encodeForm')

encodeForm.addEventListener('submit', (e) => {
  e.preventDefault()
  encoder(encodeInput.value.toLowerCase(), repeatCount.value)
})

export default function encoder(inputString, repeatCount) {
  let result = inputString

  for (let i = 0; i < repeatCount; i++) {
    // split input
    const splitCharacter = result.split('')

    // move last character to first
    const lastCharacter = splitCharacter.pop()
    splitCharacter.unshift(lastCharacter)

    //convert character to next character
    splitCharacter.map((item, index) => {
      let ascii = item.charCodeAt(0)
      // validate z
      if (ascii === 122) {
        ascii = 97
      } else {
        ascii += 1
      }
      const character = String.fromCharCode(ascii)
      splitCharacter[index] = character
    })
    result = splitCharacter.join('')
  }

  encodeResult.textContent = result
  return result
}
