import React from 'react'

class Pet extends React.Component {

  state = {
    isAdopted: false
  }

  onAdoptPet = (e)=> {
      this.setState({
        isAdopted: true
      }) 
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.gender === 'female') ? '♀': '♂' }
            Name: {this.props.name}
          
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age} </p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
         {(this.state.isAdopted) ?
          <button className="ui disabled button">Already adopted</button>:
          <button onClick = {this.onAdoptPet} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
