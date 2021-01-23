import React from 'react';

// this is where we display food and movie options in cards so that user can vote from those choices ( invited users) food options from zomato api checkbox
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
                            <h3>Food Choices</h3>
                            
                            <li>{activity.foodOption1}</li>
                            <li>{activity.foodOption2}</li>
                            <li>{activity.foodOption3}</li>
                            <li>{activity.foodOption4}</li>
                            <h3> Movie Choices</h3>
                            <li>{activity.movieOption1}</li>
                            <li>{activity.movieOption2}</li>
                            <li>{activity.movieOption3}</li>
                            <li>{activity.movieOption4}</li>
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