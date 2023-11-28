import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <div>
      <label >
        Find contacts by name
      </label>
        <input
          type="text"
          name="filter"
          title="Enter search name"
          onChange={onChange}
          value={filter}
        />
     
    </div>
    )
}


  
  export default Filter;