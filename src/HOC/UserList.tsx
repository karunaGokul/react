import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ data }: any) => {
  /*  const [users, setUsers] = useState([]);
  const [terms, setTerms] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setUsers(json);
      console.log(json);
    };
    fetchUser();
  }, []); */

  let renderUsers = data.map((user: any) => {
    return (
      <div key={user.id}>
        <strong>{user.name};</strong>
      </div>
    );
  });

  /*  let filteredUser = users.filter(({name}: any) => {
    return name.indexOf(terms) >= 0
  }).map((user: any) => {
    return (
        <div key={user.id}>
            <strong>
            {user.name};
            </strong>
        
    </div>
    );
  }) */

  return (
    <div>
      <h4>{renderUsers}</h4>
    </div>
  );
};

const SearchUser = HOC(UserList, "users");

export default SearchUser;
