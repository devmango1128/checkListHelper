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
    background : '#ffffff',
    color : '#4b4b4b'
},{
    code : '002',
    background : '#ffffff',
    color : '#4b4b4b'
},{
    code : '003',
    background : '#ffffff',
    color : '#4b4b4b'
},{
    code : '004',
    background : '#ffffff',
    color : '#4b4b4b'
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