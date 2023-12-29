$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $("#menus").addClass("darkHeader");
        } else {
            $("#menus").removeClass("darkHeader");
        }
    });
});
$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#toTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });

});


// Active item onclick
var contentMenuItems = document.querySelectorAll(".content-menu-items a");

contentMenuItems.forEach(function (course) {
    course.onclick = function () {
        // Remove "active" class from all <a> elements
        contentMenuItems.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add "active" class to the clicked <a> element
        course.classList.add("active");
    };
});

// scroll to div with 80px offset
document.getElementById('subNav').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();

        const targetDivId = event.target.getAttribute('href').substring(1);
        const targetDiv = document.getElementById(targetDivId);
        const targetOffset = targetDiv.offsetTop - 80; // Subtract 100px for the offset

        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
});
  

// turn off subNav onclick
var closeModalLinks = document.querySelectorAll('#subNav .overlay-content a');

for (var i = 0; i < closeModalLinks.length; i++) {
    closeModalLinks[i].addEventListener('click', function (event) {
        event.preventDefault();

        // Get a reference to the modal element
        var modal = document.getElementById('subNav');

        // Hide the modal by setting the display style to "none"
        modal.style.display = 'none';
    });
}

// turn off mainNav onclick
var closeMainModalLinks = document.querySelectorAll('#mainNav .overlay-content a');

for (var i = 0; i < closeMainModalLinks.length; i++) {
    closeMainModalLinks[i].addEventListener('click', function (event) {

        // Get a reference to the modal element
        var mainModal = document.getElementById('mainNav');

        // Hide the modal by setting the display style to "none"
        mainModal.style.display = 'none';
    });
}

// show zalo and messenger onclick phone
var contact = document.getElementById('contact');
var zaloMess = document.getElementById('zalo-mess')
contact.onclick = function() {
    zaloMess.classList.toggle("show");
}