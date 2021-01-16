import { useEffect, useState } from 'react';
import axios from 'axios';
import ActivityForm from '../components/ActivityForm';

const Activities = function () {
    const [activities, setActivities] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new activity!
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch activities again.
    useEffect(() => {
        fetchActivities();
    }, [refresh]);

    async function fetchActivities() {
        const { data } = await axios.get('/api/activities');
        setActivities(data);
    }
    return (
        <div>
            <h2>Activities</h2>
            <ol>
                {activities.map(activity => {
                    return (
                        <li key={activity._id}>
                            <strong>{activity.name}</strong> {activity.description} <sub>from: {activity.user.email}</sub>
                        </li>
                    );
                })}
            </ol>
            <ActivityForm didSubmit={refreshParent} />
        </div>
    );
};

export default Activities;