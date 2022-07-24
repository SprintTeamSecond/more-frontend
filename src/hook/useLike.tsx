import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

type Like = {
  _id: string;
  title: string;
  description: string;
  like: any;
};

const useLike = () => {
  const [likeList, setLikeList] = useState<Like[]>([]);
  const getLikeList = async () => {
    try {
      const response: any = await axios.get(``);
      const res = response[''];
      const data = res?.map(({_id, title, description, like}: any) => ({
        _id,
        title,
        description,
        like,
      }));
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

export default useLike;
