//---------------------Begin Parent Class
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this.numberOfStudents = numberOfStudents;
  };

//Getters
  get name(){
    return this._name;
  };
  get level(){
    return this._level;
  };
  get numberOfStudents(){
    return this._numberOfStudents;
  };

//Setters
  set numberOfStudents(val){
    if(typeof val === 'number'){
      this._numberOfStudents = val
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

//Methods
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  };

  static pickSubstituteTeacher(substituteTeachers){
    let randomSub = Math.floor(Math.random() * (substituteTeachers.length));
    return substituteTeachers[randomSub]
  };
};

//---------------------End Parent Class
//---------------------Begin Primary Child

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy
  };

//Getters
  get pickupPolicy(){
    return this._pickupPolicy;
  }
};

//---------------------Begin Middle Child
class Middle extends School {
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents);
  };
};

//---------------------Begin High Child
class High extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams
  }

//Getters
  get sportsTeams(){
    return this._sportsTeams;
  }
};


//-------------------------------------Testing Instances
//Primary
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();
//Log Random Substitute
console.log(`${High.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])} will be on-call for subbing today.`)

//High
const alSmith = new High('Al E. Smith', 45, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.quickFacts();
console.log(alSmith.sportsTeams);

//Middle
const pierreVC = new Middle('Pierre Van Cortlandt', 498)
pierreVC.quickFacts();