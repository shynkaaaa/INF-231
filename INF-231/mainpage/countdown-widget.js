document.addEventListener('DOMContentLoaded', function () {
    // Update the countdown every 1 second
    setInterval(function () {
        // Get the selected date and time from the input fields
        const selectedDate = document.getElementById('datepicker').value;
        const selectedHour = document.getElementById('date_hour').value;
        const selectedMinute = document.getElementById('date_minute').value;
        const selectedTimeZone = document.getElementById('countdown_widget_timezone').value;

        // Check if input values are valid, otherwise, use default values
        const hour = parseInt(selectedHour) || 0;
        const minute = parseInt(selectedMinute) || 0;
        const timeZone = parseInt(selectedTimeZone) || 0;

        // Calculate the local date and time
        const localDate = new Date(selectedDate + ' ' + hour + ':' + minute);

        // Calculate the UTC date and time
        const utcDate = new Date(localDate.getTime() + timeZone * 60 * 60 * 1000);

        // Get the timestamp of the countdown date in milliseconds
        const countdownDate = utcDate.getTime();

        // Calculate time difference
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown display
        document.querySelector('.countdown-title').textContent = document.getElementById('countdown_widget_title').value || "Event Countdown";
        document.querySelector('.days').textContent = formatTime(days);
        document.querySelector('.hours').textContent = formatTime(hours);
        document.querySelector('.minutes').textContent = formatTime(minutes);
        document.querySelector('.seconds').textContent = formatTime(seconds);
        document.querySelector('.countdown-date').textContent = formatDate(countdownDate);
    }, 1000);

    // Format time with leading zeros
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    // Format date as "Month day, Year"
    function formatDate(date) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
    }
});
