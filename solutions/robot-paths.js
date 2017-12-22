//initial function
const robotPaths = n => {
	const brd = makeBoard(n)
	let paths = 0
	const inBounds = function (rowidx, colIdx) {
		return rowIdx >= 0 && rowIdx < brd.length && colIdx >= 0 && colIdx < brd.length }
	const movePath = (row, col) => {
		row === brd.length - 1 && col === brd.length - 1 && paths++
		brd.togglePiece(row, col)
		inBounds(row+1, col) && !brd.hasBeenVisited(row+1, col) && movePath(row+1, col)
		inBounds(row, col+1) && !brd.hasBeenVisited(row, col+1) && movePath(row, col+1)
		inBounds(row-1, col) && !brd.hasBeenVisited(row-1, col) && movePath(row-1, col)
		inBounds(row, col-1) && !brd.hasBeenVisited(row, col-1) && movePath(row, col-1)
		brd.togglePiece(row,col)
	}
	movePath(0,0)
	return paths
}


//optimized
function robotPaths (n) {
	const brd = makeBoard(n)
	let paths = 0
	let count = 0
	const inBounds = function (rowIdx, colIdx) {
		return rowIdx >= 0 && rowIdx < brd.length && colIdx >= 0 && colIdx < brd.length }
		
	const movePath = (row, col) => {
		if (row === brd.length - 1 && col === brd.length - 1) { return paths++ }
		brd.togglePiece(row, col)
		if (n===3) { 
		  count++; 
		  console.log(JSON.stringify(count));
		}
		inBounds(row+1, col) && !brd.hasBeenVisited(row+1, col) && movePath(row+1, col)
		inBounds(row, col+1) && !brd.hasBeenVisited(row, col+1) && movePath(row, col+1)
		inBounds(row-1, col) && !brd.hasBeenVisited(row-1, col) && movePath(row-1, col)
		inBounds(row, col-1) && !brd.hasBeenVisited(row, col-1) && movePath(row, col-1)
		brd.togglePiece(row,col)
	}
	
	movePath(0,0)
	return paths
}

//optimized
function robotPaths (n) {
	const brd = makeBoard(n)
	let paths = 0
	let count = 0
	const inBounds = function (rowIdx, colIdx) {
		return rowIdx >= 0 && rowIdx < brd.length && colIdx >= 0 && colIdx < brd.length }	
	const movePath = (row, col) => {
		if (row === brd.length - 1 && col === brd.length - 1) { return paths++ }
		brd.togglePiece(row, col)
		inBounds(row+1, col) && !brd.hasBeenVisited(row+1, col) && movePath(row+1, col)
		inBounds(row, col+1) && !brd.hasBeenVisited(row, col+1) && movePath(row, col+1)
		inBounds(row-1, col) && !brd.hasBeenVisited(row-1, col) && movePath(row-1, col)
		inBounds(row, col-1) && !brd.hasBeenVisited(row, col-1) && movePath(row, col-1)
		brd.togglePiece(row,col)
	}
	movePath(0,0)
	return paths
}