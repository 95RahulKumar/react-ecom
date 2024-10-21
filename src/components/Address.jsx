import { Steps } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const HomeAdd = [
  'Friends Mens Pg, Opp. Apama Shangi-la Street, No.3, Ploat No. 22, Padmasree Gardens, Gowlidoddy, Gachibowli, Hyderabad, TELANGANA - 50032 India.',
];

const AddressWrapper = styled.p`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  padding: 10px;
  background: #fff;
  height: max-content;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solid #f0f0f0;
`;

const Home = styled.p`
  color: #fff;
  background: green;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 20px;
  border: 1px solid green;
  width: max-content;
  margin-bottom: 10px;
`;

const SuccessBtn = styled.button`
  color: #fff;
  background: green;
  margin: 10px 5px;
  padding: 5px 10px;
  font-size: 15px;
  width: max-content;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Address = () => {
  const [step, setStep] = useState(1); // Move useState inside the component
  const [showAddress, setshowAddress] = useState(true)

  const handleClick = () => {
    // Add functionality here
    setStep(2)
    setshowAddress(false)
  };

  return (
    <Wrapper>
      <Steps
        style={{
          marginBottom: '10px',
        }}
        size="small"
        current={step}
        items={[
          {
            title: 'Bag',
          },
          {
            title: 'Address',
          },
          {
            title: 'Payment',
          },
        ]}
      />

       {showAddress && <div>
        <Home>Home</Home>
            {HomeAdd.map((add, index) => (
                <AddressWrapper key={index}>{add}</AddressWrapper> // Add unique key
            ))}
            <p>Mobile no.: 88XXXXXX16</p>
            <SuccessBtn onClick={handleClick}>Use This Address</SuccessBtn>
        </div>}
      {!showAddress && <p>Payment Gateway</p>}
    </Wrapper>
  );
};

export default Address;
