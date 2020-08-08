import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import "./Slider.scss";

export default class Slider extends Component {
    // static propTypes = {
    //     prop: PropTypes,
    // };
    handleImageLoad = (event) => {
        console.log("Image loaded ", event.target);
    };
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    original:
                        "http://res.cloudinary.com/dwuma83gt/image/upload/v1583501371/anyi9w3ar5ytnt003lsu.jpg",
                    thumbnail:
                        "http://res.cloudinary.com/dwuma83gt/image/upload/v1583501371/anyi9w3ar5ytnt003lsu.jpg",
                },
                {
                    original:
                        "http://res.cloudinary.com/dwuma83gt/image/upload/v1583501368/j5xxmasgwwluxujbkpcj.jpg",
                    thumbnail:
                        "http://res.cloudinary.com/dwuma83gt/image/upload/v1583501368/j5xxmasgwwluxujbkpcj.jpg",
                },
                {
                    original: "https://picsum.photos/id/1019/1000/600/",
                    thumbnail: "https://picsum.photos/id/1019/1000/600/",
                },
            ],
        };
    }

    render() {
        let { images } = this.props;

        let imagesRender = images.map((image) => {
            return { original: image, thumbnail: image };
        });

        return (
            <div>
                <ImageGallery items={imagesRender} />
            </div>
        );
    }
}
