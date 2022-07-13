
// // 1)

// // as you can see toyota2 does not have a logModel function
// // borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"



const toyota1 = {
    model: 'Toyota',
    type: 'Camry',
    logModel(){
        console.log(this.model, this.type);
    }
}

const toyota2 = {
    model: 'Toyota',
    type: 'Rav4',
}

toyota1.logModel.bind(toyota2)();
toyota2.__proto__.logModel = toyota1.logModel;
toyota2.logModel();

// // 2)

// // The following code does not work turn it into working code


const flights = {

  flights: [],

  priorityFlights: [],

  scheduleFlight(flight){
      this.flights.push(flight);
  },

  removeFlight(flight){
      this.flights = this.flights.filter(flightFilter.bind(this));
      function flightFilter(f){
          if (flight === f){
              return this.priorityFlights.includes(flight);
          }
          return true
      }
  },

  makePriorityFlight(flight){
      this.priorityFlights.push(flight);
  }

}


flights.scheduleFlight('1');

flights.makePriorityFlight('1');

flights.removeFlight('1')

console.log(flights.flights);

// // 3)

// // CarConstructor creates cars but what if someone decides to call it without new keyword,
// // write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// // new keyword it logs "please call me with new keyword" if not it creates a car

function CarConstructor(model, year){
  if(!new.target) {
     return new CarConstructor(model, year);
  }

  this.mode = model;
  this.year = year;
}

const car = CarConstructor('Bmw', 2022);

console.log(car);

// // 4)

// // make a new array out of objArr so that every object has the same logName function that is declared below
// // use logName function do not create your own

const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

function logName(){
    console.log(this.name);
}

function foo(arr) {
  let newArr = [...arr];

  newArr.forEach(function(val) {
    val.logName = logName;
  });

  return newArr;
}

foo(objArr)[0].logName();

function foo(a) {
    foo.count = (foo.count || 0) + a;
    return foo;
}

const {count} = foo(1)(2)(3);
console.log(count);

// // 5

// // use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;


const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }];

function logArrayObjectNames(){
    console.log(this.name);
}

function logNames (arr) {
    arr.forEach(val => {
        logArrayObjectNames.call(val)
        return val
    })
}

logNames(arrayOfObjectNames)

// // 6) for above mentioned arrayOfObjectNames Return an array of functions that when called would log each objects name
// // use Array.map and logArrayObjectNames function

const mappedFunc = arrayOfObjectNames.map( (item) => {
    return logArrayObjectNames.bind(item)
} );

mappedFunc.forEach(i => i()); 
// this would print 1, 2, 3

// //7 please take a look at the following

// // this is just an example of object that you will still need to create by calling CreateCar constructor

const exampleOfAlreadyCreatedObject = {
    id: 1,
    model: 'Toyota',
    year: '1996',
    color: 'red',
    driveTrain: '4x4',
}


function CreateCar(id, model, year, color, driveTrain){
    if(!new.target){
        return new CreateCar(id, model, year, color, driveTrain)
    }

    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.driveTrain = driveTrain;
// }

// // // please take a look at the the inventory object and implement the missing methods

const inventory = {

    cars: [],

    addCar(car) {
        this.cars.push(car);
        return this.cars
    },

    removeCar(id) {
        this.cars.forEach(function(val, i) {
            if(id === val.id) {
                this.cars.splice(i, 1)
            }
        }, this);

        return this.cars
    },

    listCars(){
        return this.cars
    },

    listCarsByConditionCallback(conditionCallback){
        this.cars.forEach(function(val) {
            if(conditionCallback(val)) {
                console.log(val)
            }
        }, this)
    }

}


inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
inventory.removeCar(2);
inventory.listCars();
inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' );


// // 8)

// // Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// // added as properties when the Song constructor function is used. The Song function should also have a method called
// // play When called, the play function should console.log the name of that specific song preceded by the
// // word 'Playing:'.
// // NOTE that play function should be the same for all instances of the Song constructor

function Foo(title, song) {
    this.title = title;
    this.song = song;
    this.returnsResult = function() {
        return `song title:${this.title}, playing:${song}`
    }
}

let foo = new Foo('bionce', 'Hello');

console.log(foo.returnsResult())

// // 9)

// // 1. Create a folder called Workshop_4 make a git repository inside.
// // mkdir Workshop_4, cd Workshop_4, git init
// // 2. without navigating to a different branch create a branch named x_branch
// // git branch x_branch

// // 10)
// // 1. Make a new folder called 'Workshop_4'
// //mkdir Workshop_4
// // 2. make that folder into git repo
// //  git init
// // 2. create a branch called rename_me
// //  git branch rename_me
// // 3. create a branch called delete_me
// //git branch delete_me
// // 4. rename the branch rename_me to renamed_branch
// //  git checkout rename_me
// // git branch --move 'names_branch
// // 5. delete the branch delete_me
// // git branch -D delete_me



// // 11)
// // with a few words explain why this is happening Armenian or English.
/*
    ararjin depqum stanum enq undefined, vorovhetev logName functioni this-y darnum e foo objecty u qani vor foo objecty chuni surname prop tpum e undefined;

    erkrord depqum boo functioni this-y linum e checkKnow objecty ev qani vor menq nra mej ogtagorcum enq arrow function nra this-y darnum e boo functioni this-y vorovhetev arrow functionneri this-y linum e drsi functioni this-y dra hamar tpum e 'checkKnow';
*/
const checkKnow = {
    surname: 'surname',
    name: 'checkKnow',
    foo: {
        name: 'foo',
        logName(){
            console.log(this.surname);
        }
    },
    boo(){
        const obj = {
            name: 'boo method',
            check: () => {
                console.log(this.name);
            }
        }
        obj.check();
    }
}


checkKnow.foo.logName();

checkKnow.boo();