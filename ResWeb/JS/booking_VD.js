function submitBooking() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const bookingDetails = `
        <h2>Booking Details:</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
    `;

    const bookingDetailsElement = document.getElementById("bookingDetails");
    bookingDetailsElement.innerHTML = bookingDetails;

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    const opacity = 0;
    const interval = 10;
    const duration = 1000; 

    function fadeIn() {
        const timer = setInterval(function () {
            opacity += interval / duration;
            if (opacity >= 1) {
                clearInterval(timer);
            }
            successMessage.style.opacity = opacity;
        }, interval);
    }

    fadeIn();
}