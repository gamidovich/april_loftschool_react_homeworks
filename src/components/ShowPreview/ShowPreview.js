import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilms, getFilmsSuccess } from '../../ducks/films';
import { Link } from 'react-router-dom'

class ShowPreview extends Component {


  renderFilms = () => {
    const { films } = this.props;
    return films.map(({ id, name, image, summary }) => (
      <div key={id}>
        <div>
          <Link className="t-link" to={`/shows/${id}`}>
            <h3>{name}</h3>
          </Link>
          {image && <img src={image.medium} alt={name} />}
        </div>
        <div>
          <p />
        </div>
      </div>
    ));
  };

  render() {
    const { renderFilms } = this;
    return renderFilms();
  }
}

function putStateToProps(state) {
  return {
    films: getFilms(state),
  };
}

const mapDispatchToProps = {
  getFilmsSuccess,
};

export default connect(putStateToProps, mapDispatchToProps)(ShowPreview);
