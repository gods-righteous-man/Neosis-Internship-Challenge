Steps to download and install necessary dependencies for execution:
* Install node from https://nodejs.org/en/
* Install the p5.js javascript library using the following command:
   *  sudo npm install p5-manager -g
* To check if the library p5 has been installed, enter the following command and check if you get the version of the p5 library as an output:
   * p5
* Navigate to the working  directory of the project.
* Install a server for running your files using the following command:
   * sudo npm install -g http-server
* To start the server, use the following command:
   * http-server
* The index.html file in the project starts running on the local server. Copy the url which is generated when you run the previous command and paste it into the browser.
* For reference please have a look at the the following video:
   * 1.2: p5.js Workflow - p5.js Tutorial


Description of the project:
* The project is built using the p5.js javascript library that gives us the liberty to create artistic and creative designs models and use our imagination for using the screen as a canvas.
* Here the project folder is named as ‘secondproject’ that contains an html file(‘index.html’), a javascript file (‘sketch.js’), the file containing the input (‘object.txt’) and some other libraries.
* All of the coding has been done in the ‘sketch.js’ file.


Explanation of the code:
* Here, object-oriented design methodology has been used for writing the code.
* There is a class named ‘Sketch’ which contains all the required methods and variables that are used in the code. Also there is an object named ‘sketch’ of the same class that has been created in order to design our model.
* The significance of using the object oriented design is that it helps us organize the code and makes reusing of components easier.
* The input of the code is read from the file ‘object.txt’.
* When executed, we are able to see a 3-dimensional figure on the screen which rotates on pressing and dragging the mouse button as per the instructions provided.