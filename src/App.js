import React, { Component } from 'react'

class App extends Component {

    state = {
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then((data) => this.setState({people: data.people}) )
    }

    render() {
        return(
        <div> 
                {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
        </div>
        )
    }

}

export default App