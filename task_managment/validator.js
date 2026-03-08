 // TODO: Export these validation functions                     
 // 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
 if(!title){
    return "Title Required";
 }
 if(title.length<=3)
 {
    return "Min 3 char required";
 }
 return true;
}
// 2. Validate priority (must be: low, medium, high)

function validatePriority(priority) {
const priorities=['LOW','MEDIUM','HIGH']
let result=priorities.includes(priority)
if(result===false)
{
    return "Invalid Priority"
}
return true
}
 // 3. Validate due date (must be future date)
function validateDueDate(date) {
    let dueDate=new date('2024-10-25')
    let today=new date()
    if(dueDate>today)
    {
        return "Invalid DueDate"
    }
return true 
}
export {validatePriority,validateTitle,validateDueDate}
