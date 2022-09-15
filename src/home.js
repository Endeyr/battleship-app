import footer from './footer'

let home = () => {
	// Footer DOM
	if (!document.querySelector('footer')) {
		footer()
	}
}

export default home
