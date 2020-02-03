'use strict'

var gProjects;

$(document).ready(function () {
  var id = 1;
  gProjects = [
    ['Snake', 'Agility game', 'https://avrahamba.github.io/snake/', 'labels', 'January 2020','650','700'],
    ['Pacman', 'Agility game', 'https://avrahamba.github.io/pacman/', 'labels', 'January 2020','650','700'],
    ['Minesweeper', 'Thinking game', 'https://avrahamba.github.io/Minesweeper/', 'labels', 'January 2020','650','700'],
    ['Touch Nums', 'Agility game', 'https://avrahamba.github.io/touch-nums/', 'labels', 'January 2020','570','500'],
    ['Chess', 'Double thinking game', 'https://avrahamba.github.io/chess/', 'labels', 'January 2020','450','500'],
    ['Sokoband', 'Thinking game', 'https://avrahamba.github.io/sokoband/', 'labels', 'January 2020','420','500']
  ].map((project) => createProject(id++, project[0], project[1], project[2], project[3], project[4], project[5], project[6]));

  renderProtfolio(gProjects);
  gProjects.forEach((project)=>
  $(`.open-modal-${project.id}`).click(function (e) {
    e.preventDefault();
    
    renderModal(project);
  })
  );

});





function createProject(id, name, title, url, labels, date,h,w) {
  return {
    id: id,
    name: name,
    title: title,
    url: url,
    labels: labels,
    date: date,
    h:h,
    w:w
  }
}

function renderProtfolio(projects) {
  var strHtml = projects.map((project) => `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link open-modal-${project.id}" data-toggle="modal" href="#portfolioModal${project.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${project.id}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>
        `).join('')
  $('#portfolio .projects').html(strHtml)
}

function renderModal(project) {
  var strHtml = 
    `<div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <iframe  src="${project.url}" width="${project.w}" height="${project.h}" frameborder="0"></iframe> 
                
                <!--<img class="img-fluid d-block mx-auto" src="img/portfolio/0${project.id}-full.jpg" alt="">-->
                <ul class="list-inline">
                  <li>Date: ${project.date}</li>
                  <li>Category: ${project.title}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  $('.modals').html(strHtml)
}

function onSubmit(){
  window.location =  `https://mail.google.com/mail/?view=cm&fs=1&to=b.a.avraham@gmail.com&su=${$('#submit').val()}&body=${$('#description').val()}`
}
