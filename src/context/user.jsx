import { createContext, useState, useEffect } from 'react'
// import cartContext 

export const UserContext = createContext()



export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]) // save all of the users in context 

    const [currentUser, setCurrentUser] = useState('') // logged in user

    const findUserProfile = async () => {
        // match authenticated user's username + password with user profile in stored user array 
        // users.filter(user => user.username === username && user.password === password) 

        // setUser({ ...user info ... })
    }

    const logOut = () => {
        // set currentUser to ''/null/{}

        // clear localStorage - clear userInfo 
    }

    const loadRemoteCart = () => {

        /* 
        {
                id:5,
                userId:1,
                date:...,
                products:[...] => set cartItems with products 
            }
        */
            // set products as cartItems 

    }

    // useEffect - load all Users 

    // useEffect - check local storage, etc 

}   