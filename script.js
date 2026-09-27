
document.addEventListener('DOMContentLoaded', () => {
     
    // images
    const photos = [
        "https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/09/001_future_of_africa1.jpg",
        "images/Sapa.jpg",
    ];
    
    const wrapper = document.getElementById('slideshow');
    const img = document.getElementById('slideshow-img');
    
    let currentIndex = 0;
    let slideshowInterval;

    if (wrapper && img) {
        wrapper.addEventListener('mouseenter', () => {
            currentIndex = 0;
            img.src = photos[currentIndex];
            
            slideshowInterval = setInterval(() => {
                img.style.opacity = '0';
                
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % photos.length;
                    img.src = photos[currentIndex];
                    img.style.opacity = '1';
                }, 400); 
                
            }, 1500); // time
        });

        wrapper.addEventListener('mouseleave', () => {
            clearInterval(slideshowInterval);
            img.style.opacity = ''; 
        });
    }
});

