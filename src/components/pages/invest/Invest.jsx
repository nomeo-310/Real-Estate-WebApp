import React from 'react';
import PageHeader from '../common/page-header/PageHeader';
import { investHeaderData } from './investData';
import { investApartmentData } from '../../data/data';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import ReactPaginate from 'react-paginate';
import '../../pages/single-pages/single.scss'
import locationDataBase from '../../data/locationDataBase.json'
import nigeriaStates from '../../data/nigeria-states.json'
import { emptyListData } from '../../pages/rent/rentData';
import InvestCard from '../../pages/common/cards/InvestCard';

const Invest = () => {
    const data = investApartmentData;
    const jsonObj = JSON.stringify(locationDataBase)
    const newObj = JSON.parse(jsonObj)

    const getData =(value)=> {
      if (value === 'State') {
        return 'None'
      } else {
        const newlocationData = newObj.filter((element) => element.state === value);
        return newlocationData
      }
    }
    const states = nigeriaStates

    const [showStates, setShowStates] = useState(false)
    const [location, setLocation] = useState('State')
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();

    const [showLga, setShowLga] = useState(false)
    const [lga, setLga] = useState('Location')
    const [lgaSearchValue, setLgaSearchValue] = useState('');
    const lgaSearchRef = useRef();

    const SingleState =(props)=> {
      return (
        <li onClick={() => selectState(props.value)} className='normal-text'>{props.value}</li>
      )
    }

    const SingleLga =(props)=> {
      return (
        <li onClick={() => selectLocation(props.value)} className='normal-text'>{props.value}</li>
      )
    }

    useEffect(() => {
      const handler =()=> setShowStates(false);
      window.addEventListener('click', handler)
      return () => {
        window.removeEventListener('click', handler)
      };
    });

    useEffect(() => {
      const handle =()=> setShowLga(false);
      window.addEventListener('click', handle)
      return () => {
        window.removeEventListener('click', handle)
      };
    });

    useEffect(() => {
      setSearchValue('')
      if (showStates && searchRef.current) {
        searchRef.current.focus();
      }
    }, [showStates]);

    useEffect(() => {
      setLgaSearchValue('')
      if (showLga && lgaSearchRef.current) {
        lgaSearchRef.current.focus();
      }
    }, [showLga]);

    const onSearch =(event)=> {
      setSearchValue(event.target.value);
    }

    const onLgaSearch =(event)=> {
      setLgaSearchValue(event.target.value);
    }

    const getFilteredData =(data) => {
      if (!searchValue) {
        return data
      }
      return data.filter((item) => item.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
    };

    const getFiltered =(data) => {
      if (!lgaSearchValue) {
        return data
      }
      return data.filter((item) => item.toLowerCase().indexOf(lgaSearchValue.toLowerCase()) >= 0)
    };

    const handleState =(event)=> {
      event.stopPropagation()
      setShowStates(!showStates)
      setLocation('State')
      setLga('Location')
      setMainData(data);
    }

    const handleLga =(event)=> {
      event.stopPropagation()
      setShowLga(!showLga)
      setLga('Location')
      setMainData(data.filter((item) => item.state === location));
    }
    const localGovt = getData(location)[0].lgas;
    console.log('state', location);
    console.log('lga', localGovt)
    console.log('lga', lga)

    console.log(data)

    const [mainData, setMainData] = useState(data);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffSet] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
      const endOffSet = itemOffSet + itemsPerPage;
      setCurrentItems(mainData.slice(itemOffSet, endOffSet));
      setPageCount(Math.ceil(mainData.length / itemsPerPage));
    }, [itemOffSet, itemsPerPage, mainData]);

    const handlePageClick =(event)=> {
      const newOffset = (event.selected * itemsPerPage) % mainData.length;
      setItemOffSet(newOffset);
    }

    const selectState =(value)=> {
      setLocation(value);
      setMainData(data.filter((item) => item.state === value))
    }

    const selectLocation =(value)=> {
      setLga(value)
      setMainData(mainData.filter((item) => item.city === value));
    }

    const returnBack =()=> {
      if (location === 'Lagos' || location === 'Oyo' || location === 'Abuja') {
        setMainData(data.filter((item) => item.state === location))
        setLga('Location')
      } else {
        setMainData(data)
        setLga('Location')
        setLocation('State')
      }
    }
  return (
    <div className='rent-apartment'>
        <PageHeader pageHeader={investHeaderData} overlay={true}/>
        <div className="container">
          <div className={ currentItems.length ===0 ? 'rent-apartment-content margin-y-md empty' : 'rent-apartment-content margin-y-md'}>
            <div className="left-section">
              <div className="left-section-content">
                <h2 className="normal-text normal-md margin-b-20">Filter</h2>
                <div className="section-drop-down-container">
                  <div className="input state">
                    <h3 className="normal-text normal-tiny text-capital">state</h3>
                    <div className="input-header" onClick={handleState}>
                      <div className="input-value normal-text normal-sm">{location}</div>
                      <span className="mdi mdi-chevron-down"></span>
                    </div>
                    { showStates && (
                      <div className="input-list">
                        <div className="search-box">
                          <input type="text" placeholder='Search Location...' onChange={onSearch} value={searchValue} ref={searchRef} className='normal-text normal-tiny'/>
                        </div>
                        {getFilteredData(states).sort().map((state, index) => (
                          <SingleState key={index} value={state}/>
                        ))}
                      </div>)
                    }
                  </div>
                  <div className="input location">
                  <h3 className="normal-text normal-tiny text-capital">location</h3>
                    <div className="input-header" onClick={handleLga}>
                      <div className="input-value normal-text normal-sm">{lga}</div>
                      <span className="mdi mdi-chevron-down"></span>
                    </div>
                    { localGovt === undefined 
                      ? ''
                      : showLga && (
                      <div className="input-list">
                        <div className="search-box">
                          <input type="text" placeholder='Search...' onChange={onLgaSearch} value={lgaSearchValue} ref={lgaSearchRef} className='normal-text normal-tiny'/>
                        </div>
                        {getFiltered(localGovt).sort().map((lga, index) => (
                          <SingleLga key={index} value={lga}/>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="right-section-content">
                { currentItems.length === 0 
                ?
                <div className="empty-container button-tiny-curved">
                  {emptyListData.map((item) => (
                    <div className="empty-container-text">
                      <h2 className='normal-text normal-md'>{item.title}</h2>
                      <ul>
                        {item.subtitle.map((item, index) => (
                          <li className="normal-text normal-sm" key={index}>{item}</li>
                        ))}
                      </ul>
                        <button onClick={returnBack}><span className="mdi mdi-arrow-u-left-top"></span></button>
                    </div>
                  ))}
                </div>
                : currentItems.map((item) => (
                    <InvestCard key={item.id} investCardData={item} small={true}/>
                  ))}
              </div>
              {currentItems.length === 0 ? '' :
              <div className="right-section-pagination">
                <ReactPaginate
                  breakLabel='...'
                  nextLabel='next'
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel='previous'
                  renderOnZeroPageCount={null}
                  containerClassName='pagination'
                  pageLinkClassName='page-num'
                  activeClassName='active-num'
                  nextClassName='next'
                  previousClassName='prev'
                />
              </div>
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default Invest;
