document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();

    // Funcție de încărcare text dintr-un fișier și inserare într-un element specific
    function loadTextFromFile(filePath, elementId) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Eroare la încărcarea fișierului:', error));
    }

    // Încărcare text specific fiecărei pagini
    if (currentPage === "index.html") {
        // Pentru pagina "acasa", încarcă textul din text_lung.txt
        loadTextFromFile('text_lung.txt', 'text-suprapus');
    } else if (currentPage === "Contact.html") {
        // Pentru pagina "contact", încarcă textul din contact.txt
        loadTextFromFile('contact.txt', 'text');
    } else if (currentPage === "despre-noi.html") {
    // Pentru pagina "contact", încarcă textul din contact.txt
    loadTextFromFile('desprenoi.txt', 'text');
    } else if (currentPage === "Proiecte.html") {
    // Pentru pagina "contact", încarcă textul din contact.txt
    loadTextFromFile('proiectelenoastre.txt', 'text');
    } else if (currentPage === "voluntariat.html") {
    // Pentru pagina "contact", încarcă textul din contact.txt
    loadTextFromFile('voluntariat.txt', 'text');
    }

    // Meniu mobil - deschidere și închidere
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function() {
        mobileMenu.classList.toggle("open");
    });

    // Închide meniul mobil când se apasă un link din meniu
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", function() {
            mobileMenu.classList.remove("open");
        });
    });
});
