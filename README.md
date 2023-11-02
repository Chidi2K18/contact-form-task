# Pre-interview task: Contact form

This exercise will test your understanding of HTML, CSS and JavaScript, particularly ES6 modules, DOM manipulation, and event handling. 

## Overview

You are provided with a simple contact form that has a couple of issues. Your task is to identify and fix them. 
The form has been built using pure HTML, CSS, and JavaScript, leveraging ES6 modules. Note no actual POST requests are made with this form: 
the task is to handle the pre-submission validation.

## Setup

### Requirements:

* Node (you can download it [here](https://nodejs.org/en/download)
* A modern web browser
* Your choice of IDE

### Instructions:

1. Clone the repository
```
git clone https://github.com/benpolhill/contact-form-task
cd contact-form-task
```
2. Install dependencies
```
npm install
```
This will install the `serve` package, which we're using to bypass CORS issues when using ES6 modules directly in browsers.

3. Start the local server
```
npx serve
```
Head to http://localhost:3000 and you'll see a web form. But, uh-oh! It should look like this:

<img width="725" alt="form-correct-style" src="https://github.com/benpolhill/contact-form-task/assets/39273900/4b34b9c6-de85-458d-9717-c0d41ba8c33a">

## Tasks

1. *Styling*: Your first task is to fix the form styling. (Hint: you may not need to write very much CSS!)
2. *Validation*: The form currently has some basic validation implemented, but it could be improved.
3. *State management*: The form should give feedback to users after they've successfully submitted it, and prevent them from submitting twice, but there's a bug here. Please fix it!
4. *Improvements*: You might like to suggest some general improvements to the validation method implemented here.

## Submission

After completing the task, commit your changes and push them to a new repository in your GitHub/GitLab/Bitbucket account. Please grant access to user `benpolhill` (if set as private) and email us the link to the repository by 10pm on the day prior to your interview. Good luck!

