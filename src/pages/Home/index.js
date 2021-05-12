import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialUsers } from "../../store/users/users.slice";
import {
  getUsers,
  getIsLoading,
  getError,
} from "../../store/users/users.selectors";
import UserList from "../../components/UserList";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchInitialUsers());
    }
  });

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Home</h1>
      <UserList data={users} />
    </section>
  );
};

export default Home;
