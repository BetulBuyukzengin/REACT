import profile from "../img/profile.jpg";

function Avatar() {
  return (
    <div className="avatar">
      <img src={profile} alt="res" className="img" />
    </div>
  );
}
export default Avatar;
