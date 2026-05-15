// Main application
// // TODO: Import task functions
// //  // import { ... } from './task.js';
//  // Test your module system
// // 1. Add some tasks
// // 2. Display all tasks
//  // 3. Complete a task
// // 4. Display all tasks again

import {addTask,getAllTasks,completeTask} from './task.js'
//add task
addTask("Eating","HIGH","2024-02-25")
addTask("Study JS","HIGH","2024-03-22")
const tasks=getAllTasks()
console.log(tasks)
