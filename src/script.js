const images = document.querySelectorAll(".image-container img")
const containerImage = document.querySelectorAll(".image-container")


// Observação da imagem 
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if(!entry.isIntersecting) return
            
        // Pegando a imagem que disparou o evento 
        const image = entry.target 
        image.src = image.src.replace("&w=10&" , "&w=1000&")

        // Pede pro observador parar de observar
        observer.unobserve(image)
    })
}, {})



// Aplicando a função para cada elemento
images.forEach(image => {
    observer.observe(image)
}) 


// Observação do container da imagem
const observeContainer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active')
        }
    })
}, {
    // Se o item existe um pouco vísivel na tela já vai funcionar
    threshold : 0.5,
})


// Aplicando a função para os containers 
containerImage.forEach(container => {
    observeContainer.observe(container)
})