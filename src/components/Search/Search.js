import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSeriesRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
  state = {
    searchString: ''
  }

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ searchString: value });
  }

  onClickHandler = () => {
    const value = this.state.searchString;
    if (value) {
      this.props.getSeriesRequest(value);
    }
  }

  render () {
    const { searchString } = this.state;
    const { series, isLoading, error } = this.props;

    let content = null;
    if (isLoading) {
      content = <p>Выполняется поиск</p>;
    } else if (error) {
      content = <p>Ошибка обращения к серверу</p>;
    } else {
      content = series.map(item =>
        <ShowPreview key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          summary={item.summary}
        />
      );
    }

    return (
      <div className="search">
        <div>
          <input type="text" value={searchString} onChange={this.onChangeHandler} placeholder="Название сериала"/>
          <button onClick={this.onClickHandler}>Найти</button>
        </div>
        <div className="t-search-result">
          {content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search: { series, isLoading, error } }) => ({
  series,
  isLoading,
  error
});

const mapDispatchToProps = {
  getSeriesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
