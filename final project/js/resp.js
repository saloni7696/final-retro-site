// Wait for the DOM content to be loaded before executing the code inside the callback
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the elements we need from the DOM after it's loaded
    const per = document.querySelector('.per');
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.nav-list');
    const rightNav = document.querySelector('.rightNav');
  
    // Add a click event listener to the element with the class 'per'
    per.addEventListener('click', () => {
      rightNav.classList.toggle('v');// Toggle the 'v' class for the rightNav, navList, and 'h' class for the navbar
      navList.classList.toggle('v');
      navbar.classList.toggle('h');
      
    });
  });
  