import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import SoccerTeamsTable from '../../components/tables/soccer-teams-table/SoccerTeamsTable.component';

import { getSoccerTeamsData } from '../../api/soccer.api';

import Team from '../../models/team.model';

const HomePage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        getSoccerTeamsData(controller)
            .then((data) => {
                if (data.length === 0) throw new Error();

                const teams = [];
                data.forEach(({ team }) => teams.push(new Team(team.id, team.logo, team.name, team.founded)));

                setRowData(teams);
            })
            .catch((err) => {
                navigate('*');
            });

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            controller.abort();
        };
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="home-page">
            <SoccerTeamsTable rowData={rowData} />
        </main>
    );
};

export default HomePage;
