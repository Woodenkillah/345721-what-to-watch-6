import {ActionCreator} from './actions';
import {dataToReviewItemAdapter} from '../../services/adapters';
import {ActionCreator as MiddlewaresActionCreator} from '../middlewares/actions';
import {ApiRoutes} from '../../constants';

export const fetchReviewsList = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoutes.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(dataToReviewItemAdapter(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoadingError(true));
    })
    .finally(() => {
      dispatch(ActionCreator.setIsLoading(false));
    });
};

export const uploadUserReview = ({id, rating, comment}) => (dispatch, _getState, api) => {
  return api.post(`${ApiRoutes.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(MiddlewaresActionCreator.redirectToRoute(`${ApiRoutes.FILMS}/${id}`));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoadingError(true));
    });
};
