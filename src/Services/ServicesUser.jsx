import axios from "axios";

const userLogin = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/api/users/login", data);
    return res;
  } catch (error) {
    return { message: error.response.data };
  }
};

export default userLogin;
