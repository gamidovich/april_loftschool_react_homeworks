import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchSerialsRequest } from 'actions/search';
import ShowPreview from '../ShowPreview';
import { SearchRow, CardList } from '../Styled';

class Search extends PureComponent {
  state = {
    query: '',
  };

  handleClick = () => {
    const { searchSerialsRequest } = this.props;
    const { query } = this.state;

    searchSerialsRequest(query);
  };

  handleEnter = event => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  handleChange = ev => {
    const { value } = ev.target;
    this.setState(state => ({ ...state, query: value }));
  };

  render() {
    const { isLoading, serials } = this.props;
    const { query } = this.state;

    return (
      <div>
        <SearchRow>
          <input
            placeholder="название сериала"
            value={query}
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
          />
          <button onClick={this.handleClick}>Найти</button>
        </SearchRow>
        <div className="t-search-result">
          {isLoading ? (
            <p>Данные загружаются</p>
          ) : serials.length ? (
            <CardList>
              {serials.map(serial => <ShowPreview {...serial} key={serial.id} />)}
            </CardList>
          ) : (
            <p>Список пуст</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  isLoading: search.isLoading,
  serials: search.serials,
});
const mapDispatchToProps = { searchSerialsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
