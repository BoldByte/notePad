# notePad
## **Description**
This repository contains a simple yet effective NotePad application written in React Native and Expo. With the power of modern JavaScript, React, and Expo, it serves as a valuable tool for taking notes on the go. The NotePad app allows you to create new notes, to modify existing ones, and even to share them with your peers via the native sharing functionality of your device.

**Features and Functions**
Add Note: Easily add a new note by typing into the input field and clicking the "ADD" button.
Edit Note: Modify existing notes by clicking the "EDIT" button, which loads the note into the input field for editing. The "EDIT" button then turns into a "SAVE" button that you click to store your changes.
Delete Note: Delete any note by clicking the "DELETE" button next to the note.
Search Notes: Scrutinize the list of notes by typing into the search input field at the top. The notes list filter itself dynamically to match your search query.
Share Note: Share any note by clicking on the "Share" button. This feature uses the device's native share functionality.

**How to Install and Run with Expo**
To run the app with Expo, follow these instructions:
Clone this repository.
 git clone https://github.com/BoldByte/notePad.git

Change your directory to the cloned repo.
cd NotePad

Install the dependencies (ensure you have Node.js installed on your machine)
npm install

Install the Expo CLI (Command Line Interface)
npm install -g expo-cli

Run the app.
expo start

After the command expo start is executed, an Expo developer tools window will open in your default web browser. It will provide a QR code which you can scan using the Expo Go app on your iOS or Android device to see the app running live.

If you want to run the app on an emulator, on the Expo developer tools window, click on "Run on Android device/emulator" or "Run on iOS simulator."

**Areas for Future Development**
Note Persistence: Currently, notes are not persistent. Future improvements can include incorporating a backend database or local storage handlers for note storage.
Enhanced UI/UX: Though the current UI is clean and simplistic, improvements can be made for a richer user experience.
Syncing Notes: Implementing a cloud sync feature can help in accessing notes across multiple devices.

**Contributing**
Feel free to fork this repository and create pull requests for any improvements you made.

**About**
This project is developed by BoldByte. Reach me on boldbyte0@gmail.com
