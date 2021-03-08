/*==========BACK TOT TOP (retour haut de page) ==========*/
//POUR AFFICHER LE BOUTON RETOUR QUAND ON SCROLL

//la variable backToTopBtn va récupérer la class back-to-top
let backToTopBtn = document.querySelector('.back-to-top')
    //au scroll on déclenche la fonction flêché
window.onscroll = () => {
        //body.scrollTop qui correspond au nombre de pixels dont le contenu body.scrollTop a défilé vers le haut.
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = 'flex'
        } else {
            backToTopBtn.style.display = 'none'
        }
    }
    /*==================== SHOW MENU / MENU D'AFFICHAGE ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    //Valider l'existence des variables
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            // Nous ajoutons la classe show-menu à la balise div avec la classe nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE / SUPPRIMER LE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        // Lorsque nous cliquons sur chaque lien de navigation, nous supprimons la classe de menu d'affichage
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK / FAIRE DÉFILER LES SECTIONS LIEN ACTIF ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            /*on ajoute la class active sur le lien a href, et il se passe quelque chose en css...ex: on change la couleur du lien*/
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER / MODIFIER L'EN-TÊTE DE FOND ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        // Lorsque le défilement est supérieur à 200 viewport height, ajouter la classe scroll-header à la balise d'en-tête, il se passe quelque chose en css....ex: on rajoute une ombre ou un background color si un scroll est sup à 200.
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== DARK LIGHT THEME / THÈME DE LA LUMIÈRE NOIRE ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
// Thème précédemment choisi (si l'utilisateur l'a choisi)
//La méthode getItem() de l'interface Storage renvoie la valeur associée à la clé passée en paramètre.
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
// On obtient le thème actuel que possède l'interface en validant la classe de thème noir
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
// Nous validons si l'utilisateur a déjà choisi un sujet
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    // Si la validation est effectuée, nous demandons quel était le problème pour savoir si nous avons activé ou désactivé l'obscurité
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
// Activer / désactiver le thème manuellement avec le bouton
themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        // Ajouter ou supprimer le thème sombre / icône
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            // Nous sauvegardons le thème et l'icône courante que l'utilisateur a choisis
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
    /*========== projet CATEGORY ==========*/
    //POUR AFFICHER SEULEMENT PAR RAPPORT AU CATEGORY

let projetMenuList = document.querySelector('.projet-item-wrap')

let projetCategory = document.querySelector('.projet-category')

let categories = projetCategory.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = projetCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        projetMenuList.classList = 'projet-item-wrap ' + e.target.getAttribute('data-projet-type')
    }
})

/*========== ANIMATION SKEW ==========*/

// let SkewedOne = document.querySelector('.SkewedOne');
// let SkewedTwo = document.querySelector('.SkewedTwo');
// window.addEventListener('scroll', function() {
//     let value1 = -15 + window.scrollY / 45;
//     let value2 = 15 + window.scrollY / -45;
//     SkewedOne.style.transform = "skewY(" + value1 + "deg)";
//     SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
// })

/*========== ON SCROLL ANIMATION ==========*/

let scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    // La méthode Element.getBoundingClientRect() retourne un objet DOMRect fournissant des informations sur la taille d'un élément et sa position relative par rapport à la zone d'affichage.
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()