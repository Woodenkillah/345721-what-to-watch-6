import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmCard from '../film-card/film-card';

const FilmsList = ({filmsListData}) => {

  const [activeFilmId, setActiveFilmId] = React.useState(null);
  const handleFilmHover = (filmId) => () => setActiveFilmId(filmId);

  if (!filmsListData.length) {
    return <h2>The were no films added yet.</h2>;
  }

  return filmsListData.map((item, index) => {
    return (
      <FilmCard
        name={item.name}
        posterImage={item.posterImage}
        id={item.id}
        src={item.videoLink}
        key={item.id + index}
        handleFilmHover={handleFilmHover}
        activeFilmId={activeFilmId}
      />
    );
  });

};

FilmsList.propTypes = {
  generalFilmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

export default FilmsList;