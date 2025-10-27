import { getAllFeri, createFeri , getFeriById } from "./feriActions";
import { signUp, login } from "./loginAction";

const api = {
  signUp: signUp,
  login: login,
  getAllFeri: getAllFeri,
  createFeri: createFeri,
  getFeriById : getFeriById
};

export default api;