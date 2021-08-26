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
    "id": "anchor",
    "target": "_blank"
}, "{{maintext}} {{random number}} is a random number. Click here!", {
    "text-decoration": "none",
    "color": "blue"
});

duck._interactWithFlask("yeeterusmcyeetface")

duck.on("click", duck.id("anchor"), async () => {
    console.log("You went to replit.com BECAUSE OF MY A.");
    await new Promise(resolve => setTimeout(resolve, 20));
    duck.delAttr(duck.id("anchor"), "href")
});
