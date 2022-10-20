export const ACTIONS = {
  TOGGLE_THEME: "TOGGLE_THEME",
  FILTER_BY_REGION: "FILTER_BY_REGION",
  SET_COUNTRIES: "SET_COUNTRIES",
  SEARCH_BY_NAME: "SEARCH_BY_NAME",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME: {
      return { ...state, darkTheme: !state.darkTheme };
    }
    case ACTIONS.FILTER_BY_REGION: {
      const filteredCountries = state.countries.filter(
        (country) => (country.region === action.payload.region) || action.payload.region === "All"
      );
      return { ...state, filteredCountries };
    }
    case ACTIONS.SET_COUNTRIES: {
      let countries = action.payload.countries;
      countries.sort(({ name: { common: a } }, { name: { common: b } }) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      return { ...state, countries };
    }
    case ACTIONS.SEARCH_BY_NAME: {
      const query = action.payload.query;
      const filteredCountries = state.countries.filter(({ name }) =>
        name.official.toLowerCase().includes(query.toLowerCase())
      );
      return { ...state, filteredCountries };
    }
    default: {
      return state;
    }
  }
};
