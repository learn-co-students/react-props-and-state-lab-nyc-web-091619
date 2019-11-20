import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
  let allPets = this.props.pets.map((pet)=>{
      //console.log(pet.gender)
      return (
      <Pet age={pet.age}
       name={pet.name}
       weight={pet.weight}
       gender={pet.gender}
       type={pet.type}
        isAdopted={pet.onAdoptPet}
        key={pet.id}
       />
      )
    })
   return allPets
  }

  

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}


export default PetBrowser
