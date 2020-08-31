import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();

  const [newUser, setNewUser] = React.useState({
    email: user?.email || '',
    name: user.name || ''
  });

  const handleSetEmail = event =>
    setNewUser({ ...newUser, email: event?.target?.value || '' });
  const handleSetName = event =>
    setNewUser({ ...newUser, name: event?.target?.value || '' });

  const handleSubmit = () => {
    const { email, name } = newUser;
    if (email?.trim() && name?.trim()) {
      setUserContext({
        email, name
      })
    }
  }

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={newUser.email}
          onChange={handleSetEmail}
        />
        <br />
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={newUser.name}
          onChange={handleSetName}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
