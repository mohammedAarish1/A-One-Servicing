// <!-- about.js -->
// Add any additional JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Animation for features on scroll
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    features.forEach(feature => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.5s ease-out';
        observer.observe(feature);
    });
});