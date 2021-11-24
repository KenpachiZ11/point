class Bg extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class = 'bg'></div>
        `
        // alert('connect')
    }
    generationRGB() {
        let getNumb = (max = 256, min = 0) => Math.floor(Math.random * (max - min) + min)
        let color = `rgb(${getNumb}, ${getNumb}, ${getNumb})`
        return color        
    }
    getColor () {
        let back = document.querySelector('.bg')
        back.style.background = this.generationRGB()
    }

}

export default Bg