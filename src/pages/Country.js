import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  InfoContainer,
  FlagContainer,
  DetailsContainer,
  BorderCountries,
  BorderCountry,
  BackButton,
  Icon,
  Flag,
  Name,
  NativeName,
  Population,
  Region,
  SubRegion,
  Capital,
  TopLevelDomain,
  Currencies,
  Languages,
} from "../styles/pages.country";

import { Helmet } from "react-helmet";

import dataContext from "../utils/dataContext";

function Country() {
  const {
    state: { countries, darkTheme },
  } = useContext(dataContext);
  const [country, setCountry] = useState(null);
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = countries.find(
      (country) =>
        country.name.common.toLowerCase() === countryName.toLowerCase()
    );

    if (!data) {
      navigate("/notFound");
      return;
    }

    if (countries.length > 0) {
      setCountry(data);
      return;
    }
    navigate("/");
  }, [countries, setCountry, countryName, navigate]);

  const getCurrencies = (obj) => {
    if (!obj) return [];

    const currencies = [];

    Object.values(obj).forEach((cur) => {
      currencies.push(cur.name);
    });

    return currencies.join(", ");
  };

  const getNativeNames = (obj) => {
    if (typeof obj !== "object") return obj;
    const names = new Set();

    Object.values(obj).forEach((name) => {
      names.add(name.common);
    });

    return Array.from(names)[0];
  };

  const getLanguages = (obj) => {
    if (!obj) return "";
    return Object.values(obj).join(", ");
  };

  const getBorderingCountries = (cca3s) => {
    if (!cca3s) return [];

    const borderingCountries = [];

    cca3s.forEach((cca3) => {
      const correspondingCountryName = countries.find(
        (country) => country.cca3 === cca3
      );
      if (correspondingCountryName)
        borderingCountries.push(correspondingCountryName.name.common);
    });

    return borderingCountries;
  };

  return (
    <>
      <Helmet>
        <title>{countryName}</title>
      </Helmet>
      <Container theme={darkTheme ? "dark" : "light"}>
        {country && (
          <>
            <BackButton to="/">
              <Icon src="/images/back.png" alt="back icon" />
              Back
            </BackButton>

            <InfoContainer>
              <FlagContainer>
                <Flag
                  src={country.flags.png}
                  alt={`${country.name.common}'s flag`}
                />
              </FlagContainer>

              <DetailsContainer>
                <div>
                  <div>
                    <Name>{country.name.common}</Name>
                    <NativeName>
                      <b>Native Name: </b>
                      {getNativeNames(country.name.nativeName)}
                    </NativeName>
                    <Population>
                      <b>Population: </b>
                      {country.population.toLocaleString()}
                    </Population>
                    <Region>
                      <b>Region: </b>
                      {country.region}
                    </Region>
                    <SubRegion>
                      <b>Sub Region: </b>
                      {country.subregion}
                    </SubRegion>
                    <Capital>
                      <b>Capital: </b>
                      {country.capital && country.capital.join(", ")}
                    </Capital>
                  </div>
                  <div>
                    <TopLevelDomain>
                      <b>Top Level Domain: </b>
                      {country.tld && country.tld.join(", ")}
                    </TopLevelDomain>
                    <Currencies>
                      <b>Currencies: </b>
                      {getCurrencies(country.currencies)}
                    </Currencies>
                    <Languages>
                      <b>Languages: </b>
                      {getLanguages(country.languages)}
                    </Languages>
                  </div>
                </div>

                <h3 style={{ marginTop: "50px" }}>
                  <b>Border Countries:</b>
                </h3>
                <BorderCountries>
                  {getBorderingCountries(country.borders).map((border) => (
                    <BorderCountry key={border} to={`/countries/${border}`}>
                      {border}
                    </BorderCountry>
                  ))}
                </BorderCountries>
              </DetailsContainer>
            </InfoContainer>
          </>
        )}
      </Container>
    </>
  );
}

export default Country;
