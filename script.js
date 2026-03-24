const text = `Hello, I'm Subhankar Srivastava

BTech CSE Student | Web Developer`;

let index = 0;
const speed = 30;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerText += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

// Run after page loads
window.addEventListener("load", typeEffect);


// ✅ Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// ✅ CLOSE MENU AFTER CLICK (IMPORTANT FOR MOBILE)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});


// ✅ ACTIVE NAV LINK ON SCROLL (PRO FEATURE 🔥)
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
function scrollCerts(direction) {
    const slider = document.getElementById("certSlider");
    const scrollAmount = 300;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
// ✅ CONTACT FORM (EmailJS)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_6r5718j", "template_sjostt9", this)
        .then(function() {
            alert("✅ Message sent successfully!");
        }, function(error) {
            console.log(error);
            alert("❌ Failed to send message");
        });
});