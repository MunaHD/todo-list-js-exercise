
function newTask(title, description) {
// Create a new task by adding title and description and
// the status of the task as incomplete in an object
  const task = {
    title,
    description,
    complete: false,

    logState: function(){
      //CRAZY there's a conditionin the placehold 🤯
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
      },

    markCompletedTask: function() {
      this.complete = true;

    }

  };
  return task;
}



// DRIVER CODE BELOW



const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompletedTask();
task1.logState();
