import React from 'react';
import FoodOptions from '../Activities/FoodOptions';
import MovieOptions from '../Activities/MovieOptions';


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
                            <FoodOptions
                                activity={activity}
                            />
                            <hr/>
                            <h3> Movie Choices</h3>
                            <MovieOptions 
                                activity={activity}
                            />
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