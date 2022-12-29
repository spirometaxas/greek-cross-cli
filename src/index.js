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

const LINES = {
  '─': {
    STANDARD: '─',
    BOLD: '━',
    DOUBLE: '═',
  },
  '│': {
    STANDARD: '│',
    BOLD: '┃',
    DOUBLE: '║',
  },
  '┌': {
    STANDARD: '┌',
    BOLD: '┏',
    DOUBLE: '╔',
  },
  '┐': {
    STANDARD: '┐',
    BOLD: '┓',
    DOUBLE: '╗',
  },
  '┘': {
    STANDARD: '┘',
    BOLD: '┛',
    DOUBLE: '╝',
  },
  '└': {
    STANDARD: '└',
    BOLD: '┗',
    DOUBLE: '╚',
  },
  '┼': {
    STANDARD: '┼',
    BOLD: '╋',
    DOUBLE: '╬',
  },
};

const getLine = function(lineId, lineType) {
  if (LINES[lineId] !== undefined && lineType !== undefined) {
    return LINES[lineId][lineType.toUpperCase()];
  } else if (LINES[lineId] !== undefined) {
    return LINES[lineId].STANDARD;
  } else {
    return ' ';
  }
}

const getLineType = function(line) {
  if (line !== undefined && (line.toLowerCase() === 'standard' || line.toLowerCase() === 'double' || line.toLowerCase() === 'bold')) {
    return line.toLowerCase();
  }
  return 'standard';
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

const greekCross = function(n, size, board, pos) {
  if (n === 0) {
    drawCross(board, pos, size);
    drawCap(board, { x: pos.x, y: pos.y + parseInt(getHeight(size) / 2) + 1 });
    drawCap(board, { x: pos.x, y: pos.y - parseInt(getHeight(size) / 2) - 1 });
    drawCap(board, { x: pos.x + parseInt(getWidth(size) / 2) + 1, y: pos.y });
    drawCap(board, { x: pos.x - parseInt(getWidth(size) / 2) - 1, y: pos.y });
    return;
  }

  greekCross(n - 1, size - 1, board, { x: pos.x, y: pos.y + parseInt(getHeight(size - 1) / 2) + 1 });
  greekCross(n - 1, size - 1, board, { x: pos.x, y: pos.y - parseInt(getHeight(size - 1) / 2) - 1 });
  greekCross(n - 1, size - 1, board, { x: pos.x + parseInt(getWidth(size - 1) / 2) + 1, y: pos.y });
  greekCross(n - 1, size - 1, board, { x: pos.x - parseInt(getWidth(size - 1) / 2) - 1, y: pos.y });
}

const draw = function(board, lineType) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += getLine(board[board.length - i - 1][j], lineType);
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }

  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const lineType = config !== undefined ? getLineType(config.line) : undefined;

  const board = createBoard(getWidth(size), getHeight(size));
  greekCross(n, size, board, { x: parseInt(getWidth(size) / 2.0), y: parseInt(getHeight(size) / 2.0) });
  return draw(board, lineType);
}

module.exports = {
  create: create
};