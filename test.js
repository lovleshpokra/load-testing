import React, {useState} from 'react';
import axios from 'axios';

export const App = () => {
const [users, setUsers] = useState();
const [error, setError] = useState(false);

axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
    setUsers(data);
}).catch(() => {
    setError(true);
});

    return ({error ? (<p>Something went wrong!</p>) : users?.length > 0(<ul> {users.map(user => (<li>user.email</li>))}</ul>)});
}