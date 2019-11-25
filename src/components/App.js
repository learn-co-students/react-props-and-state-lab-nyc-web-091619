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

    onFindPetsClick = () => {
      let url  = '/api/pets'
      let queryStr = this.state.filters.type
      if(queryStr === 'cat'){
        url = '/api/pets?type=cat';
      } else if (queryStr === 'micropig'){
        url = '/api/pets?type=micropig';
      } else if (queryStr === 'dog' ){
        url = '/api/pets?type=dog';
      } else {
        url = '/api/pets'
      }
  

      fetch(url)
      .then(response => response.json())
      .then(data => {this.setState({pets: data})  
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
    
   //  onChangeType = (e)=> {
  //   console.log(this.state)
   //  this.setState({type: e.target.value })
   //  e.persist();  
  //}
  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onChangeType = {this.onChangeType}
                      onFindPetsClick  = {this.onFindPetsClick}            
              />
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
