document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("language-selector");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const options = isMobile ? [
        { value: "fr.html", label: "🇫🇷" },
        { value: "en.html", label: "🇬🇧" },
        { value: "zh.html", label: "🇨🇳" }
    ] : [
        { value: "fr.html", label: "Français" },
        { value: "en.html", label: "English" },
        { value: "zh.html", label: "中文" }
    ];
    options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        select.appendChild(option);
    });
    select.addEventListener("change", function() {
        window.location.href = this.value;
    });
});
function openLightbox(imageSrc) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
var map = L.map('map').setView([45.7554819, 4.8262748], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([45.7554819, 4.8262748]).addTo(map)
    .bindPopup("<b>Exemple site Internet</b><br>Parvis Notre-Dame - Place Jean-Paul II<br>75004 Paris")
    .openPopup();
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("✅\nMerci de votre message !\nNous vous contacterons bientôt.");
            this.reset();
        } else {
            alert("❌\nUne erreur s'est produite, veuillez réessayer.");
        }
    }).catch(error => {
        alert("⚠️\nErreur de connexion.\nVérifiez votre connexion et réessayez.");
    });
});