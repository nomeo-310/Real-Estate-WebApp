import React from 'react';
import { useState } from 'react';
import './subscription.scss'
import MultistepForm from './MultistepForm';
import { SubscriptionData } from './subscriptionData';
import { Link } from 'react-router-dom';
import subscriptionBanner from '../../images/subscriptionBanner.jpg'

const Subscription = () => {
    const [index, setIndex] = useState(0);
    const totalPage = SubscriptionData.length;
    const [pagesAnswer, setPagesAnswer] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const onPagesAnswerUpdate =(step, answerObj)=> {
        setPagesAnswer({...pagesAnswer, [step]: answerObj})
    }
    const prevButton =()=> {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1)
        }
    }

    const nextButton =()=> {
        if (index < 3) {
           setIndex(prevIndex => prevIndex + 1)
        } else {
            setPagesAnswer({})
            setSubmitted(true)
        }
    }
  return (
    <div className='subscription'>
        <div className="subscription-content">
            <div className="subscription-form">
                <h2 className="head-text head-sm">Let your joy begin</h2>
                <h3 className="normal-text normal-sm margin-b-10">Create your account</h3>
                    {submitted ?
                    <div className="box">
                        <div className="subscription-form-content padding-y-lg">
                            <p className="normal-text normal-md">Your account has been successfully created!!!</p>
                            <p className="normal-text normal-md">check your email for further verification details</p>
                        </div>
                        <div className="subscription-form-control">
                            <Link to='/' className='normal-text normal-sm text-capital button-default button-tiny-curved'>back to home</Link>
                        </div>
                    </div> :
                    <div className='box'>
                        <div className="subscription-form-content">
                            <MultistepForm list={SubscriptionData} step={index} onpageUpdate={onPagesAnswerUpdate} pagesAnswer={pagesAnswer}/>
                        </div>
                        <div className="subscription-form-control">
                            {index === 0 ? '' : (
                            <button onClick={prevButton} className='normal-text text-sm button-small text-capital button-tiny-curved '>previous</button> 
                            )}
                            <button onClick={nextButton} className='normal-text text-sm button-small text-capital button-tiny-curved '>{index === totalPage - 1 ? 'submit' : 'next'}</button>
                        </div>
                    </div> 
                    }
                    <div className="box-bottom margin-t-40">
                        <h2 className="normal-text normal-xsm text-center">Download the app</h2>
                        <div className="box-bottom-link margin-t-30">
                            <div className="box-link">
                                <h4 className="normal-text normal-xsm"><span className="mdi mdi-apple"></span> on the App store</h4>
                            </div>
                            <div className="box-link">
                                <h4 className="normal-text normal-xsm"><span className="mdi mdi-google-play"></span> on the App store</h4>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="subscription-banner">
                    <div className="image-banner">
                        <img src={subscriptionBanner} alt="subscription_banner"/>
                        <div className="mask"></div>
                        <div className="banner-content">
                            <h2 className="normal-text normal-sm margin-b-20">Already have an account? <span className='normal-text normal-sm header-w'>Sign in</span></h2>
                            <h3 className="normal-text normal-xsm header-w">Download the app</h3>
                            <div className="app-link margin-t-10">
                                <div className="app-link-link">
                                    <h2 className="normal-text normal-sm"><span className="mdi mdi-apple"></span>on the App store</h2>
                                </div>
                                <div className="app-link-link">
                                    <h2 className="normal-text normal-sm"><span className="mdi mdi-google-play"></span>on the Google play</h2>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Subscription;
