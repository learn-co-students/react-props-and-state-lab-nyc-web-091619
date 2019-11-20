import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleTypes = (event) => {
    switch (event.target.value) {
      case 'dog':
        this.setState({ filters: { type: 'dog' } })
        break;
      case 'cat':
        this.setState({ filters: { type: 'cat' } })
        break;
      case 'micropig':
        this.setState({ filters: { type: 'micropig' } })
        break;
      default: 
        this.setState({ filters: { type: 'all' } })
    }
  }

  fetchPetsByType = (type) => {
    fetch(`/api/pets?type=${type}`)
    .then(resp => resp.json())
    .then(json => this.setState( {pets: [...json]} ))
  }

  fetchAllPets = () => {
    fetch('/api/pets')
    .then(resp => resp.json())
    .then(json => this.setState( {pets: [...json]} ))
  }

  getPetsByType = (type) => {
    if (type !== 'all') {
      this.fetchPetsByType(type)
    } else {
      this.fetchAllPets()
    }
  }

  adoptPet = (id) => {
    let newPets = [...this.state.pets]

    let pet = newPets.find(pet => {
      if (id === pet.id) {
        return pet
      }
    })
    pet.isAdopted = true
    this.setState({ pets: [...newPets]})
    console.log(this.state.pets)
  }

  render() {
    // console.log(this.state)
    // this.getPetsByType(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleTypes} onFindPetsClick={this.getPetsByType} type={this.state.filters.type} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
