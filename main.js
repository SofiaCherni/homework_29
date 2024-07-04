class Man {
    constructor(name, age = "unknown"){
        this.name = name;
        this.age = age;
    }

    showInfo(){
        document.write(`Name: ${this.name}, Age: ${this.age} </br>`);
    }
}

class Car {
    constructor(brand, model, year, number){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    owner;//хозяин машині

    setOwner(person) {
        if(person.age > 18) {
            this.owner = person;// присваиваем хозяина машині
        } else {
            document.write(`Person ${person.name} must be at least 18 years </br>`);
        }
    }

    carInfo() {
        document.write(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Number: ${this.number} </br>`);
        if(this.owner) {
            document.write(`Owner: `);
            this.owner.showInfo();
        }
    }
}

const person1 = new Man('Vova', 23); 
const person2 = new Man('Mariia', 19);

person1.showInfo();
person2.showInfo();

const car1 = new Car ('Mozeratti', 'Super', 2024, 'AE4567BB');
const car2 = new Car ('Mazda', '3', 2024, 'AA7890HH');

car1.setOwner(person1);
car2.setOwner(person2);

car1.carInfo();
car2.carInfo();