import "./style.css";

const UserCard = ({ data }) => {
  return (
    <div className="user-card">
      <h4>{data.name}</h4>
      <p>{data.email}</p>
    </div>
  );
};

export default UserCard;
