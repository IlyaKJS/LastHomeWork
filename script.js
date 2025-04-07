const counterDisplay = document.querySelector('p')
const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', () => {
	let count = parseInt(counterDisplay.textContent)
	count += 1
	counterDisplay.textContent = count
})
