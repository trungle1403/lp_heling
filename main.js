window.addEventListener('load', () => {
    const menuToggle = document.querySelector('.nav-toggle')
    const menu = document.querySelector('.nav-menu')
    const menuClose = document.querySelector('.nav-close')
    const overlay = document.querySelector('.overlay')
    function handleShow() {
        menu && menu.classList.add('active')
        overlay && overlay.classList.add('active')
    }
    function handleClose() {
        menu && menu.classList.remove('active')
        overlay && overlay.classList.remove('active')
    }
    
    menuToggle.addEventListener('click', handleShow)
    menuClose.addEventListener('click', handleClose)
    overlay.addEventListener('click', handleClose)


    const sections = document.querySelectorAll('section[id]')

    function handleScrollActiveLink() {
        const scrollY = window.pageYOffset
        sections.forEach( s => {
            //height of section
            const sectionHeight = s.offsetHeight
            //sum height from top to section 0 620 1230 2000 ....
            const sectionTop = s.offsetTop;
            sectionId = s.getAttribute('id')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('a[href*='+ sectionId+']').classList.add('active')
            }else {
                document.querySelector('a[href*='+ sectionId+']').classList.remove('active')
            }
        })
    }
    window.addEventListener('scroll', handleScrollActiveLink)
})