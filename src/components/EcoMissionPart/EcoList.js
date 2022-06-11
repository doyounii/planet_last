import React from 'react';

import EcoListItem from './EcoListItem';

const EcoList = ({ missions }) => {
    console.log(missions);
    return (
        <>
        {missions.map(mission => (
            <EcoListItem mission={mission} />
        ))}
        </>
    );
}

export default EcoList;