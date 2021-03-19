import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import {fetchFilmsList} from './redux/film/api-actions';
import {fetchPromoFilm} from './redux/promo/api-actions';
import {checkAuth} from './redux/auth/api-actions';

store.dispatch(fetchFilmsList());
store.dispatch(fetchPromoFilm());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
