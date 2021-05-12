import UserCard from "../UserCard";
import "./style.css";

const UserList = ({ data }) => {
  if (data.length === 0) {
    return <p>No data ...</p>;
  }

  return (
    <div className="user-list">
      {data.map((i) => (
        <UserCard key={i.id} data={i} />
      ))}
    </div>
  );
};

export default UserList;
