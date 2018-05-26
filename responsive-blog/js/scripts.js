;(function() {
    let mainMenu = document.querySelector('.main-nav__list');
    mainMenu.addEventListener("click", toggleMenuItem);

    window.addEventListener('resize', replaceSocial);
    replaceSocial();
    function toggleMenuItem(e) {
        if (e.target.classList.contains('main-nav__link')) {
            e.preventDefault();
            let mainMenuItems = document.querySelectorAll('.main-nav__link');
            for (let i = 0; i <  mainMenuItems.length; i++) {
                mainMenuItems[i].parentElement.classList.remove('active');
            }
            e.target.parentElement.classList.add('active');
        }
    }
    function replaceSocial() {
        if (document.body.clientWidth >= 900 && document.querySelector('.social').parentElement != document.querySelector('.post__info')) {
            let post = document.querySelectorAll('.post');
            let social = document.querySelectorAll('.social');
            let postInfo = document.querySelectorAll('.post__info');

            for (let i = 0; i < post.length; i++) {
                post[i].removeChild(social[i]);
                postInfo[i].appendChild(social[i]);
            }
        } else if (document.body.clientWidth < 768 && document.querySelector('.social').parentElement != document.querySelector('.post')) {
            let post = document.querySelectorAll('.post');
            let social = document.querySelectorAll('.social');
            let postInfo = document.querySelectorAll('.post__info');

            for (let i = 0; i < post.length; i++) {
                postInfo[i].removeChild(social[i]);
                post[i].appendChild(social[i]);
            }
        }
    }
})();