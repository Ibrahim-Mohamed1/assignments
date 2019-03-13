const collectAnimals = ["dog", "cat", "mouse", "jackolope", "platypus", "Lion", "Cheetah"]; 

const animals = (...collectAnimals) => {
    return collectAnimals
}

console.log(animals(...collectAnimals))    