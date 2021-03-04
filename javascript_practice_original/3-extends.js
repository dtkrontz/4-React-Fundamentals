// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    }
    // Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status() {
        console.log('Current Status: ' + this.type);
    }
}

// EXTENDS
class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

// Instance of user Class
let anonDude = new User("anonymous");
anonDude.greet();
anonDude.status();

// Instance of TrialUser class
let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// CLASS OF BannedUser. Write a method/function that tells the reason that prints out a message about why they have been banned.
class BannedUser {
    constructor (name) {
        this.user = name;
        this.type = "Banned User";
    }
    status() {
        console.log(this.user + ": " + "You have been Banned for bring grits as a snack for the class");
    }
}

let person = new BannedUser("Garrett");
person.status();