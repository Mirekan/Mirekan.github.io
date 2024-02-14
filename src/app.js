const active = document.querySelector('.notactive')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            active.classList.add('active');
        } else {
            entry.target.classList.remove('show');
            active.classList.remove('active');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const navbarChild = document.getElementById("navbarChild");

