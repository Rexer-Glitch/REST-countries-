import { useContext } from "react";
import dataContext from "../utils/dataContext";
import {ACTIONS} from "../utils/dataReducer";
import {NavigationContainer, Text, ThemeToggler} from "../styles/component.nav";

function Nav(){
    const {state, dispatch} = useContext(dataContext);

    const toggleTheme = ()=> {
        dispatch({type: ACTIONS.TOGGLE_THEME})
    }

    return <NavigationContainer theme={state.darkTheme ? "dark" : "light"}>
        <Text to="/" tabIndex={0}>Where in the world?</Text>
        <ThemeToggler onClick={toggleTheme} tabIndex={1}>
            <img src="/images/theme_toggler_icon.png" alt="theme toggler icon" />
            {!state.darkTheme ?"Dark Mode" : "Light Mode"}
        </ThemeToggler>
    </NavigationContainer>
}

export default Nav;