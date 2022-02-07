'use strict'

var gProjs;
_createProjs();

function getProjById(projId) {
    return gProjs.find((proj) => projId === proj.id);
}

function getProjs(){
    return gProjs;
}

function _createProjs(){

    gProjs = [
        _createProj('mineSweeper', 'Minesweeper', 'Don\'t click the mines', 'https://chenbezalel.github.io/Mine-Sweeper/', '27/01/22'),
        _createProj('pacman', 'Pacman', 'Don\'t click the mines', 'https://chenbezalel.github.io/myPacman/', '24/01/22'),
        _createProj('touchNums', 'Touch nums', 'Click on all the numbers in their order', 'https://chenbezalel.github.io/touchNums/', '20/01/22'),
        _createProj('inPicture', 'In-Picture Game', 'What is in the picture?', 'https://chenbezalel.github.io/inPictureGame/', '22/1/22'),
        _createProj('bookShop', 'Book Shop', 'Book shop organization', 'https://chenbezalel.github.io/bookShop/', '04/02/22'),
        _createProj('ballBoard', 'Ball Board', 'collect all the balls', 'https://chenbezalel.github.io/ballBorad/', '23/01/22'),
        _createProj('todos', 'Todos', 'To do list', 'https://chenbezalel.github.io/todos/', '02/02/22'),
        _createProj('guessMe', 'Guess Me', 'Think of someone...', 'https://chenbezalel.github.io/guessMe/', '06/02/22')

    ]
}


function _createProj(id, name, title, url, publishedAt, labels = '[]'){
    return {
        id,
        name,
        title,
        desc: makeLorem(),
        url,
        publishedAt,
        labels
    }
}
