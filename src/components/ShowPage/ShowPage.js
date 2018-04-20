import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSerialRequest } from 'actions/show';
import ShowPageBody from './ShowPageBody'

class ShowPage extends PureComponent {
  componentWillMount() {
    const { getSerialRequest } = this.props;
    const { id } = this.props.match.params;

    getSerialRequest(id);
  }

  render() {
    const { isLoading, serial } = this.props;

    return (
      <Fragment>{isLoading ? <p>Данные загружаются</p> : <ShowPageBody {...serial} />}</Fragment>
    );
  }
}

const mapStateToProps = ({ shows }) => ({
  serial: shows.serial,
  isLoading: shows.isLoading,
});

const mapDispatchToProps = {
  getSerialRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
