import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-react-burger-build-70612.firebaseio.com'
});

export default instance;