//Arrow notation does not work with .this in an object as it then refers to an object in the global scope
/*const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = 'high';
robot.recharge() */

//Getters
const person = {
    _firstName: '',
    _lastName: 'Doe',
    fullName() {
        if (this._firstName && this._lastName) {
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or last name.';
        }
    }
}

console.log(person.fullName());

