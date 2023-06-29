# Password Generator

This is a web application that generates random passwords based on user preferences. You can choose the length of the password, and whether to include lowercase letters, uppercase letters, numbers, and special characters. The application will generate a password that meets your criteria and display it on the screen. You can also copy the password to your clipboard with one click.

## How to use

To use this application, simply open the index.html file in your browser. You will see a web page with a title, a button, and some inputs. Follow these steps to generate a password:

- Enter the desired length of the password in the input box labeled "Length". The length must be between 8 and 128 characters.
- Check or uncheck the boxes labeled "Lowercase", "Uppercase", "Numeric", and "Special" to indicate whether you want to include those types of characters in your password. You must select at least one type of character.
- Click the button labeled "Generate Password". A random password that meets your criteria will appear in the textarea below the button.
- Click the button labeled "Copy to Clipboard" to copy the password to your clipboard. You can then paste it wherever you need it.

## How it works

This application uses JavaScript to generate random passwords. The main logic is in the script.js file, which contains the following components:

- A set of variables that store the possible characters for each type (lowercase, uppercase, numeric, and special).
- A function called generatePassword that takes the user preferences as parameters and returns a random password as a string. The function uses a loop and a conditional statement to create an array of characters that match the user criteria, and then uses another loop and a random number generator to select characters from that array and concatenate them into a password.
- A function called copyPassword that copies the password from the textarea to the clipboard using the execCommand method.
- An event listener that triggers the generatePassword function when the user clicks the "Generate Password" button, and displays the result in the textarea.
- Another event listener that triggers the copyPassword function when the user clicks the "Copy to Clipboard" button, and shows an alert message.

The HTML code in the index.html file defines the structure and appearance of the web page. It uses elements such as headings, buttons, inputs, labels, and a textarea to create a simple user interface. It also links to the script.js file and a style.css file that contains some basic styling rules.

# Website Link
https://cidherp2.github.io/PasswordGenerator/

# Screenshots
![Alt text](/assets/foto1.png?raw=true "Optional Title")
![Alt text](/assets/foto2.png?raw=true "Optional Title")
![Alt text](/assets/foto3.png?raw=true "Optional Title")
![Alt text](/assets/foto4.png?raw=true "Optional Title")
![Alt text](/assets/foto5.png?raw=true "Optional Title")
![Alt text](/assets/foto6.png?raw=true "Optional Title")
![Alt text](/assets/foto7.png?raw=true "Optional Title")
![Alt text](/assets/foto8.png?raw=true "Optional Title")
![Alt text](/assets/foto9.png?raw=true "Optional Title")