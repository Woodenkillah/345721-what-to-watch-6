import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import ReviewItem from './review-item';
import {mockFullStoreData, mockNumValue, mockStringValue} from '../../test-mock';

const mockStore = configureStore({});

it(`Should render correctly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockFullStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ReviewItem
            rating={mockNumValue}
            comment={mockStringValue}
            date={mockStringValue}
            user={mockStringValue}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
