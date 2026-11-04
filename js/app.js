
document.addEventListener("DOMContentLoaded", function() {

    // Carregar menu
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            const menu = document.getElementById("menu");

            if (!menu) return;

            menu.innerHTML = data;

            // Menu dinâmico
            const menuToggle = document.getElementById("menuToggle");
            const menuLinks = document.getElementById("menuLinks");

            if (menuToggle && menuLinks) {

                menuToggle.addEventListener("click", function() {

                    menuLinks.classList.toggle("ativo");

                    const aberto = menuLinks.classList.contains("ativo");

                    menuToggle.setAttribute("aria-expanded", aberto);

                });

                // Fechar menu ao clicar em um link
                menuLinks.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function() {
                        menuLinks.classList.remove("ativo");
                        menuToggle.setAttribute("aria-expanded", "false");
                    });
                });
            }

            // Alternar tema
            const temaToggle = document.getElementById("temaToggle");

            if (temaToggle) {

                // Recuperar tema salvo
                const temaSalvo = localStorage.getItem("tema");

                if (temaSalvo === "escuro") {
                    document.body.classList.add("escuro");
                } else {
                    document.body.classList.remove("escuro");
                }

                atualizarBotaoTema();

                temaToggle.addEventListener("click", function() {

                    document.body.classList.toggle("escuro");

                    const temaAtual = document.body.classList.contains("escuro")
                        ? "escuro"
                        : "claro";

                    localStorage.setItem("tema", temaAtual);

                    atualizarBotaoTema();

                });

                function atualizarBotaoTema() {
                    if (document.body.classList.contains("escuro")) {
                        temaToggle.textContent = "☀️ Tema claro";
                    } else {
                        temaToggle.textContent = "🌙 Tema escuro";
                    }
                }
            }
        })
        .catch(error => console.error("Erro ao carregar menu:", error));


    // Carregar footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            const footer = document.getElementById("footer");

            if (footer) {
                footer.innerHTML = data;
            }
        })
        .catch(error => console.error("Erro ao carregar footer:", error));

});

