// Specify your target dates
const lateWithdrawalDate = new Date("2023-12-15T00:00:00Z");
const courseEvaluationDate = new Date("2023-11-28T00:00:00Z");
const preFinalGradeDate = new Date("2023-11-27T00:00:00Z");
const schedulePreparationDate = new Date("2023-12-01T00:00:00Z");
const scheduleApprovalDate = new Date("2023-12-04T00:00:00Z");
const finalGradeDate = new Date("2023-12-19T00:00:00Z");
const appealCommissionDate = new Date("2023-12-19T00:00:00Z");
const theoreticalTrainingEndDate = new Date("2023-12-15T00:00:00Z");
const finalExamDate = new Date("2023-12-19T00:00:00Z");
const winterHolidaysDate = new Date("2023-12-30T00:00:00Z");
const applyForFXDate = new Date("2024-01-06T00:00:00Z");
const resitExamDate = new Date("2024-01-12T00:00:00Z");


// Function to calculate and display countdown
function updateCountdown(elementId, targetDate) {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById(elementId);
        countdownElement.innerHTML = `<p>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds remaining</p>`;
    } else {
        // Display a message when the date has passed
        const countdownElement = document.getElementById(elementId);
        countdownElement.innerHTML = `<p>The event has ended</p>`;
    }
}

// Update countdowns every second
setInterval(function () {
    updateCountdown("late-withdrawal-countdown", lateWithdrawalDate);
    updateCountdown("course-evaluation-countdown", courseEvaluationDate);
    updateCountdown("pre-final-grade-countdown", preFinalGradeDate);
    updateCountdown("schedule-preparation-countdown", schedulePreparationDate);
    updateCountdown("schedule-approval-countdown", scheduleApprovalDate);
    updateCountdown("theoretical-training-end-countdown", theoreticalTrainingEndDate);
    updateCountdown("final-exam-countdown", finalExamDate);
    updateCountdown("final-grade-countdown", finalGradeDate);
    updateCountdown("appeal-commission-countdown", appealCommissionDate);
    updateCountdown("winter-holidays-countdown", winterHolidaysDate);
    updateCountdown("apply-for-fx-countdown", applyForFXDate);
    updateCountdown("resit-exam-countdown", resitExamDate);
}, 1000);

