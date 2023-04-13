import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FormItem =({item, onChange, response})=> {
    const [currentValue, setCurrentValue] = useState(response || '')

    const [gender, setGender] = useState('select gender');
    const [showGender, setShowGender] = useState(false);
  
    const [mediaAdvert, setMediaAdvert] = useState('how did you hear about us?');
    const [showMedia, setShowMedia] = useState(false);

    const [purpose, setPurpose] = useState('what do you want to do?')
    const [showPurpose, setShowPurpose] = useState(false)


    const GenderSelector =(props)=> {
      return (
        <li onClick={() => setGender(props.value)} className='normal-text normal-tiny text-capital'>{props.value}</li>
      )
    };

    const MediaSelector =(props)=> {
        return (
            <li onClick={() => setMediaAdvert(props.value)} className="normal-text normal-tiny text-capital">{props.value}</li>
        )
    };

    const PurposeSelector =(props)=> {
        return (
            <li onClick={() => setPurpose(props.value)} className="normal-text normal-tiny text-capital">{props.value}</li>
        )
    };

    useEffect(() => {
      const handler =()=> setShowGender(false);
      window.addEventListener('click', handler)
      return () => {
        window.removeEventListener('click', handler)
      };
    });
  
    const handleGender =(event)=> {
      event.stopPropagation()
      setShowGender(!showGender);
      setGender('select gender')
    }

    useEffect(() => {
        const handler =()=> setShowMedia(false);
        window.addEventListener('click', handler)
        return () => {
          window.removeEventListener('click', handler)
        };
      });
    
      const handleMedia =(event)=> {
        event.stopPropagation()
        setShowMedia(!showMedia);
        setMediaAdvert('how did you hear about us?')
    }

    useEffect(() => {
        const handler =()=> setShowPurpose(false);
        window.addEventListener('click', handler)
        return () => {
          window.removeEventListener('click', handler)
        };
      });
    
      const handlePurpose =(event)=> {
        event.stopPropagation()
        setShowPurpose(!showPurpose);
        setPurpose('what do you want to do?')
      }


    switch (item.type) {
        case 'text':
        return (
            <div className='subscription-input'>
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <input 
                    type="text" 
                    name="" 
                    id={item.label} 
                    placeholder={item.label} 
                    onChange={(event) => onChange(event.target.value, item.value)}
                    value={currentValue}
                />
            </div>
            )
        break;
        case 'email':
        return (
            <div className='subscription-input'>
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <input 
                    type="email" 
                    name="" 
                    id={item.label} 
                    placeholder={item.label}
                    onChange={(event) => onChange(event.target.value, item.value)}
                    value={currentValue}
                />
            </div>
            )
        break;
        case 'telephone':
        return (
            <div className='subscription-input'>
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <input 
                    type="tel" 
                    name="" 
                    id={item.label} 
                    placeholder={item.label}
                    onChange={(event) => onChange(event.target.value, item.value)}
                    value={currentValue}
                />              
            </div>
            )
        break;
        case 'password':
        return (
            <div className='subscription-input'>
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                    <input 
                        type="password" 
                        name="" 
                        id={item.label} 
                        placeholder={item.label}
                        onChange={(event) => onChange(event.target.value, item.value)}
                        value={currentValue}
                    />              
            </div>
            )
        break;
        case 'number':
        return (
            <div className="subscription-input">
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <input 
                    type="number" 
                    name="" 
                    id={item.label} 
                    placeholder={item.label}
                    onChange={(event) => onChange(event.target.value, item.value)}
                    value={currentValue}
                />
            </div>
            )
        break;
        case 'sex':
        return (
            <div className="subscription-input">
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <div className="subscription-header" onClick={handleGender}>
                    <h2 className="normal-text normal-sm text-capital">{gender}</h2>
                    <span className="mdi mdi-chevron-down normal-tiny"></span>
                </div>
                { showGender && (
                    <ul className="subscription-option-list">
                        {item.options.map((item, index) => (
                            <GenderSelector key={index} value={item}/>
                        ))}
                    </ul>
                    )
                }
            </div>
            )
        break;
        case 'media-advert':
        return (
            <div className="subscription-input">
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <div className="subscription-header" onClick={handlePurpose}>
                    <h2 className="normal-text normal-sm text-capital">{mediaAdvert}</h2>
                    <span className="mdi mdi-chevron-down normal-tiny"></span>
                </div>
                { showPurpose && (
                    <ul className="subscription-option-list">
                        {item.options.map((item, index) => (
                            <MediaSelector key={index} value={item}/>
                        ))}
                    </ul>
                    )
                }
            </div>
        )
        break;
        case 'purpose':
        return (
            <div className="subscription-input">
                <span className="normal-text text-sm text-capital label">{item.label}</span>
                <div className="subscription-header" onClick={handleMedia}>
                    <h2 className="normal-text normal-sm text-capital">{purpose}</h2>
                        <span className="mdi mdi-chevron-down normal-tiny"></span>
                </div>
                { showMedia && (
                    <ul className="subscription-option-list">
                        {item.options.map((item, index) => (
                            <PurposeSelector key={index} value={item}/>
                        ))}
                    </ul>
                    )
                }
            </div>
            )
        break;
        case 'information':
        return (
            <p className='normal-text normal-sm padding-y-lg'>{item.label}</p>
        )
    }
    return (
        <></>
        )
}

const MultistepForm = (props) => {
    const [response, setResponse] = useState({index: props.step});

    const updateAnswer =(value, category)=> {
        setResponse({...response, [category]: value})
    }

    useEffect(() => {
        if (Object.keys(response).length > 1) {
            props.onpageUpdate(response.index, response)
            setResponse({index: props.step})
        } else {
            setResponse({index: props.step}) 
        }
    }, [props.step]);

  return (
    <div className='multi-step-form'>
      {
        props.list[props.step].items?.map((item, index) => {
            return (
            <div className="form-item">
                <FormItem item={item} key={item.label} onChange={updateAnswer} response={props.pagesAnswer[props.step] ? props.pagesAnswer[props.step][item.value] : null}/>
            </div>
            )
        })
      }
    </div>
  );
}

export default MultistepForm;
