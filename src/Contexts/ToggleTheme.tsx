import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme }:any = this.context;
        return (
            <button onClick={toggleTheme}>Toggle Theme</button>
        )
    }
}

export default ToggleTheme;
