export default {
    render(pr) {
        return `
            ${this.html(pr)}
            ${this.css(pr)}
        `
    },
    html(pr) {
        return `

        `
    },
    css(pr) {
        return `
            <style>
                .bacground-image {
                    width: 100px;
                    height: 100px;
                    border: 1px solid
                }
            </style>
        `
    }
}