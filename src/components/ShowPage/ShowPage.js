import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getShowRequest } from '../../actions/show';

class ShowPage extends PureComponent {

  componentDidMount () {
    const id = this.props.match.params.id;
    this.props.getShowRequest(id);
  }

  render () {
    const { entity, isLoading, error } = this.props;

    let content = null;
    if (isLoading) {
      content = <p>Выполняется запрос</p>
    } else if (error) {
      content = <p>Ошибка обращения к серверу</p>;
    } else if (entity) {
      const { id, image, name, summary } = entity;
      const persons = entity._embedded.cast;

      content = (
        <div data-id={id} className="show">
          <p>{name}</p>
          {image && <img src={image.medium} alt={name}/>}
          <div dangerouslySetInnerHTML={{__html: summary}} />
          <div className="t-person-list">
            {persons.map(({ person: item }) =>
              <div key={item.id} className="t-person">
                <p>{item.name}</p>
                <img src={item.image.medium} alt={item.name}/>
              </div>
            )}
          </div>
        </div>
      );
    }

    return content;
  }
}

const mapStateToProps = ({ shows: { entity, isLoading, error } }) => ({
  entity,
  isLoading,
  error
});

const mapDispatchToProps = {
  getShowRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
