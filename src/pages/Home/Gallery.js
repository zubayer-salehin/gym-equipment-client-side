import React, { useEffect, useState } from 'react';


const Gallery = () => {

    const [gallerys, setGallery] = useState([]);

    useEffect(() => {
        fetch("gallery.json")
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])

    return (
        <div className='bg-primary py-20'>
            <div className="text-center">
                <p className='smallTitle text-base sm:text-xl text-secondary mb-1'>gallery</p>
                <h2 className='text-white text-3xl md:text-5xl font-bold'>INSTAGRAM</h2>
            </div>
            <div className="customContainer mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {gallerys.map(gallery => <div key={gallery.id}>
                        <img className='w-full' src={gallery.image} alt="" />
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Gallery;