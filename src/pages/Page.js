import React from 'react';

const Page = ({location, match}) => {
  return (
    <div>
      <h2>Page {match.params.name}</h2>
    </div>
  );
};

export default Page;