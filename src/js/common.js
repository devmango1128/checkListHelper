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

let cardContainer = document.getElementById('card-container');

function createCard(data, step, type) {

    data.forEach(item => {

        const card = document.createElement('div');

        card.className = 'card-item';
        card.id = item.code;
        card.style.background = getBackgroundColor(item.code);
        card.style.color = getFontColor(item.code);
        card.onclick = () => nextStep(step, item.code);

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

function createListCard(data, step, multi) {

    const code = localStorage.getItem('code');

    data.forEach(item => {
        item.forEach(sItem => {

            if(sItem.parent_code === code) {

                const card = document.createElement('div');

                card.className = 'card-item';
                card.id = sItem.code;
                card.style.background = getBackgroundColor(sItem.code);
                card.style.color = getFontColor(sItem.code);
                card.style.border = `solid 1px ${getBorderColor(sItem.code)}`;

                if(multi) {
                    card.addEventListener("click", (event) => multiClick(event, sItem.code));
                } else {
                    card.onclick = () => nextStep(step, sItem.parent_code);
                }

                const icon = document.createElement('i');
                icon.className = sItem.icon_html;
                icon.style.color = getIconColor(sItem.code);
                card.appendChild(icon);

                const span = document.createElement('span');
                span.className = 'category-span'
                span.innerText = sItem.ko_name;
                card.appendChild(span);

                cardContainer.appendChild(card);
            }
        });
    });
}

const multiArr = [];

function multiClick(event, code) {

    const index = multiArr.indexOf(code);
    const target = event.currentTarget;

    if (index === -1) {
        multiArr.push(code);
        target.classList.add('selected');

    } else {
        multiArr.splice(index, 1);
        target.classList.remove('selected');
    }
}

function goDetailView() {
    localStorage.setItem('multiArr', multiArr.toString());
    window.location.href = `detailCheck.html`;
}

function createDetail() {

    const pageUrl = 'src/data/HPPAGEDATA.json';
    const code = localStorage.getItem('code');

    const qContainer = document.getElementById('question-container');

    $.getJSON(pageUrl, async function(data) {

        data.forEach(item => {
            if(item.parent_code === code) {
                item.data.forEach(sItem => {

                    const titleDiv = document.createElement('div');
                    titleDiv.className = 'title';
                    titleDiv.innerText = sItem.ko_name;
                    qContainer.appendChild(titleDiv);
                    qContainer.appendChild(createList(sItem));
                });
            }
        });
    });
}

function createList(sItem) {

    const listUrl = 'src/data/HPLISTDATA.json';
    const listDiv = document.createElement('div');
    listDiv.className = 'list';

    $.getJSON(listUrl, async function(data) {
        data.forEach(sData => {
           if(sData.code === sItem.code) {
               listDiv.appendChild(createElement(sItem, sData));
           }
        });
    });

    return listDiv;
}

function createElement(item, data) {

    const eleDiv = document.createElement('div');
    eleDiv.className = 'list';
    // eleDiv.className = item.type;
    console.log(item.type);
    if(item.type === 'combo') {

        const select = document.createElement('select');

        data.list.forEach(sData => {

            const option = document.createElement('option');
            option.innerText = sData.ko_name;
            select.appendChild(option);
        });

        eleDiv.appendChild(select);

    } else if (item.type === 'radio' || item.type === 'checkbox') {

        data.list.forEach(sData => {

            const input = document.createElement('input');
            input.type = item.type;
            input.innerText = '';

            eleDiv.appendChild(input);

            const span = document.createElement('span');
            span.type = 'span';
            span.innerText = sData.ko_name
            eleDiv.appendChild(span);
        });

    } else if(item.type === 'date') {

        const input = document.createElement('input');
        input.type = 'text';
        eleDiv.appendChild(input);

    } else if(item.type === 'text') {

        const input = document.createElement('input');
        input.type = 'text';
        eleDiv.appendChild(input);
    }

    return eleDiv;
}