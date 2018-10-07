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
    let monthlySalary = this.annualSalary / 12;
    return monthlySalary;
  } // end monthlySalary function

} // end Employee class

// employees array
let employeesArray = [];
let monthlyTotal = 0;


// DOM loaded
$( document ).ready ( readyNow );

// function once DOM is loaded and ready
function readyNow () {
  console.log( 'JQ' );
  // setup listener on add employee button
  $( '#addEmployee' ).on( 'click', addEmployee );
  // setup listener on table for delete button
  $("#tableEmployees").on ( 'click', '.deleteEmployee', deleteEmployee );
} // end readyNowfunction

// function for on click event for submit button
function addEmployee () {
  // get input fields
  event.preventDefault();
  // call to add to the array
  addToArray();
  // Clear fields after retreiving them
  $("#inputForm").trigger('reset');
  // Set focus to First Name
  $("#firstNameIn").focus();
  // call function to update table 
  displayEmployees();
} // end addEmployee function

// function to add employee from input to the array
function addToArray (){
  // retrieve input from the DOM
  let inFirstName = $( '#firstNameIn' ).val();
  let inLastName = $( '#lastNameIn' ).val();
  let inID = $( '#idIn' ).val();
  let inTitle = $( '#titleIn' ).val();
  let inSalary = parseFloat( $('#salaryIn').val() );

  // create a new employee instance
  let employeeNew = new Employee(inFirstName, inLastName, inID, inTitle, inSalary);

  // add new employee to the array
  employeesArray.push(employeeNew);
  
} // end addToArray function

// function to update the employee table on the DOM
function displayEmployees() {
  // retrieve the table from the DOM and setup the header row
  let tableDocument = $( '#tableEmployees' );
  let tableRow = `<tr><th>First Name</th><th>Last Name</th><th class="smallColumn">ID</th>
    <th>Title</th><th>Annual Salary</th><th></th></tr>`;
  // clear the table and add the header row
  tableDocument.empty();
  tableDocument.append(tableRow);
  monthlyTotal = 0;
  console.log('monthlyTotal before loop', monthlyTotal);
  
  // loop through the array of employees
  for ( let i = 0; i < employeesArray.length; i++ ) {
    let person = employeesArray[i];
    // increment monthly total
    monthlyTotal += person.calculateMonthlySalary();
    console.log('After calculated monthly salary:', monthlyTotal);
    // setup row
    tableRow = '<tr id=row' + i + '><td>' + person.firstName + '</td><td>' + 
      person.LastName + '</td><td>' + person.idNum + '</td><td>' + 
      person.jobTitle + '</td><td>' + person.annualSalary + '</td>' +
      '<td><button id=' + i + ' class="deleteEmployee">Delete</button></td>' +
      '</tr>';
    tableDocument.append(tableRow);
  } // end for of loop

  // add blank row at bottom for styling
  tableRow = `<tr class="lastRow"><td></td><td></td><td></td>
  <td></td><td></td><td></td></tr>`;
  tableDocument.append(tableRow);

  // display new Monthly Total
  let totalDisplay = $( '#totalSection' );
  totalDisplay.empty();
  totalDisplay.append(`<h3>Total Monthly: $ ${monthlyTotal.toFixed(2)} </h3>`);
  // display monthly total in the red if > 20000
  console.log('before check monthly salary:', monthlyTotal);
  if (monthlyTotal > 20000) {
    totalDisplay.toggleClass('inTheRed');
  } else if (monthlyTotal <= 20000 && totalDisplay.hasClass('inTheRed')) {
    totalDisplay.toggleClass('inTheRed');
  }

} // end of displayEmployees function

// delete employee function 
function deleteEmployee () {
  // delete from array
  employeesArray.splice(event.target.id, 1);
  displayEmployees();
  // let rowToDelete =  $('tr#row' + event.target.id);
  // rowToDelete.remove();
} // end of deleteEmployee function