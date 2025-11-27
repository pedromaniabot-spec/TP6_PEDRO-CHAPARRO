// Menú desplegable
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu-options").style.display =
        document.querySelector(".menu-options").style.display === "block"
            ? "none"
            : "block";
});

// Botones Like
document.querySelectorAll(".like-btn").forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.toggle("liked");
        boton.textContent = boton.classList.contains("liked")
            ? "❤️ Me gusta"
            : "👍 Like";
    });
});

