import React from 'react';
import './soccer-teams-table.styles.scss';

import SoccerTeamsTableRow from './soccer-teams-table-row/SoccerTeamsTableRow.component';

import TableHeader from '../../../models/table-header.model';

const SoccerTeamsTable = ({ rowData }) => {
    const headers = [new TableHeader('Crest'), new TableHeader('Name'), new TableHeader('Year Founded')];

    return (
        <table className="soccer-teams-table">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <td key={header.id}>{header.label}</td>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rowData.map(({ id, crest, name, yearFounded }) => (
                    <SoccerTeamsTableRow key={id} id={id} crest={crest} name={name} yearFounded={yearFounded} />
                ))}
            </tbody>
        </table>
    );
};

export default SoccerTeamsTable;
