// Задача 18
// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.
// import axios from "axios";
// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// };
// const getUsers = async () => {
//   const users = await fetchUsers();
//   console.log(users);
// };
// getUsers();
// Завдання:
// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.
// ______________________________________________________________________________

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

import axios from "axios";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();
