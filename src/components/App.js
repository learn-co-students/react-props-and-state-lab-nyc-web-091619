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
  
  
  onChangeType = (event)=>{
    let selection = event.target.value
    this.setState({filters: {type: selection}})
  }
  
  onFindPetsClick = ()=>{
    let endpoint = ""

    this.state.filters.type === "all"
    ? endpoint = ""
    : endpoint = "?type="+this.state.filters.type

    fetch(`/api/pets${endpoint}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({pets: data})
    })
  }

  onAdoptClick = (event) => {
    // this.setState({pets: []})
    let petID = event.target.id
    let pet = this.state.pets.find((pet)=>{
      return pet.id === petID
    })
    pet.isAdopted = true
    this.setState({...this.state.pets})
    console.log(this.state.pets)
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
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptClick = {this.onAdoptClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App