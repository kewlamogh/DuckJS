class Duck {
    constructor (config) {
        this.parent = (config.appElement == "body" ? document.body : document.getElementById(config.appElement));
        document.title = config.title;
        for (var i in config.styles) {
            this.parent.style[i] = config.styles[i];
        }
        this.config = config
        this.vars = config.vars
    }
    newElement(elem, attrs, text, styles = this.config) {
        let editedComponent = text;
        for (var i in this.vars) {
            editedComponent = editedComponent.replace("{{"+i+"}}", this.vars[i])
        }

        let newElement = document.createElement(elem);
        for (var i in attrs) {
            newElement[i] = attrs[i];
        }
        newElement.innerText = editedComponent;

        console.log(newElement.href)
        this.parent.appendChild(newElement);
    }
}