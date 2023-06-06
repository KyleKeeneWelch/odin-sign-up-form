# Odin Sign-Up Form
This project is a project undertaken as part of `The Odin Project` learning web course teaching `HTML`, `CSS` and `JavaScript` skills. It involved putting into practice the teachings of `JavaScript` taught in the previous lessons and required the active use of research and preparation to find the correct JavaScript methods to use.

The use of JavaScript is highly introduced within this project to demonstrate my skills in DOM methods and the manipulation of `HTML` and `CSS` from `JavaScript`. The `Sign Up Form` uses JavaScript and `event listeners` to detect when the user enters into the several fields in the form and to validate the input to ensure it meets all the validation rules and restrictions. These rules and restrictions are applied through checks from the built-in `constrain validation API` which will test the input and return a boolean value. The result of a falsy value will cause the script to alter the text content and display of an error message to show the violated rule for the user to make changes. Where the form is not valid, JavaScript uses `preventDefault()` to prevent the form from being sent off as a Http POST Request. **Note: Project aims to indulge in the validation and creation of the form and does not handle the request. Please visit [Odin-Landing-Page](https://kylekeenewelch.github.io/my-site/html/css/js/php/xampp/web/2023/05/17/odin-landing-page.html) for an example that handles a request.**

## Features

- **Preventing Form Submittion When Invalid** - The web page in a realistic scenario would avoid the overhead of unecessary server requests by preventing the form from being submitted when it is invalided. 

- **Displaying Messages For Violated Validation Rules** - Through the use of event listeners, the form is capable of displaying messages by checking user input upon entry. The message displayed will depend on the check failed by the form and is removed once it no longer fails. 

- **Constrain Validation API** - To perform such checks we use the Constrain Validation API as a quick and easy way to check the validity of form inputs. We decide upon the rules we want to enforce on a particular input, state these in HTML, then perform our own validation using the functions provided by the API.

- **Appealing Design and Business Sign Up Page** - Maintains an appealing design and structure that is typical of popular business sign up pages and form elements. 