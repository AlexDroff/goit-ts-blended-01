// Задача 12
// Є функція sendDoneStatus:
//// Завдання:
// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
// ______________________________________________________________________________

type Callback = (status: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((status) => {
  console.log("Task status -", status);
});
