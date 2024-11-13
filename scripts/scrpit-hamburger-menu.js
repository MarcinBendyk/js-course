
  function toggleClass(){
    const body = document.querySelector('body');
    const headerList = document.getElementById('games');
    const hamburgerIcon = document.querySelector('.hamburger-button');
    headerList.classList.toggle('show')
    hamburgerIcon.classList.toggle('show')
    body.classList.toggle('show')
  }