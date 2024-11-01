function goMenu(url) {
    window.location.href = url;
}

function goBack() {

    const previousPage = document.referrer;

    if (previousPage && previousPage !== "") {
        window.location.href = previousPage;
    } else {
        window.location.href = 'HPDATA00.html';
    }
}

function nextStep(step, code) {

    localStorage.setItem('code', code);
    window.location.href = `HPDATA${step}.html`;
}

const animatedText = document.getElementById('animated-text');
let typeText = '';
let i = 0;

function typing(text) {

    animatedText.textContent = '';
    typeText = text;

    type();
}

function type() {
    if (i < typeText.length) {
        animatedText.textContent += typeText.charAt(i);
        animatedText.classList.add('typing');
        i++;
        setTimeout(type, 150);
    }
}

function createCard(data, step, type) {

    const cardContainer = document.getElementById('card-container');

    data.forEach(item => {

        const card = document.createElement('div');

        card.className = 'card-item';
        card.id = item.code;
        card.style.background = getBackgroundColor(item.code);
        card.style.color = getFontColor(item.code);
        card.onclick = () => nextStep(step);

        const span = document.createElement('span');

        if(type === 'IMG') {

            const img = document.createElement('img');
            img.alt = '';
            img.src = item.icon_url;
            img.className = 'card-img';
            card.appendChild(img);

            span.innerText = item.ko_name;

        } else if(type === 'ICON') {

            const icon = document.createElement('i');
            icon.className = item.icon_html;
            icon.style.color = getIconColor(item.code);
            card.appendChild(icon);

            span.className = 'category-span'
            span.innerText = item.ko_name;
        }

        card.appendChild(span);
        cardContainer.appendChild(card);
    });
}