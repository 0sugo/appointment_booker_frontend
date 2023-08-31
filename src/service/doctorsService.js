import axios from 'axios';

const BaseUrl = 'http://localhost:4000/api/v1';

export const CreateDoctor = async (payload) => {
  try {
    const response = await axios.post(`${BaseUrl}/doctors`, payload);
    return response.data.message;
  } catch (err) {
    return err?.message || 'Something went wrong';
  }
};

export const deleteDoctor = async (id) => {
  try {
    const response = await axios.delete(`${BaseUrl}/doctors/${id}`);
    return response.data.message;
  } catch (err) {
    return err?.message || 'Error deleting entry';
  }
};
