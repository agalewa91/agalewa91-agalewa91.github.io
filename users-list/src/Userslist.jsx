import { useState } from "react";
import "./Userslist.css";
import { useEffect } from "react";

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "Admin",
  });

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  //   const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  const setUser = (e) => {
    e.preventDefault();

    setUsers(users.concat({ ...formData, id: Date.now() }));
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const filterForUsers = (e) => {
    console.log(e);
    const target = e.target;
    const name = target.name;
    let filteredArray;

    if (name === "showadmin") {
      filteredArray = users.filter((user) => {
        return user.usertype === "Admin";
      });
    } else if (name === "showuser") {
      filteredArray = users.filter((user) => {
        return user.usertype === "User";
      });
    } else {
      filteredArray = users;
    }

    console.log(filteredArray);
    setFilteredUsers(filteredArray);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User type</label>
        <select name="usertype" id="usertype" onChange={handleInputChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button>Save</button>
      </form>

      <div className="filtered">
        <button
          name="showuser"
          onClick={(e) => {
            filterForUsers(e);
          }}
        >
          show User
        </button>
        <button
          name="showadmin"
          onClick={(e) => {
            filterForUsers(e);
          }}
        >
          show Admin
        </button>
        <button
          name="showall"
          onClick={(e) => {
            filterForUsers(e);
          }}
        >
          show All
        </button>
      </div>

      <div className="list">
        {filteredUsers.map((user) => {
          return (
            <div
              className="userItem"
              key={user.id}
              onClick={() => removeUser(user.id)}
            >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.usertype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
