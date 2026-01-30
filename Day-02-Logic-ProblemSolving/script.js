/* Problem 01: Profit & Tax Analyzer */
function calculateTax(income, expenses) {
    if (0 <= income && 0 <= expenses) {
        if (income >= expenses) {
            const remainingProfit = income - expenses;
            const monthlyTax = remainingProfit * .20;
            return monthlyTax;

        } else {
            return "Invalid Input";
        }
    } else {
        return "Invalid Input";
    }
}

/* Problem 02: Notification Message Generator */
function sendNotification(email) {
    if (email.includes('@')) {
        const emailParts = email.split('@');
        const userName = emailParts[0];
        const domainName = emailParts[1];

        const finalOutupt = `${userName} sent you an email from ${domainName}`;
        return finalOutupt;
    } else {
        return "Invalid Email";
    }
}

/* Problem 03: Digit Checker in Name */
function checkDigitsInName(name) {
    const regex = /\d/;
    if (regex.test(name)) {
        return true;
    } else if (typeof name !== 'string') {
        return "Invalid Input";
    } else {
        return false;
    }
}

/* Problem 04: Admission Score Calculation */
function calculateFinalScore(obj) {
    const familyFarmar = 20;

    if (typeof obj.name === 'string' && typeof obj.testScore === 'number' && typeof obj.schoolGrade === 'number' && typeof obj.isFFamily === 'boolean' && obj.testScore <= 50 && obj.schoolGrade <= 30) {

        if (obj.isFFamily) {
            const totalScore = obj.testScore + obj.schoolGrade + familyFarmar;
            if (totalScore >= 80) {
                return true;
            } else {
                return false;
            }
        }
        else if (typeof obj !== 'object') {
            return "Invalid Input";
        }
        else {
            const totalScore = obj.testScore + obj.schoolGrade;
            if (totalScore <= 80) {
                return false;
            }
        }

    }
    else {
        return "Invalid Input";
    }

}

/* Problem 05: Interview Waiting Time Predictor */
function waitingTime(waitingTimes, serialNumber) {

    if (Array.isArray(waitingTimes) && typeof serialNumber === 'number') {

        let allWatingTimeSum = 0;
        for (const time of waitingTimes) {
            allWatingTimeSum += time;
        }

        const totalCandidateInterviwed = waitingTimes.length;
        const avgInterviwedTime = Math.round(allWatingTimeSum / totalCandidateInterviwed);

        const remainingCanditates = (serialNumber - totalCandidateInterviwed) - 1;

        const totalWaitingTime = avgInterviwedTime * remainingCanditates;
        return totalWaitingTime;
    }
    else {
        return "Invalid Input";
    }

}
