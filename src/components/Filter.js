import React from 'react'

export const Filter = (props) => {
    return (
        <div className='FilterBox'>
            <div className='FilterDiv'>
                <label className='LabelFilter'>Keyword</label>
                <input type='text' id='KeyWordFilter' className='InputBox' onChange={(e) => props.onKeyWordChange(e.target.value)} />
            </div>
        </div>
    )
}

function FillSizeFilter() {
    return (
        <div>
            <div className='FilterDiv'>
                <label for='MinSize' className='LabelFilter'>Min Size</label>
                <select name='MinSize' id='MinSizeFilter' className='SelectBox'>
                    <option value='20'>20</option>
                    <option value='20'>40</option>
                    <option value='20'>60</option>
                    <option value='20'>80</option>
                    <option value='20'>100</option>
                </select>
            </div>
            <div className='FilterDiv'>
                <label for='MaxSize' className='LabelFilter'>Max Size</label>
                <select name='MaxSize' id='MaxSizeFilter' className='SelectBox'>
                    <option value='20'>30</option>
                    <option value='20'>50</option>
                    <option value='20'>70</option>
                    <option value='20'>90</option>
                    <option value='20'>150</option>
                </select>
            </div>
        </div>
    );
}

function FillAmenitiesFilter() {
    return (
        <div className='AmenitiesDiv'>
        <label for='Amenities' className='LabelFilter'>Max Size</label>
            <div className='CheckboxDiv'>
                <input type='checkbox' id='airconCheck' onClick={FilterByCheckbox('aircon')} />
                <label for='kitchenCheck'>A/C</label>
                <input type='checkbox' id='appletvCheck' onClick={FilterByCheckbox('appletv')} />
                <label for='kitchenCheck'>Apple TV</label>
                <input type='checkbox' id='btspeakersCheck' onClick={FilterByCheckbox('btspeakers')} />
                <label for='kitchenCheck'>BT Speakers</label>
                <input type='checkbox' id='cardkeyCheck' onClick={FilterByCheckbox('cardkey')} />
                <label for='kitchenCheck'>Card-Key</label>
                <input type='checkbox' id='chromecastCheck' onClick={FilterByCheckbox('chromecast')} />
                <label for='kitchenCheck'>Chromecast</label>
                <input type='checkbox' id='fireplaceCheck' onClick={FilterByCheckbox('fireplace')} />
                <label for='kitchenCheck'>Fireplace</label>
                <input type='checkbox' id='hdtvCheck' onClick={FilterByCheckbox('hdtv')} />
                <label for='kitchenCheck'>HD TV</label>
                <input type='checkbox' id='jacuzziCheck' onClick={FilterByCheckbox('jacuzzi')} />
                <label for='kitchenCheck'>Jacuzzi</label>
                <input type='checkbox' id='nespressoCheck' onClick={FilterByCheckbox('nespresso')} />
                <label for='kitchenCheck'>Nespresso</label>
            </div>
        </div>
    );
}

function FilterByCheckbox(filter) {

}