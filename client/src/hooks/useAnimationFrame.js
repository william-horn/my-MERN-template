
import React, { useEffect, useState, useRef } from 'react';

export default (callback) => {
  const prevTime = useRef(Date.now());
  const animationRef = useRef();

  const animationStep = () => {
    const now = Date.now();
    callback((now - prevTime.current)*0.01);

    prevTime.current = now;
    animationRef.current = requestAnimationFrame(animationStep);
  }

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animationStep);
    return () => {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  return () => {
    cancelAnimationFrame(animationRef.current);
  }
}

