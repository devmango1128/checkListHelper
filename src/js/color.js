const codeColor = [{
    code : 'M',
    background : '#ff6666',
    color : '#fff'
},{
    code : 'W',
    background : '#6696ff',
    color : '#fff'
}];

function getBackgroundColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.background : '#fff';
}

function getFontColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.color : '#fff';
}