const images = document.querySelectorAll(".image-container img")



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if(!entry.isIntersecting) return

        // Pegando a imagem que disparou o evento 
        const image = entry.target
        image.src = image.src.replace("&w=10&" , "&w=1000&")

        observer.unobserve(image)
    })
}, {})



// Aplicando a função para cada elemento
images.forEach(image => {
    observer.observe(image)
}) 