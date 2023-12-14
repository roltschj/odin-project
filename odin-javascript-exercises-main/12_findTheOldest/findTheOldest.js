const findTheOldest = function(people) {
    let oldestPerson = {};
    let oldestAge = 0;
    const thisYear = new Date().getFullYear();

    for (const person of people) {
        let age = 0;
        if ( !person.yearOfDeath ) {
            age = thisYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if ( age > oldestAge ) {
            oldestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
