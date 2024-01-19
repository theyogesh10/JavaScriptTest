const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
const developers = data.filter((item) => item.profession == "developer");
  console.log(developers);
}

// 2. Add Data
function addData() {

  const newData = {};

  newData.name = prompt("Enter Name:")
  newData.age = parseInt(prompt("Enter Age:"))
  newData.profession = prompt("Enter Profession:")
  data.push(newData)
  console.log(data)
}


// 3. Remove Admins
function removeAdmin() {
  const notAdminData = data.filter((item)=>item.profession!=="admin")
  console.log(notAdminData)
}

// 4. Concatenate Array
const dummyData = [
  {name: "yogesh", age:23, profession: "tester"},
  {name: "rahul", age:25, profession: "mentor"}
];
function concatenateArray() {
 const concatData = data.concat(dummyData)
 console.log(concatData)
}

// 5. Average Age
function averageAge() {}

// 6. Age Check
function checkAgeAbove25() {
  const aboveAge25 = data.filter((item)=>item.age>25)
  console.log(aboveAge25)
}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data)
}

// 9. Update Profession
function updateJohnsProfession() {
  const john =data.find((item)=>item.name=="john")
  if(john){
    john.profession = "manager"
  }
  console.log(data)
}

// 10. Profession Count
function getTotalProfessions() {}
