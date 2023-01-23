//---------------------Begin Parent Class
class School {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
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
  
  //Methods
    quickFacts(){
    };

    static pickSubstituteTeacher(){
    };
  };
  
  //---------------------End Parent Class
  
  //---------------------Begin Primary Child
  
  class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
      super(name);
      super(level);
      super(numberOfStudents);
      this._pickupPolicy = pickupPolicy
    };
  
  //Getters
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  };
  
  
  //---------------------Begin Middle Child
  class Middle extends School {
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents);
    };
  };
  
  //---------------------Begin High Child
  class High extends School {
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents);
      this._sportsTeams = [];
    }
  
  //Getters
    get sportsTeams(){
      return this._sportsTeams;
    }
  };


  //-----------------------------------------------------Testing Instances
  const test = new High('OHS', 'middle', 245)
  console.log(test)