import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFilmRequest, getFilm, getIsLoading } from '../../ducks/films';
import ShowPerson from '../ShowPerson'

class ShowPage extends PureComponent {

  
  componentWillMount() {
    const { getFilmRequest } = this.props;
    const { id } = this.props.match.params;
		getFilmRequest(id);
	}

  render () {
    const { film, film:{ name, image, summary }, isLoading } = this.props;
    return (
      !isLoading &&
      <div>
        <p>{name}</p>
				{image && 
					<img
						src={image.medium}
						alt={name}
					/>
				}
        
        <div dangerouslySetInnerHTML={{__html: summary}}></div>
        <div>
          {film.id && <ShowPerson persons={film._embedded.cast} />}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  film: getFilm(state),
  isLoading: getIsLoading(state),
})

const mapDispatchToProps = {
  getFilmRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
