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

// function for on click event for submit button
function addEmployee (){
  // get input fields
  event.preventDefault();
  console.log(' button clicked ');
  
  let inFirstName = $( '#firstNameIn' ).val();
  let inLastName = $( '#lastNameIn' ).val();
  let inID = $( '#idIn' ).val();
  let inTitle = $( '#titleIn' ).val();
  let inSalary = $( '#salaryIn' ).val();

  let employeeNew = new Employee(inFirstName, inLastName, inID, inTitle, inSalary);
  employeesArray.push(employeeNew);
  console.log(employeesArray);

  // Clear fields after retreiving them
  $("#inputForm").trigger('reset'); //jquery
  
} // end addEmployee function

$( document ).ready ( readyNow );
// function once DOM is loaded and ready
  function readyNow () {
  console.log( 'JQ' );

  $( '#addEmployee' ).on( 'click', addEmployee );

} // end readyNow


