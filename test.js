
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
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      isNext: true
    }
  }
  // 点击方块
  handleClick(i){
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.isNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      isNext: !this.state.isNext
    })
  }
  // 渲染方块
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}></Square>
    )
  }
  // Board页面结构渲染
  render() {
    // const status = "Next player:" + (this.state.isNext ? 'X' : 'O')
    const winner = calculateWinner(this.state.squares)
    let status
    if (winner) {
      status = 'Winner：' + winner
    } else {
      status = 'Next player:' + (this.state.isNext ? 'X' : 'O')
    }
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