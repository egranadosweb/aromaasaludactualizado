
window.addEventListener("DOMContentLoaded", (event) => {


    //CERRAR MENU AL DAR CLICK EN OPCION
    const item_menu = document.querySelectorAll(".menu__item") || false
    

    //console.log(item_menu)

    item_menu.forEach((item ,index) => {
        item.addEventListener("click", (e) => {
            document.getElementById("menu__cortina").classList.remove("menu-activo")
        })
    })


    //CREAR ANCHOR TEXT LOCALES 
    const h1 = document.querySelector(".banner__h1") || null
    const link_beneficios = document.querySelector(".info__link-beneficios") || null
    if(h1 && link_beneficios){
        h1.addEventListener("click",(e) => {
        location.href = "#info"
        })

        link_beneficios.addEventListener("click",(e) => {
            location.href = "#beneficios"
        })
    }
    


    //SCRIPT PARA DETENER SCROLL
    const checkBoxMenu = document.getElementById("menu-bar")

    if (checkBoxMenu.checked) {
        //console.log("asdasds")
        //document.getElementById("menu__cortina").classList.add("menu-activo")
        document.body.classList.add("stop-scrolling")
    } else {
        document.getElementById("menu__cortina").classList.remove("menu-activo")
        document.body.classList.remove("stop-scrolling")
    }
    const disableScroll = (e) => {

        if (e.currentTarget.checked) {
            //console.log("asdasds")
            document.getElementById("menu__cortina").classList.add("menu-activo")
            document.body.classList.add("stop-scrolling")
        } else {
            //console.log("bbbb")
            document.getElementById("menu__cortina").classList.remove("menu-activo")
            document.body.classList.remove("stop-scrolling")
        }
    }
    checkBoxMenu.addEventListener("change", disableScroll)
    //








    // SCRIPT PARA CAMBIAR DE COLOR Y ESCONDER MENU
    const header = document.getElementById("seccionHeader")
    let lastY = 0;
    const y = window.scrollY;
    if (y > 200) {
        header.style.backgroundColor = "#009432"
    }

    window.addEventListener("scroll", (event) => {

        const y = window.scrollY;

        if (y > 200) {
            header.style.backgroundColor = "#009432"
        }
        if (y < 200) {

            header.style.backgroundColor = "transparent"
        }
        if (lastY > y) {
            //console.log(y)
            document.body.classList.remove("stop-scrolling")
            header.style.transform = "translateY(0px)"
        }
        if (y > 500 && lastY < y) {
            document.body.classList.remove("stop-scrolling")
            header.style.transform = "translateY(-200px)"
            document.getElementById("menu__cortina").classList.remove("menu-activo")
        }
        lastY = y
    })















    // SCRIPT PARA NOMBRAR PRODUCTOS RELACIONES
    const productoTitle = document.querySelector(".producto__titulo") || null
    const carouselTitleGroup = document.getElementsByClassName("carousel__title") || null
    let carouselTitle = null;

    if(productoTitle && carouselTitleGroup){
        for (let i = 0; i < carouselTitleGroup.length; i++) {
            if (carouselTitleGroup[i].offsetWidth > 0 || carouselTitleGroup[i].offsetHeight > 0) {
                carouselTitle = carouselTitleGroup[i]
            }
        }
    
        const fragment = document.createDocumentFragment();
        const textNode = document.createTextNode("Productos relacionados con " + productoTitle.textContent) || null
    
        fragment.appendChild(textNode)
        carouselTitle.appendChild(fragment)
        //console.log(carouselTitle)
    }
    
    // FIN


    //SCRIPT PARA INCLUIR MINIATURAS DE LOS DEMAS PRODUCTOS
    let carouselGrid = document.getElementsByClassName("carousel__grid") || false
    let contenedor = null

    if(carouselGrid.length > 1){
        //console.log(carouselGrid)
        for (let i = 0; i < carouselGrid.length; i++) {
            if (carouselGrid[i].offsetWidth > 0 || carouselGrid[i].offsetHeight > 0) {
                contenedor = carouselGrid[i]
            }
        }
        // carouselGrid.forEach((item,index) => {
        //     if(item.offsetWidth > 0 || item.offsetHeight > 0){
        //         const contenedor = item
        //     }
        // })
    
        const productos = [
            ["con Ganoderma de Gano Excel", "gano-cafe-clasic-con-ganoderma-gano-excel.webp", "gano-cafe-clasic-con-ganoderma-gano-excel.php", "Gano Cafe Clasic "],
    
            ["con Ganoderme de Gano Excel", "gano-cafe-3-en-1-con-ganoderma-gano-excel.webp", "gano-cafe-3-en-1-con-ganoderma-gano-excel.php", "Gano Cafe 3 en 1 "],
    
            ["con Ganoderma de Gano Excel", "gano-chocolate-con-ganoderma-gano-excel.webp", "gano-chocolate-con-ganoderma-gano-excel.php", "Gano Schokolade "],
    
            ["de Cordyceps de Gano Excel", "cordygold-capsulas-de-cordyceps-gano-excel.webp", "cordy-gold-capsulas-de-cordyceps-gano-excel.php", "Cordygold Capsulas "],
    
            ["de Gano Excel", "excellium-capsulas-gano-excel.webp", "excellium-capsulas-de-gano-excel.php", "Excellium Capsulas"],
    
            ["de Gano Excel", "capsulas-de-ganoderma-gano-excel.webp", "capsulas-ganoderma-lucidum-gano-excel.php", "Capsulas de Ganoderma "],
            
            ["con Spirulina de Gano Excel", "gano-cereal-con-spirulina-gano-excel.webp", "gano-cereal-con-spirulina-gano-excel.php", "Gano Cereal "],
            
            ["Gano Fresh de Gano Excel", "crema-dental-sin-fluor-gano-fresh-gano-excel.webp", "crema-dental-sin-fluor-gano-fresh-gano-excel.php", "Crema Dental sin Fluor "],
            
            ["con Ganoderma de Gano Excel", "shampoo-gano-excel-piel8brillo.webp", "gano-cafe-3-en-1-con-ganoderma-gano-excel.php", "Shampoo Piel8brillo "],
    
            ["con Ganoderma de Gano Excel", "acondicionador-gano-excel-piel8brillo.webp", "acondicionador-gano-excel-piel8brillo.php", "Acondicionador Piel8brillo "],
    
            ["con Ganoderma de Gano Excel", "exfoliante-natural-con-ganoderma-gano-excel.webp", "exfoliante-natural-con-ganoderma-gano-excel.php", "Exfoliante Peil8brillo "],
    
            ["con Ganoderma de Gano Excel", "ganorico-latte-rico-gano-excel.webp", "gano-cafe-3-en-1-con-ganoderma-gano-excel.php", "Ganorico Latte Rico "],
    
            ["con Ganoderma de Gano Excel", "ganorico-mocha-rico-gano-excel.webp", "gano-cafe-3-en-1-con-ganoderma-gano-excel.php", "Ganorico Mocha Rico "],
    
            ["con Ganoderma de Gano Excel", "gano-jabon-transparent-gano-excel.webp", "gano-jabon-transparent-gano-excel.php", "Gano Jabon Transparent "],
        ]
    
        let fragmentCarousel = document.createDocumentFragment()
    
        for (let i = 0; i < productos.length; i++) {
    
            const figure = document.createElement("figure")
            figure.setAttribute("class", "carousel__thumbnail")
    
            const imagen = document.createElement("img")
            imagen.setAttribute("class", "carousel__imagen")
    
            const caption = document.createElement("figcaption")
            caption.setAttribute("class", "carousel__caption")
    
            imagen.setAttribute("src", `img/productos/${productos[i][1]}`)
            imagen.setAttribute("height", "45px")
            imagen.setAttribute("loading", "lazy")
            caption.innerHTML = `<a class="carousel__link carousel__link--underline" href="${productos[i][2]}"><span class="carousel__link-strong">${productos[i][3]}</span>${productos[i][0]}</a>`
    
            figure.appendChild(imagen)
            figure.appendChild(caption)
    
            fragmentCarousel.appendChild(figure)
            contenedor.appendChild(fragmentCarousel)
    
        }
    }

    



})