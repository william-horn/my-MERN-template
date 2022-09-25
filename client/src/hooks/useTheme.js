
import React, { useEffect, useState } from 'react';
import themes from '../themes.json';
import Enum from '../enums';

const useTheme = () => {
    let themeName = localStorage.getItem(Enum.StorageKeys.Theme.value) || Enum.Themes.Default.value;

    const [currentTheme, setCurrentTheme] = useState(themeName);
    const themeData = themes[currentTheme];

    useEffect(() => {
        localStorage.setItem(Enum.StorageKeys.Theme.value, currentTheme);
    }, [currentTheme])

    return [currentTheme, themeData, setCurrentTheme];
}

export default useTheme;

