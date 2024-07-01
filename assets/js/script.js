// For toggler
document.addEventListener("DOMContentLoaded", function() {
    const navbarIcon = document.getElementById('icon');
    const navbarLinks = document.getElementById('navbarLinks');

    let isOpen = false;

    navbarIcon.addEventListener('click', function() {
        if (isOpen) {
            // Collapse the menu
            navbarLinks.classList.remove('show');
            navbarIcon.src = "/assets/images/lightning-charge.svg";
            navbarIcon.style.transform = "rotate(0deg)";
        } else {
            // Expand the menu
            navbarLinks.classList.add('show');
            navbarIcon.src = "/assets/images/lightning-charge-fill.svg";
            navbarIcon.style.transform = "rotate(180deg)";
        }
        isOpen = !isOpen;
    });

    // Close the menu if clicked outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarLinks.contains(event.target) || navbarIcon.contains(event.target);
        if (!isClickInside && isOpen) {
            navbarLinks.classList.remove('show');
            navbarIcon.src = "/assets/images/lightning-charge.svg";
            navbarIcon.style.transform = "rotate(0deg)";
            isOpen = false;
        }
    });
});

// for popup 
document.addEventListener('DOMContentLoaded', function () {
    const floatingIconContainer = document.getElementById('floating-icon-container');
    const popupForm = document.getElementById('popup-form');
    const closeBtn = document.getElementById('close-btn');

    // Toggle popup form visibility on floating icon click
    floatingIconContainer.addEventListener('click', function () {
        popupForm.style.display = popupForm.style.display === 'none' ? 'block' : 'none';
    });

    // Close popup form on close button click
    closeBtn.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Close the form if the user clicks outside of it
    window.addEventListener('click', function (e) {
        if (!floatingIconContainer.contains(e.target) && !popupForm.contains(e.target)) {
            popupForm.style.display = 'none';
        }
    });
});

// for fetching user input and send to the server...
function sendFormData(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way and reloading the page.
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Opens the WhatsApp link in a new browser tab (uncomment if needed).
    const whatsappLink = `https://api.whatsapp.com/send?phone=918956676732&text=Hey%21%20I%27ve%20got%20an%20enquiry%20for%20you.%0A%0AHere%27s%20the%20details%3A%0A%0A*Name*%3A%20${encodeURIComponent(formData.name)}%0A*Email*%3A%20${encodeURIComponent(formData.email)}%0A*WhatsApp%20Number*%3A%20${encodeURIComponent(formData.phone)}%0A*Message*%3A%20${encodeURIComponent(formData.message)}%0A%0ALooking%20forward%20to%20your%20response%21%0A%0A*Source*%3A%20mayurelectricals.co.in`;    
    
    window.open(whatsappLink, '_blank');

/*    fetch('form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    }); */
}
