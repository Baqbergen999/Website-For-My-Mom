// Түймелерге жүгінетін тегтер
document.addEventListener("DOMContentLoaded", () => {
    // Жылдам навигация жасау үшін тегтер
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Testimonials карусельі
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll(".testimonials-carousel .testimonial");

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Байланыс формасы
    const form = document.querySelector("#contact form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Хабарламаңыз жіберілді! Біз жақында сізбен хабарласамыз.");
        form.reset();
    });
});
