import React from 'react';

const Banner = () => {
    return (
        <div className="carousel h-80">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.pinimg.com/550x/42/64/14/426414c97264657bebb33d11a0205c04.jpg" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://preview.redd.it/oolaserx4bd51.jpg?width=640&crop=smart&auto=webp&s=de9d69cb4e5389b3f8fff31fadbb11ddcb5c0b41" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;