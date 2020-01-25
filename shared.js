var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');
var selectedPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");


for (var i = 0; i < selectedPlanButtons.length; i++) {
    selectedPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";

        modal.classList.add('open');
        backdrop.classList.add('open');

    })
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

modalNoButton.addEventListener('click', function() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
});


function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();

});