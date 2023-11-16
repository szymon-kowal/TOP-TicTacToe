# Tic Tac Toe Game

## Overview

This project involves creating a Tic Tac Toe game that can be played in a web browser. The primary technologies used are HTML, CSS, and JavaScript.

## Project Structure

The project is organized into HTML, CSS, and JavaScript files. The code follows the module pattern (IIFE) to minimize global code and encapsulate functionality within factories.

### Gameboard Object

The gameboard is represented as an array inside a Gameboard object. The goal is to keep the logic within the game, player, and gameboard objects to ensure a clean and modular codebase.

### Player Objects

Players are stored as objects, contributing to the encapsulation of game-related functionalities.

### Game Control

An object controls the flow of the game, managing game logic and ensuring minimal global code.

## Development Steps

1. **Setup:**
   - Initialize the project with HTML, CSS, and JavaScript files.
   - Set up the Git repository.

2. **Game Logic:**
   - Implement the gameboard as an array within a Gameboard object.
   - Use factories to encapsulate game-related logic.
   - Ensure minimal global code by using the module pattern (IIFE).

3. **Console Game:**
   - Focus on creating a working game in the console.
   - Implement logic to check for winning 3-in-a-rows and ties.

4. **Display/DOM Logic:**
   - Create an object to handle display/DOM logic.
   - Write a function to render the gameboard array on the webpage.

5. **User Interaction:**
   - Develop functions to allow players to add marks to specific spots by interacting with DOM elements.
   - Implement logic to prevent players from playing in already taken spots.

6. **Interface Cleanup:**
   - Enhance the interface to include player name input.
   - Add a button for starting/restarting the game.
   - Include a display element showing results upon game end.

## Getting Started

To run the game, open the `index.html` file in your preferred web browser.

Happy coding!

Live at : https://szymon-kowal.github.io/TOP-TicTacToe/
