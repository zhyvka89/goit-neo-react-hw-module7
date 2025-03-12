import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { filter_wrapper, filter_input } from "./SearchBox.module.css";

function SearchBox() {
  const filterId = useId();
  const dispatch = useDispatch();

  function searchContact(value) {
    dispatch(changeFilter(value));
  }

  return (
    <div className={filter_wrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={filter_input}
        type="text"
        name="filter"
        id={filterId}
        onChange={(e) => searchContact(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
