import React, { Component } from 'react'


//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFilms, getFilmsRequest, getIsLoading, getError } from '../../ducks/films'

class Search extends Component {

	state = {
		value: ''
	}

	handleChange = (e) => {
		
		this.setState({
			value: e.target.value
		})

		

	}


	handleClick = () => {
		const { getFilmsRequest } = this.props

		getFilmsRequest(this.state.value)
		
	}

	render(){
		const { handleChange, handleClick } =  this
		const { value } = this.state
		const { isLoading, error } = this.props

		if (isLoading) return <p>Данные загружаются...</p>;
		if (error) return <p>Произошла сетевая ошибка</p>;

		return(
			<div className="sc-bxivhb kayeln">
				<input value={value} onChange={handleChange} placeholder="Название сериала" />
				<button onClick={handleClick} >Найти</button>
			</div>
		)
	}
}



function putStateToProps(state){
  return {
		films: getFilms(state),
		isLoading: getIsLoading(state),
		error: getError(state),
  }
}

const mapDispatchToProps = {
	getFilmsRequest
}

export default connect(putStateToProps,mapDispatchToProps)(Search)