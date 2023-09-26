let readlineSync = require("readline-sync");

let tareas = [];

function agregarTarea() {
  let indicador = readlineSync.question(' enter task prompt: ');
  let descripcion = readlineSync.question(' Enter the description of the task: ');

  tareas.push({
    indicador,
    descripcion,
    completed: false,
  });

  console.log(' The task was added successfully ');
}

function eliminarTarea() {
  let indice = readlineSync.question(
    ' enter the index to delete the task '
  );

  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("Tarea eliminada exitosamente");
  } else {
    console.log('your task was deleted');
  }
}
function completarTarea() {
  let indice = readlineSync.question(
    'please enter the index of the task you are going to complete '
  );

  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completed = true;
    console.log('Task Completed');
  } else {
    console.log(' sorry, invalid index ');
  }
}

function imprimirTarea() {
  console.log(' Task List: ');
  tareas.forEach((tareas, indice) => {
    let estado = tareas.completed ? "[✔]" : "[]";
    console.log(`${indice}. ${estado} ${tareas.indicador}: ${tareas.descripcion}`);
  });
}

function correrPrograma() {
  while (true) {
    console.log('choose an option');
    console.log("                ");
    console.log('1. Add a task ');
    console.log('2. Delete a task ');
    console.log('3. Complete a task');
    console.log('4. Print task list');
    console.log('5. Go out');
    console.log("                           ");
    console.log("                           ");
    console.log("                           ");

    let opcion = readlineSync.question('enter the option you need to perform: ');

    switch (opcion) {
      case "1":
        agregarTarea();
        break;

      case "2":
        eliminarTarea();
        break;

      case "3":
        completarTarea();
        break;

      case "4":
        imprimirTarea();
        break;

      case "5":
        return;
      default:
        console.log(' Invalid Option');
    }
  }
}

correrPrograma();