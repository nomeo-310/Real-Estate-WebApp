import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router';
import '../single-pages/single.scss'
import ReactPaginate from 'react-paginate';
import locationDataBase from '../../data/locationDataBase.json'
import nigeriaStates from '../../data/nigeria-states.json'
import { emptyListData } from '../../pages/rent/rentData';
import { buyApartmentData } from '../../data/data';
import BuyCard from '../common/cards/BuyCard';
import { buyHeaderData } from './buyData';
import PageHeader from '../common/page-header/PageHeader';

const Buy = () => {
  const {id} = useParams();

  const data = buyApartmentData.filter((item) => item.category === id);
  console.log(data)
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

    const filterHeader =(value)=> {
      const data = buyHeaderData.filter((item) => item.name === value)
      return data;
    }

    const headerInfo = filterHeader(id);
    console.log(headerInfo[0])

    const [showStates, setShowStates] = useState(false)
    const [location, setLocation] = useState('State')
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();

    const [showLga, setShowLga] = useState(false)
    const [lga, setLga] = useState('Location')
    const [lgaSearchValue, setLgaSearchValue] = useState('');
    const lgaSearchRef = useRef();

    const [bedType, setBedType] = useState('');
    const [bedClick, setBedClick] = useState(false);
    const [bedIndex, setBedIndex] = useState(0);

    const [bathType, setBathType] = useState('');
    const [bathClick, setBathClick] = useState(false);
    const [bathIndex, setBathIndex] = useState(0);

    const [toiletType, setToiletType] = useState('');
    const [toiletClick, setToiletClick] = useState(false);
    const [toiletIndex, setToiletIndex] = useState(0);

    const [furnitureType, setFurnitureType] = useState('');
    const [furnitureClick, setFurnitureClick] = useState(false);
    const [furnitureIndex, setFurnitureIndex] = useState(0);


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

    const numList = [1, 2, 3, 4];
    const funList = ['furnished', 'unfurnished']

    const bedroomType =(value, index)=> {
      setBedType(value);
      setBedIndex(index)
      if (bedClick === index) {
        return setBedClick(true);
      }
      setBedClick(index);
      setMainData(mainData.filter((item) => item.bed_no === value))
    };

    const bathroomType =(value, index)=> {
      setBathType(value);
      setBathIndex(index)
      if (bathClick === index) {
        return setBathClick(true)
      }
      setBathClick(index)
      setMainData(mainData.filter((item) => item.bath_no === value))
    };

    const toilet =(value, index)=> {
      setToiletType(value);
      setToiletIndex(index)
      if (toiletClick === index) {
        return setToiletClick(true)
      }
      setToiletClick(index)
      setMainData(mainData.filter((item) => item.toilet_no === value))
    };

    const furniture =(value, index)=> {
      setFurnitureType(value);
      setFurnitureIndex(index)
      if (furnitureClick === index) {
        return setFurnitureClick(true)
      }
      setFurnitureClick(index)
      setMainData(mainData.filter((item) => item.furniture_type === value))
    };

    console.log(bedType, bedIndex);
    console.log(bathType, bathIndex);
    console.log(toiletType, toiletIndex);
    console.log(furnitureType, furnitureIndex);
    console.log(data)
    console.log(buyHeaderData);

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
        setBathClick(false);
        setBedClick(false)
        setToiletClick(false)
        setFurnitureClick(false)
      } else {
        setMainData(data)
        setLga('Location')
        setLocation('State')
        setBathClick(false);
        setBedClick(false)
        setToiletClick(false)
        setFurnitureClick(false)
      }
    }
  return (
    <div className='rent-apartment buy-apartment'>
      <PageHeader pageHeader={headerInfo[0]} overlay={true}/>
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
                  { id === 'apartments' &&
                    <>
                    <div className="input bedrooms">
                    <h3 className="normal-text normal-tiny text-capital">bedrooms</h3>
                      <div className="buttons-wrapper">
                        {numList.map((item, index) => (
                          <button key={index} onClick={()=> bedroomType(item, index)} className={bedClick === index ? 'active normal-text normal-sm' : 'normal-text normal-sm'}>{item}</button>
                        ))}
                      </div>
                    </div>
                    <div className="input bathrooms">
                    <h3 className="normal-text normal-tiny text-capital">bathrooms</h3>
                      <div className="buttons-wrapper">
                        {numList.map((item, index) => (
                          <button key={index} onClick={()=> bathroomType(item, index)} className={bathClick === index ? 'active normal-text normal-sm' : 'normal-text normal-sm'}>{item}</button>
                        ))}
                      </div>
                    </div>
                    <div className="input toilets">
                    <h3 className="normal-text normal-tiny text-capital">toilets</h3>
                      <div className="buttons-wrapper">
                        {numList.map((item, index) => (
                          <button key={index} onClick={()=> toilet(item, index)} className={toiletClick === index ? 'active normal-text normal-sm' : 'normal-text normal-sm'}>{item}</button>
                        ))}
                      </div>
                    </div>
                    <div className="input furniture">
                    <h3 className="normal-text normal-tiny text-capital">furniture</h3>
                      <div className="buttons-wrapper">
                        {funList.map((item, index) => (
                          <button key={index} onClick={()=> furniture(item, index)} className={furnitureClick === index ? 'active normal-text normal-sm' : 'normal-text normal-sm'}>{item}</button>
                        ))}
                      </div>
                    </div>
                    </> 
                  }
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
                    <BuyCard key={item.id}  buyCardData={item} small={true}/>
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

export default Buy;
