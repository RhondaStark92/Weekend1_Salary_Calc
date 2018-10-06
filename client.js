class Employee{
  constructor( firstName, LastName, idNum, jobTitle, annualSalary ){
    this.firstName = firstName;
    this.LastName = LastName;
    this.idNum = idNum;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
  } // end constructor
} // end Employee class

// employees array
let employeesArray = [];

// add employee from input to the array
function addToArray (){
  // retrieve input from the DOM
  let inFirstName = $( '#firstNameIn' ).val();
  let inLastName = $( '#lastNameIn' ).val();
  let inID = $( '#idIn' ).val();
  let inTitle = $( '#titleIn' ).val();
  let inSalary = $( '#salaryIn' ).val();

  // create a new employee instance
  let employeeNew = new Employee(inFirstName, inLastName, inID, inTitle, inSalary);
  console.log('Emp New: ',employeeNew);
  
  // add new employee to the array
  employeesArray.push(employeeNew);
  console.log(employeesArray);
} // end addToArray function

function displayEmployees() {
  // update list of employees
  let outputList = $( '#outputList');
  outputList.empty();
  // Loop through the employees array
  let tableDocument = $( '#tableEmployees' );
  let tableRow = `<tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr>`;
  tableDocument.empty();
  tableDocument.append(tableRow);
  for (person of employeesArray) {
    tableRow = '<tr><td>' + person.firstName + '</td><td>' + 
      person.LastName + '</td><td>' + person.idNum + '</td>' +
      '</tr>';
    console.log(tableRow);
    tableDocument.append(tableRow);
  } // end for of loop
} // end of displayEmployees function

// function for on click event for submit button
function addEmployee () {
  // get input fields
  event.preventDefault();
  console.log(' button clicked ');

  addToArray();

  // Clear fields after retreiving them
  $("#inputForm").trigger('reset');

  // Add to the DOM in list at first
  displayEmployees();
  
} // end addEmployee function


$( document ).ready ( readyNow );

// function once DOM is loaded and ready
function readyNow () {
  console.log( 'JQ' );
  $( '#addEmployee' ).on( 'click', addEmployee );
} // end function
