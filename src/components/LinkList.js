import React from 'react';
import { Link } from 'react-router-dom';

function LinkList({ goto, children, className }) {
  return (
    <li>
      <Link to={goto} className={className}>
        {children}
      </Link>
    </li>
  );
}

export default LinkList;
