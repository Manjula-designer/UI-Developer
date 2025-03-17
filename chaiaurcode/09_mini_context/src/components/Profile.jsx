// import React, {useState, useContext} from 'react'
// import userContext from '../context/UserContext'

// function Profile() {
//     const {user}=useContext(userContext)
//     if (!user) {
//           <div>Please Login</div>  
//     }else{
//         <div>Welcome: {user.username}</div>
//     }
// }

// export default Profile


import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile