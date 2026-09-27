// Approach Docs - Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking navigation links
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Copy to clipboard helper
    window.copyToClipboard = (text, elementId) => {
        navigator.clipboard.writeText(text).then(() => {
            const el = document.getElementById(elementId);
            if (el) {
                const originalText = el.innerText;
                el.innerText = 'Copied!';
                el.classList.add('text-emerald-400');
                setTimeout(() => {
                    el.innerText = originalText;
                    el.classList.remove('text-emerald-400');
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    // Contact Form Handler
    const contactForm = document.getElementById('consultingContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('clientName')?.value || '';
            const email = document.getElementById('clientEmail')?.value || '';
            const service = document.getElementById('clientService')?.value || 'General Architecture Consultation';
            const message = document.getElementById('clientMessage')?.value || '';

            const subject = encodeURIComponent(`[Consulting Inquiry] ${service} - ${name}`);
            const body = encodeURIComponent(
                `Hi Approach Docs Team,\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Service Needed: ${service}\n\n` +
                `Project Details:\n${message}\n\n` +
                `Looking forward to connecting.`
            );

            // Open mail client
            window.location.href = `mailto:contact@approachdocs.com?subject=${subject}&body=${body}`;

            // Show confirmation toast
            const toast = document.getElementById('contactToast');
            if (toast) {
                toast.classList.remove('hidden');
                setTimeout(() => {
                    toast.classList.add('hidden');
                }, 6000);
            }
        });
    }
});
