console.log("<<<< Welcome To Address Book System >>>>");

const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
const addressRegex = RegExp('^[a-zA-z]{4,}$');
const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this.fName;
    }

    get lastName(){
        return this.lName;
    }

    get address(){
        return this.address1;
    }

    get city(){
        return this.city1;
    }

    get state(){
        return this.state1;
    }

    get zip(){
        return this.zip1;
    }

    get phoneNumber(){
        return this.phoneNum;
    }

    get email(){
        return this.email1;
    }

    set firstName(firstName){
        if(nameRegex.test(firstName))
            this.fName = firstName;
        else
            throw "first name is incorrect"
    }

    set lastName(lastName){
        if(nameRegex.test(lastName))
            this.lName = lastName;
        else
            throw "last name is Incorrect"
    }

    set address(address){
        if(addressRegex.test(address))
            this.address1 = address;
        else
            throw "address in incorrect"
        }

    set city(city){
        if(cityStateRegex.test(city))
            this.city1 = city;
        else
            throw "incorrect city"
        }

    set state(state){
        if(cityStateRegex.test(state))
            this.state1 = state;
        else
            throw "incorrect state"
    }

    set zip(zip){
        if(zipRegex.test(zip))
            this.zip1 = zip;
        else
            throw "incorrect zip"
    }

    set phoneNumber(phoneNumber){
        if(phoneNumberRegex.test(phoneNumber))
            this.phoneNum = phoneNumber;
        else
            throw "incorrect phone_Number"
    }

    set email(email){
        if(emailRegex.test(email))
            this.email1 = email;
        else
            throw "incorrect email"
    }
    toString(){
        return "First_Name : "+ this.firstName + ", Last_Name : "+ this.lastName +", Address : "+this.address +", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone_Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}
function contactExist(firstName) {
    return addressBookArray.some(contact => contact.firstName == firstName );
}

function editContact(firstName, choice, newValue) {
    if (contactExist(firstName)) {
        switch (choice) {
            case "lastName":
                addressBookArray.find((contact) => contact.firstName == firstName).lastName = newValue;
                break;
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid choice");
        }
    }
    else {
        console.log("Contact Not Exist");
    }
}

function addContact(contact){
if(!contactExist(contact.firstName))
addressBookArray.push(contact);
else
throw "contact already exist!"
}

function deleteContact(firstName){
if(contactExist(firstName)){
    addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName);
}
else
{
    console.log("Contact Not Exist");
}
}

function countContact(count){
count = count +1;
return count;
}

function searchByCity(city,firstName){
    return addressBookArray.filter((contact) => contact.city == city && contact.firstName == firstName);
}

function searchByState(state,firstName){
    return addressBookArray.filter((contact) => contact.state == state && contact.firstName == firstName);
}

function viewByCity(city){
return addressBookArray.filter((contact) => contact.city == city);
}
function viewByState(state){
    return addressBookArray.filter((contact) => contact.state == state);
    }
function getCountOfContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city).length;
    }
    
function getCountOfContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state).length;
    }

function sortAddressBookByName(){
   addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.firstName).localeCompare(secondPerson.firstName)); 
   console.log(addressBookArray);  //localeCompare method compare two strings in the current lacale
}    

function sortAddressBookByCity(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.city).localeCompare(secondPerson.city));
    console.log(addressBookArray);
}

function sortAddressBookByState(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.state).localeCompare(secondPerson.state));
    console.log(addressBookArray);
}

function sortAddressBookByZip(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.zip).localeCompare(secondPerson.zip));
    console.log(addressBookArray);
}

let addressBookArray = new Array();
let contactsCityMap = new Map();
let contactsStateMap = new Map();

try{
addressBookArray.push(new Contact("Amol", "Mane","abcd","pune", "maharashtra","654 512","91 8454545547", "amolmane@gmail.com"));
}
catch(e){
    console.log(e)
}
try{
    addressBookArray.push(new Contact("Mahesh", "Kale","wxyz","pune", "maharashtra","254 412","91 7454545547", "kale11@gmail.com"));
    }
    catch(e){
        console.log(e)
    }
try{
addressBookArray.push(new Contact("Dheeraj", "Kumar","pqrs","Nagpur", "maharashtra","315 454", "91 8945625244", "dheeraj@gmail.com"));
}
catch(e){
    console.log(e)
}
           
try{
 addressBookArray.push(new Contact("Rohit", "Sharma","jklm","Mumbai", "maharashtra","215 454", "91 7844445244", "rohit123@gmail.com"));
 }
catch(e){
    console.log(e)
 }
console.log(addressBookArray);

console.log("\n*** After Editing Contact ***")
editContact("Rohit", "lastName", "Kumar");
console.log(addressBookArray);

console.log("\n*** Contact After Deleting ***")
deleteContact("Rohit");
console.log(addressBookArray);

console.log("\n*** Count Of Contact ***")
console.log("count of contact : "+addressBookArray.reduce(countContact,0))

console.log("\n*** add duplicate contact ***")
try{
    addContact(new Contact("Amol", "Mane","abcd","pune", "maharashtra","654 512","91 8454545547", "amolmane@gmail.com"));
}catch(e){
    console.log(e);
}
console.log(addressBookArray);
console.log("\n*** search by city ***")
console.log(searchByCity("pune","Amol"));

console.log("\n*** search by state ***")
console.log(searchByState("Goa","Amol"));

console.log("\n*** View By city ***");
console.log(viewByCity("pune"));

console.log("\n*** View By state ***");
console.log(viewByCity("MP"));

console.log("\nNumber of Contacts in City : pune = " + getCountOfContactsByCity("pune"));
console.log("\nNumber of Contacts in State : maharashtra = " + getCountOfContactsByState("maharashtra"));

console.log("\nContacts In Alphabetical Order");
sortAddressBookByName();

console.log("\nContacts Sorted Using City");
sortAddressBookByCity();

console.log("\nContacts Sorted Using State");
sortAddressBookByState();

console.log("\nContacts Sorted Using Zip");
sortAddressBookByZip();