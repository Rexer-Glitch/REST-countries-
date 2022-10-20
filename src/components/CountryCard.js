import {Container, FlagContainer, DetailsContainer, Flag, Name, Population, Region, Capital} from "../styles/component.countrycard.js";
import dataContext from "../utils/dataContext.js";
import {useContext} from "react";

function CountryCard({ imageURL, name, population, region, capital,tabIndex, ...rest}) {
  const {state: {darkTheme}} = useContext(dataContext);
  return (
    <Container to={`/countries/${name}`} theme={darkTheme ? "dark" : "light"} {...rest} tabIndex={tabIndex}>
      <FlagContainer>
        <Flag src={imageURL} alt={`${name}'s flag`} />
      </FlagContainer>

      <DetailsContainer>
        <Name>{name}</Name>
        <Population><b>Population:</b> {population.toLocaleString()}</Population>
        <Region><b>Region:</b> {region}</Region>
        <Capital><b>Capital:</b> {typeof capital === "object" ? capital.join(", ") : capital}</Capital>
      </DetailsContainer>

    </Container>
  );
}

export default CountryCard;
