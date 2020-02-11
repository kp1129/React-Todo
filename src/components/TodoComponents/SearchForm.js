import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <form>
            <input className='searchForm' onChange={props.handleSearch} type='text' placeholder='// search unfinished tasks'/>           
        </form>
    )
}

export default SearchForm;