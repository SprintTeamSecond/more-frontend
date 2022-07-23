import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import axios, { AxiosResponse } from 'axios';
import { getImpliedNodeFormatForFile } from "typescript";

type userprofile = {
    email:string;
    avatar:any;
    username:string;
}


const Profile = () =>{
   const Userdata = async(datas: any) =>{
 const response: AxiosResponse<any> = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token`,
    },
  });
   let res = response.data.datas;
    const data = res.map((u: any) => {
        let userState = {
          username: u.username,
          email:u.email,
          avatar:u.avatar,  
        };
        return userState;
      });
      return data;
    } 
      return(
    <div>
       
    </div>
    )
} 
  
export default Profile;

// 