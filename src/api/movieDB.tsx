import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'bae568901d58a2cfcf9e4d4f54f83179',
        language:'es-Es'
    }

})

export default movieDB;