
// 3. Write a “person” class to hold all the details.

class Person {
    constructor(FullName, Age, Gender, City, State, PhoneNumber) {
      this.FullName = FullName;
      this.Age = Age;
      this.Gender = Gender;
      this.City = City;
      this.State = State;
      this.PhoneNumber = PhoneNumber;
      
    }
    getFullName() {
      console.log(`Name: ${this.FullName}`);
    }
    getAge() {
      console.log(`Age: ${this.Age}`);
    }
    getGender() {
      console.log(`Gender: ${this.Gender}`);
    }
    getCity() {
      console.log(`City: ${this.City}`);
    }
    getState() {
      console.log(`State: ${this.State}`);
    }
    getPhoneNumber() {
      console.log(`Phone Number: ${this.PhoneNumber}`);
    }
    
  }
  
  let person = new Person("Ananth",25,"Male","villupuram","tamilnaadu","8667426553")
  
  person.getFullName();
  person.getAge();
  person.getGender();
  person.getCity();
  person.getState();
  person.getPhoneNumber();

  