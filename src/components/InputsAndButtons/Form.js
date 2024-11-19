import React, { useState, useCallback } from 'react';

const Form = () => {
  const [fieldValue, setFieldValue] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const {
    yourName = '',
    yourEmail = '',
    subject = '',
    message = '',
  } = fieldValue;
  const emailValidation = new RegExp(/\S+@\S+\.\S+/);
  const blankSpaceVal = new RegExp(/^(?!\s*$).+/);

  const handleInputChange = useCallback((event) => {
    const {
      target: { name, value },
    } = event;

    setFieldValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const validateInputs = () => {
    let errors = {};
    if (!yourEmail) {
      setTimeout(() => (errors.email = 'The field is required.'), 3000);
    } else if (!emailValidation.test(yourEmail)) {
      setTimeout(
        () => (errors.email = 'The e-mail address entered is invalid.'),
        3000
      );
    }
    if (!blankSpaceVal.test(yourName)) {
      setTimeout(() => (errors.name = 'The field is required.'), 3000);
    }
    return errors;
  };

  const onSendYourMessage = () => {
    const errorData = validateInputs();
    setErrors(errorData);
    clearInputs(errorData);
    setDisplayAlert(true);
  };

  const clearInputs = (errorData) => {
    setLoading(true);
    simulateGetData().then(() => {
      setLoading(false);
      if (!errorData.email && !errorData.name) {
        setFieldValue({});
      }
    });
  };

  const onBlur = () => {
    const errorData = validateInputs();
    setErrors(errorData);
  };

  const simulateGetData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  const renderMessage = () => {
    if (!displayAlert) return null;
    if (errors.email || errors.name) {
      return (
        <div className="second-alert border-yellow-500">
          <p className="font-roboto text-sm text-gray-400 p-1 px-3">
            One or more fields have an error. Please check and try again.
          </p>
        </div>
      );
    }
    return (
      <div className="second-alert border-green-custom">
        <p className="font-roboto text-sm text-gray-400 p-1 px-3">
          Thank you for your message. It has been sent.
        </p>
      </div>
    );
  };

  const displayLoadingIcon = useCallback((loading) => {
    if (!loading) return;
    return (
      <div className="relative h-6 w-6 rounded-3xl bg-gray-500 ml-5">
        <span className="absolute h-2 w-2 text-sm text-white m-2.5 animate-spin">
          ●
        </span>
      </div>
    );
  }, []);

  const displayAlertMessage = useCallback(
    (loading) => {
      if (loading) return;
      return <div>{renderMessage()}</div>;
    },
    [loading]
  );

  return (
    <form className="Form">
      <div className="personal-info flex justify-between">
        <span className="mb-4 md:mr-4 md:w-[50%]">
          <input
            onBlur={onBlur}
            id="yourName"
            name="yourName"
            value={yourName}
            onChange={handleInputChange}
            className="input"
            placeholder="Your Name"
          />
          <span className="required-alert">{errors.name}</span>
        </span>
        <span className="md:w-[50%]">
          <input
            onBlur={onBlur}
            id="yourEmail"
            name="yourEmail"
            className="input"
            type="email"
            value={yourEmail}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <span className="required-alert">{errors.email}</span>
        </span>
      </div>
      <div className="subject">
        <input
          id="subject"
          name="subject"
          value={subject}
          onChange={handleInputChange}
          className="input"
          placeholder="Subject"
        />
      </div>
      <div className="flex flex-row mt-4">
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          className="input h-20"
          placeholder="Message"
        />
      </div>
      <button
        onClick={onSendYourMessage}
        type="button"
        className="button mt-12"
      >
        <span className="button-text">send your message</span>
      </button>
      {displayLoadingIcon(loading)}
      {displayAlertMessage(loading)}
    </form>
  );
};

export default Form;
