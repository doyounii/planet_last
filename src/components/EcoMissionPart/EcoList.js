import React from 'react';

import EcoListItem from './EcoListItem';

const EcoList = ({ missions }) => {
    return (
        <>
        {missions.map(mission => (
            <EcoListItem mission={mission} key={mission.id} />
        ))}
        </>
    );
}

export default EcoList;