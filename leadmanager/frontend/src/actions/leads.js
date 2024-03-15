import axios from 'axios';
import { DELETE_LEAD, GET_LEADS, ADD_LEAD } from './types';

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get('/api/leads/')
    .then((response) => {
      dispatch({
        type: GET_LEADS,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

// Delete Leads

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(() => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((error) => console.log(error));
};

// Add Leads

export const addLead = (addedLead) => (dispatch) => {
  axios
    .post('/api/leads/', addedLead)
    .then((response) => {
      dispatch({
        type: ADD_LEAD,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error.response.data));
};
