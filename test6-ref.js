class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null

    this.setTextInput = ele => {
      this.textInput = ele
    }

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }
  }
  // 组件挂载后让文本框自动d取焦点
  componentDidMount() {
    this.focusTextInput()
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          ref={this.setTextInput}/>
        <input 
          type="button"
          value="聚焦文本输入框"
          onClick={this.focusTextInput}/>
      </div>
    )
  }
}