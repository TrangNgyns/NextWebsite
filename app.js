window.onload = pageReady;
function pageReady(){
    let scrollPoint;
    scrollPoint = window.addEventListener("scroll", () => {
        console.log(window.scrollY);
    } )
    if (scrollPoint >= 355.5){
        let bannerFade = document.getElementById("aside");
        bannerFade.style.transition = '0.5s';
        bannerFade.style['mask-image'] = 'linear-gradient(to bottom, black 50%, transparent 100%)';
    }
}