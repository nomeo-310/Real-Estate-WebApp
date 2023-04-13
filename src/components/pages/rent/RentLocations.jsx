import React from 'react';
import { useState } from 'react';
import { lagosData } from './rentData';
import { ibadanData } from './rentData';
import { abujaData } from './rentData';

const RentLocations = () => {
    const [activeTab, setActiveTab] = useState('lagos')
    const [clicked, setClicked] = useState(true)
    const handleToggle =(index)=> {
        if (clicked === index) {
            return setClicked(true)
        }
        setClicked(index)
    }

    const TabNav =({activeTab, onTabChange})=> {
        const itemClass =(tabName)=> {
            return (`location-nav-item ${activeTab === tabName ? 'selected': null}`);
        }
        return (
            <div className="tab-nav margin-t-20">
                <button className={`head-text head-sm button-tiny-curved ${itemClass('lagos')}`} onClick={()=> onTabChange('lagos')}>Lagos</button>
                <button className={`head-text head-sm button-tiny-curved ${itemClass('oyo')}`} onClick={()=> onTabChange('oyo')}>Oyo</button>
                <button className={` head-text head-sm button-tiny-curved ${itemClass('abuja')}`} onClick={()=> onTabChange('abuja')}>Abuja</button>
            </div>
        )
    }
    const RentLocationCard =({singleItem, onToggle, active})=> {
        return (
            <li className={`tab-item button-tiny-curved ${active ? 'active' : null}`}>
                <h2 className="normal-text normal-sm" onClick={onToggle}>{singleItem}</h2>
                <div className={`location-details ${active ? 'open' : null}`}>
                    <h3 className="normal-text normal-tiny">3 Bed: 25</h3>
                    <h3 className="normal-text normal-tiny">2 Bed: 25</h3>
                    <h3 className="normal-text normal-tiny">Single: none</h3>
                </div>
            </li>
        )
    }
    const TabContent =({data})=> {
        return (
            <div className="tab-content">
                <ul className="tab-list">
                    {data.map((singleItem, index)=> (
                    <RentLocationCard 
                        key={index} 
                        singleItem={singleItem}
                        onToggle={()=> handleToggle(index)}
                        active={clicked === index}
                    />
                    ))}
                </ul>
            </div>
        )
    }

    const MainContent =({tab})=> {
        switch (tab) {
            default:
            case 'lagos':
                return (<TabContent data={lagosData}/>)
            case 'oyo':
                return (<TabContent data={ibadanData}/>)
            case 'abuja':
                return (<TabContent data={abujaData}/>)
        }
    }

  return (
    <div className='rent-locations margin-b-60'>
      <div className="container">
        <h2 className="head-text head-md">Find a neighbourhood near you</h2>
        <h3 className="normal-text normal-sm">Enjoy quality living experience with proximity. It's closer than you think</h3>
        <h3 className="normal-text normal-sm">If you cannot find your location of choice in the list, do not loose hope. Our list is growing continously and within the next two weeks we should an apartment in that location.</h3>
        <TabNav activeTab={activeTab} onTabChange={setActiveTab}/>
        <MainContent tab={activeTab}/>
      </div>
    </div>
  );
}

export default RentLocations;
