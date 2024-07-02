import React from 'react';

function Gallery() {
    return (
        <section className="h-full w-full flex mx-auto items-center">
            <div className="gallery">
                <a href="src/gallery/bird1.jpeg" data-lightbox="mygallery" data-title="YIPEE"><img src="src/gallery/bird1.jpeg" alt="Gallery Image 1" /></a>
                <a href="src/gallery/bird2.jpeg" data-lightbox="mygallery"><img src="src/gallery/bird2.jpeg" alt="Gallery Image 2" /></a>
                <a href="src/gallery/bird2.jpeg" data-lightbox="mygallery"><img src="src/gallery/bird2.jpeg" alt="Gallery Image 3" /></a>
                <a href="src/gallery/lesgo.jpeg" data-lightbox="mygallery"><img src="src/gallery/filler.jpeg" alt="Gallery Image 4" /></a>
                <a href="src/gallery/lesgo.jpeg" data-lightbox="mygallery"><img src="src/gallery/filler.jpeg" alt="Gallery Image 5" /></a>
                <a href="src/gallery/lesgo.jpeg" data-lightbox="mygallery"><img src="src/gallery/filler.jpeg" alt="Gallery Image 6" /></a>
                <a href="src/gallery/lesgo.jpeg" data-lightbox="mygallery"><img src="src/gallery/filler.jpeg" alt="Gallery Image 7" /></a>
                <a href="src/gallery/lesgo.jpeg" data-lightbox="mygallery"><img src="src/gallery/filler.jpeg" alt="Gallery Image 8" /></a>
                <a href="src/gallery/lesgo.jpeg" data-lightbox="mygallery"><img src="src/gallery/filler.jpeg" alt="Gallery Image 9" /></a>
            </div>
        </section>
    );
}

export default Gallery;
