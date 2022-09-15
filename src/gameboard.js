let gameboard = () => {
	let myGridSize = 7
	let enemyGridSize = 7
	let myGrid = createGrid(myGridSize)
	let enemyGrid = createGrid(enemyGridSize)
	let myShips = 5
	let enemyShips = 5
	let enemyLocations = {}

	printGrid(enemyGrid, true)
	printGrid(myGrid)

	// game setup
	for (let i = 1; i < 6; i++) {
		let x = getRandomInt(myGridSize) // placement cords
		let y = getRandomInt(myGridSize) // placement cords
		placeCharacter(x, y, 'O', myGrid)
		placeRandomCharacter('O', enemyGrid, enemyGridSize)
		drawBreak()
		printGrid(enemyGrid, true)
		printGrid(myGrid)
	}

	function placeCharacter(x, y, c, grid) {
		grid[y][x] = c
	}

	function placeRandomCharacter(c, grid, max) {
		let didPlace = false
		while (!didPlace) {
			let x = getRandomInt(max)
			let y = getRandomInt(max)
			if (!enemyLocations[`${x}-${y}`]) {
				placeCharacter(x, y, c, grid)
				didPlace = true
				enemyLocations[`${x}-${y}`] = true
			}
		}
	}

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}

	// game loop
	while (enemyShips > 0 && myShips > 0) {
		let x = getRandomInt(enemyGridSize) // attack cords
		let y = getRandomInt(enemyGridSize) // attack cords

		if (attack(x, y, enemyGrid)) {
			enemyShips--
		}

		x = getRandomInt(myGridSize)
		y = getRandomInt(myGridSize)
		if (enemyShips > 0 && attack(x, y, myGrid)) {
			myShips--
		}

		drawBreak()
		printGrid(enemyGrid, true)
		printGrid(myGrid)
	}

	if (myShips < enemyShips) {
		console.log('What a loser...')
	} else {
		console.log('Victory!!!')
	}

	function createGrid(size) {
		let grid = []
		for (let i = 0; i < size; i++) {
			grid[i] = []
			for (let j = 0; j < size; j++) {
				grid[i][j] = '-'
			}
		}
		return grid
	}
	// print board
	function printGrid(grid, isEnemy = false) {
		const headers = createHeaders(grid.length)
		console.log(headers)
		for (let i = 0; i < grid.length; i++) {
			let rowStr = i + ' '
			for (let cell of grid[i]) {
				if (isEnemy && cell == 'O') {
					rowStr += '- '
				} else {
					rowStr += cell + ' '
				}
			}
			console.log(rowStr)
		}
	}

	function createHeaders(size) {
		let result = '  '
		for (let i = 0; i < size; i++) {
			result += i + ' '
		}
		return result
	}

	// attack logic
	function attack(x, y, grid) {
		if (grid[y][x] == 'O') {
			grid[y][x] = '!'
			return true
		} else if (grid[y][x] == '-') {
			grid[y][x] = 'x'
			return false
		} else {
			return false
		}
	}

	function drawBreak() {
		console.log('---------------')
	}
}

export default gameboard
