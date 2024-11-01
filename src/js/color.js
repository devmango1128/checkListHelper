const codeColor = [{
    code : 'M',
    background : '#6696ff',
    color : '#fff',
    borderColor : '#fff',
    iconColor : '#ff8c34'
},{
    code : 'W',
    background : '#ff6666',
    color : '#fff',
    borderColor : '#fff',
    iconColor : '#ff8c34'
},{
    code : '001',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '002',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '003',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '004',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '005',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '006',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001002',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '002001',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '002002',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '002003',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '002004',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '003001',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '003002',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '004001',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '004002',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001001',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001002',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001003',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001004',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001005',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
},{
    code : '001001006',
    background : '#ffffff',
    color : '#4b4b4b',
    borderColor : '#cecece',
    iconColor : '#a1a1a1'
}];

function getBackgroundColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.background : '#fff';
}

function getFontColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.color : '#fff';
}

function getBorderColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.borderColor : '#fff';
}

function getIconColor(code) {
    const item = codeColor.find(item => item.code === code);
    return item ? item.iconColor : '#fff';
}