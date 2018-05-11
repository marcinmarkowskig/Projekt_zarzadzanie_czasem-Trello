//stworzenie użytkownika
import axios from 'axios';

export const CREATE_USER = 'create_user';
export const GET_USER_TABLES = 'get_user_tables';
export const SIGN_IN = 'sign_in';
//------------------------------------
export function signIn(values) {

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let request = axios.post('http://kanban-project-management-api.herokuapp.com/v1/sessions', values, axiosConfig)

  .then(request => {
    console.log(request.data);
  })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: SIGN_IN,
    payload: request
  };
}
//--------------------------------------
export function createUser() {}

//pobranie tablicy
export function getUserTables() {
  let axiosConfig = {
    headers: {
      'X-User-Email': 'romek1111@gmail.com',
      'X-User-Token': 'KQNeD2vhWnqDxcfy6RBa'
    }
  };

  let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables',axiosConfig)

  .then(request => {
    console.log(request.data);
  })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: GET_USER_TABLES,
    payload: request
  };
}
