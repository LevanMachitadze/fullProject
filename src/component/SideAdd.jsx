import React from 'react';
import { useParams } from 'react-router-dom';

const SideAdd = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Invoice #{id}</h1>
    </div>
  );
};

export default SideAdd;
