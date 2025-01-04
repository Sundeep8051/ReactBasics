import "./ImageList.css";
import ImageShow from "./ImageShow";

// eslint-disable-next-line react/prop-types
const ImageList = ({ images }) => {
  // eslint-disable-next-line react/prop-types
  var renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
