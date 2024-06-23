document.addEventListener('DOMContentLoaded', function() {

    // Circle cursor
  const customCursor = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  document.body.appendChild(customCursor);

  function updateCursorPosition(e) {
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
  }

  document.addEventListener('mousemove', updateCursorPosition);

  const hideCursorElements = document.querySelectorAll('[data-hide-cursor]');
  hideCursorElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
          customCursor.style.display = 'none';
      });
      element.addEventListener('mouseleave', function() {
          customCursor.style.display = 'block';
      });
  });

  // Cursor size
  const sizeChangeElements = document.querySelectorAll('[data-cursor-size]');
  sizeChangeElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
          const sizeClass = element.getAttribute('data-cursor-size');
          document.body.classList.add(sizeClass);
      });
      element.addEventListener('mouseleave', function() {
          const sizeClass = element.getAttribute('data-cursor-size');
          document.body.classList.remove(sizeClass);
      });
  });

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.right > 0 &&
          rect.left < window.innerWidth &&
          rect.bottom > 0 &&
          rect.top < window.innerHeight
      );
  }

//Transitions when any elements comes in viewport
  function handleScrollAnimations() {

    // Interests
      var interests = document.querySelectorAll('.interest');
      
      interests.forEach(function(interest) {
          if (isElementInViewport(interest)) {
              interest.classList.add('visible');
          } else {
              interest.classList.remove('visible');
          }
      });

      // Skills
      var popUps = document.querySelectorAll('.skillsub');

      popUps.forEach(function(popup) {
        if (isElementInViewport(popup)) {
           popup.classList.add('visible');
        } else {
            popup.classList.remove('visible');
        }
      });

      //Yellow Name
        var myName = document.querySelector('.pfname');

        if (isElementInViewport(myName)) {
            myName.classList.add('visible');
        } else {
            myName.classList.remove('visible');
        }

        //Portfolio
        var portfolio = document.querySelector('#intro h1');

        if (isElementInViewport(portfolio)) {
            portfolio.classList.add('visible');
        } else {
            portfolio.classList.remove('visible');
        }

        // My Photo
        var mydp = document.querySelector('.photoimg div');

        if (isElementInViewport(mydp)) {
            mydp.classList.add('visible');
        } else {
            mydp.classList.remove('visible');
        }

        //Projects
        var projects = document.querySelectorAll('.project-wrapper');

        projects.forEach(function(project) {
          if (isElementInViewport(project)) {
             project.classList.add('visible');
          } else {
              project.classList.remove('visible');
          }
        });

        //extra-curriculars
        var extras = document.querySelectorAll('#image-wrapper1');

        extras.forEach(function(extra) {
          if (isElementInViewport(extra)) {
             extra.classList.add('visible');
          } else {
              extra.classList.remove('visible');
          }
        });

        var extras2 = document.querySelectorAll('#image-wrapper2');

        extras2.forEach(function(extra) {
          if (isElementInViewport(extra)) {
             extra.classList.add('visible');
          } else {
              extra.classList.remove('visible');
          }
        });

        //highlights
        var highlights = document.querySelectorAll('.highlight');

        highlights.forEach(function(highlight) {
            if (isElementInViewport(highlight)) {
               highlight.classList.add('visible');
            } else {
                highlight.classList.remove('visible');
            }
          })

          var messages = document.querySelectorAll(".highlight-container span");

          messages.forEach(function(message) {
            if (isElementInViewport(message)) {
               message.classList.add('visible');
            } else {
                message.classList.remove('visible');
            }
          })
      
  }

  handleScrollAnimations();
  
  window.addEventListener('scroll', function() {
      handleScrollAnimations();
  });


  // Form-Validation
  const form = document.getElementById('contact');
            const submitButton = form.querySelector('[type="submit"]');
            const submittedMessage = document.getElementById('submitted-message');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); 

                let isValid = true;
                const name = form.elements['name'];
                const email = form.elements['email'];
                const message = form.elements['message'];

                if (name.value.trim() === '') {
                    isValid = false;
                    name.classList.add('invalid');
                } else {
                    name.classList.remove('invalid');
                }

                if (email.value.trim() === '' || !validateEmail(email.value)) {
                    isValid = false;
                    email.classList.add('invalid');
                    alert('Please enter a valid email-id');
                } else {
                    email.classList.remove('invalid');
                }

                if (message.value.trim() === '') {
                    isValid = false;
                    message.classList.add('invalid');
                } else {
                    message.classList.remove('invalid');
                }

                if (isValid) {
                    submitButton.value = submitButton.getAttribute('data-wait'); 
                    
                    setTimeout(() => {
                        form.classList.add('hidden'); 
                        submittedMessage.classList.remove('hidden'); 
                    }, 2000); 
                }
            });

            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }

            var menuIcon = document.getElementById('menuIcon');
            var verticalNavbar = document.getElementById('verticalNavbar');
        
            menuIcon.addEventListener('click', function () {
                if (verticalNavbar.style.display === 'flex') {
                    verticalNavbar.style.display = 'none';
                } else {
                    verticalNavbar.style.display = 'flex';
                }
            });
  
});


