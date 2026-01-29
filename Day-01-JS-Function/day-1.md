
#  Day - 01

**Date:** January 29, 2026
**Topic:** JavaScript Functions & Array Objects
**Status:** Completed Tasks 1-4 (Task 5 pending)

---

## Problem Solving Summary

Ami ajke JavaScript functions and loops use kore total 5-ti problem solve korar chestha korechi. Er moddhe prothom 4-ti task ami smoothly complete korte perechi, kintu 5th task-ti amar kache ektu difficult mone hoyeche.

### ✅ Task 1: Find the Lowest Number
- **Objective:** Array theke shobchye choto number-ti khuje ber kora.
- **Approach:** Prothome array-r 1st element-ke `lowNum` dhore loop chaliye shobar sathe compare korechi.

### ✅ Task 2: Find the Smallest Name
- **Objective:** Friends list theke shobcheye choto namti (character length) ber kora.
- **Approach:** String-er `.length` property use kore comparison loop chaliyechi.

### ✅ Task 3: Electronics Budget Calculator
- **Objective:** Laptop, Tablet, and Mobile-er quantity input niye total budget calculate kora.
- **Approach:** Proti-ti item-er fixed price-er sathe quantity gun (multiply) kore jog korechi.

### ✅ Task 4: Average Phone Price
- **Objective:** Array of objects theke phone-er average price ber kora.
- **Approach:** Loop chaliye object-er `price` property gulo sum kore array length diye vag korechi.

### ❌ Task 5: Employee Monthly Salary (Hard)
- **Status:** Not Completed.
- **Note:** "1-4 ta task smoothly korechi kuno problem hoy nai, but 5 no task ta ami pari ni and future a try korbo."

---

## 💻 Day 01 Source Code

```javascript
/** Task -1: Find lowest number */
function findLowestNumber(numbers) {
    let lowNum = numbers[0];
    for (let number of numbers) {
        if (number < lowNum) {
            lowNum = number;
        }
    }
    return lowNum;
}

/** Task -2: Find the friend with the smallest name */
function getSmallestFriend(friends) {
    let smallFrnd = friends[0];
    for (let friend of friends) {
        if (friend.length < smallFrnd.length) {
            smallFrnd = friend;
        }
    }
    return smallFrnd;
}

/** Task-3: Calculate electronics budget */
function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    return (laptopQty * laptopPrice) + (tabletQty * tabletPrice) + (mobileQty * mobilePrice);
}

/** Task-4: Average Phone Price */
function findAveragePhonePrice(phones) {
    let sum = 0;
    for (let phone of phones) {
        sum += phone.price;
    }
    return sum / phones.length;
}

// Log results for checking
console.log("Lowest Number:", findLowestNumber([167, 190, 120, 165, 137, 20]));
console.log("Smallest Friend:", getSmallestFriend(['rahim', 'robin', 'rafi', 'ron', 'rashed']));
console.log("Total Budget:", calculateElectronicsBudget(1, 2, 2));
console.log("Average Price:", findAveragePhonePrice([
    { model: "PhoneA", price: 95000 },
    { model: "PhoneB", price: 40000 },
    { model: "PhoneC", price: 26000 }
]));