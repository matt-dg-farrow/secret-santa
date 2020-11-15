// to execute this file, use (if in root directory):
// tsc ramdomiser/index.ts && node ramdomiser/index.js

interface Person {
  name: string;
  lastYear: string;
  current: string;
}

interface wishList {
  placeholder: string;
}

let nat: Person = { name: "Natasha", lastYear: "Matt", current: "" };
let matt: Person = { name: "Matt", lastYear: "Robert", current: "" };
let rob: Person = { name: "Robert", lastYear: "Edward", current: "" };
let stu: Person = { name: "Stuart", lastYear: "Natasha", current: "" };
let ed: Person = { name: "Edward", lastYear: "Stuart", current: "" };

let peopleArray = [nat, matt, rob, stu, ed];

const randomiser = (names: string[]): string[] => {
  let namesToBeRandomised = Object.assign([], names);
  for (let i = namesToBeRandomised.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [namesToBeRandomised[i], namesToBeRandomised[j]] = [namesToBeRandomised[j], namesToBeRandomised[i]];
  }
  let randomisedNames: string[] = namesToBeRandomised;

  return randomisedNames;
};

const validateRandomisedNames = (
  names: string[],
  randomList: string[],
  lastYearList: string[]
): boolean => {
  for (let i = 0; i < randomList.length; i++) {
    if (randomList[i] === lastYearList[i] || randomList[i] === names[i]) {
      return false;
    }
  }
  return true;
};

const assignNewReceiver = (people: Person[], newNames: string[]) => {
  for (let i = 0; i < people.length; i++) {
    people[i].current = newNames[i];
  }
};

const generateSecretSanta = (people: Person[]) => {
  let names: string[] = [];
  let lastYear: string[] = [];
  for (let i = 0; i < people.length; i++) {
    names.push(people[i].name);
    lastYear.push(people[i].lastYear);
  }
  let randomisedNames: string[];
  do {
    randomisedNames = randomiser(names);
    // console.log("Names: " + currentNames + "\n" + "New: " + randomisedNames + "\n" + "Old: " + lastYear);
    // console.log(validateRandomisedNames(currentNames, randomisedNames,lastYear));
  } while (!validateRandomisedNames(names, randomisedNames, lastYear));
  console.log("Randomiser complete");

  assignNewReceiver(people, randomisedNames);
  console.log(people);
};

generateSecretSanta(peopleArray);

export {};
