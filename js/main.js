// activ nav bar link
document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

// product counter
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// toggle tabs
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementById("options").children;
  
    for (const button of buttons) {
      button.addEventListener("click", function () {
        // Remove 'active' class from all buttons
        for (const btn of buttons) {
          btn.classList.remove("active");
        }
  
        // Add 'active' class to the clicked button
        this.classList.add("active");
  
        // Hide all content divs
        const contentDivs = document.querySelectorAll(".content");
        for (const contentDiv of contentDivs) {
          contentDiv.style.display = "none";
        }
  
        // Display the corresponding content div
        const contentId = this.id.replace("option", "content-option");
        const contentToShow = document.getElementById(contentId);
        contentToShow.style.display = "block";
      });
    }
  });
  
