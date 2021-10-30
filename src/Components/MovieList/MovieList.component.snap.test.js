import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './MovieList.component';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

test('Render Movie List Component', () => {
  const component = renderer.create(
    <MovieList />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
