window.addEventListener('DOMContentLoaded', () => {
	const color = document.querySelector('#color')
	const linewidth = document.querySelector('#line-width')
	const linecap = document.querySelector('#line-cap')
	const canvas = document.querySelector('#canvas')

	canvas.height = window.innerHeight
	canvas.width = window.innerWidth

	const ctx = canvas.getContext('2d')

	let painting = false

	let cap = ''

	let lineColor = ''

	let num

	document.addEventListener('change', () => {
		cap = linecap.value

		lineColor = color.value

		num = linewidth.value
	})

	const draw = (x, y) => {
		if (!painting) return

		ctx.lineCap = cap ? cap : 'round'

		ctx.lineWidth = num ? num : linewidth.value

		ctx.lineTo(x, y)
		ctx.strokeStyle = lineColor ? lineColor : '#000'
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(x, y)
	}

	setInterval(draw, 1000)

	document.addEventListener('mousedown', () => {
		painting = true
	})
	document.addEventListener('mousemove', (e) => {
		draw(e.clientX, e.clientY)
	})
	document.addEventListener('mouseup', () => {
		painting = false
		ctx.beginPath()
	})
})
