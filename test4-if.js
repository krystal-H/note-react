function UserGreeting() {
  return(
    <div>user-welcome!</div>
  )
}

function GuestFreeting() {
  return (
    <div>please sign up</div>
  )
}

function Greeting(props) {
  const isLogin = props.isLogin
  if (isLogin) {
    return <UserGreeting/>
  }
  return <GuestFreeting/>
}

ReactDOM.render(
  <Greeting isLogin={false}/>,
  document.getElementById('root')
)