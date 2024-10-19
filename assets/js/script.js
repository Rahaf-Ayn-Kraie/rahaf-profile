'use strict';

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.download-resume').addEventListener('click', function () {
    window.open('./assets/resume/resume.pdf');
});

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.classList.add('hovered');
    });

    skill.addEventListener('mouseleave', () => {
        skill.classList.remove('hovered');
    });
});