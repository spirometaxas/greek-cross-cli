const getWidth = function(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 3;
  } else {
    return Math.pow(2, n + 2) - 1;
  }
}

const getHeight = function(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return Math.pow(2, n + 1) - 1;
  }
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawCross = function(board, pos, scale) {
  for (let i = 0; i < getWidth(scale); i++) {
    board[pos.y][pos.x + i - parseInt(getWidth(scale) / 2)] = '─';
  }
  for (let i = 0; i < getHeight(scale); i++) {
    board[pos.y + i - parseInt(getHeight(scale) / 2)][pos.x] = '│';
  }
  board[pos.y][pos.x] = '┼';
}

const isOnBoard = function function_name(board, pos) {
  if (pos.y < 0 || pos.y >= board.length) {
    return false;
  }
  if (pos.x < 0 || pos.x >= board[0].length) {
    return false;
  }
  return true;
}

const drawCap = function(board, pos) {
  if (!isOnBoard(board, pos)) {
    return;
  }
  if (board[pos.y][pos.x] === '┼' || board[pos.y][pos.x] === '─' || board[pos.y][pos.x] === '│') {
    return;
  }
  
  if (isOnBoard(board, { x: pos.x - 1, y: pos.y }) && board[pos.y][pos.x - 1] === '─' && 
      isOnBoard(board, { x: pos.x + 1, y: pos.y }) && board[pos.y][pos.x + 1] === '─' && 
      isOnBoard(board, { x: pos.x, y: pos.y - 1 }) && (board[pos.y - 1][pos.x] === '│' || board[pos.y - 1][pos.x] === '┼') &&
      isOnBoard(board, { x: pos.x, y: pos.y + 1 }) && (board[pos.y + 1][pos.x] === '│' || board[pos.y + 1][pos.x] === '┼')) {
    board[pos.y][pos.x] = '┼';
    return;
  }

  if (isOnBoard(board, { x: pos.x - 1, y: pos.y }) && board[pos.y][pos.x - 1] === '─' && 
      isOnBoard(board, { x: pos.x, y: pos.y - 1 }) && (board[pos.y - 1][pos.x] === '│' || board[pos.y - 1][pos.x] === '┼')) {
    board[pos.y][pos.x] = '┐';
    return;
  }

  if (isOnBoard(board, { x: pos.x + 1, y: pos.y }) && board[pos.y][pos.x + 1] === '─' && 
      isOnBoard(board, { x: pos.x, y: pos.y - 1 }) && (board[pos.y - 1][pos.x] === '│' || board[pos.y - 1][pos.x] === '┼')) {
    board[pos.y][pos.x] = '┌';
    return;
  }

  if (isOnBoard(board, { x: pos.x + 1, y: pos.y }) && board[pos.y][pos.x + 1] === '─' && 
      isOnBoard(board, { x: pos.x, y: pos.y + 1 }) && (board[pos.y + 1][pos.x] === '│' || board[pos.y + 1][pos.x] === '┼')) {
    board[pos.y][pos.x] = '└';
    return;
  }

  if (isOnBoard(board, { x: pos.x - 1, y: pos.y }) && board[pos.y][pos.x - 1] === '─' && 
      isOnBoard(board, { x: pos.x, y: pos.y + 1 }) && (board[pos.y + 1][pos.x] === '│' || board[pos.y + 1][pos.x] === '┼')) {
    board[pos.y][pos.x] = '┘';
    return;
  }
}

const greekCross = function(n, scale, board, pos) {
  if (n === 0) {
    drawCross(board, pos, scale);
    drawCap(board, { x: pos.x, y: pos.y + parseInt(getHeight(scale) / 2) + 1 });
    drawCap(board, { x: pos.x, y: pos.y - parseInt(getHeight(scale) / 2) - 1 });
    drawCap(board, { x: pos.x + parseInt(getWidth(scale) / 2) + 1, y: pos.y });
    drawCap(board, { x: pos.x - parseInt(getWidth(scale) / 2) - 1, y: pos.y });
    return;
  }

  greekCross(n - 1, scale - 1, board, { x: pos.x, y: pos.y + parseInt(getHeight(scale - 1) / 2) + 1 });
  greekCross(n - 1, scale - 1, board, { x: pos.x, y: pos.y - parseInt(getHeight(scale - 1) / 2) - 1 });
  greekCross(n - 1, scale - 1, board, { x: pos.x + parseInt(getWidth(scale - 1) / 2) + 1, y: pos.y });
  greekCross(n - 1, scale - 1, board, { x: pos.x - parseInt(getWidth(scale - 1) / 2) - 1, y: pos.y });
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, scale) {
  if (n === undefined || n < 0) {
    return '';
  }
  if (scale === undefined || scale < n) {
    scale = n;
  }

  const board = createBoard(getWidth(scale), getHeight(scale));
  greekCross(n, scale, board, { x: parseInt(getWidth(scale) / 2.0), y: parseInt(getHeight(scale) / 2.0) });
  return draw(board);
}

module.exports = {
  create: create
};