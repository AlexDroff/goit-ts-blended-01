// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.
// ______________________________________________________________________________

interface UserParams {
  name: string;
  age: number;
}

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
function createUser({ name, age }: UserParams): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}
console.log(createUser({ name: "Alice", age: 30 }));
