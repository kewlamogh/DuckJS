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

        for (var i in styles) {
            newElement.style[i] = styles[i];
        }

        newElement.innerText = editedComponent;
        this.parent.appendChild(newElement);
    }

    id(id) {
        return document.getElementById(id)
    }

    on(evt, el, f) {
        let func = f;
        if (typeof f == "string") {
            func = () => {
                eval(f);
            };
        }
        el.addEventListener(evt, f);
    }
    setAttr(el, prop, val) {
        el[prop] = val;
    }
    getAttr(el, prop) {
        return el[prop];
    }
    delAttr(el, prop) {
        delete el[prop]
    }
}