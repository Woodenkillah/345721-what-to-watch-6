import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GenreItem = ({title, activeGenre, changeGenre}) => {

  const onChangeGenre = (genre) => () => changeGenre(genre);

  return (
    <li className={classNames(`catalog__genres-item`, {"catalog__genres-item--active": activeGenre === title})} onClick={onChangeGenre(title)}>
      <a href="#" className="catalog__genres-link">{title}</a>
    </li>
  );
};

GenreItem.propTypes = {
  title: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired
};

export default GenreItem;