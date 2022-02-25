const mass = [1, 2];
const mass2 = ['apple']
const mass3 = ['3']
const mass4 = ['4']
const mass5 = ['5']

const mass6 = [...mass, ...mass2, ...mass3, ...mass4, ...mass5];
console.log(mass6);

const obj = {
    username: "Jack",
    age: 19,
    fuLLName: "Jack Jackson",
    job: 'teacher',
    height: 185
}

const newObj = {
    ...obj,
    salary: 600,
    language: 'english',
    country: 'England'
}

console.log(newObj);

const input = document.getElementById('input')
const pTag = document.getElementById('show text')
input.addEventListener('change', (e) => {
    pTag.innerHTML = `Hello ${input.value}`;
})
