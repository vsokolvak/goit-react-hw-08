import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { filtersChangeName } from "../../redux/filtersSlice";

function SearchBox () {
  
  const value = useSelector(state => state.filters.name)

  const dispatch = useDispatch()

  const changeFilterName = (filterText) => {
    dispatch(filtersChangeName(filterText));
  }

  return (
    <div className={style.wrapper}>
      <p className={style.title}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(el) => changeFilterName(el.target.value)}
      />
    </div>
  );
}

export default SearchBox;