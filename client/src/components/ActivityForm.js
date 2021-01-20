import { useState } from 'react';
import axios from 'axios';
// import { getRestaurantDetails } from '../utils/restaurantAPI';
// import obj from '../utils/moviesAPI';

const ActivityForm = (props) => {
    const { didSubmit } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitActivity();
    };
    const submitActivity = async () => {
        await axios.post('/api/activities', { name: name, description: description });
        setDescription('');
        setName('');
        didSubmit();
    };

    return (
        <div>
            <h2>Activity Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name:</label>
                <input
                    name='name'
                    placeholder='name'
                    type='text'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <br />
                <label htmlFor="description">description:</label>
                <textarea
                    name='description'
                    placeholder='description'
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <br />
                <button type='submit'>Save Activity</button>
            </form>
        </div>
    );
};

export default ActivityForm;