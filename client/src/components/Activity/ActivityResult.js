import React from 'react';

// this is where we display food and movie options in cards so that user can vote from those choices ( invited users)
function ActivityResult(props) {
    console.log(props.savedActivities);
    return props.savedActivities.length > 0 ? (

        props.savedActivities.map(activity => {
            return (
                <div className="card">
                    <div className="card-body">
                        <div className='text-center' key={activity._id}>
                            <h3 className="font-weight-bold">{activity.name}</h3>
                            <p> {activity.description}</p>
                            <li>{activity.foodOption1}</li>
                            <li>{activity.foodOption2}</li>
                            <li>{activity.movieOption1}</li>
                            <li>{activity.movieOption2}</li>
                        </div>
                    </div>
                </div>
            );
        }
        )

    ) : (
        <h3>No activities to display</h3>
    );

}

export default ActivityResult;