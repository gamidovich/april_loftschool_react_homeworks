import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmRequest, getFilm } from '../../ducks/films';

class ShowPage extends Component {
  componentDidMount() {
    const {
      getFilmRequest,
      match: {
        params: { id },
      },
    } = this.props;
		getFilmRequest(id);
		
	}
	

	renderPerson = () => {
		//const persons = this.props._embedded.cast

		return 12;
		// return persons.map(({ persons:{name, image} }) => 
		// 	<div className="t-person">
		// 		<p>{name}</p>
		// 		{image && <img src={image.medium} alt={name} />}
		// 	</div>)
	}

  renderFilm = () => {
		const { renderPerson } = this
		const { film:{ name, image, summary } } = this.props;

    return (
      <div>
        <p>{name}</p>
				{image && 
					<img
						src={image.medium}
						alt={name}
					/>
				}
        
        <div dangerouslySetInnerHTML={{__html: summary}}></div>
        <div className="sc-ifAKCX dHcTOt">
					{renderPerson()}
        </div>
      </div>
    );
  };

  render() {
    const { renderFilm } = this;
		console.log('multirender')
    return renderFilm();
  }
}

function putStateToProps(state) {
  return {
    film: getFilm(state),
  };
}

const mapDispatchToProps = {
  getFilmRequest,
};

export default connect(putStateToProps, mapDispatchToProps)(ShowPage);
