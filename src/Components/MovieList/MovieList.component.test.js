import { _loadMoreMovies } from './MovieList.component';

import { getMovieByTitle } from '../../Services/services';
import { merge } from '../../redux/Reducer/reducers';

jest
  .mock('../../Services/services', () => ({
    getMovieByTitle: jest.fn()
  }))
  .mock('../../redux/Reducer/reducers', () => ({
    merge: jest.fn()
  }));

describe('MovieList Component', () => {
  describe('_loadMoreMovies', () => {
    it('should dispatch merge array when loading extra movies', async () => {
      const dispatch = jest.fn();
      getMovieByTitle.mockImplementationOnce(() => Promise.resolve({
        Response: 'True',
        Search: ['movie 1', 'movie 2']
      }));

      await _loadMoreMovies(dispatch, 1, () => {
      }, 'batman');

      expect(dispatch).toBeCalled();
      expect(merge).toBeCalled();
    });

    it('should not dispatch when api response is invalid', async () => {
      const dispatch = jest.fn();
      getMovieByTitle.mockImplementationOnce(() => Promise.resolve({
        Response: 'False'
      }));

      await _loadMoreMovies(dispatch, 1, () => {
      }, 'batman');

      expect(dispatch).not.toBeCalled();
    });
  });

});
