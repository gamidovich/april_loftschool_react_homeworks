import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ShowPreview extends PureComponent {

  render () {
    const { id, image, name, summary } = this.props;

    return (
      <div className="t-preview">
        <Link className="t-link" to={`/shows/${id}`}>
          <h3>{name}</h3>
        </Link>
        {image && <img src={image.medium} alt={name}/>}
        <div dangerouslySetInnerHTML={{__html: summary}} />
      </div>
    );
  }
}

export default ShowPreview;
