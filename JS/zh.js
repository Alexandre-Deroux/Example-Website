document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("language-selector");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const options = isMobile ? [
        { value: "zh.html", label: "🇨🇳" },
        { value: "en.html", label: "🇬🇧" },
        { value: "fr.html", label: "🇫🇷" }
    ] : [
        { value: "zh.html", label: "中文" },
        { value: "en.html", label: "English" },
        { value: "fr.html", label: "Français" },
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
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
var map = L.map("map").setView([48.8533592, 2.3488693], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
L.marker([48.8533592, 2.3488693]).addTo(map)
    .bindPopup("<b>示例</b><br>Parvis Notre-Dame - Place Jean-Paul II<br>75004 Paris")
    .openPopup();
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            alert("✅\n感谢您的留言！\n我们将尽快与您联系。");
            this.reset();
        } else {
            alert("❌\n发生错误，请重试。");
        }
    }).catch(error => {
        alert("⚠️\n连接错误。\n请检查您的网络连接并重试。");
    });
});