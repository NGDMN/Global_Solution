document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    document.querySelector('#sidebarToggle').addEventListener('click', function () {
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.toggle('active');
        const content = document.querySelector('#content');
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            content.classList.toggle('shift');
        });
    });

    
      

    // Formulário de Fale Conosco
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            const date = new Date().toLocaleString();

            const log = `Data: ${date}\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}\n\n`;
            const blob = new Blob([log], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'mensagens.txt';
            link.click();
            alert('Mensagem enviada com sucesso!');
        });
    }

    // Busca no FAQ
    const searchBar = document.querySelector('#searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase();
            const faqItems = document.querySelectorAll('#faqList li');
            let found = false;

            faqItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (!found) {
                if (!document.querySelector('#noResult')) {
                    const noResult = document.createElement('li');
                    noResult.id = 'noResult';
                    noResult.textContent = 'Nenhum resultado encontrado.';
                    noResult.style.color = '#FF5555';
                    faqItems[0].parentNode.appendChild(noResult);
                }
            } else {
                const noResult = document.querySelector('#noResult');
                if (noResult) noResult.remove();
            }
        });
    }

    // Carrossel
    const carousel = document.querySelector('#possibilitiesCarousel');
    if (carousel) {
        const prevButton = document.querySelector('.carousel-control-prev');
        const nextButton = document.querySelector('.carousel-control-next');
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function updateButtons() {
            prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
            nextButton.style.display = currentIndex === items.length - 1 ? 'none' : 'block';
        }

        prevButton.addEventListener('click', () => {
            items[currentIndex].classList.remove('active');
            currentIndex -= 1;
            items[currentIndex].classList.add('active');
            updateButtons();
        });

        nextButton.addEventListener('click', () => {
            items[currentIndex].classList.remove('active');
            currentIndex += 1;
            items[currentIndex].classList.add('active');
            updateButtons();
        });

        updateButtons();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Função para mostrar o item atual
    function showCurrent() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    }

    // Configurar os botões de próximo e anterior
    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        showCurrent();
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showCurrent();
    });

    // Mostrar o item inicial
    showCurrent();
});


