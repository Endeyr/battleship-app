let footer = () => {
	let footer = document.createElement('footer')
	let footerText = document.createElement('p')
	let github = document.createElement('a')
	let link = document.createTextNode('Github')
	footerText.innerHTML = 'Created by Aaron Thompson. Find this project on '
	github.innerHtml = ''
	footer.appendChild(footerText)
	footerText.appendChild(github)
	github.appendChild(link)
	github.title = 'Github'
	github.href = 'https://github.com/Endeyr/battleship-app'
	let body = document.querySelector('body')
	body.appendChild(footer)
}

export default footer
