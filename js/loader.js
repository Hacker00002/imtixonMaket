window.addEventListener('DOMContentLoaded', () => {
    const loader2 = document.querySelector('.loader2')

    setTimeout( () => {
        loader2.style.opacity = '0'
        setTimeout(() => {
            loader2.style.display = 'none'
        }, 500)
    }, 6000)
})