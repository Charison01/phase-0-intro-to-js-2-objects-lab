// Write your solution in this file!
const employee = {}
employee.name = "Kelvin Kimaru"
employee.streetAddress =  50
//console.log(employee);

//Function to destructively modify the data



//Function to nondestructively modify the object
function updateEmployeeWithKeyAndValue (obj, key, value ){
    const newEmployee = {...obj}
    newEmployee[key] = value;
    return  newEmployee;
}
//console.log(updateEmployeeWithKeyAndValue(employee,'streetAddress','11 Broadway'));

//Destructively modify object
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
//sconsole.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress','11 Broadway'));

//Non destructively deletes
function deleteFromEmployeeByKey(obj, key,){
    const newArray = {...obj};
    delete newArray[key];
    return newArray;
}
console.log(deleteFromEmployeeByKey(employee, 'name'))
//console.log(employee.name)

//Destructively delete
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}