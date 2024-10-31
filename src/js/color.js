const codeColor = [{
    code : 'M',
    background : '#6696ff',
    color : '#fff'
},{
    code : 'W',
    background : '#ff6666',
    color : '#fff'
},{
    code : '001',
    background : '#fcdcc1',
    color : '#ff8c34'
},{
    code : '002',
    background : '#fcdcc1',
    color : '#ff8c34'
},{
    code : '003',
    background : '#fcdcc1',
    color : '#ff8c34'
},{
    code : '004',
    background : '#fcdcc1',
    color : '#ff8c34'
}];

function getBackgroundColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.background : '#fff';
}

function getFontColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.color : '#fff';
}