import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Gallery from "react-photo-gallery";
import PhotoModal from "./PhotoModal";

const Galery = () => {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
        "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
        "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg",
        "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg",
        "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg",
        "50.jpg", "51.jpg", "52.jpg", "53.jpg"]
    const [photoInModal, setPhotoInModal] = useState(0);
    const photos = [
        {
            src: require(`../images/gallery/1.jpg`),
            width: 2,
            height: 1
        },
        {
            src: require(`../images/gallery/2.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/3.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/4.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/5.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/6.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/7.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/8.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/9.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/10.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/11.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/12.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/13.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/14.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/15.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/16.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/17.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/18.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/19.jpg`),
            width: 1,
            height: 1.5
        },{
            src: require(`../images/gallery/20.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/21.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/22.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/23.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/24.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/25.jpg`),
            width: 1,
            height: 1.2
        },
        {
            src: require(`../images/gallery/26.jpg`),
            width: 1.2,
            height: 1
        },
        {
            src: require(`../images/gallery/27.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/28.jpg`),
            width: 1.5,
            height: 1
        },
        {
            src: require(`../images/gallery/29.jpg`),
            width: 1,
            height: 1.2
        },
        {
            src: require(`../images/gallery/30.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/31.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/32.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/33.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/34.jpg`),
            width: 1.5,
            height: 1
        },
        {
            src: require(`../images/gallery/35.jpg`),
            width: 1,
            height: 1.2
        },
        {
            src: require(`../images/gallery/36.jpg`),
            width: 1,
            height: 1.2
        },
        {
            src: require(`../images/gallery/37.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/38.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/39.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/40.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/41.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/42.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/43.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/44.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/45.jpg`),
            width: 1,
            height: 1.5
        },{
            src: require(`../images/gallery/46.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/47.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/48.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/49.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/50.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/51.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/52.jpg`),
            width: 1,
            height: 1.5
        },
        {
            src: require(`../images/gallery/53.jpg`),
            width: 1,
            height: 1.5
        }
    ]

    const extractIndex = (name) => {
        let filename = name.src.split("/").pop().split(".")[0]
        setPhotoInModal(filename)
        console.log(filename)
    }

    return (
            <div className="carouselDiv">
                <Gallery photos={photos} onClick={(e) => extractIndex(e.target)} />
                {photoInModal != 0 &&
                    <PhotoModal photoName={photoInModal} setPhotoName={setPhotoInModal} />
                }
            </div>
    );
};

export default Galery;