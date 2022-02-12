import React, { useState, useEffect, useContext } from 'react';
import './soccer-teams-table-row.styles.scss';

import { FavoriteSoccerTeamsContext } from '../../../../context/FavoriteSoccerTeams.context';

import * as storageUtils from '../../../../utils/storage.utils';

const SoccerTeamsTableRow = ({ id, crest, name, yearFounded }) => {
    const { favoriteSoccerTeams, setFavoriteSoccerTeams } = useContext(FavoriteSoccerTeamsContext);

    const [className, setClassName] = useState(favoriteSoccerTeams.includes(id) ? 'clicked' : '');

    const handleClick = (id) => {
        favoriteSoccerTeams.includes(id)
            ? storageUtils.removeTeamFromFavorites(id)
            : storageUtils.addTeamToFavorites(id);

        setFavoriteSoccerTeams(storageUtils.getFavoriteTeams());
    };

    useEffect(() => {
        if (favoriteSoccerTeams.includes(id)) {
            setClassName('clicked');
            return;
        }

        setClassName('');
    }, [favoriteSoccerTeams]);

    return (
        <tr className={className} onClick={() => handleClick(id)}>
            <td className="crest">
                <img src={crest} alt={name} />
            </td>
            <td>{name}</td>
            <td>{yearFounded}</td>
        </tr>
    );
};

export default SoccerTeamsTableRow;
