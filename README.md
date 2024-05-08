# Robover

## Description
The Toy Robot Simulator is a React application that simulates a toy robot moving on a square tabletop of dimensions 5 units x 5 units. The robot can be placed on the table, moved around, and rotated in four directions: NORTH, SOUTH, EAST, and WEST. The application takes commands in the following format:

- PLACE X,Y,F: Places the toy robot on the table at position X,Y and facing the specified direction (NORTH, SOUTH, EAST, or WEST).
- MOVE: Moves the toy robot one unit forward in the direction it is currently facing.
- LEFT: Rotates the robot 90 degrees to the left without changing its position.
- RIGHT: Rotates the robot 90 degrees to the right without changing its position.
- REPORT: Displays the current position (X,Y) and facing direction (F) of the robot.
The application ensures that the robot does not fall off the table during movement and ignores commands that would cause it to fall.

## Assumption
 - South-West corner is taken as 0,0 origin
 - if size of box is 5 , then max index till robot can go is 4,4

## SAMPLE COMMANDS
 - PLACE 1 3 NORTH
 - MOVE
 - MOVE
 - LEFT
 - LEFT
 - REPORT

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
