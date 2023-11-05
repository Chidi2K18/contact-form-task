export const messageContent = {
	"success": "Your form has been successfully submitted!",
	"error": "There was a validation error. Please check your input!",
	"alreadySubmitted": "You have already submitted this form!",
    "emailValidationFailed": "Your email is invalid. Please check your input and try again",
    "messageEmpty":"Your message field is empty"
};

/**
 * I've added more specific error messages 
 * If email validation fails then an error message specific to emails is triggered
 * If message validation fails then an error message speciic to messages is triggered
 */

let successState = false;

// Getter function for successState
export function getHasSubmitted() {
    return successState;
}

// Setter function for successState
export function setHasSubmitted(value) {
    successState = value;
}

/**
 * - `getHasSubmitted` was being called as a boolean instead of as a function, missing '()' 
 *   so it was being treated as an object and non-null objects evaluate to true.
 * - `setHasSubmitted(true)` (done in validate form) should be called on a successful submission before getting its state.
 * - Additionally, the `showSuccessMessage` function should not require either the getter or setter functions 
 *   as its purpose is to change output based on the state on submission.
 */

/**
 * I've added an extra parameter to enable specific error messages passed from validate form on failed submission
 * The corresponding error message would be passed and displayed
 */
export function showSuccessMessage(didSucceed, errorMessage = messageContent.error) { 
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-btn');

    if (didSucceed) {
        modalMessage.textContent = messageContent.success;
    } else {
        modalMessage.textContent = errorMessage;
    }

    modal.style.display = "block";

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
