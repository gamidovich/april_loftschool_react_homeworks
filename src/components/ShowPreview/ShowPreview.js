import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from '../Styled';

const showPreview = ({ image = {}, name = '', id = 0, summary = '' }) => {
  return (
    <Card className="t-preview">
      <CardHeader>
        <Link to={`/shows/${id}`} className="t-link">
          <h3>{name}</h3>
        </Link>
        {image && <img src={image.medium} alt={name} />}
      </CardHeader>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </Card>
  );
};

export default showPreview;
