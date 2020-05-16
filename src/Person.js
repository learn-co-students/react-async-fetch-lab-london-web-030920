import React from 'react'

class Person extends React.Component{
    render(){
        return (
          <div>  {this.props.person.showBack  ?
            (<p>Help!</p>
             ):(
                <p onClick={ () => this.props.clicked(this.props.person)}> {this.props.person.name}</p> )}
                </div>
        )
    }
}

export default Person