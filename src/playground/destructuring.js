const person = {
    name: 'andrew',
    age: 25,
    location: {
        city: 'Philadenphia',
        temp: 92
    }
}

const {name, age} = person
const {city: myCity = 'Hanoi', temp} = person.location
console.log(`${name} is ${age}. Lives in ${temp} in ${myCity}`);


const address = ['1229 street', 'philadenphia', 'pennysylvania', '19147']

console.log(`you are in ${address[1]}`);

const [street, city, state, zip] = address

console.log(`you are in ${street} ${city}`);



