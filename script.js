// script.js
let fontFamily = 'Arial';
let fontSize = '12px';
let fontColor = '#000000';

document.getElementById('font-family').addEventListener('change', function () {
    fontFamily = this.value;
    applyStyle();
});

document.getElementById('font-size').addEventListener('change', function () {
    fontSize = this.value;
    applyStyle();
});

document.getElementById('font-color').addEventListener('change', function () {
    fontColor = this.value;
    applyStyle();
});

document.getElementById('undo').addEventListener('click', function () {
    document.execCommand('undo', false, null);
});

document.getElementById('redo').addEventListener('click', function () {
    document.execCommand('redo', false, null);
});

function applyStyle() {
    document.getElementById('text-area').focus();
    document.execCommand('fontName', false, fontFamily);
    document.execCommand('fontSize', false, '7'); // Temporary fix for font size
    let fontElements = document.getElementById('text-area').getElementsByTagName('font');
    for (let i = 0; i < fontElements.length; i++) {
        if (fontElements[i].size == '7') {
            fontElements[i].removeAttribute('size');
            fontElements[i].style.fontSize = fontSize;
        }
    }
    document.execCommand('foreColor', false, fontColor);
}
