import React from 'react'

class EyesOnMe extends React.Component {
  focused () {
    console.log('Good!')
  }

  blurred () {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <div>
        <button type='submit' onFocus={this.focused} onBlur={this.blurred}/>
      </div>
    )
  }
}

export default EyesOnMe
