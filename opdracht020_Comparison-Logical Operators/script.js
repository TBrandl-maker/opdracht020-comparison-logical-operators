const age = 23;
const isFemale = true;
const driverStatus = 'bob';

if (age > 18) {

    document.write("welcome to our bar");

} else {

    document.write("you are not allowed to enter the bar");

}

if (isFemale) {

    document.write("welcome, my lady");

} else {

    document.write("Tonight is ladiesnight, please leave");

}

if (driverStatus == 'bob') {

    document.write("you are allowed to drive");

} else {

    document.write("you are not allowed to drive")

}

if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!")

}

const name = "Bram";

if (name == "Sarah" || name == "Bram") {
    console.log("recht op een bier")
}

const totalAmount = 101;

if (totalAmount > 25 && totalAmount <= 50) {

    console.log("gratis bitterballen");

} else if (totalAmount > 50 && totalAmount <= 100) {

    console.log("gratis portie nachos")

} else if (totalAmount > 100) {

    console.log("gratis fles champagne");

}


