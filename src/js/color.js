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
    background : '#f6b7b1',
    color : '#fff'
},{
    code : '002',
    background : '#afbefc',
    color : '#fff'
},{
    code : '003',
    background : '#dbfcbd',
    color : '#fff'
},{
    code : '004',
    background : '#f8edb5',
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