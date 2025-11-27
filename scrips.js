// Menú desplegable
document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let menu = btn.nextElementSibling;
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

// Like estilo Instagram
document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        let heart = btn.querySelector(".heart");
        let count = btn.querySelector(".count");

        // Alternar clase
        btn.classList.toggle("liked");

        // Contador
        if (btn.classList.contains("liked")) {
            heart.textContent = "❤️";
            count.textContent = parseInt(count.textContent) + 1;
        } else {
            heart.textContent = "♡";
            count.textContent = parseInt(count.textContent) - 1;
        }
    });
});
