function goMenu(url) {
    window.location.href = url;
}

function goBack() {

    const previousPage = document.referrer;

    if (previousPage && previousPage !== "") {
        window.location.href = previousPage;
    } else {
        window.location.href = 'main.html';
    }
}