const btn = document.querySelector('#btn')!

btn.addEventListener('click', () => {
  console.log('Btn clicked!')
})

function multiple(a: number, b: number) {
    if (a && b) {
        return a * b
    }
}