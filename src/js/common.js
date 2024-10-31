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

function nextStep(code) {

    localStorage.setItem(`HPDATA${code}`, code);
    window.location.href = `HPDATA${code}.html`;
}