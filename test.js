let duck = new Duck({
    appElement: "body",
    title: "hello world!",
    styles: {
        "color": "red",
        "background-color": "black"
    },
    vars: {
        "maintext": "Hello World!!",
        "random number": Math.round(Math.random() * 600)
    }
})

duck.newElement("a", {
    "href": "https://replit.com",
    "id": "anchor"
}, "{{maintext}} {{random number}} is a random number. Click here!", {
    "text-decoration": "none",
    "color": "blue"
})

duck.on("click", duck.id("anchor"), () => {
    console.log("Lol.")
});