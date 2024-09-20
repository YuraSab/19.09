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


//  switcher of mute
document.addEventListener('DOMContentLoaded', function () {
    const muteIcon = document.getElementById('icon_mute');
    const unmuteIcon = document.getElementById('icon_unmute');

    muteIcon.addEventListener('click', function () {
        muteIcon.style.display = 'none';
        unmuteIcon.style.display = 'block';
    });

    unmuteIcon.addEventListener('click', function () {
        unmuteIcon.style.display = 'none';
        muteIcon.style.display = 'block';
    });
});




// slider/swiper
// const slides = [
//     { id: 1, imgPath: "assets/pictures/girl_one.jpg", title: "Step-Sisterddddddddddddddddddddddddd" },
//     { id: 2, imgPath: "assets/pictures/girl_two.jpg", title: "Your Neighbor" },
//     { id: 3, imgPath: "assets/pictures/girl_three.jpg", title: "Famous Celebrity" }
// ];
//
// let currentSlideIndex = 0;
//
// function showSlide(index) {
//     const slide = slides[index];
//     document.getElementById('slider_image').src = slide.imgPath;
//     document.getElementById('slider_title').textContent = slide.title;
// }
//
// function prevSlide() {
//     currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//     showSlide(currentSlideIndex);
// }
// function nextSlide() {
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//     showSlide(currentSlideIndex);
// }
//
// showSlide(currentSlideIndex);



const slides = [
    { id: 1, imgPath: "assets/pictures/girl_one.jpg", title: "Step-Sister" },
    { id: 2, imgPath: "assets/pictures/girl_two.jpg", title: "Your Neighbor" },
    { id: 3, imgPath: "assets/pictures/girl_three.jpg", title: "Famous Celebrity" }
];

let currentSlideIndex = 0;
const maxLength = 20; // Максимальна кількість символів для заголовку

function truncateText(text, maxLength) {
    // Якщо довжина тексту більше за maxLength, обрізаємо його
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}

function showSlide(index) {
    const slide = slides[index];
    document.getElementById('slider_image').src = slide.imgPath;

    // Обрізаємо заголовок, якщо він довший за maxLength
    const truncatedTitle = truncateText(slide.title, maxLength);
    document.getElementById('slider_title').textContent = truncatedTitle;
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Показуємо початковий слайд
showSlide(currentSlideIndex);



