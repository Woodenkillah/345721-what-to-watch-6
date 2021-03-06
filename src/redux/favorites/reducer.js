import {ActionType} from './action-types.js';

const initialState = {
  favoritesData: [],
  isLoading: false,
  isLoadingError: false
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favoritesData: action.payload,
      };

    case ActionType.CLEAR_FAVORITES:
      return {
        ...state,
        favoritesData: action.payload,
      };

    case ActionType.ADD_FAVORITE:
      return {
        ...state,
        favoritesData: [...state.favoritesData, action.payload]
      };

    case ActionType.REMOVE_FAVORITE:
      return {
        ...state,
        favoritesData: state.favoritesData.filter(({id}) => id !== action.payload.id)
      };

    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ActionType.SET_IS_LOADING_ERROR:
      return {
        ...state,
        isLoadingError: action.payload,
      };

    default:
      return state;
  }
};

export {favoritesReducer, initialState};
