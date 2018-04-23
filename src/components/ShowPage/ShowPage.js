import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSerialRequest } from 'actions/show';
import { PersonList, Person } from '../Styled';

class ShowPage extends PureComponent {
  componentWillMount() {
    const { getSerialRequest } = this.props;
    const { id } = this.props.match.params;

    getSerialRequest(id);
  }

  render() {
    const { isLoading, serial } = this.props;
    return isLoading ? (
      <p>Данные загружаются</p>
    ) : (
      <div>
        <div>
          <p>{serial.name}</p>
          {serial.image && <img src={serial.image.medium} alt={serial.name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: serial.summary }} />
        <PersonList>
          {serial._embedded &&
            serial._embedded.cast.map(({ person }, idx) => (
              <Person className="t-person" key={idx}>
                <p>{person.name}</p>
                {person.image && <img src={person.image.medium} alt={person.name} />}
              </Person>
            ))}
        </PersonList>
      </div>
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
