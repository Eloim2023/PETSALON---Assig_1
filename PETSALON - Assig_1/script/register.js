//object literal
let petSalon ={
    name : "The Lovely Pet",
    address:{
        city:"Mexicali",
        street:"Lazaro Cardenas Blvd.",
        zip:"21100"
        },
    hours:{
        open:"9:00 am",
        close:"4:00 pm"
        },
    pets:[
        {
            name:"Scooby",
            age:45,
            gender:"Male",
            service:"Vaccines"
        },
        {
            name:"Scrappy",
            age:30,
            gender:"Male",
            service:"Nails cut"
        },
        {
            name:"Winter",
            age:3,
            gender:"Male",
            service:"Grooming"
        },
    ]
}

console.log(petSalon.pets.length);
console.log(petSalon.pets[0].name);
console.log(petSalon.pets[0].age);
console.log(petSalon.pets[0].gender);
console.log(petSalon.pets[0].service);

console.log(petSalon.pets.length);
console.log(petSalon.pets[1].name);
console.log(petSalon.pets[1].age);
console.log(petSalon.pets[1].gender);
console.log(petSalon.pets[1].service);

console.log(petSalon.pets.length);
console.log(petSalon.pets[2].name);
console.log(petSalon.pets[2].age);
console.log(petSalon.pets[2].gender);
console.log(petSalon.pets[2].service);


