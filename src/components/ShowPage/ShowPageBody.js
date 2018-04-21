import React from 'react';
import ShowPageImage from './ShowPageImage';
import PropTypes from 'prop-types';

const showPageBody = ({ name = '', image = {}, summary = '', _embedded = { cast: [] } }) => (
  <div>
    <ShowPageImage {...{ name, image }} />
    <div>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
    <div className="t-person">
      {_embedded.cast.map(({ person }) => <ShowPageImage key={person.name} {...person} />)}
    </div>
  </div>
);

showPageBody.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  summary: PropTypes.string,
  _embedded: PropTypes.objectOf(PropTypes.array)
}

export default showPageBody;
