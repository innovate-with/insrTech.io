const serviceElements = document.querySelectorAll('.service');

// Loop through each service element
serviceElements.forEach(service => {
  // Add event listener for mouseenter event (hover)
  service.addEventListener('mouseenter', () => {
    // Add a class 'service-active' to the hovered element
    service.classList.add('service-active');
  });

  // Add event listener for mouseleave event (mouseout)
  service.addEventListener('mouseleave', () => {
    // Remove the 'service-active' class from the element
    service.classList.remove('service-active');
  });
});


document.querySelector('.hero-btn').addEventListener('click', function() {
   document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
});