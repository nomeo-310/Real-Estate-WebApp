import React from 'react'
import './faq.scss'
import { useState } from 'react'
import PageHeader from '../common/page-header/PageHeader'
import FaqCard from './FaqCard'
import { faqData } from './faqData'
import { faqList } from './faqData'

const Faq = () => {
  const [clicked, setClicked] = useState(true);
  const handleToggle =(index)=> {
    if (clicked === index) {
      return setClicked(true)
    }
    setClicked(index)
  }
  return (
    <div className='faq'>
      <PageHeader pageHeader={faqData} overlay={true}/>
      <div className="container">
        <div className="margin-y-md">
          <h2 className="head-text head-md text-center">Frequently Asked Questions</h2>
          <h3 className='normal-text normal-md text-center'>We understand how customers like to know what they are paying for and what they should expect. Below is a list of the common 
              customer questions. They have been answered in such a way that you would be satisfied, however if you can't find answer to your
              questions don't hesitate to reach out to us.
          </h3>
        </div>
        <ul className="faq-list margin-y-md">
          {faqList.map((faqItem) => (
            <FaqCard 
              key={faqItem.id} 
              faqItem={faqItem}
              onToggle={()=> handleToggle(faqItem.id)}
              active={clicked === faqItem.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq;
