import {
  Container,
  TextContainer,
  OptionsContainer,
  Text,
  Icon,
  Option,
} from "../styles/component.select.js";

import { useContext, useState, useRef, useEffect} from "react";
import dataContext from "../utils/dataContext.js";
import {ACTIONS} from "../utils/dataReducer";

const regions = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
]

function Select({...rest}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const {
    state: { darkTheme},
    dispatch,
  } = useContext(dataContext);

  const optionsRef = useRef();



  useEffect(()=> {

    const isOutSideBound = ({target})=> {
      if(target.tagName === "IMG" && target.src.includes("expand-arrow")) return;
      if(optionsRef && optionsRef.current && !optionsRef.current.contains(target)){
        setShowOptions(false);
      }
    }

    window.addEventListener("click", isOutSideBound);

    return ()=> window.removeEventListener("click", isOutSideBound);

  }, [optionsRef])



  const selectOption = (region)=>{
    dispatch({type: ACTIONS.FILTER_BY_REGION, payload: {region}});
    setShowOptions(false);
    setSelectedRegion(region);
  }

  const showOptionsByEnterKey = ({keyCode})=> {
    if(keyCode !== 13) return;
    setShowOptions(!showOptions);
  }

  return (
    <Container theme={darkTheme ? "dark" : "light"} {...rest}>
      <TextContainer>
        <Text>Filter By Region {selectedRegion !== "All" && `(${selectedRegion})`}</Text>
        <Icon
          src="./images/expand-arrow.png"
          alt="expand arrow icon"
          onClick={() => setShowOptions(!showOptions)}
          onKeyDown={showOptionsByEnterKey}
          tabIndex={3}
        />
      </TextContainer>

      {showOptions && (
        <OptionsContainer ref={optionsRef}>
          {regions &&
            regions.map((region, key) => <Option key={key} onClick={()=> selectOption(region)}>{region}</Option>)}
        </OptionsContainer>
      )}
    </Container>
  );
}

export default Select;
