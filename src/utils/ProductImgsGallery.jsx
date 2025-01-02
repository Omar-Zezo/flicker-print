import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductImgsGallery = ({ photo_gallery }) => {

  function convertArrayToObjects(array) {
    return array.map((item, index) => {
      return { original: item, thumbnail: item };
    });
  }

  return (
    photo_gallery ? (
      <ImageGallery
      items={convertArrayToObjects(photo_gallery)}
      showFullscreenButton={false}
      showPlayButton={false}
      slideDuration={300}
    />
    ):null
  )
};

export default ProductImgsGallery;
