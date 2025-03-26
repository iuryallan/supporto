import api from "./api";
import axios from "axios";

const getUserProfile = async () => {
  return api.get("/usuarios/profile");
};

export async function cadastrarUsuario(data) {
  try {
    const res = await axios.post('http://localhost:3007/api/usuarios/cadastro', data);
    return res.data;
  } catch (err) {
    console.error('Erro no cadastro', err);
    throw err;
  }
}

export default { getUserProfile };