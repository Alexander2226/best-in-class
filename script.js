
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const subjectBtns = document.querySelectorAll('.subject-btn');
    const classButtonsContainer = document.querySelector('.class-buttons');
    const priceInfo = document.getElementById('price-info');

    const prices = {
        '5-6': '📝 Индивидуальные занятия 1100₽/час<br>👥 Группы: 2 чел — 750₽, 3-4 чел — 600₽, 5-6 чел — 500₽',
        '7-9': '📝 Индивидуальные занятия 1200₽/час<br>👥 Группы: 2 чел — 900₽, 3-4 чел — 750₽, 5-6 чел — 650₽',
        '10': '📝 Индивидуальные занятия 1400₽/час<br>👥 Группы: 2 чел — 950₽, 3-4 чел — 800₽, 5-6 чел — 700₽',
        '11-baza': '📝 Индивидуальные занятия 1400₽/час<br>👥 Группы: 2 чел — 950₽, 3-4 чел — 800₽, 5-6 чел — 700₽',
        '11-profil': '📝 Индивидуальные занятия 1600₽/час<br>👥 Группы: 2 чел — 1000₽, 3-4 чел — 850₽, 5-6 чел — 750₽'
    };

    subjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
            const subject = btn.dataset.subject;
            document.getElementById('modal-subject').innerText = btn.innerText;
            classButtonsContainer.innerHTML = '';

            const classes = subject === 'math' 
                ? ['5-6', '7-9', '10', '11-baza', '11-profil'] 
                : ['5-6', '7-9', '10', '11-baza'];

            classes.forEach(cl => {
                const button = document.createElement('button');
                button.innerText = cl.replace('-', ' ').toUpperCase();
                button.addEventListener('click', () => {
                    priceInfo.innerHTML = prices[cl];
                    priceInfo.classList.remove('hidden');
                    priceInfo.style.animation = 'fadeIn 0.5s';
                });
                classButtonsContainer.appendChild(button);
            });
        });
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    let slides = document.querySelectorAll('.slide');
    let index = 0;
    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
});
