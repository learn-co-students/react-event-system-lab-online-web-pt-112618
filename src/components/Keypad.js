// import React from 'react'

// class Keypad extends React.Component {

// 	handlePassword = () => { console.log("Entering password...")

// 	render() {
// 		return (
// 			<input type="password" onKeyUp={this.handlePassword} />
// 		)	
// 	}
// }

// export default Keypad


import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;