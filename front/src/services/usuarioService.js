import api from "./api";

const getUserProfile = async () => {
  return api.get("/usuarios/profile");
};

export default { getUserProfile };