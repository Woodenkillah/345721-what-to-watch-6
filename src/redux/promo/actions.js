import {ActionType} from './action-types';

export const ActionCreator = {
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo
  }),

  setIsLoading: (status) => ({
    type: ActionType.SET_IS_LOADING,
    payload: status
  }),

  setIsLoadingError: (status) => ({
    type: ActionType.SET_IS_LOADING_ERROR,
    payload: status
  })
};
