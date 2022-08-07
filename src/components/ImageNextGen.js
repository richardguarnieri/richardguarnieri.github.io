const ImageNextGen = ({ srcWebP, srcJRX, srcJP2, fallback, alt, ...props }) => {
  return (
    <picture>
        <source srcset={srcWebP} type="image/webp" />
        <source srcset={srcJRX} type="image/jxr" />
        <source srcset={srcJP2} type="image/jp2" />
        <img src={fallback} alt={alt} {...props} />
    </picture>
  )
}

export default ImageNextGen