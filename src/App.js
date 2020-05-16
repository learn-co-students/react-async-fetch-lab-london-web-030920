// create your App component here

import React from 'react'

import Person from './Person'

class App extends React.Component{

    state = {
        peopleInSpace: []
    }

componentDidMount(){
    fetch( `http://api.open-notify.org/astros.json`)
    .then(response => response.json())
    .then(data => {
        this.setState({peopleInSpace: data.people,
            showBack: false
        })
    })
}

isClicked = (astronaut) => {
   let filteredPersons =  this.state.peopleInSpace.filter(
       person => person.name !== astronaut.name
   )
    // this.state.showBack = !this.state.showBack  ======> THIS WILL CHANGE THE STATE OF THIS SHOWBACK AND MAKE ALL OF THEM SAY HELP ON ONE CLICK. HOWEVER WOULD NEED TO CHANGE TERNARY IN PERSON TO READ THIS.PROPS.SHOWBACK

    astronaut.showBack = !this.state.showBack // ===>>> WILL CREATE A NEW SETBACK STATE FOR EACH ASTRONAUT WHO WILL THEN HAVE ONLY THEIR NAME CHANGED TO HELP.
this.setState({
    peopleInSpace: [...filteredPersons, astronaut]
})

   console.log(this.state.peopleInSpace)

    
}

    render(){
        return (
            <div> {this.state.peopleInSpace.map(person => <Person  person={person} clicked={this.isClicked}   showBack={this.state.showBack}/>)} </div>
        )
    }

}

export default App