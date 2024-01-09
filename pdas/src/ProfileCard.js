//Propsları tamamını kullanmamak için
function ProfileCard({ title, handle, image, description}) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>7
        <div className="content">{description}</div>
      </div>
    </div>
  );
}
//Diğer yol:
// function ProfileCard(props) {
//   // const title=props.title;
//   // const handle=props.handle;
//   const {title,handle}=props; //Destructuring
//   return <div>
//     <div>Title is {title}</div>
//     <div>Handle is {handle}</div>
//   </div>;
// }
export default ProfileCard;
