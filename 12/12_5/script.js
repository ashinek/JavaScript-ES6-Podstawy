const obj = {
    name: 'Tomek',
    age: 40
};

const objClone = Object.assign(obj, {id: 567});

console.log('oryginalny obiekt: ',obj,'sklonowany obiekt: ',objClone);