// This component was adapted from code at https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c

import React from "react";
import axios from "axios";
import "./image-gallery.css";
import ImageGallery from "react-image-gallery";

class Gallery extends React.Component {
  state = {
    images: null,
  };
  async componentDidMount() {
    console.log("remount");
    const response = await axios.get(
      "https://google-photos-album-demo.glitch.me/itZFvsnofwU5Nkfz6",
    );
    if (response && response.data && response.data.length > 0) {
      this.setState({
        images: response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`,
        })),
      });
    }
  }
  render() {
    const { images } = this.state;
    return images ? (
      <ImageGallery
        lazyLoad={true}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        items={images}
      />
    ) : null;
  }
}
export default Gallery;
