class Button extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', () => {
            alert('Hello')
        })
    }
}

export default Button