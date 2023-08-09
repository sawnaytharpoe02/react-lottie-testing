import React, { useRef, useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import animationData from './assets/animation_ll3yx7rq.json';
import { Button, Result } from 'antd';

const App = () => {
  const emailVerifyRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    if (emailVerifyRef.current) {
      emailVerifyRef.current.pause();
    }
    setAnimationComplete(true);
  };

  return (
    <>
      <Lottie
        onComplete={handleAnimationComplete}
        lottieRef={emailVerifyRef}
        animationData={animationData}
        loop={false}
      />

      <div
        className={`no-icon-result ${
          animationComplete ? 'result-visible' : ''
        }`}>
        <Result
          status="success"
          title="Successfully email verify!"
          subTitle="Successfully email verification."
          extra={[<Button key="buy">Go to login</Button>]}
        />
      </div>
    </>
  );
};

export default App;
