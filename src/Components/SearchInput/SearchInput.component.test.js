import { _mapResultToOptions, _onPressSearch, _onSearch, _onSelect } from './SearchInput.component';
import { getMovieByTitle } from '../../Services/services';
import { set, setKeyword } from '../../redux/Reducer/reducers';

jest
  .mock('../../Services/services', () => ({
    getMovieByTitle: jest.fn()
  }))
  .mock('../../redux/Reducer/reducers', () => ({
    set: jest.fn(),
    setKeyword: jest.fn()
  }));

describe('Search Input Component', () => {
  describe('_mapResultToOptions', () => {
    it('should map full movie data to option type', async () => {
      const movies = [
        {
          Title: 'Batman',
          imdbID: '100000',
          Year: '2002'
        },
        {
          Title: 'Fast and Furious',
          imdbID: '100001',
          Year: '2008'
        }
      ];
      const expectedResult = [
        {
          value: 'Batman',
          id: '100000'
        },
        {
          value: 'Fast and Furious',
          id: '100001'
        }
      ];

      const result = _mapResultToOptions(movies);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('_onSearch', () => {
    it('should set result state when data successfully fetched', async () => {
      const mockedRespose = {
        Response: 'True',
        Search: [
          {
            Title: 'Batman 2',
            imdbID: '100000',
            Year: '2002'
          },
          {
            Title: 'Batman 7',
            imdbID: '100001',
            Year: '2008'
          }
        ]
      };
      const resultSetter = jest.fn();
      const keywordSetter = jest.fn();

      getMovieByTitle.mockImplementationOnce(() => Promise.resolve(mockedRespose));

      await _onSearch('Batman', resultSetter, keywordSetter);

      expect(resultSetter).toBeCalledWith(mockedRespose.Search);
      expect(keywordSetter).toBeCalledWith('Batman');
    });

    it('should not call query if keyword is empty', async () => {
      const resultSetter = jest.fn();
      const keywordSetter = jest.fn();

      await _onSearch('', resultSetter, keywordSetter);

      expect(getMovieByTitle).not.toBeCalled();
      expect(resultSetter).toBeCalledWith([]);
      expect(keywordSetter).toBeCalledWith('');
    });
  });

  describe('_onSelect', () => {
    it('should navigate to correct path', () => {
      const option = {
        id: 12345
      };
      const history = {
        push: jest.fn()
      };

      _onSelect(option, history);

      expect(history.push).toBeCalledWith(`/detail/${option.id}`);
    });
  });

  describe('_onPressSearch', () => {
    it('should set redux state when pressing search', () => {
      const result = [
        {
          Title: 'Batman',
          imdbID: '100000',
          Year: '2002'
        },
        {
          Title: 'Fast and Furious',
          imdbID: '100001',
          Year: '2008'
        }
      ];

      const keyword = 'batman';
      const dispatch = jest.fn();

      _onPressSearch(result, keyword, dispatch);

      expect(dispatch).toBeCalled();
      expect(set).toBeCalledWith(result);
      expect(setKeyword).toBeCalledWith(keyword);
    });
  });
});
