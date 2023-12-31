import React, {useEffect, useState} from 'react';

export const Statistic = () => {
  const [num1, setNum1] = useState('18,162');
  const [num2, setNum2] = useState('828,369');
  useEffect(() => {
    setInterval(() => {
      setNum1(n => {
        const arr1 = n.split('');
        arr1.splice(2, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(2, 0, ',');
        return arr2.join('');
      });
    }, 300);
    setInterval(() => {
      setNum2(n => {
        const arr1 = n.split('');
        arr1.splice(3, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(3, 0, ',');
        return arr2.join('');
      });
    }, 300);
  }, []);
  return (
    <div className="formWrapper">
      <div><p>1,365</p>重点单位数</div>
      <div><p>{num1}</p>消防隐患单位数</div>
      <div><p>{num2}</p>全年消防报警总数</div>
    </div>
  );
};