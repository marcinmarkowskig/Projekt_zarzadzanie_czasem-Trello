//stworzenie użytkownika
import axios from 'axios';

export const CREATE_USER = 'create_user';
export const GET_USER_TABLES = 'get_user_tables';

export function createUser() {
}

//pobranie tablicy
export function getUserTables() {
let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables', {
    headers: {
      'X-User-Email': 'romek1111@gmail.com',
      'X-User-Token': 'KQNeD2vhWnqDxcfy6RBa',
    },
   })

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
