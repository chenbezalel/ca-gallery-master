'use strict'

$(document).ready(initPage)

function initPage(){
    renderProjs();
}

function onOpenModal(projId){
    var proj = getProjById(projId);
    $('.modal-body h2').text(proj.name);
    $('.modal-body .item-intro').text(proj.title);
    $('.modal-body .item-intro').text(proj.title);
    $('.modal-body .img-fluid').attr(
        'src', `img/portfolio/projs-img/${proj.id}.png`);
    $('.modal-body .item-desc').text(proj.desc);
    $('.modal-body li .publish-date').text(proj.publishedAt);
    $('.modal-body li a').attr('href', proj.url).text(proj.name);
}

function renderProjs(){

    var projs = getProjs();

    var strHtml = projs.map(proj =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onOpenModal('${proj.id}')">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/projs-img/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        </div>
        </div>`

        )
        
        $('.proj-list').html(strHtml.join(''));        
        
}