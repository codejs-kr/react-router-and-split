import React from 'react';

const Post = ({location, match}) => {
  return (
    <div>
      Post {match.params.id}
      <ul>
        <li>{location.pathname} (주소창의 path전체를 보여줍니다.)</li>
        <li>{match.path} (Route에 설정된 path값 그대로를 보여줍니다.)</li>
        <li>{match.url} (Route에 설정된 path로 얻어진 결과 값을 보여줍니다.)</li>
      </ul>
    </div>
  );
};

export default Post;