import React from 'react';

function ActivityDetails(props) {
    console.log(props.activitiesList);
    return(
        props.activitiesList.map( activity => {
            return (
                <div className='text-center' key={activity.id}>
                    <h3>Name: {activity.name}</h3>
                    <h3>Description: {activity.description}</h3>
                </div>
            );
        }
        ));
}

export default ActivityDetails;