import axios from 'axios';
import options from "./../configs/mangaevents.config.json";

const getAllMangas = () => {
    return axios.get(options.apiUrl + "/manga/get");
}

export default getAllMangas;