class Bg extends HTMLElement {

    generationRGB() {
        const getNumb = (max = 256, min = 0) => Math.floor(Math.random() * (max - min) + min)
        let color = `linear-gradient(45deg, 
            rgb(${getNumb()}, ${getNumb()}, ${getNumb()}), 
            rgb(${getNumb()}, ${getNumb()}, ${getNumb()}),
            rgb(${getNumb()}, ${getNumb()}, ${getNumb()})
        )`
        return color        
    }
    getColor() {
        let back = this.querySelector('.bg')
        back.style.background = this.generationRGB()
        // console.log(this.generationRGB());
    }
    getFace() {
        let face = document.querySelector('.face')
        let image = [
            'https://pngimg.com/uploads/face/face_PNG11761.png',
            'https://pngimg.com/uploads/face/face_PNG11756.png',
            'https://pngimg.com/uploads/face/face_PNG11752.png',
            'https://pngimg.com/uploads/face/face_PNG5669.png',
            'https://pngimg.com/uploads/face/face_PNG5663.png',
            'https://pngimg.com/uploads/face/face_PNG5648.png'
        ]
        
        face.src = image[Math.floor(Math.random() * image.length)]
    }

    

    connectedCallback() {
        this.innerHTML = `
            <div class = 'bg'>
                <img class = 'face'></img>
            </div>

            <button class = 'btn'> Поменяй меня </button>
            <input placeholder = 'Напиши, что - то' class = 'input' type = 'text'>
        `
        this.querySelector('.input').addEventListener('change', () => {
            let txt = document.querySelector('.input').value
            this.querySelector('.bg').innerHTML += txt
        })
        this.getColor()
        this.getFace()
        this.querySelector('.btn').addEventListener('click', () => {
            this.getColor()
            this.getFace()
        })
    }
}

export default Bg