let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

const text = document.querySelector(".autowrite");
        const words = ["Hello Everyone !", "This Website is made ","By Achraf Keddour ..!", "a Frontend Developer", "using Html & Css & Javascript", "I hope you enjoy it ..!"];
        let wordIndex = 0;
        let charIndex = 0;
        
        function writeText() {
            text.textContent = words[wordIndex].slice(0, charIndex);
            charIndex++;
        
            if (charIndex > words[wordIndex].length) {
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        
        setInterval(writeText, 150);
