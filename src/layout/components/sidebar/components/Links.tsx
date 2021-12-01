import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
};

const Links: React.FC<Props> = (props) => {
  return (
    <Link
      to={`/${props.name.toLowerCase()}`}
      className="text-md text-gray-700"
    >
      {props.name}
    </Link>
  );
};

export default Links;