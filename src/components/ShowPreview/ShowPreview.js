import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShowPreview extends Component {

  render() {

    const { id = 0, name = '', image = {}, summary = '' } = this.props
    return(
      <div className='t-preview'>
        <div>
          <Link className="t-link" to={`/shows/${id}`}>
            {name}
          </Link>
          {image && <img src={image.medium} alt={name}/>}
        </div>
        <div>
          <p dangerouslySetInnerHTML={{__html: summary}} />
        </div>
      </div>
    )
  }
}

export default ShowPreview
