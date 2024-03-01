// TO DO:
// functions for create, remove and update data
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000/';

async function getData() {
  const response = await axios.get('db.json');
  return response.data;
}

const dataService = {
  getData,
};

export default dataService;
