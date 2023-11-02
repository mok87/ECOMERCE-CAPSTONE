import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Save all users in context
  const [currentUser, setCurrentUser] = useState(null); // Represent the logged-in user
  

  const authenticateUser = (username, password) => {
    // Find the user with the provided username and password
    const authenticatedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (authenticatedUser) {
      // Set the current user when authentication succeeds
      setCurrentUser(authenticatedUser);
      return loadRemoteCart(authenticatedUser.id);
      
    }

    return false;
  };

  const loadRemoteCart = (userId) => {
    // Fetch the user's cart from a remote server or localStorage
    // and set the cart items in state
    // Example code for loading the cart from a remote server
    fetch(`https://fakestoreapi.com/carts/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        return(data.products);
      })
      .catch((error) => {
        console.error('Error loading cart:', error);
      });
  };

  const logOut = () => {
    // Clear the current user and cart items
    setCurrentUser(null);
   
  };

  // Load users and perform other setup tasks when the component mounts
  useEffect(() => {
    // Fetch the list of users from a remote server or localStorage
    // Example code for loading users from a remote server
    fetch('https://fakestoreapi.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error loading users:', error);
      });

    // Check if there's a stored user session, and load the cart if needed
    if (localStorage.getItem('userSession')) {
      // Retrieve and parse the user session data from localStorage
      const userSession = JSON.parse(localStorage.getItem('userSession'));

      // Set the current user from the user session
      setCurrentUser(userSession.user);

      // Load the user's cart
      loadRemoteCart(userSession.user.id);
    }
  }, []);

  // Save user session data when the current user changes
  useEffect(() => {
    if (currentUser) {
      // Create a user session object
      const userSession = { user: currentUser };

      // Store the user session data in localStorage
      localStorage.setItem('userSession', JSON.stringify(userSession));
    } else {
      // Remove the user session data when the user logs out
      localStorage.removeItem('userSession');
    }
  }, [currentUser]);

  // Provide values to the context
  const contextValue = {
    currentUser,
    authenticateUser,
    logOut,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
