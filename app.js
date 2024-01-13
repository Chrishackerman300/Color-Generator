document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const display = document.querySelector('#display-code')
    const button = document.querySelector('#btn')

    //Generador color hexadecimal
    function colorGenerator(){
        const code = '0123456789ABCDEF'
        let colorHexa = '#'

        for(let i = 0; i < 6; i++){
            let index = Math.floor(Math.random() * 16)

            colorHexa+= code[index]
        }

        return colorHexa
    }

    button.addEventListener('click', () => {
        let nuevoColor = colorGenerator()
        display.textContent = nuevoColor

        document.body.style.backgroundColor = nuevoColor
    })
})