import React, { Component } from 'react';

import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview'
import { getFilms, getFilmsRequest, getIsLoading, getError } from '../../ducks/films';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  };

  handleClick = () => {
    const { getFilmsRequest } = this.props;
    const { value } = this.state

    getFilmsRequest(value);
  };

  render() {
    const { handleChange, handleClick } = this;
    const { value } = this.state;
    const { isLoading, error, films } = this.props;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <input value={value} onChange={handleChange} placeholder="Название сериала" />
        <button onClick={handleClick}>Найти</button>
        <div className="t-search-result">
          {isLoading ?
            <p>Данные загружаются...</p>
            :
            films.map(item => <ShowPreview {...item} key={item.id}/>)
          }
        </div>
      </div>
    );
  }
}

function putStateToProps(state) {
  return {
    films: getFilms(state),
    isLoading: getIsLoading(state),
    error: getError(state),
  };
}

const mapDispatchToProps = {
  getFilmsRequest,
};

export default connect(putStateToProps, mapDispatchToProps)(Search);
