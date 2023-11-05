import { showSuccessMessage, setHasSubmitted, getHasSubmitted, messageContent } from './showMessage.js';

export function validate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        
        /**
         * Checking for no whitespace before '@' 
         * Checking for '@' symbol 
         * Checking for '.' after the '@' 
         * Checking for no whitespace after '@' 
         */
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
        let isValid = true;
        let errorMessage = '';

        //Check if the input matches with the regex pattern
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage = messageContent.emailValidationFailed; //display the specific message
        }
        //Check if message field is empty
        else if (!message.trim()) {
            isValid = false;
            errorMessage = messageContent.messageEmpty; //display the specific message
        }

         // If the form has already been submitted successfully
         if (getHasSubmitted()) {
            showSuccessMessage(false, messageContent.alreadySubmitted); //the already submitted error message will trigger on subsequent submissions
            return;
        }

        // If both email and message are valid and the form has not been submitted before
        if (isValid) {
            setHasSubmitted(true); // form has been submitted
            showSuccessMessage(true);
        } else {
            showSuccessMessage(false, errorMessage); //return the specific error message
        }

    });
}
