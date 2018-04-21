import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchSerialsRequest } from 'actions/search';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
  state = {
    query: ''
  }

  handleClick = () => {
    const { searchSerialsRequest } = this.props;
    const { query } = this.state

    searchSerialsRequest(query);
  };

  handleChange = (ev) => {
    const { value } = ev.target
    this.setState(state => ({...state, query: value}))
  }

  render() {
    const { isLoading, serials } = this.props;
    const { query } = this.state;

    return (
      <div>
        <input placeholder="название сериала" value={query} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Найти</button>
        <div className="t-search-result">
          {isLoading ? (
            <p>Данные загружаются</p>
          ) : (
            serials.map(serial => <ShowPreview {...serial} key={serial.name} />)
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
