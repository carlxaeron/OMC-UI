'use client';

import { useState } from 'react';

const Captcha = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');

  const generateCaptcha = () => {
    // Generate a random captcha text
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(captcha);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput === captchaText) {
      // Captcha validation passed
      console.log('Captcha validation passed');
      // Add your logic here
    } else {
      // Captcha validation failed
      console.log('Captcha validation failed');
      // Add your logic here
    }
    // Generate a simple math captcha
    const generateCaptcha = () => {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      const operators = ['+', '-', '*'];
      const operator = operators[Math.floor(Math.random() * operators.length)];
      let captcha = '';
      switch (operator) {
        case '+':
          captcha = `${num1} + ${num2}`;
          break;
        case '-':
          captcha = `${num1} - ${num2}`;
          break;
        case '*':
          captcha = `${num1} * ${num2}`;
          break;
        default:
          captcha = '';
      }
      setCaptchaText(captcha);
    };
    // Clear user input
    setUserInput('');
    // Generate a new captcha
    generateCaptcha();
  };

  return (
    <div>
      <h1>Next.js Captcha</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="captcha">Enter the text shown below:</label>
          <br />
          <img src={`https://api.captcha.com/${captchaText}`} alt="Captcha" />
          <br />
          <input type="text" id="captcha" value={userInput} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Captcha;