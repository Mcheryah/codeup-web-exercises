console.log("Hello from external JavaScript");
console.log("Welcome to My Website!")
const userColor = prompt("What is your favorite color?");
alert(`Hey, ${userColor} is my favorite color too!`);
const littleMermaidDays = 3;
const brotherBearDays = 5;
const herculesDays = 1;
const rentalPricePerDay = 3;

const totalRentalCost = (littleMermaidDays + brotherBearDays + herculesDays) * rentalPricePerDay;
console.log(`The total rental cost is $${totalRentalCost}.`);



const googleRate = 400;
const amazonRate = 380;
const facebookRate = 350;

const googleHours = 6;
const amazonHours = 4;
const facebookHours = 10;

const totalPayment = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
console.log(`The total payment for this week is $${totalPayment}.`);



const classIsNotFull = true; alert(classIsNotFull)
const noScheduleConflict = true;alert(noScheduleConflict)
const canEnroll = classIsNotFull && noScheduleConflict;
console.log(`The student can enroll: ${canEnroll}.`);


const numberOfItems = 3; alert(numberOfItems)
const offerNotExpired = true; alert(offerNotExpired)
const isPremiumMember = false; alert(isPremiumMember)
const canApplyOffer = (numberOfItems > 2 && offerNotExpired) || isPremiumMember;
console.log(`The offer can be applied: ${canApplyOffer}.`);
