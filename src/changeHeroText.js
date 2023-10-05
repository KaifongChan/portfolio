let heroText = document.querySelector('.background-text');

function changeHeroText() {
    if (heroText.textContent === "Welcome.") {
        heroText.textContent = "Feel free to browse my projects."
    }
    else {
        heroText.textContent = "Welcome."
    }
    return;
}

setInterval(changeHeroText, 5000);

export default changeHeroText;