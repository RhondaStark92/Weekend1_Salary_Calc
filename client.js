// Employee Class
class Employee{
  constructor( firstName, LastName, idNum, jobTitle, annualSalary ){
    this.firstName = firstName;
    this.LastName = LastName;
    this.idNum = idNum;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
  } // end constructor

  // function to calculate monthly salary
  calculateMonthlySalary() {
    let monthlySalary = Math.round(this.annualSalary / 12);
    console.log ('monthlySalary for ', this.idNum, monthlySalary);
    return monthlySalary;
  } // end monthlySalary function

} // end Employee class

// employees array
let employeesArray = [];
let monthlyTotal = 0;

// function to add employee from input to the array
function addToArray (){
  // retrieve input from the DOM
  let inFirstName = $( '#firstNameIn' ).val();
  let inLastName = $( '#lastNameIn' ).val();
  let inID = $( '#idIn' ).val();
  let inTitle = $( '#titleIn' ).val();
  let inSalary = $( '#salaryIn' ).val();

  // create a new employee instance
  let employeeNew = new Employee(inFirstName, inLastName, inID, inTitle, inSalary);

  // add new employee to the array
  employeesArray.push(employeeNew);

  // increment monthly total
  monthlyTotal += employeeNew.calculateMonthlySalary();

} // end addToArray function

// function to update the employee table on the DOM
function displayEmployees() {
  // retrieve the table from the DOM and setup the header row
  let tableDocument = $( '#tableEmployees' );
  let tableRow = `<tr><th>First Name</th><th>Last Name</th><th>ID</th>
    <th>Title</th><th>Annual Salary</th></tr>`;
  // clear the table and add the header row
  tableDocument.empty();
  tableDocument.append(tableRow);
  // loop through the array of employees
  for (person of employeesArray) {
    tableRow = '<tr><td>' + person.firstName + '</td><td>' + 
      person.LastName + '</td><td>' + person.idNum + '</td><td>' + 
      person.jobTitle + '</td><td>' + person.annualSalary + '</td>' +
      '</tr>';
    console.log(tableRow);
    tableDocument.append(tableRow);
  } // end for of loop

  // display new Monthly Total
  let totalDisplay = $( '#totalSection' );
  totalDisplay.empty();
  totalDisplay.append (`<h3>Total Monthly: ${monthlyTotal}</h3>`);

} // end of displayEmployees function

// function for on click event for submit button
function addEmployee () {
  // get input fields
  event.preventDefault();
  console.log(' button clicked ');
  // call to add to the array
  addToArray();
  // Clear fields after retreiving them
  $("#inputForm").trigger('reset');
  // Set focus to First Name
  $("#firstNameIn").focus();
  // call function to update table 
  displayEmployees();
} // end addEmployee function

// DOM loaded
$( document ).ready ( readyNow );

// function once DOM is loaded and ready
function readyNow () {
  console.log( 'JQ' );
  $( '#addEmployee' ).on( 'click', addEmployee );
} // end function
