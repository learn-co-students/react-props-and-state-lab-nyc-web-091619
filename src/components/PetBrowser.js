import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  // Should receive a pet prop. Use the attributes in this data to render the pet 
  // card correctly. It should show the pet's name, type, age and weight.
  // Based on the pet's gender, the component also needs to contain either a male (♂) or 
  // female (♀) symbol.

  renderPets = () => {
    console.log(this.props.pets);
    return this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />)
  }
  
  render() {
  return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
