
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../assets'
import { useAppContext } from '../../providers/AppProvider';
import Enum from '../../enums';

const LandingPage = () => {
  const { themeData } = useAppContext();

  return (
    <div>
      <p>Hello, world!</p>
    </div>
  )
};


export default LandingPage;



