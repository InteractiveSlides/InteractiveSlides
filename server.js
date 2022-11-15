//text to speech google translate


// We will use this to make HTTP request to the mp3 link
const axios = require("axios");
// adapters are axios modules that handle dispatching a request and settling a returned Promise once a response is received.
//end of text to speech google translate
// load the things we need
const cors = require('cors');

var express = require('express');
var app = express();
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(cors({
    origin: '*'
}));
// use res.render to load up an ejs view file

// index page 
const INPUT =
  "https://dcs.megaphone.fm/ADV3183643348.mp3?key=c3dc25ae82cc18218902aa6a0675798a";

app.get("/audio", (req, res) => {
  axios
    .get(INPUT, {
      responseType: "stream",
      adapter: httpAdapter,
      "Content-Range": "bytes 16561-8065611",
    })
    .then((Response) => {
      const stream = Response.data;

      res.set("content-type", "audio/mp3");
      res.set("accept-ranges", "bytes");
      res.set("content-length", Response.headers["content-length"]);
      console.log(Response);

      stream.on("data", (chunk) => {
        res.write(chunk);
      });

      stream.on("error", (err) => {
        res.sendStatus(404);
      });

      stream.on("end", () => {
        res.end();
      });
    })
    .catch((Err) => {
      console.log(Err.message);
    });
});

var video = [
    { id: 1, name: "clouds", url: "clouds.mp4"},
]

var sounds = [
    { id: 1, name: "dance1", url: "dance1.wav"},
    { id: 2, name: "danceA", url: "danceA.wav"},
    { id: 3, name: "danceE", url: "danceE.mp3"},
    { id: 4, name: "filler", url: "filler.wav"},
    { id: 5, name: "frog", url: "frog.wav"},
    { id: 6, name: "horse", url: "horse.wav"},
    { id: 7, name: "song", url: "song.mp3"},
];

var imagedata = [
    { id: 1, name: "ball", url: "ball.png"},
    { id: 2, name: "ballon", url: "ballon.png"},
    { id: 3, name: "balloon", url: "balloon.png"},
    { id: 4, name: "banana", url: "banana.png"},
    { id: 5, name: "bird", url: "bird.gif"},
    { id: 6, name: "bluepencils", url: "bluepencils.jpg"},
    { id: 7, name: "bulldozer", url: "bulldozer.png"},
    { id: 8, name: "bus", url: "bus.png"},
    { id: 9, name: "chair", url: "chair.png"},
    { id: 10, name: "cherry", url: "cherry.png"},
    { id: 11, name: "clock", url: "clock.png"},
    { id: 12, name: "cupcake", url: "cupcake.png"},
    { id: 13, name: "day", url: "day.png"},
    { id: 14, name: "dog", url: "dog.png"},
    { id: 15, name: "door", url: "door.png"},
    { id: 16, name: "door2", url: "door2.png"},
    { id: 17, name: "doorAjar", url: "doorAjar.png"},
    { id: 18, name: "doorAjar2", url: "doorAjar2.png"},
    { id: 19, name: "enlarge", url: "enlarge.png"},
    { id: 20, name: "fish", url: "fish.gif"},
    { id: 21, name: "flashlight", url: "flashlight.png"},
    { id: 22, name: "flowers", url: "flowers.png"},
    { id: 23, name: "foggypath", url: "foggypath.png"},
    { id: 24, name: "foresttrees", url: "foresttrees.png"},
    { id: 25, name: "frogdog", url: "frogdog.gif"},
    { id: 26, name: "front-bed", url: "front-bed.png"},
    { id: 27, name: "grapes", url: "grapes.png"},
    { id: 28, name: "green-highlight", url: "green-highlight.png"},
    { id: 29, name: "greentree", url: "greentree.png"},
    { id: 30, name: "halfbus", url: "halfbus.png"},
    { id: 31, name: "halfhook", url: "halfhook.png"},
    { id: 32, name: "hearts", url: "hearts.png"},
    { id: 33, name: "hole", url: "hole.png"},
    { id: 34, name: "hook", url: "hook.png"},
    { id: 35, name: "jungle", url: "jungle.jpg"},
    { id: 36, name: "ladder", url: "ladder.png"},
    { id: 37, name: "lunchbag", url: "lunchbag.png"},
    { id: 38, name: "mask1", url: "mask1.png"},
    { id: 39, name: "mirage", url: "mirage.gif"},
    { id: 40, name: "monkey", url: "monkey.png"},
    { id: 41, name: "mountains", url: "mountains.jpg"},
    { id: 42, name: "mountainsTr", url: "mountainsTr.png"},
    { id: 43, name: "muffs", url: "muffs.png"},
    { id: 44, name: "muffs2", url: "muffs2.png"},
    { id: 45, name: "ocean", url: "ocean.png"},
    { id: 46, name: "orangetree", url: "orangetree.png"},
    { id: 47, name: "question2", url: "question2.png"},
    { id: 48, name: "reading", url: "reading.png"},
    { id: 49, name: "response", url: "response.png"},
    { id: 50, name: "school", url: "school.png"},
    { id: 51, name: "schoollunch", url: "schoollunch.png"},
    { id: 52, name: "sleep", url: "sleep.png"},
    { id: 53, name: "soda", url: "soda.png"},
    { id: 54, name: "sound-off", url: "sound-off.png"},
    { id: 55, name: "sound-on", url: "sound-on.png"},
    { id: 56, name: "strawberry", url: "strawberry.png"},
    { id: 57, name: "summer-stuff", url: "summer-stuff.png"},
    { id: 58, name: "teacher", url: "teacher.png"},
    { id: 59, name: "teacherMask", url: "teacherMask.png"},
    { id: 60, name: "tear", url: "tear.png"},
    { id: 61, name: "teehee", url: "teehee.png"},
    { id: 62, name: "thought", url: "thought.png"},
    { id: 63, name: "tigermask", url: "tigermask.png"},
    { id: 64, name: "toychest", url: "toychest.png"},
    { id: 65, name: "toy-horse", url: "toy-horse.png"},
    { id: 66, name: "toys", url: "toys.png"},
    { id: 67, name: "tree2", url: "tree2.png"},
    { id: 68, name: "tree3", url: "tree3.png"},
    { id: 69, name: "tree4", url: "tree4.png"},
    { id: 70, name: "undersea", url: "undersea.jpg"},
    { id: 71, name: "unicorn", url: "unicorn.png"},
    { id: 72, name: "warren", url: "warren.png"},
    { id: 73, name: "water", url: "water.png"},
    { id: 74, name: "water2", url: "water2.png"},
    { id: 75, name: "watercolorland1", url: "watercolorland1.jpg"},
    { id: 76, name: "watercolour-bg", url: "watercolour-bg.jpg"},
    { id: 77, name: "waterfall", url: "waterfall.jpg"},
    { id: 78, name: "window", url: "window.png"},
    { id: 79, name: "woods", url: "woods.jpg"},
    { id: 80, name: "write-bear", url: "write-bear.png"},
];

app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/images.html', function(req, res) {
    res.render('pages/images', {images: imagedata});
});

app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.get('/form', function(req, res) {
    res.render('pages/form', {images: imagedata, sounds: sounds, video: video});
});

app.get('/keynote', function(req, res) {
    res.render('pages/keynote');
});

app.get('/components', function(req, res) {
    res.render('pages/components');
});

app.get('/dashboard', function(req, res) {
    res.render('pages/dashboard');
});

app.get('/profile', function(req, res) {
    res.render('pages/profile');
});

app.get('/register', function(req, res) {
    res.render('pages/register');
});

app.get('/user', function(req, res) {
    res.render('pages/user');
});

app.get('/home', function(req, res) {
    res.render('pages/home');
});

app.get('/icons', function(req, res) {
    res.render('pages/icons');
});

app.get('/maps', function(req, res) {
    res.render('pages/maps');
});

app.get('/notifications', function(req, res) {
    res.render('pages/notifications');
});

app.get('/tables', function(req, res) {
    res.render('pages/tables');
});

app.get('/views', function(req, res) {
    res.render('pages/views');
});

app.get('/typography', function(req, res) {
    res.render('pages/typography');
});

app.get('/rtl', function(req, res) {
    res.render('pages/rtl');
});

app.listen(8080);
console.log('8080 is the magic port');
