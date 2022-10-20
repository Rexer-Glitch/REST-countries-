import {
  Container,
  InputsContainer,
  CountriesContainer,
  LoaderContainer,
  Loader,
  LoaderText,
  NoMatch
} from "../styles/pages.home";

import { Helmet } from "react-helmet";

import SearchBar from "../components/SearchBar";
import Select from "../components/SelectTextbox";
import Card from "../components/CountryCard";

import { ACTIONS } from "../utils/dataReducer";
import dataContext from "../utils/dataContext";
import { useContext, useEffect, useState } from "react";

function Home({online}) {
  const [loader, setLoader] = useState(true);
  const {
    state: { darkTheme: theme, countries, filteredCountries },
    dispatch,
  } = useContext(dataContext);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.status === 200) {
          const countries = await response.json();
          dispatch({ type: ACTIONS.SET_COUNTRIES, payload: { countries } });
          dispatch({ type: ACTIONS.FILTER_BY_REGION, payload: { region: "All"} });
          return;
        }

        //notify
      } catch (err) {
        console.log(err);

        //notify
      } finally {
        online && setLoader(false);
        document.body.style.overflow = "auto";
      }
    };

    document.body.style.overflow = "hidden";
    if (countries.length > 0) {
      setLoader(false);
      dispatch({ type: ACTIONS.FILTER_BY_REGION, payload: { region: "All"} });
      document.body.style.overflow = "auto";
      return;
    }

    getCountries();
  }, [countries, dispatch, online]);



  return (
    <>
      <Helmet>
        <title>Where in the world?</title>
      </Helmet>
      <Container theme={theme ? "dark" : "light"}>
        <InputsContainer>
          <SearchBar />

          <Select />
        </InputsContainer>

        {loader ? (
          <LoaderContainer>
            <Loader src={"images/loader.gif"} alt="loader" />
            <LoaderText>Drink some 🍵!{!online && <p>You are currently offline</p>}</LoaderText>
          </LoaderContainer>
        ) : (
          <CountriesContainer>
            {countries && filteredCountries && filteredCountries.length > 0
              ? filteredCountries.map(
                  ({ name, capital, population, flags, region }, index) => (
                    <Card
                      key={name.common}
                      name={name.common}
                      population={population}
                      region={region}
                      capital={capital}
                      imageURL={flags.png}
                      tabIndex={index + 4}
                    />
                  )
                )
              : <NoMatch>Ops, no country matching that query</NoMatch>}
          </CountriesContainer>
        )}
      </Container>
    </>
  );
}

export default Home;
