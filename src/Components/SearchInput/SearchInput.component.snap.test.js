import React from 'react';
import renderer from 'react-test-renderer';

import SearchInput from './SearchInput.component';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));


test('Render Search Input Component', () => {
  const component = renderer.create(
    <SearchInput />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
