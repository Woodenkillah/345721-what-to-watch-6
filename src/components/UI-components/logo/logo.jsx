import React from 'react';
import {NavLink} from 'react-router-dom';

const Logo = () => {

  return (
    <div className="logo">
      <NavLink exact to={`/`} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </NavLink>
    </div>
  );
};

export default React.memo(Logo);
