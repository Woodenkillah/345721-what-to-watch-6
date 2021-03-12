import React from 'react';
import {useHistory} from 'react-router-dom';
import CardContent from './card-content';
import PropTypes from 'prop-types';

let previewVideoTimeout = null;

const FilmCard = ({id, name, posterImage, src, onFilmHover, activeFilmId}) => {

  const history = useHistory();

  const [isHovered, setIsHovered] = React.useState(false);

  const showPreviewVideo = () => () => {
    previewVideoTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };

  const cancelPreviewVideo = () => {
    setIsHovered(false);
    clearTimeout(previewVideoTimeout);
  };

  const handleFilmCardOpener = () => {
    clearTimeout(previewVideoTimeout);
    history.push({pathname: `/films/${id}`});
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onFilmHover(id)}
      onMouseOver={showPreviewVideo()}
      onMouseOut={cancelPreviewVideo}
      onClick={handleFilmCardOpener}
    >
      <CardContent
        isHovered={isHovered}
        activeFilmId={activeFilmId}
        id={id}
        name={name}
        posterImage={posterImage}
        src={src}
      />
    </article>
  );

};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onFilmHover: PropTypes.func.isRequired,
  activeFilmId: PropTypes.number
};

export default FilmCard;
