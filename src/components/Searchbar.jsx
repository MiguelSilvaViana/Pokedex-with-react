import React, {useState} from 'react'


const Searchbar = (props) => {

    const [search, setSearch] = useState('charizard')
    const {onSearch} = props;

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input type="text"  placeholder='Pokemon Search' onChange={onChangeHandler}/>
                <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;