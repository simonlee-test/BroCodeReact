import profilePic from './assets/cat_200x202.jpg';

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className='card-title'>Simone</h2>
      <p className='card-text'>I do coding for a living and I like hiking</p>
    </div>
  );
};

export default Card;
