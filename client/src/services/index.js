import axios from 'axios';

const apiURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : 'http://deployedsiteurl/api';

const API = axios.create({
  baseURL: apiURL,
});

// ** uncomment this after implementing authentication
// export const getToken = () => {
//   if (localStorage.getItem('token')) {
//     return {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//       }
//     }
//   }
//   return null;
// }

export default API