export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ], color: '149, 7, 20'}, // cranberry
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ], color: '41, 45, 5'}, // dark green
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ], color: '178, 90, 32'}, // rust
    Z: {
        shape: [
            [0, 'Z', 'Z'],
            [0, 'Z', 0],
            ['Z', 'Z', 0]
        ], color: '59, 39, 29'}, // chocolate brown
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]
        ], color: '174, 115, 73'}, // puke color
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ], color: '200, 147, 79'}, // caramel
    S: {
        shape: [
            ['S', 'S', 0],
            [0, 'S', 0],
            [0, 'S', 'S']
        ], color: '232, 138, 30'} // tangerine
}

// export const randomTetromino = () => {
//     const tetrominos = 'ILJOSTZ';
//     const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
//     return tetrominos[randTetromino];
// }

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}