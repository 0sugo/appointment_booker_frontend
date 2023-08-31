import axios from "axios";

const BaseUrl = "http://localhost:4000/api/v1";

export const CreateDoctor = async (payload) => {
  try {
    const response = await axios.post(`${BaseUrl}/doctors`, payload);
    console.log("response create doc", response);
    return response.data;
  } catch (err) {
    console.log("err create doc", err);
    return err?.message || "Something went wrong";
  }
};
