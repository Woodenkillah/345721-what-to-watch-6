import {ActionCreator} from './actions';
import {ActionCreator as MiddlewaresActionCreator} from '../middlewares/actions';
import {fetchFavoritesList} from '../favorites/api-actions';
import {ActionCreator as FavoritesActonCreator} from '../favorites/actions';
import {AuthStatuses} from '../../constants';
import {dataToUserInfoAdapter} from '../../services/adapters';
import {AppRoutes, ApiRoutes, HttpStatusCodes, AuthErrorTypes} from '../../constants';

export const login = (userData) => (dispatch, _getState, api) => {
  return api.post(ApiRoutes.LOGIN, userData)
    .then(({data}) => {
      dispatch(ActionCreator.setAuth(AuthStatuses.AUTH));
      dispatch(ActionCreator.setUserData(dataToUserInfoAdapter(data)));
      dispatch(fetchFavoritesList());
      dispatch(MiddlewaresActionCreator.redirectToRoute(AppRoutes.ROOT));
      dispatch(ActionCreator.setErrorType(null));
    })
    .catch(({response}) => {
      if (response.status === HttpStatusCodes.UNAUTHORIZED) {
        dispatch(ActionCreator.setErrorType(AuthErrorTypes.UNAUTHORIZED));
      } else if (response.status === HttpStatusCodes.BAD_REQUEST) {
        dispatch(ActionCreator.setErrorType(AuthErrorTypes.BAD_REQUEST));
      }
    });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setAuth(AuthStatuses.AUTH));
      dispatch(ActionCreator.setUserData(dataToUserInfoAdapter(data)));
      dispatch(fetchFavoritesList());
    })
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.LOGOUT)
  .then(() => {
    dispatch(ActionCreator.setAuth(AuthStatuses.NO_AUTH));
    dispatch(ActionCreator.setUserData({email: null, avatar: null}));
    dispatch(FavoritesActonCreator.clearFavorites());
    dispatch(MiddlewaresActionCreator.redirectToRoute(AppRoutes.ROOT));
  })
  .catch(() => {});
};
