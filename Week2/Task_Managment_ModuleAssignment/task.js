 // TODO: Import validator functions
 import {validateTitle,validatePriority,validateDueDate} from './validator.js';
 const tasks=[]
//add tasks
function addTask(title, priority, dueDate) 
{
  // Validate using imported functions
if(!validateTitle() && !validatePriority() && !validateDueDate())
{                       
   return "Invalid task"
 }
//push taskObj to tasks array 
tasks.push({title,priority,dueDate})
// If valid, add to tasks array
// Return success/error message
}
// 2. Get all tasks
 function getAllTasks() {
 // Return all tasks
  return tasks
}
                    
// 3. Mark task as complete
function completeTask(taskId) {
 // Find task and mark as complete
}
 // Export functions
export { addTask, getAllTasks, completeTask }