import { getAllFeri, createFeri , getFeriById } from "./feriActions";
import { signUp, login } from "./loginAction";
import { getCatalog , updateFeriFlow } from "./flowActions";

const api = {
  signUp: signUp,
  login: login,
  getAllFeri: getAllFeri,
  createFeri: createFeri,
  getFeriById : getFeriById,
  getCatalog : getCatalog,
  updateFeriFlow : updateFeriFlow
};

export default api;