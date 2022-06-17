import React, { useState, useEffect } from 'react';

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    // useEffect(() => {
    //   (async () => {
    //     const response = await axios.get(`/users/${userId}`);
    //     setUser(response.data);
    //   })();
    // }, []);
    return user ? <Component user={user} {...props} /> : <p>Loading...</p>;
  };
};
