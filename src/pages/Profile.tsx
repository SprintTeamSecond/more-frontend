import React,{useState,useEffect} from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import axios, { AxiosResponse } from 'axios';
import {GithubUser}  from '../types';
import useProfile from "../hook/useProfile";

export type ProfileProps = {
  items: GithubUser;
};

const Profile = ({items} : ProfileProps) =>{
    return(
    <div>
        <div>{items.github_avatar}</div>
        <div>{items.github_email}</div>
        <div>{items.github_username}</div>
    </div>
    )

};

  
export default Profile;