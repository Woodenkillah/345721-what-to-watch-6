import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import RatingStar from './rating-star';
import {mockFullStoreData, mockNumValue} from '../../test-mock';

const mockStore = configureStore({});

it(`Should render correctly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockFullStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <RatingStar
            starNumber={mockNumValue}
            onReviewRating={jest.fn()}
            defaultCheckedStar={mockNumValue}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
