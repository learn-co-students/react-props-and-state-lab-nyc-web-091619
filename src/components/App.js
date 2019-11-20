import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

    state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }



  onChangeType = (passedType) => {
    console.log(passedType)
    this.setState({
      pets:[],
      filters:{
        type: passedType
       }
    })
  }


  

  onFindPetsClick = () => {
    console.log("work bitch!!!!!!!")
    console.log(this.state.filters.type)
    switch (this.state.filters.type) {
      case "all":
        fetch("/api/pets")
        .then((resp)=> resp.json() )
        .then(resp => 
          resp.forEach((pet)=> {
            this.setState({
              pets: [...this.state.pets, pet],
              filters:{
                ...this.state.filters
               }
            })
          })
          ) 
        break;

      default:
          fetch(`/api/pets?type=${this.state.filters.type}`)
          .then((resp)=> resp.json() )
          .then(resp => 
            resp.forEach((pet)=> {
              this.setState({
                pets: [...this.state.pets, pet],
                filters:{
                  ...this.state.filters
                 }
              })
            })
            )
        break;
    }
  }


  patchPet = (id) => {
    fetch()
  }

  onAdoptPet= (id) => {

     this.state.pets.forEach((pet)=> {
        if (pet.id === id)
        pet.isAdopted = true 
        this.setState({
          ...this.state
        })
      
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
