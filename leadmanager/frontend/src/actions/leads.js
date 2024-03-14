import axios from 'axios'
import { GET_LEADS } from './types'

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(response => {
            dispatch({
                type: GET_LEADS,
                payload: response.data
            });
        }).catch(error => console.log(error));
}