import React, { createContext, useContext } from 'react'

const ThemeContext = createContext()

const initialState = {
    theme: 'light',
}

export const ThemeProvider = ({ children }) => {
    const [state, setState] = React.useState(initialState)
    const { theme } = state
    
    const toggleTheme = () => {
        setState({
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme,}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)