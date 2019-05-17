import axios from 'axios';

const BASE_URL = `https://api.github.com/users/pedrohenrickcs`;

export const listUser = (e) => {
    axios.get(BASE_URL)
        .then(data => data.response)
        .catch(err => console.error(err))
}