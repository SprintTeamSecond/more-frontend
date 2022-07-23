import React from "react";
import useLike from '../hook/useLike';

const Mylike = () => {
  const {likeList} = useLike();
  return <div>{/* {likeList && <리스트 컴포넌트 subData={likeList} />} */}</div>;
};

export default Mylike;