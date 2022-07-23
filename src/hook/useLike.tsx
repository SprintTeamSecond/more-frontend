import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

const useLike = () => {
  const [likeList, setLikeList] = useState([]);
  const getLikeList = async () => {
    try {
      const response: any = await axios.get(``);
      const res = response[''];
      const data = res.map((u: any) => {
        const likelist = {
          _id: u._id,
          title: u.title,
          description: u.description,
          like: u.like,
        };
        return likelist;
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLikeList().then((res) => {
      setLikeList(res);
    });
  }, []);

  return {likeList};
};