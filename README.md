# Senior-Project-UI

Overview: Basic graphical user interface for the control of a 5-axis robotic arm, build with electron.

Details:
- Uses JS/HTML/CSS with Node.JS in Electron to define a cross-platform desktop GUI.
- Two schemes exist, one with sliders for the position of each axis of the arm, and one with sliders for the x, y, z coordinated of the end effector.
  - Files ending in "_1" are for the first scheme (5 axis), files ending in "_2" are for the second scheme (x, y, z)
  - Selecting the correct index file in main.js will switch between the schemes
- N_API used to interface with a C++ script that does basic operations. This is a proof of concept that information can be sent to and received from a C++ script.
- The dummy C++ script takes the place of a C++ driver for the robotic arm, which is in development.
