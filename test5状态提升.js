/**
 * 实现两个输入框实时显示“摄氏”与“华氏”温度转换、并显示沸水状态
 */

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

// 输入温度数值组件（渲染两个独立的组件，单抽离出来）
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <FileList>
        <legend>enter temperature in {scaleNames[scale]}</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </FileList>
    )
  }
}

// 展示是否水沸
function BollingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>the water would boil</p>
  }
  return <p>the water would not boil</p>
}

// 温度转换显示组件
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = { temperature: '', scale: 'c' }
  }
  handleCelsiusChange(temperature) {
    this.setState({ temperature, scale: 'c' })
  }
  handleFahrenheitChange(temperature) {
    this.setState({ temperature, scale: 'f' })
  }
  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    return (
      <div>
        <TemperatureInput 
          scale="c" 
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput 
          scale="f" 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BollingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

// 温度转换函数
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
  const input = parseInt(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}