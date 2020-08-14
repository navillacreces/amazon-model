import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 className="home__image"
                alt="homePageImage"/>

            <div className="home__row">
                <Product 
                id="1"
                title="Apple Airpods Pro"
                image="https://static.bhphoto.com/images/images1500x1500/1572371245_1513304.jpg"
                price={299.99}
                rating={5}
                />
                

                <Product
                id="2"
                image="https://picture-cdn.wheretoget.it/8jn35e-l-610x610-jacket-clothes-hoodie-jumper-purple-adidas-sweatshirt-sweater-.jpg"
                title="Adidas Men's Hoodie"
                rating={3}
                price={69.99}
                />
            </div>

            <div className="home__row">
            <Product
                id="3"
                image="https://images.freshop.com/00077326835289/f60846df0b5c58429d31868425c37e81_large.png"
                title="Tom's Of Maine Men's Deodorant Mountain Spring"
                rating={4}
                price={6.99}
                />
                <Product
                id="4"
                image="https://i.pinimg.com/originals/1b/98/f8/1b98f89105a0f24f09b8d2e8c7bcbec3.jpg"
                title="Levi's Men's Standard Barstow Denim Western Snap-Up Shirt"
                rating={4}
                price={36.99}
                />
                <Product
                id="5"
                image="https://images.neimanmarcus.com/ca/14/product_assets/X/3/9/T/K/NMX39TK_mz.jpg"
                title="Adidas Men's Superstart White on Black"
                rating={4}
                price={65.99}
                />
            </div>
            <div className="home__row">
            <Product
                id="6"
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                title="Samsung LC49RG90SSUXEN 49 inch Curved LED Gaming Monitor"
                rating={4}
                price={1265.99}
                />
            </div>
   
        </div>
    )
}

export default Home
