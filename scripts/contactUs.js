// Get the form element
const formEl = document.getElementById("contact-form");

/**
 * Add event listener "submit" to form element
 * @param {Event} event - The event object representing the form submission
 */
formEl.addEventListener("submit", async (event) => {
    // Prevent page refresh - form's default behavior
    event.preventDefault();

    // Get values from the form input fields
    const contactName = event.target.contactName.value;
    const contactEmail = event.target.contactEmail.value;
    const contactText = event.target.contactText.value;

    // // Check if name and comment values are not empty or just whitespace
    if (contactName.trim() !== "" && contactText.trim() !== "" && contactEmail.trim() !== "") {
        alert("Hello " + contactName + "! Thanks for your message! We will get back to you shortly. ");
    }
    // Reset the form inputs
    formEl.reset();
  });