"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to My Website!");

let userColor = prompt("What is your favorite color?");
alert('Hey, ' + userColor + " is my favorite color too!");



let littleMermaidDays = prompt('How many days did you rent littleMermaid');
let brotherBearDays = prompt('How many days did you rent brotherBear');
let herculesDays = prompt('How many days did you rent Hercules');
let rentalPricePerDay = 3;

let totalRentalCost = ((Number(littleMermaidDays) + Number(brotherBearDays) + Number(herculesDays)) * rentalPricePerDay)
alert ('The total rental cost is $' + totalRentalCost)



let googleRate = 400;
let amazonRate = 380;
let facebookRate = 350;

let googleHours = prompt('How many hours did you work for Google?' )
let amazonHours = prompt('How many hours did you work for Amazon?' )
let facebookHours = prompt('How many hours did you work for Facebook?' )

let totalPayment = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
alert ('The total payment for this week is $' + totalPayment);




let classIsNotFull = true;
alert(classIsNotFull + 'Class is not full')
let noScheduleConflict = true;
alert(noScheduleConflict + 'There are no schedule conflicts')
let canEnroll = classIsNotFull && noScheduleConflict;
alert ('The student can enroll:' + canEnroll);





let numberOfItems = prompt('How many items did you buy?')
let offerNotExpired = true;
let isPremiumMember = false;
let canApplyOffer = (numberOfItems > 2 && offerNotExpired) || isPremiumMember;
alert ('The offer can be applied' + canApplyOffer);



