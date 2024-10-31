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