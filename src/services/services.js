import axios from 'axios';

export const GET = async (path, endpoint, fn) => {
  try {
    const response = await axios.get(`${path}${endpoint}`);
    return fn(response);
  } catch (err) {
    console.log(err);
  }
};
