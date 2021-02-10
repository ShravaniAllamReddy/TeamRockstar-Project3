import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Test() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetchActivities();
    }, []);
    const fetchActivities = async () => {
        axios.get('/api/activities').then(({ data }) => {
            setActivities(data);
        });
    };
    return (
        <>
            <h3>Activites</h3>
            {activities.map(activity =>

                <Link to={`/activity/${activity._id}`}>
                    Go to activity {activity.name} </Link>)}


        </>
    );
}