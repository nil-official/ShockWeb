// Function to toggle the dropdown menu
function toggleDropdownMenu(dropdownId, dropiconId) {
    var dropdown = document.getElementById(dropdownId);
    var dropicon = document.getElementById(dropiconId);
    var isDropdownOpen = dropdown.classList.contains('show');

    // Hide all dropdowns and sub-dropdowns
    var allDropdowns = document.querySelectorAll('.dropdown-content, .dropdown-sub-content');
    allDropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('show');
    });

    // Reset all dropdown icons to 0 degrees rotation
    var allDropicons = document.querySelectorAll('.fa-angle-up, .fa-angle-down');
    allDropicons.forEach(function (icon) {
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease-in-out';
    });

    // Remove active class from all dropdown buttons
    var allDropdownButtons = document.querySelectorAll('.dropbtn');
    allDropdownButtons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Toggle the clicked dropdown
    if (!isDropdownOpen) {
        dropdown.classList.add("show");
        dropicon.style.transform = 'rotate(180deg)';
        dropicon.style.transition = 'transform 0.3s ease-in-out';

        // Add active class to the clicked dropdown button
        document.getElementById(dropdownId).previousElementSibling.classList.add('active');
    } else {
        dropdown.classList.remove("show");
        dropicon.style.transform = 'rotate(0deg)';
        dropicon.style.transition = 'transform 0.3s ease-in-out';

        // Remove active class from the clicked dropdown button
        document.getElementById(dropdownId).previousElementSibling.classList.remove('active');
    }
}

// Function to toggle the sub-dropdown menu
function toggleSubDropdownMenu(event) {
    var clickedSubmenu = event.currentTarget.nextElementSibling;

    // Hide all other sub-dropdowns
    var allSubDropdowns = document.querySelectorAll('.dropdown-sub-content');
    allSubDropdowns.forEach(function (subDropdown) {
        if (subDropdown !== clickedSubmenu) {
            subDropdown.classList.remove('show');
        }
    });

    // Toggle the clicked sub-dropdown
    clickedSubmenu.classList.toggle('show');

    // Prevent the event from propagating to the parent dropdown content
    event.stopPropagation();
}

// Function to handle window click events
window.addEventListener("click", function (e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content, .dropdown-sub-content');
        var dropicons = document.querySelectorAll('.fa-angle-up, .fa-angle-down');

        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('show');
        });

        // Reset all icons to 0 degrees rotation
        dropicons.forEach(function (dropicon) {
            dropicon.style.transform = 'rotate(0deg)';
            dropicon.style.transition = 'transform 0.3s ease-in-out';
        });

        // Remove active class from all dropdown buttons
        var allDropdownButtons = document.querySelectorAll('.dropbtn');
        allDropdownButtons.forEach(function (button) {
            button.classList.remove('active');
        });
    }
});










// Burger to Cross Menu Button
const burgerMenu = document.getElementById("burgerMenu");
document.getElementById('menu-toggle').addEventListener('click', function () {
    burgerMenu.classList.toggle('nav-open');
});

// Toggle Burger Menu Button
document.getElementById("burgerMenu").addEventListener("click", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].style.display === "none" || dropdowns[i].style.display === "") {
            dropdowns[i].style.display = "block";
        } else {
            dropdowns[i].removeAttribute("style");
        }
    }
});










// Function to handle the click event on menu links
function toggleIconRotation(event) {
    event.preventDefault();
    event.stopPropagation(); // Prevent the window click event from firing

    // Select all <i> elements with either angle-up or angle-down class
    const allIcons = document.querySelectorAll("i.fa-solid.fas.fa-angle-up, i.fa-solid.fas.fa-angle-down");

    // Get the clicked icon within the <a> element
    const subMenuIcon = this.querySelector("i.fa-solid.fas.fa-angle-up, i.fa-solid.fas.fa-angle-down");

    // Toggle rotation for the clicked icon
    let currentRotation = subMenuIcon.style.transform;
    if (currentRotation === 'rotate(180deg)') {
        subMenuIcon.style.transform = 'rotate(0deg)';
    } else {
        subMenuIcon.style.transform = 'rotate(180deg)';
    }

    // Reset rotation for all icons except the clicked one
    allIcons.forEach(function (icon) {
        if (icon !== subMenuIcon) {
            icon.style.transform = 'rotate(0deg)';
        }
    });

    // Apply the transition style
    subMenuIcon.style.transition = 'transform 0.3s ease-in-out';
}

// Function to reset all icons when clicking outside the menu links
function resetIcons() {
    const allIcons = document.querySelectorAll("i.fa-solid.fas.fa-angle-up, i.fa-solid.fas.fa-angle-down");
    allIcons.forEach(function (icon) {
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease-in-out';
    });
}

// Select all <a> elements with class 'sub-menu-link'
const subMenuLinks = document.querySelectorAll("a.sub-menu-link");

// Add event listener to each <a> element to handle menu link clicks
subMenuLinks.forEach(function (link) {
    link.addEventListener("click", toggleIconRotation);
});

// Add event listener to the window to reset icons on clicking outside the menu links
window.addEventListener("click", resetIcons);