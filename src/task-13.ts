// Задача 13
// Є функція reducer:
// Завдання:
// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.
// ______________________________________________________________________________

type Action = { type: "increment" | "decrement" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(99, { type: "increment" }));
console.log(reducer(11, { type: "decrement" }));
