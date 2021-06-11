
// 计算胜者
function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
    return null
  }
}

// square组件 函数式组件
function Square(props) {
  return (
    <button onClick={props.onClick}>{props.value}</button>
  )
}

// Board组件
class Board extends React.Component {
  // 渲染方块
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/>
    )
  }
  // Board页面结构渲染
  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}

// game组件
class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      isNext: true,
      stepNumber: 0
    }
  }
  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[this.state.stepNumber]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.isNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      isNext: !this.state.isNext,
      stepNumber: history.length
    })
  }
  // 回退历史按钮
  jumpTo(move) {
    this.setState({
      stepNumber: move,
      isNext: (move % 2) === 0
    })
  }
  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((item, move) => {
      const desc = move ? 
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner:' + winner
    } else {
      status = 'Next player:'+ (this.state.isNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    )
  }
}