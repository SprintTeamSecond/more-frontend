import { Avatar } from "@class101/ui";
import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import axios from "axios";
import Login from "./Login";

type userprofile = {
    email:string;
    avatar:any;
    username:string;
}

const Profile = async () =>{
    const { data } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token`,
    },
  });
    return(
    <div>
        {/* {email} */}
        {/* {avatar} */}
        {/* {username} */}
    </div>
    )
}

export default Profile;