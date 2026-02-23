// Simple alert for booking button
function showAlert() {
    alert("Thank you! Our team will contact you soon.");
}

// Form submission handler
function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert("Thank you " + name + "! We have received your message.");
}