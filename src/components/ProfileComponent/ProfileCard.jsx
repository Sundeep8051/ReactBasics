// eslint-disable-next-line react/prop-types
const ProfileCard = ({ title, imageUrl, handle, description }) => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={imageUrl} alt="profile image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">@{handle}</p>
              </div>
            </div>
            <div className="content">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
