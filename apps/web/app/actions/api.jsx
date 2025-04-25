import { create } from 'domain';
import { getAllFeri , createFeri  } from './feriActions';
import { signUp , login } from './loginAction';

let api = {
    signUp : signUp,
    login : login,
    getAllFeri : getAllFeri,
    createFeri : createFeri,
}

export default api;