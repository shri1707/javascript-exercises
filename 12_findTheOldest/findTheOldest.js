// const findTheOldest = function(arr) {
//     const age = arr.sort((a,b)=> ((a.yearOfDeath-a.yearOfBirth)<(b.yearOfDeath-b.yearOfBirth) ? 1 :-1))
//     return age[0]
// };


const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
// Do not edit below this line
module.exports = findTheOldest;
