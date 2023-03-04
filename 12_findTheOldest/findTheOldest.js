const findTheOldest = function(people) {
    return people.reduce((previous, current)=>{
        return compareAge(previous, current);
    });
};

function compareAge(a, b){
    const age_a = (a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth;
    const age_b = (b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth;
    return age_a >= age_b ? a : b;
}

// Do not edit below this line
module.exports = findTheOldest;
