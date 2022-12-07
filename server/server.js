// Sources: 
/**
 * From SCALABLE SCRIPTS: ok!!! they saved my day about Pusher ;)
 * for Server and nodemon: https://www.youtube.com/watch?v=pppwJ9gIrZ0
 * for Client: https://www.youtube.com/watch?v=SZlsP5uxYjk&list=PLlameCF3cMEuG8OahpX-E0I6JUCasZ2Mo&index=3&t=258s
 * for user registering: https://pusher.com/tutorials/social-network-javascript/#adding-pusher
 */

const express = require('express');
const cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
const Pusher = require('pusher');

const app = express();

// must use cookieParser before expressSession
app.use(cookieParser());

app.use(expressSession({
  secret:'<some-secret-token-here>',
  resave: true, 
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const pusher = new Pusher({
  appId: "1504222",
  key: "957e9dc4041b3817ed2f",
  secret: "70efac984d58d41ff8da", 
  cluster: "eu", 
  useTLS: true,
});


// app.post("http://localhost:5000/user-auth", (req, res) => {
//   // Replace this with code to retrieve the actual user id and info
//   const user = {
//     id: "some_id",
//     user_info: {
//       name: "John Smith",
//     },
//     watchlist: ['another_id_1', 'another_id_2']
//   };

//   const socketId = req.body.socket_id;
//   const channel = req.body.channel_name;
//   const presenceData = user.id;


//   // const authResponse = pusher.authenticateUser(socketId, user);
//   // res.send(authResponse);
//   const authResponse = pusher.authorizeChannel(socketId, channel, presenceData);
//   res.send(authResponse);
// });

// In the Client side, we make a request at this endpoint: fetch('http://localhost:5000/messages'
app.post('/messages', async (req, res) => {
  await pusher.trigger("channel", "message", {
    username: req.body.username,
    message: req.body.message
  });

  res.json([]);
})


// Error Handler for 404 Pages
app.use(function(req, res, next) {
  var error404 = new Error('Route Not Found');
  error404.status = 404;
  next(error404);
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening to port ${port}`);