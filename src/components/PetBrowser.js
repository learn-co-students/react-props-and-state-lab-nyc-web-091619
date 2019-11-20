import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  displayPets = (pets) => {
    return pets.map((pet, i) => <Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
  }
  render() {
    return <div className="ui cards">
        {this.displayPets(this.props.pets)}
    </div>
  }
}

export default PetBrowser
