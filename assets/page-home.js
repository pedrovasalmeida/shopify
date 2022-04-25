const Home = {
  init: () => {
    Home.controlsTechsContainerSize();
  },

  controlsTechsContainerSize: () => {
    const containerTech = document.querySelector('.__content-techs');
    const techs = containerTech.querySelectorAll('.__tech');

    console.log(100 / techs.length)

    techs.forEach((tech) => {
      tech.style.width = `${100 / techs.length}%`;
      tech.style.marginRight = `1rem`;
    });
  }
}

Home.init();