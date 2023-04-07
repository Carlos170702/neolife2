const ImageProducto = ({ url }) => {
    console.log(url)
  return <img className="producto__img" src={url} alt={`img ${( url)}`} />;
}; 

export default ImageProducto;
