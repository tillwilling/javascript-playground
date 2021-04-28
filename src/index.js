const form = document.querySelector('[data-form]')
const box = document.querySelector('[data-box]')
const input = document.querySelector('[name="class"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box.classList.toggle(input.value)
  input.value = ''
})
