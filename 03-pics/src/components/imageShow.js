function ImageShow({image}){
    return(
        <div>
           <img className="img" src={image.urls.small} alt={image.alt_description} />
            
            </div>
    )
}
export default ImageShow;