import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchSerialsRequest } from 'actions/search';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.serialName = React.createRef();
  }

  handleClick = () => {
    const { value } = this.serialName.current;
    const { searchSerialsRequest } = this.props;

    searchSerialsRequest(value);
  };

  render() {
    const { isLoading, serials, } = this.props;

    return (
      <div>
        <input placeholder="название сериала" ref={this.serialName} />
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
