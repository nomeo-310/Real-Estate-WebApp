import React from 'react'
import './single.scss'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { buyApartmentData } from '../../data/data';
import Slider from '../common/slider/Slider';
import femaleAvatar from '../../images/rentImages/femaleAvatar.svg'
import maleAvatar from '../../images/rentImages/maleAvatar.svg'

const SingleBuy = () => {
  const {id} = useParams()
  const singleHouseData = buyApartmentData.find((data) => data.id === +id)

  const [activeTab, setActiveTab] = useState('schedule')

  const InputNav =({activeTab, onTabChange})=> {
    const itemClass =(tabName)=> {
      return (`input-nav-item ${activeTab === tabName ? 'selected' : null}`);
    }
    return (
      <div className="input-tab-nav margin-b-10 margin-t-10">
        <button className={`input-nav-item normal-text normal-sm ${itemClass('schedule')}`} onClick={() => onTabChange('schedule')}>Schedule a visit</button>
        <button className={`input-nav-item normal-text normal-sm ${itemClass('subscribe')}`} onClick={() => onTabChange('subscribe')}>Subscribe Now</button>
      </div>
    )
  }

  const [schedule, setSchedule] = useState('select schedule');
  const [showSchedules, setShowSchedules] = useState(false)
  const scheduleList = ['physical schedule', 'virtual schedule']

  const SingleSchedule =(props)=> {
    return (
      <li onClick={() => setSchedule(props.value)} className='normal-text normal-sm text-capital'>{props.value}</li>
    )
  };
  useEffect(() => {
    const handler =()=> setShowSchedules(false);
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    };
  });

  const handleClick =(event)=> {
    event.stopPropagation()
    setShowSchedules(!showSchedules)
  }

  const ScheduleContent =()=> {
    return (
      <div className="schedule">
        <h3 className="normal-text normal-sm normal-sm margin-b-10">Choose inspection type, date and time</h3>
        <div className="input">
          <div className="input-header" onClick={handleClick}>
            <h2 className="normal-text normal-sm text-capital">{schedule}</h2>
            <span className="mdi mdi-chevron-down normal-sm"></span>
          </div>
          { showSchedules && (
            <ul className="input-list">
              {scheduleList.map((item, index) => (
                <SingleSchedule key={index} value={item}/>
              ))}
            </ul>
          )}
        </div>
        <div className="input">
          <div className="input-header"onClick={calendarClick}>
            <h2 className="normal-text normal-sm">Inspection Date</h2>
            <span className="mdi mdi-calendar normal-sm base-color"></span>
          </div>
          {showCalendar && (<Calendar value={dateState} onChange={changeDate}/>)}
        </div>
        <div className="input">
          <div className="input-header">
            <h2 className="normal-text normal-sm">Inspection Time</h2>
            <span className="mdi mdi-clock normal-sm base-color"></span>
          </div>
        </div>
        <div className="submit-button margin-t-40">
          <button className='normal-text normal-sm'>Schedule a vist</button>
        </div>
      </div>
    )
  }

  const SubscribeContent =()=> {
    return (
      <div className="schedule">
        <h3 className="normal-text normal-sm margin-b-10">Choose inspection type, date and time</h3>
        <div className="input">
          <div className="input-header" onClick={handleClick}>
            <h2 className="normal-text normal-sm text-capital">{schedule}</h2>
            <span className="mdi mdi-chevron-down normal-sm"></span>
          </div>
          { showSchedules && (
            <ul className="input-list">
              {scheduleList.map((item, index) => (
                <SingleSchedule key={index} value={item}/>
              ))}
            </ul>
          )}
        </div>
        <div className="input">
          <div className="input-header" onClick={calendarClick}>
            <h2 className="normal-text normal-sm">Inspection Date</h2>
            <span className="mdi mdi-calendar normal-sm base-color"></span>
          </div>
          {showCalendar && (<Calendar value={dateState} onChange={changeDate}/>)}
        </div>
        <div className="input">
          <div className="input-header">
            <h2 className="normal-text normal-sm">Inspection Time</h2>
            <span className="mdi mdi-clock normal-sm base-color"></span>
          </div>
        </div>
        <div className="submit-button margin-t-40">
          <button className='normal-text normal-sm'>
            <Link to='/subscription-form'>Subscribe now</Link>
          </button>
        </div>
      </div>
    )
  }

  const MainContent =({tab})=> {
    switch(tab) {
      default:
      case 'schedule': 
        return (<ScheduleContent/>)
      case 'subscribe':
        return (<SubscribeContent/>)
    }
  }

  const [dateState, setDateState] =useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const changeDate =(event)=> {
    setDateState(event)
  }

  useEffect(() => {
    const handler =()=> setShowCalendar(false)
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    };
  });

  const calendarClick =(event)=> {
    event.stopPropagation()
    setShowCalendar(!showCalendar);
  }
  return (
    <div className='single-rent padding-y'>
      <div className="container">
        <div className="single-rent-top margin-b-40">
          <div className="single-rent-top-left">
            <Slider slideImages={singleHouseData.image_list}/>
          </div>
          <div className="single-rent-top-right">
            <h2 className="head-text head-sm">Details</h2>
            <h3 className="normal-text normal-sm">{singleHouseData.address}, {singleHouseData.city}, {singleHouseData.state}</h3>
            <h3 className="normal-text normal-sm text-capital">{singleHouseData.furniture_type} apartment</h3>
            <h3 className="normal-text normal-sm text-capital">property appreciation rate: {singleHouseData.appreciation}% <span className="normal-tiny text-lower">per year</span></h3>
            <h3 className="normal-text normal-sm">Down payment: <span className="mdi mdi-currency-ngn"></span>{singleHouseData.down_payment.toLocaleString()}</h3>
            <h3 className="normal-text normal-sm text-capital">property price: <span className="mdi mdi-currency-ngn"></span>{singleHouseData.price.toLocaleString()}</h3>
            <h3 className="normal-text normal-sm text-capital">minimum payment period: {singleHouseData.hold_time} years</h3>
            <ul>
              <li className="normal-text normal-sm">
                <span className="mdi mdi-bed normal-lg"></span> 
                {singleHouseData.bed_no === 1 ? `${singleHouseData.bed_no} Bedroom` : `${singleHouseData.bed_no} Bedrooms`}
              </li>
              <li className="normal-text normal-sm">
                <span className="mdi mdi-bathtub normal-lg"></span> 
                {singleHouseData.bath_no === 1 ? `${singleHouseData.bath_no} Bathroom` : `${singleHouseData.bath_no} Bathrooms`}
              </li>
              <li className="normal-text normal-sm">
                <span className="mdi mdi-toilet normal-lg"></span> 
                {singleHouseData.toilet_no === 1 ? `${singleHouseData.toilet_no} Toilet` : `${singleHouseData.toilet_no} Toilets`}
              </li>
              <li className="normal-text normal-sm">
                <span className="mdi mdi-land-plots normal-lg"></span>
                {singleHouseData.apartment_area} m<span className='squared'>2</span>
              </li>
              <li className="normal-text normal-sm">
                <span className="mdi mdi-land-fields normal-lg"></span>
                {singleHouseData.property_area} m<span className="squared">2</span>
              </li>
            </ul>
            <div className="manager-details-box">
              <h2 className="head-text head-sm">Managed by</h2>
                <div className="manager-details">
                  <div className="manager-pix">
                    {singleHouseData.property_manager.sex === 'male' ? <img src={maleAvatar} alt="manager_pix"/> : <img src={femaleAvatar} alt="manager_pix"/>}
                  </div>
                  <div className="manager-contacts">
                    <h3 className="normal-text normal-sm">Name: {singleHouseData.property_manager.sex === 'male' ? 'Mr.' : 'Mrs'} {singleHouseData.property_manager.name}</h3>
                    <h3 className="normal-text normal-sm"><span className="mdi mdi-phone"></span> : {singleHouseData.property_manager.contact}</h3>
                    <h3 className="normal-text normal-sm"><span className="mdi mdi-whatsapp"></span> : {singleHouseData.property_manager.whatsapp_contact}</h3>
                    <h3 className="normal-text normal-sm"><span className="mdi mdi-instagram"></span> : {singleHouseData.property_manager.instagram_handle}</h3>
                    <h3 className="normal-text normal-sm"><span className="mdi mdi-twitter"></span> : {singleHouseData.property_manager.twitter_handle}</h3>
                  </div>
                </div>
            </div>

          </div>
        </div>
        <div className="single-rent-bottom">
        <div className="apartment-desc-et-input">
          <div className="apartment-desc margin-b-10">
            <div className="a-text">
              <h2 className="head-text head-sm">About this property</h2>
              <p className="normal-text normal-sm margin-b-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto, rerum deleniti repellendus nam, 
                eius omnis saepe maiores cumque, aspernatur iure assumenda voluptatum eos deserunt repudiandae quasi 
                veritatis maxime facere aperiam minima itaque odit vitae. Quibusdam consequuntur, distinctio quia ea 
                deleniti ex nostrum nisi hic aut excepturi incidunt amet debitis nihil? A fuga, 
                ratione alias praesentium error harum atque quae aspernatur placeat cupiditate delectus modi odit quidem, 
                voluptatum animi minima, provident blanditiis adipisci vel corporis facere quam! Aliquid voluptas, quas commodi 
                sunt unde ex nisi minus necessitatibus suscipit. Reprehenderit molestias libero est culpa non ex delectus consectetur 
                sint maiores aliquid?
              </p>
              <p className="normal-text normal-sm margin-b-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat optio placeat impedit neque reiciendis tempore ullam 
                ea voluptate autem quo! A, laudantium quae quia nemo labore laborum ipsam porro, eos officia deleniti dolor voluptatibus 
                maxime reprehenderit earum expedita, repudiandae maiores mollitia necessitatibus. Ipsam saepe ex ad sint praesentium, recusandae aut.
              </p>
              <p className="normal-text normal-sm margin-b-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum deserunt numquam. Rerum eum, officia iusto obcaecati impedit 
                sunt blanditiis vero mollitia quos. Sed voluptatum nam sit fuga, maxime rem.
              </p>
            </div>
            <div className="m-payment margin-b-10">
              <h2 className="head-text head-sm">Miscellaneous payments</h2>
              <h3 className="normal-text normal-sm">Estate security fee: 
                <span className="mdi mdi-currency-ngn"></span>{singleHouseData.other_charges.monthly_security.toLocaleString()}/
                <span className="normal-text normal-tiny">month</span>
              </h3>
              <h3 className="normal-text normal-sm">Estate Plant subscription fee: 
                <span className="mdi mdi-currency-ngn"></span>{singleHouseData.other_charges.monthly_generator.toLocaleString()}/
                <span className="normal-text normal-tiny">month</span>
              </h3>
              <h3 className="normal-text normal-sm">Estate sanitation fee: 
                <span className="mdi mdi-currency-ngn"></span>{singleHouseData.other_charges.monthly_cleaning.toLocaleString()}/
                <span className="normal-text normal-tiny">month</span>
              </h3>
            </div>
            <div className="a-amenities">
              <h2 className="head-text head-sm">Amenities</h2>
              {singleHouseData.amenities.map((item, index) => (
                <h3 className="normal-text normal-sm text-capital" key={index}> - {item}</h3>
              ))}
            </div>
          </div>
          <div className="apartment-input-form">
            <div className="apartment-input-form-content">
              <div className="apartment-input-price margin-b-20">
                <div>
                  <h3 className="normal-text normal-sm complement-color">Annual rent:</h3>
                  <h2 className="head-text head-xsm margin-b-0 complement-color"><span className="mdi mdi-currency-ngn"></span>{singleHouseData.annual_rent.toLocaleString()}</h2>
                </div>
              </div>
              <div className="apartment-input-tab">
                <InputNav activeTab={activeTab} onTabChange={setActiveTab}/>
                <MainContent tab={activeTab}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SingleBuy;
