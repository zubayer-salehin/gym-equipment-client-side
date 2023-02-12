import React, { useEffect, useState } from 'react';


const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='py-20'>
            <div className="text-center">
                <span className='smallTitle text-base sm:text-xl text-secondary'>whats new</span>
                <h2 className='text-3xl md:text-5xl font-bold'>SHOP THE LATEST</h2>
                <p className='text-[#7B7D88] mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. <br /> Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur</p>
            </div>
            <div className="customContainer mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(p => <div key={p.id}>
                        <img className='w-full' src={p.image} alt="" />
                        <p className='text-primary font-semibold mt-6'>{p.name}</p>
                        <div className='pt-2'>
                            {
                                p.prePrice ?
                                    <>
                                        <span className='text-[#7B7D88] line-through mr-1.5'>{p.prePrice}</span>
                                        <span className='text-[#D47969] text-xl font-semibold'>{p.newPrice}</span>
                                    </>
                                    :
                                    <span className='text-primary text-xl font-semibold'>{p.newPrice}</span>
                            }
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Shop;