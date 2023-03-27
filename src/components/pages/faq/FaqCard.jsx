import React from 'react';

const FaqCard = ({faqItem: {question, answer}, onToggle, active}) => {
  return (
    <li className={`faq-item margin-y-sm ${active ? 'active' : ''}`}>
      <div className="faq-question" onClick={onToggle}>
        <h2 className="head-text head-xsm">{question}</h2><span className={active ? 'mdi mdi-plus' : 'mdi mdi-minus'}></span>
      </div>
      <div className={`faq-answer ${ active ? 'open' : ''}`}>
        <h3 className="normal-text normal-sm">{answer}</h3>
      </div>
    </li>
  );
}

export default FaqCard;
