const device1 = require ('../assets/device1.png');
const device2 = require("../assets/device2.png");
const device3 = require("../assets/device3.png");
const device4 = require("../assets/device4.png");
const iphone1 = require("../assets/iphone1.png");
const iphone2 = require("../assets/iphone2.png");
const iphone3 = require("../assets/iphone3.png");
const iphone4 = require("../assets/iphone4.png");


export default [
    {
        pathName: "roamhr",
        title: "Roam HR",
        subtitle: "latest work",
        paragraph: "Responsive design completed for a Fin Tech start up located in Columbus,OH.",
        imageLeft: true,
        image1: device1,
        image2: iphone1,
    },
    {
        pathName: "alpineconsulting",
        title: "Alpine Consulting",
        subtitle: "latest work",
        paragraph: "Design created for a web design and development consulting company in Columb,OH. ",
        imageLeft: false,
        image1: device3,
        image2: iphone3,

    },
    {
        pathName: "chatme",
        title: "Chat ME",
        subtitle: "latest work",
        paragraph: "Concept design for a chat app.",
        imageLeft: true,
        image1: device2,
        image2:iphone2,
    },
    {
        pathName: "winstonhall",
        title: "Winston Hall",
        subtitle: "latest work",
        paragraph: "Portfolio designed for a web developer in Westunion,OH.",
        imageLeft: false,
        image1: device4,
        image2:iphone4,
    },
]