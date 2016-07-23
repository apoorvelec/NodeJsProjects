Welcome to the Chat App version 1.1!

This is a chat application based on Node.JS language. It makes use of the popular Node.JS packages like Express and Socket.io. Please follow the following easy steps to run it on your system:

	Step 1} Install Node.JS: This is very easily done and can be found on the net anywhere (TODO: add procedure anyway). You have to download the node installer from its official site and just follow what it says.

	Step 2} Download this example from GitHub: Just use "git clone git_clone_url" in your command line and the files will be downloaded automatically.

	Step 3} Change the directory to chat-example1.1. Then execute the command "node server.js" and you are done to use the Web chat application!

	Step 4} Open a browser (like Chrome etc.) and type in the address "localhost:3000" and start chatting away.


Here is an illustration of the chat app when it runs properly:

After you have typed in "localhost:3000" in the browser, you will see the following page where you can assign yourself a username for the chat,

<br /><img src="https://github.com/apoorvelec/NodeJsProjects/blob/master/chat-example1.1/images/UsernamePage.png" alt="Chat username page.png">

After you type in your username (eg: Newuser1) as shown below, press the Go button ... 

<br /><img src="https://github.com/apoorvelec/NodeJsProjects/blob/master/chat-example1.1/images/UsernameAssigned.png" alt="Chat after login.png">

Pressing the Go button will log you in to the Chattr web application and you will see your chat dashboard as in the picture below,

<br /><img src="https://github.com/apoorvelec/NodeJsProjects/blob/master/chat-example1.1/images/AfterLogIn.png" alt="Chat app dashboard.png">

The chat dashboard is very simple. The text box area at the top is used to type in messages. The send button adjacent to this text box sends the message to all users logged in to the chat app (in short this send button broadcasts the message). On the top right corner of the dashboard is a square button which shows you the number of online users currently logged in to Chattr. Since till this step you are the only active user, the number in the button shows 1. In order to add another user, open another browser window and point it to "localhost:3000", give a username (eg: Newuser2) and press Go. Once this is done, your dashboard (corresponding to Newuser1) will immediately show 2 online users. You can also get the names of the online users by hovering on the button, as shown below,

<br /><img src="https://github.com/apoorvelec/NodeJsProjects/blob/master/chat-example1.1/images/ShowActiveUsers.png" alt="show active users.png">

Chattr also contains functionality for private messaging. From the dashboard of Newuser1, hover over the top-right button and click on Newuser2, which will direct to another dashboard which looks like the following,

<br /><img src="https://github.com/apoorvelec/NodeJsProjects/blob/master/chat-example1.1/images/PrivateMessage.png" alt="private message dashboard.png">

From this dashboard any message sent will be sent only to Newuser2 and will be accessible to Newuser2 from the respective private dashboard,

<br /><img src="https://github.com/apoorvelec/NodeJsProjects/blob/master/chat-example1.1/images/PrivateMessageEx.png" alt="private message example">

TODO: More detailed explanation to be added shortly.
