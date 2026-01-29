/**Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]; */

function findLowestNumber(numbers) {
    // console.log(numbers)
    let lowNum = numbers[0];
    for (number of numbers) {
        // console.log(number);
        if (number < lowNum) {
            lowNum = number;
        }
    }
    return lowNum;
}

const heights2 = [167, 190, 120, 165, 137, 20];
const lowestNumber = findLowestNumber(heights2);
// console.log(lowestNumber);


/**Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */

function getSmallestFriend(friends) {
    // console.log(friends);
    let smallFrnd = friends[0];
    for (friend of friends) {
        // console.log(friend);
        if (friend.length < smallFrnd.length) {
            smallFrnd = friend;
        }
    }
    return smallFrnd;
}

const sampleStr = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestFriend = getSmallestFriend(sampleStr);
// console.log(smallestFriend);


/**Task-3:
Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000
    const mobilePrice = 20000;

    const laptopTotalMoney = laptopQuantity * laptopPrice;
    const tabletTotalMoney = tabletQuantity * tabletPrice;
    const mobileTotalMoney = mobileQuantity * mobilePrice;

    const totalRequiredMoney = laptopTotalMoney + tabletTotalMoney + mobileTotalMoney;
    return totalRequiredMoney;
}

const laptop = 1;
const tablet = 2;
const mobile = 2;
const moneyNeedToBuy = calculateElectronicsBudget(laptop, tablet, mobile);
// console.log(moneyNeedToBuy);


/**Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    // console.log(phones)
    let allPhonesPriceSum = 0;
    for (phone of phones) {
        // console.log(phone.price);
        allPhonesPriceSum += phone.price;
    }
    // console.log(allPhonesPriceSum);
    const totalPhoneQuantity = phones.length;
    // console.log(totalPhoneQuantity);
    const phonePriceAvg = allPhonesPriceSum / totalPhoneQuantity;
    return phonePriceAvg;
}

const avgPhonePrice = findAveragePhonePrice(phones);
// console.log(avgPhonePrice);


/**
Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
]; 

*/

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function emplSallary(employees) {
    // console.log(employees);

    for (const employee of employees) {
        if (employee.name === 'shahin') {
            if (isFinite(employee.experience)) {
                return employee.starting;
            } else {
                // console.log('shahin');
                const currentSallary = employee.increment * employee.experience;
                // console.log(currentSallary);
                const totalSallary = currentSallary + employee.starting;
                // console.log(totalSallary);
                const provideSallaryInAMonth = totalSallary / employee.experience;
                // console.log(provideSallaryInAMonth);
                return provideSallaryInAMonth;
            }
        } else if (employee.name === 'shihab') {
            if (isFinite(employee.experience)) {
                return employee.starting;
            } else {
                const currentSallary = employee.increment * employee.experience;
                const totalSallary = currentSallary + employee.starting;
                const provideSallaryInAMonth = totalSallary / employee.experience;
                // console.log(provideSallaryInAMonth);
                return provideSallaryInAMonth;
            }
        } else if (employee.name === 'shikot') {
            if (isFinite(employee.experience)) {
                return employee.starting;
            } else {
                const currentSallary = employee.increment * employee.experience;
                const totalSallary = currentSallary + employee.starting;
                const provideSallaryInAMonth = totalSallary / employee.experience;
                // console.log(provideSallaryInAMonth);
                return provideSallaryInAMonth;
            }
        } else if (employee.name === 'shohel') {
            if (isFinite(employee.experience)) {
                return employee.starting;
            } else {
                const currentSallary = employee.increment * employee.experience;
                const totalSallary = currentSallary + employee.starting;
                // const provideSallaryInAMonth = totalSallary / employee.experience;
                return provideSallaryInAMonth;
            }
        }
    }
}

const emplMonthlySallary = emplSallary(employees);
console.log(emplMonthlySallary);
