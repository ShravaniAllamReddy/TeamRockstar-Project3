import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ActivityForm from '../components/Activity/ActivityForm';


const Activities = function () {
    // const [activities, setActivities] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new note!
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
        await axios.get('/api/activities');
    }
    return (
        <div>
            <ActivityForm
                didSubmit={refreshParent}
            />
        </div>
    );
};

export default Activities;