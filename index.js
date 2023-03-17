// code your solution here
const saturdayFun = (params = "roller-skate") => {
  return `This Saturday, I want to ${params}!`;
};

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(star = "*") {
  return function (special = "special") {
    return `You are ${star}${special}${star}!`;
  };
}
let or = wrapAdjective('||')
console.log(or)