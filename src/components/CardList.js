import React, {useContext} from 'react'
import { HouseCard } from './HouseCard';
import properties from '../data/properties.json'
import { KeyWordContext } from '../App';

var currentData = [];

function ReadJson() {
    currentData = JSON.parse(JSON.stringify(properties));
}

export const CardList = () => {
    const { keyWord, setKeyWord } = useContext(KeyWordContext);
    ReadJson();
    var idCounter = 0;
    var cardList = currentData.map(function(element) {
        if (element['name'].toUpperCase().includes(keyWord.toUpperCase()) 
            || element['description'].toUpperCase().includes(keyWord.toUpperCase())) {
            idCounter++;
            return <HouseCard 
                    key={'HouseCard_' + idCounter} 
                    name={element['name']} 
                    description={element['description']}
                    amenities={element['amenities']} 
                    floorArea={element['floorArea']}
                    beds={element['bedConfigurations'].length}
                    />;
        }
    });
    return (
        <div className='CardList'>
            {cardList}
        </div>
    )
}
