export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ], color: '0, 255, 255'}, // aqua color
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ], color: '25, 25, 112'}, // midnite blue
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ], color: '149, 7, 20'}, // cranberry
    Z: {
        shape: [
            [0, 'Z', 'Z'],
            [0, 'Z', 0],
            ['Z', 'Z', 0]
        ], color: '57, 255, 20'}, // neon green
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 'T', 0]
        ], color: '237, 145, 33'}, // carrot orange
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ], color: '48, 25, 52'}, // dark purple
    S: {
        shape: [
            ['S', 'S', 0],
            [0, 'S', 0],
            [0, 'S', 'S']
        ], color: '255, 244, 79'} // yellow
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