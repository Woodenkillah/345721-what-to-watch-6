import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from './rating-star';

const ReviewForm = ({handleReviewRating, handleReviewText, handleFormSubmit, formState}) => {

  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const defaultCheckedStar = formState.rating;

  const ratingStarsList = stars.map((starNumber) => {
    return (
      <RatingStar
        starNumber={starNumber}
        key={`str-${starNumber}`}
        handleReviewRating={handleReviewRating}
        defaultCheckedStar={defaultCheckedStar}
      />
    );
  });

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit} >
        <div className="rating">
          <div className="rating__stars" >
            {ratingStarsList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            minLength={50}
            maxLength={400}
            onChange={handleReviewText}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!formState.text}
            >Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  handleReviewRating: PropTypes.func.isRequired,
  handleReviewText: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};

export default ReviewForm;