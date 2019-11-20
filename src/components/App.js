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

  onChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }
  
  onFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all'){
      url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
      pets: data
      })
    })
  }
  
  onAdoptPet = (id) => {
    let thesePets = [...this.state.pets]
    let index = thesePets.findIndex(pet => pet.id === id)
    thesePets[index].isAdopted = true
    this.setState({
      pets: [...thesePets]
    })  
    
  }
  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App