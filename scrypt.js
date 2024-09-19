// slider
document.addEventListener('DOMContentLoaded', function () {
    window.nextStep = function(currentSectionId, nextSectionId) {
        // Отримуємо поточну і наступну секцію
        const currentSection = document.getElementById(currentSectionId);
        const nextSection = document.getElementById(nextSectionId);

        if (currentSection) {
            currentSection.style.display = 'none';
        }

        if (nextSection) {
            nextSection.style.display = 'flex';
        }
    };

    nextStep('', 'section_one');

    document.querySelectorAll('.hot_button').forEach(button => {
        button.addEventListener('click', function () {
            const currentId = button.closest('section').id;
            const nextId = button.getAttribute('onclick').match(/nextStep\('([^']*)',\s*'([^']*)'\)/)[2];
            nextStep(currentId, nextId);
        });
    });
});