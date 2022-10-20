import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutPage from "./pages/Layout";
import CountryPage from "./pages/Country";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";

import dataContext from "./utils/dataContext";
import { reducer } from "./utils/dataReducer";

import { useReducer } from "react";

import { Detector } from "react-detect-offline";

const initialState = {
  darkTheme: true,
  filteredCountries: [],
  countries: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              index
              element={
                <Detector
                  render={({ online }) => <HomePage online={online} />}
                />
              }
            />
            <Route path="/countries/:countryName" element={<CountryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
