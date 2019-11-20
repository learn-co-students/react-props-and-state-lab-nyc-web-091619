import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  appendPet = () => {
    let pets = this.props.pets
    return pets.map((pet)=>{
      return <Pet pet = {pet} onAdoptClick = {this.props.onAdoptClick}/>
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.appendPet()}
      </div>
    )
  }}

export default PetBrowser