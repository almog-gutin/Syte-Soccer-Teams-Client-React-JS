const FAVORITE_SOCCER_TEAMS = 'favorite-soccer-teams';

export const getFavoriteTeams = () => JSON.parse(localStorage.getItem(FAVORITE_SOCCER_TEAMS));

export const setFavoriteTeams = () => {
    localStorage.setItem(FAVORITE_SOCCER_TEAMS, JSON.stringify([]));

    return getFavoriteTeams();
};

export const addTeamToFavorites = (id) => {
    const favoriteSoccerTeams = getFavoriteTeams();

    const updatedFavoriteSoccerTeams = [...favoriteSoccerTeams, id];
    localStorage.setItem(FAVORITE_SOCCER_TEAMS, JSON.stringify(updatedFavoriteSoccerTeams));
};

export const removeTeamFromFavorites = (id) => {
    const favoriteSoccerTeams = getFavoriteTeams();

    const updatedFavoriteSoccerTeams = favoriteSoccerTeams.filter((teamId) => teamId !== id);
    localStorage.setItem(FAVORITE_SOCCER_TEAMS, JSON.stringify(updatedFavoriteSoccerTeams));
};
