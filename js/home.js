// // Mobile Menu Toggle
// const mobileMenu = document.querySelector('.mobile-menu');
// const navMenu = document.querySelector('.nav-menu');

// mobileMenu.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

// Array of objects representing each image and its details
const galleryItems = [
    {
        src: "../assets/gallery/images/1.ac_installation1.webp",
        alt: "Air Conditioning",
        title: "Air Conditioning",
        description: "Air Conditioning Installation"
    },
    {
        src: "../assets/gallery/images/2.ac_installation2.webp",
        alt: "Air Conditioning",
        title: "Air Conditioning",
        description: "Air Conditioning Installation"
    },
    {
        src: "../assets/gallery/images/3.washing_maching_repair1.webp",
        alt: "Washing Machine",
        title: "Washing Machine",
        description: "Professional repairing for Washing machine"
    },
    {
        src: "../assets/gallery/images/4.ro_repair1.webp",
        alt: "RO Water Purifier",
        title: "RO Water Purifier",
        description: "Professional repairing for RO Water Purifier"
    },
    {
        src: "../assets/gallery/images/5.washing_machine_maintanence.webp",
        alt: "Washing Machine",
        title: "Washing Machine",
        description: "Professional Maintenance for Washing maching"
    },
    {
        src: "../assets/gallery/images/6.ac_maintanence1.webp",
        alt: "Air Conditioning",
        title: "Air Conditioning",
        description: "Professional AC maintenance"
    },
    {
        src: "../assets/gallery/images/7.cooler_installation1.webp",
        alt: "Cooler",
        title: "Cooler",
        description: "Professional Cooler Installation"
    },
    {
        src: "../assets/gallery/images/8.cooler_installation2.webp",
        alt: "Cooler",
        title: "Cooler",
        description: "Cooler Installation"
    },
    {
        src: "../assets/gallery/images/9.cooler_installation3.webp",
        alt: "Cooler",
        title: "Cooler",
        description: "Cooler Installation"
    },
    {
        src: "../assets/gallery/images/10.ac_servicing1.webp",
        alt: "Air Conditioning",
        title: "Air Conditioning",
        description: "Professional AC maintenance"
    },
    {
        src: "../assets/gallery/images/11.washing_machine_repair1.webp",
        alt: "Washing Machine",
        title: "Washing Machine",
        description: "Professional Washing Machine repair"
    },
    {
        src: "../assets/gallery/images/12.ac_repair1.webp",
        alt: "Air Conditioning",
        title: "Air Conditioning",
        description: "Professional AC Repairing"
    },
    {
        src: "../assets/gallery/images/13.ac_repair2.webp",
        alt: "Air Conditioning",
        title: "Air Conditioning",
        description: "Professional AC Repairing"
    },

    // Add more items as needed
];

// Define video items data structure
const videoItems = [
    {
        id: 1,
        thumbnail: "../assets/gallery/videos/1.ac_repairing1_Thumbnail.png",
        title: "AC Service Tutorial",
        description: "Learn about our AC service process",
        videoUrl: "../assets/gallery/videos/1.ac_repairing1.mp4",
        alt: "AC Service Tutorial Thumbnail"
    },
    {
        id: 2,
        thumbnail: "../assets/gallery/videos/2.ac_repairing2_thumbnail.png",
        title: "Refrigerator Repair Guide",
        description: "Common issues and solutions",
        videoUrl: "../assets/gallery/videos/2.ac_repairing2.mp4",
        alt: "Refrigerator Repair Guide Thumbnail"
    }
    // Add more video items as needed
];


// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 200;

    function updateCounter() {
        const count = parseInt(counter.innerText);
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target + "+";
        }
    }

    updateCounter();
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');

        content.classList.toggle('active');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});

// Slider
// Testimonial Slider functionality
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.testimonial-control.prev');
const nextButton = document.querySelector('.testimonial-control.next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    testimonialSlides[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

// Event listeners for controls
nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Auto-advance slides
setInterval(nextTestimonial, 2000);

// Initialize first slide
showTestimonial(0);




// Gallery Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const gallery = {
//         init: function() {
//             this.container = document.querySelector('.gallery-grid');
//             this.filters = document.querySelectorAll('.filter-btn');
//             this.items = document.querySelectorAll('.gallery-item');
//             this.lightbox = document.querySelector('.lightbox');
//             this.lightboxImg = document.querySelector('.lightbox-image');
//             this.lightboxVideo = document.querySelector('.lightbox-video');
//             this.currentIndex = 0;

//             this.bindEvents();
//         },

//         bindEvents: function() {
//             // Filter buttons
//             this.filters.forEach(btn => {
//                 btn.addEventListener('click', (e) => {
//                     this.filterGallery(e.target);
//                 });
//             });

//             // Gallery items
//             this.items.forEach((item, index) => {
//                 item.querySelector('.view-btn').addEventListener('click', () => {
//                     this.openLightbox(index);
//                 });
//             });

//             // Lightbox controls
//             document.querySelector('.close-lightbox').addEventListener('click', () => {
//                 this.closeLightbox();
//             });

//             document.querySelector('.lightbox-nav.prev').addEventListener('click', () => {
//                 this.navigate(-1);
//             });

//             document.querySelector('.lightbox-nav.next').addEventListener('click', () => {
//                 this.navigate(1);
//             });

//             // Close lightbox on escape key
//             document.addEventListener('keydown', (e) => {
//                 if (e.key === 'Escape') this.closeLightbox();
//                 if (e.key === 'ArrowLeft') this.navigate(-1);
//                 if (e.key === 'ArrowRight') this.navigate(1);
//             });
//         },

//         filterGallery: function(clickedBtn) {
//             // Update active button
//             this.filters.forEach(btn => btn.classList.remove('active'));
//             clickedBtn.classList.add('active');

//             const filterValue = clickedBtn.getAttribute('data-filter');

//             // Filter items
//             this.items.forEach(item => {
//                 const category = item.getAttribute('data-category');
//                 if (filterValue === 'all' || filterValue === category) {
//                     item.style.display = 'block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         },

//         openLightbox: function(index) {
//             this.currentIndex = index;
//             const item = this.items[index];
//             const mediaElement = item.querySelector('img, video');

//             if (mediaElement.tagName === 'VIDEO') {
//                 this.lightboxVideo.src = mediaElement.src;
//                 this.lightboxVideo.style.display = 'block';
//                 this.lightboxImg.style.display = 'none';
//             } else {
//                 this.lightboxImg.src = mediaElement.src;
//                 this.lightboxImg.style.display = 'block';
//                 this.lightboxVideo.style.display = 'none';
//             }

//             this.lightbox.classList.add('active');
//         },

//         closeLightbox: function() {
//             this.lightbox.classList.remove('active');
//             this.lightboxVideo.pause();
//         },

//         navigate: function(direction) {
//             this.currentIndex = (this.currentIndex + direction + this.items.length) % this.items.length;
//             this.openLightbox(this.currentIndex);
//         }
//     };

//     gallery.init();
// });


// Gallery Functionality

// ============= load the gallery images and videos =============== //





// Main gallery functionality
const gallery = {
    init: function () {
        // Store DOM elements
        this.tabs = document.querySelectorAll('.tab-btn');
        this.contents = document.querySelectorAll('.gallery-content');
        this.slider = document.querySelector('.gallery-slider');
        this.prevBtn = document.querySelector('.slider-nav.prev');
        this.nextBtn = document.querySelector('.slider-nav.next');
        this.videoItems = document.querySelectorAll('.video-item');
        this.videoModal = document.querySelector('.video-modal');
        this.lightbox = document.querySelector('.lightbox');
        this.lightboxImg = document.querySelector('.lightbox-image');

        this.videoGrid = document.querySelector('.video-grid');
        // Generate gallery items
        this.generateGalleryItems();
        this.generateVideoItems();

        // Initialize after content is loaded
        this.initializeGallery();
    },


    generateVideoItems: function () {
        // Clear existing video items
        this.videoGrid.innerHTML = '';

        videoItems.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');

            videoItem.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.alt}" loading="lazy">
                    <button class="play-btn" data-video="${video.videoUrl}">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            `;

            this.videoGrid.appendChild(videoItem);
        });

        // Update video items reference
        this.videoItems = document.querySelectorAll('.video-item');
    },

    openVideoModal: function (videoUrl) {
        const videoModal = document.querySelector('.video-modal');
        const modalVideo = videoModal.querySelector('video');

        // Set video source and show modal
        modalVideo.src = videoUrl;
        videoModal.classList.add('active');

        // Start playing the video
        modalVideo.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
    },

    generateGalleryItems: function () {
        galleryItems.forEach(item => {
            const sliderItem = document.createElement('div');
            sliderItem.classList.add('slider-item');

            sliderItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="slider-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button class="view-btn" aria-label="View Image">
                        <i class="fas fa-expand"></i>
                    </button>
                </div>
            `;

            this.slider.appendChild(sliderItem);
        });
    },

    initializeGallery: function () {
        // Update sliderItems after dynamic generation
        this.sliderItems = document.querySelectorAll('.slider-item');
        this.currentImageIndex = 0;

        this.bindEvents();
        this.setupSlider();
    },

    bindEvents: function () {
        // Tab switching
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.target);
            });
        });

        // Slider navigation
        this.prevBtn.addEventListener('click', () => this.slideGallery(-1));
        this.nextBtn.addEventListener('click', () => this.slideGallery(1));

        // Lightbox events
        this.bindLightboxEvents();

        // Video modal events
        // this.videoItems.forEach(item => {
        //     item.querySelector('.play-btn')?.addEventListener('click', () => {
        //         this.openVideoModal(item);
        //     });
        // });

        // Video modal events - updated to use data attribute
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const videoUrl = e.currentTarget.dataset.video;
                this.openVideoModal(videoUrl);
            });
        });

        // Close video modal
        document.querySelector('.close-modal')?.addEventListener('click', () => {
            this.closeVideoModal();
        });


         // Close modal on outside click
         document.querySelector('.video-modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('video-modal')) {
                this.closeVideoModal();
            }
        });

          // Handle escape key for video modal
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.querySelector('.video-modal.active')) {
                this.closeVideoModal();
            }
        });


    },

    bindLightboxEvents: function () {
        // Bind view button clicks for dynamically created items
        this.sliderItems.forEach((item, index) => {
            const viewBtn = item.querySelector('.view-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openLightbox(index);
                });
            }
        });

        // Lightbox navigation
        document.querySelector('.lightbox .close-lightbox').addEventListener('click', () => {
            this.closeLightbox();
        });

        document.querySelector('.lightbox .lightbox-nav.prev').addEventListener('click', () => {
            this.navigateLightbox(-1);
        });

        document.querySelector('.lightbox .lightbox-nav.next').addEventListener('click', () => {
            this.navigateLightbox(1);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
            if (e.key === 'ArrowRight') this.navigateLightbox(1);
        });
    },

    setupSlider: function () {
        // Calculate item width including gap
        const itemWidth = this.sliderItems[0]?.offsetWidth || 300;
        this.slideWidth = itemWidth + 16; // 16px is the gap

        // Update slider position on window resize
        window.addEventListener('resize', () => {
            const newItemWidth = this.sliderItems[0]?.offsetWidth || 300;
            this.slideWidth = newItemWidth + 16;
        });
    },

    switchTab: function (clickedTab) {
        this.tabs.forEach(tab => tab.classList.remove('active'));
        this.contents.forEach(content => content.classList.remove('active'));

        clickedTab.classList.add('active');
        document.getElementById(`${clickedTab.dataset.tab}-content`).classList.add('active');
    },

    slideGallery: function (direction) {
        const isMobile = window.innerWidth <= 768;
        const currentScroll = this.slider.scrollLeft;
        const sliderWidth = isMobile ? this.slider.clientWidth : this.slideWidth;
        const newScroll = currentScroll + (sliderWidth * direction);

        this.slider.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        });
    },

    openLightbox: function (index) {
        this.currentImageIndex = index;
        const img = this.sliderItems[index].querySelector('img');
        this.lightboxImg.src = img.src;
        this.lightboxImg.alt = img.alt;
        this.lightbox.classList.add('active');
    },

    closeLightbox: function () {
        this.lightbox.classList.remove('active');
    },

    navigateLightbox: function (direction) {
        this.currentImageIndex = (this.currentImageIndex + direction + this.sliderItems.length) % this.sliderItems.length;
        const img = this.sliderItems[this.currentImageIndex].querySelector('img');
        this.lightboxImg.src = img.src;
        this.lightboxImg.alt = img.alt;
    },

    // openVideoModal: function(videoItem) {
    //     const videoModal = document.querySelector('.video-modal');
    //     const modalVideo = videoModal.querySelector('video');
    //     videoModal.classList.add('active');
    // },

    closeVideoModal: function () {
        const videoModal = document.querySelector('.video-modal');
        const modalVideo = videoModal.querySelector('video');
        modalVideo.pause();
        modalVideo.src = '';
        videoModal.classList.remove('active');
    }
};

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    gallery.init();
});