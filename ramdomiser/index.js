"use strict";
exports.__esModule = true;
var nat = { name: "Natasha", lastYear: "Matt", current: "" };
var matt = { name: "Matt", lastYear: "Robert", current: "" };
var rob = { name: "Robert", lastYear: "Edward", current: "" };
var stu = { name: "Stuart", lastYear: "Natasha", current: "" };
var ed = { name: "Edward", lastYear: "Stuart", current: "" };
var peopleArray = [nat, matt, rob, stu, ed];
var randomiser = function (names) {
    var _a;
    var namesToBeRandomised = Object.assign([], names);
    for (var i = namesToBeRandomised.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [namesToBeRandomised[j], namesToBeRandomised[i]], namesToBeRandomised[i] = _a[0], namesToBeRandomised[j] = _a[1];
    }
    var randomisedNames = namesToBeRandomised;
    console.log("randomiser complete");
    return randomisedNames;
};
var validateRandomisedNames = function (names, randomList, lastYearList) {
    for (var i = 0; i < randomList.length; i++) {
        if (randomList[i] === lastYearList[i] || randomList[i] === names[i]) {
            return false;
        }
    }
    return true;
};
var assignNewReceiver = function (people, newNames) {
    for (var i = 0; i < people.length; i++) {
        people[i].current = newNames[i];
    }
};
var generateSecretSanta = function (people) {
    var names = [];
    var lastYear = [];
    for (var i = 0; i < people.length; i++) {
        names.push(people[i].name);
        lastYear.push(people[i].lastYear);
    }
    var currentNames = names;
    var randomisedNames;
    do {
        console.log(names);
        randomisedNames = randomiser(names);
        console.log(names);
        console.log("Names: " + currentNames + "\n" + "New: " + randomisedNames + "\n" + "Old: " + lastYear);
        console.log(validateRandomisedNames(currentNames, randomisedNames, lastYear));
    } while (!validateRandomisedNames(currentNames, randomisedNames, lastYear));
    //   console.log(randomisedNames);
    assignNewReceiver(people, randomisedNames);
    console.log(people);
};
generateSecretSanta(peopleArray);
