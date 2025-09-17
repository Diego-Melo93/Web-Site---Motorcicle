// Dark Mode automático (muda ao clicar na logo)
const logo = document.querySelector(".nav__logo img");
if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            document.body.style.background = "#171717";
        }
    });
}

// Animação nos ícones sociais 
const socials = document.querySelectorAll(".socials span");
socials;forEach((icon)=> {
    icon.addEventListener("click", () => {
        icon.animate(
            [
                {transform: "scale(1)", offset: 0},
                {transform: "scale(1.3)", offset: 0.5},
                {transform: "scale(1)", offset: 1}
            ],
            {duration: 400, easing: "ease-in-out"}
        );
        alert("Você clicou em " + icon.querySelector("i").className.replace("ri-", ""));
    });
});

// Galeria interativa 
const galleryImgs = document.querySelectorAll(".gallery__col img");
galleryImgs.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            zIndex: "9999"
        });

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        Object.assign(bigImg.style, {
            maxWidth: "90%",
            maxHeight: "90%",
            border: "5px solid white",
            borderRadius: "10px"
        });

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => overlay.remove());
    });
});

// Easter Egg no teclado
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "j") {
    alert("🏍️ Segura firme! Você desbloqueou o easter egg do Jawa Perak 🚀");
  }
});