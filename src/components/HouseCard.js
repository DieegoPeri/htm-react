import React, {useState} from 'react'

var showMoreIcon = '+'
const amenitiesDescription = {
    "aircon": "A/C",
    "appletv": "Apple TV",
    "btspeakers": "Bluetooth Speakers",
    "cardkey": "Card-Key",
    "chromecast": "Chromecast",
    "fireplace": "Fireplace",
    "hdtv": "HD TV",
    "jacuzzi": "Jacuzzi",
    "nespresso": "Nespresso"
}

export const HouseCard = (props) => {
    const [showMore, setShowMore] = useState(false);
    const showMoreClick = event => {
        setShowMore(showMore => !showMore);
        showMoreIcon === '+' ? (showMoreIcon = '-') : (showMoreIcon = '+');
    }

    const [myAmenities, setAmenities] = useState(FillAmenities(props.amenities));

    return (
    <div className='CardBox'>
        <p className='CardBoxName'>{props.name}</p>
        <p className='CardBoxDescription'>{props.description} <button className='ShowMore' onClick={showMoreClick}>{showMoreIcon}</button></p>
        {showMore && 
            <div className='AmenitiesDiv'>
                <p> - Kitchen: {props.kitchen ? 'Yes' : 'No'}</p>
                <p> - Beds: {props.beds}</p>
                {myAmenities}
            </div>
        }
    </div>
  )
}

function FillAmenities(amenities) {
    let amenitiesToShow = [];
    for (const [key, value] of Object.entries(amenities)) {
        amenitiesToShow.push(<p> - {amenitiesDescription[key]}: {value ? 'Yes' : 'No'}</p>);
    }
    return amenitiesToShow;
}
