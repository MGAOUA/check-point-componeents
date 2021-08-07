import Photo from "./PhotoProfile.jpg";

function ProfilePhoto(props) {
  return (
    <div>
      <img src={Photo} onClick={props.func} />
    </div>
  );
}

export default ProfilePhoto;
