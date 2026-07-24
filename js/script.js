// Filter produk berdasarkan kategori
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus active class dari semua button
        filterBtns.forEach(b => b.classList.remove('active'));
        // Tambah active class ke button yang diklik
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });
});

// Handle form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Ambil data dari form
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const subjek = document.getElementById('subjek').value;
        const pesan = document.getElementById('pesan').value;

        // Validasi input
        if (!nama || !email || !whatsapp || !subjek || !pesan) {
            alert('Mohon isi semua field!');
            return;
        }

        // Format nomor WhatsApp (hapus karakter non-digit)
        const whatsappNumber = whatsapp.replace(/\D/g, '');

        // Buat pesan untuk WhatsApp
        const pesanWhatsapp = `Halo, nama saya ${nama}. ${pesan}. Email: ${email}`;

        // Redirect ke WhatsApp
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesanWhatsapp)}`;
        window.open(whatsappLink, '_blank');

        // Reset form
        contactForm.reset();
        alert('Terima kasih! Kami akan menghubungi Anda segera.');
    });
}

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation untuk cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua feature card, product card, dan contact card
document.querySelectorAll('.feature-card, .product-card, .contact-card, .why-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (jika diperlukan di masa depan)
function initMobileMenu() {
    const navbar = document.querySelector('.navbar-menu');
    if (window.innerWidth <= 768) {
        // Tambahkan logika mobile menu di sini
    }
}

initMobileMenu();
window.addEventListener('resize', initMobileMenu);

// Tracking page view
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Kandangsepatu dimuat');
});
