const repeatInput = document.querySelector('.repeatInput')
const repeatResult = document.querySelector('.repeatResult')

repeatInput.addEventListener('input', (event) =>
  getRepeatedInfo(event.target.value)
)

export default function getRepeatedInfo(number) {
  let result = {}

  const res = number.split('')

  res.map((item) => {
    let value = ''
    for (let i = 0; i < item; i++) {
      value += item
    }
    if (!result[item]) {
      result[item] = value
    } else {
      result[item] = result[item] + value
    }
  })

  repeatResult.textContent = JSON.stringify(result)

  return result
}
