import React, { createContext, useState } from 'react';

import { getFavoriteTeams, setFavoriteTeams } from '../utils/storage.utils';

export const FavoriteSoccerTeamsContext = createContext();

const FavoriteSoccerTeamsContextProvider = ({ children }) => {
    const [favoriteSoccerTeams, setFavoriteSoccerTeams] = useState(getFavoriteTeams() || setFavoriteTeams());

    return (
        <FavoriteSoccerTeamsContext.Provider value={{ favoriteSoccerTeams, setFavoriteSoccerTeams }}>
            {children}
        </FavoriteSoccerTeamsContext.Provider>
    );
};

export default FavoriteSoccerTeamsContextProvider;
