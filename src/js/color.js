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
},{
    code : '001001',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '001002',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '002001',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '002002',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '002003',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '002004',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '003001',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '003002',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '004001',
    background : '#cee9fd',
    color : '#419aff'
},{
    code : '004002',
    background : '#cee9fd',
    color : '#419aff'
}];

function getBackgroundColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.background : '#fff';
}

function getFontColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.color : '#fff';
}