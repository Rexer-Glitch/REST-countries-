import { useContext, useState } from "react";
import { Container, Icon, Input } from "../styles/component.searchbar";
import dataContext from "../utils/dataContext";
import { ACTIONS } from "../utils/dataReducer";

function SearchBar({ placeholder = "Search for a country..", ...rest }) {
  const {
    state: { darkTheme },
    dispatch,
  } = useContext(dataContext);

  const [query, setQuery] = useState("");


  return (
    <Container theme={darkTheme ? "dark" : "light"} {...rest}>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        onClick={()=> dispatch({ type: ACTIONS.SEARCH_BY_NAME, payload: {query} })}
      >
        <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
      </Icon>

      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        tabIndex={2}
      />
    </Container>
  );
}

export default SearchBar;
