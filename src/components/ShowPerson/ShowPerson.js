import React, {Component} from 'react'

class Person extends Component {

	
	render(){
		const { persons } = this.props

		return persons.map(( {person: {name, image, id}, character:{id: characterId} } ) => 
			<div className="t-person" key={id + characterId}>
				<p>{name}</p>
				{image && <img src={image.medium} alt={name} />}
			</div>)
	}

	
}

export default Person