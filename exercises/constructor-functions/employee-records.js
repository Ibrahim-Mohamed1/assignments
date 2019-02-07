
var employees = []

function Employee(name, jobTitle, salary, status="Full Time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}{
    this.employeeForm = function employeeList(){
        var list = name + jobTitle + salary + status
        return list.toString()
    }
}

var peter = new Employee("Peter", "Toy Maker", "$61,000", "Part Time")
var stan = new Employee("Stan", "CIA Agent", "$81,623")
var homer = new Employee("Homer", "Nuclear Safety Inspector", "$65,610", "Contract")

employees.push(peter, stan, homer)

console.log(employees)