
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.cntSeaech}>
      <p className={css.text}>Search by name</p>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder='...'
      />
    </div>
  );
};

export default SearchBox;