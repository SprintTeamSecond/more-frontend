import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import axios from "axios";
import { getImpliedNodeFormatForFile } from "typescript";

// type userprofile = {
//     email:string;
//     avatar:any;
//     username:string;
// }

const Profile = async() =>{
    const {data} = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token`,
    },
  });
    return(
    <div>
        {data.email}
        {data.avatar} 
        {data.username}
        잠잠
    </div>
    )
}

export default Profile;

// 