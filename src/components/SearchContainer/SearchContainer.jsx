import axios from 'axios';
import React, { useState } from 'react';
import { SafeSearch } from './SafeSearch';
import { SearchBox } from './SearchBox';
import { SearchButton } from './SearchButton';
export const SearchContainer = (props) => {
    const { darkMode, setItems, setLoading } = props;
    const [query, setQuery] = useState('');
    const [prevQuery, setPrevQuery] = useState(query);
    const [safeSearch, setSafeSearch] = useState(false);

    const submitHandler = async (siteId) => {
        setPrevQuery(query);
        setLoading(true);
        setItems([]);
        const torrents = await axios.get(`https://tscrap.herokuapp.com/torrents?key=${query}&safe=${safeSearch}`);
        setItems(torrents.data);
        if (torrents.data) {
            setLoading(false);
        }

        console.log(torrents.data);
    };
    return (
        <div className={`container-fluid p-0 text-center  rounded-2 ${darkMode ? ' bg-dark' : ' bg-light border border-dark'}`}>
            <div className='row d-flex justify-content-center align-items-center py-3'>
                <SearchBox darkMode={darkMode} query={query} setQuery={setQuery} />
            </div>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-xl-4 col-md-4 '>
                    <SafeSearch darkMode={darkMode} safeSearch={safeSearch} setSafeSearch={setSafeSearch} />
                </div>

                <div className='row d-flex justify-content-center align-items-center mb-3'>
                    <div className='col-xl-4 col-md-4'>
                        <div className='btn-group' role='group'>
                            <SearchButton query={query} prevQuery={prevQuery} buttonName='1337x' submitHandler={submitHandler} darkMode={darkMode} />
                            <SearchButton
                                query={query}
                                prevQuery={prevQuery}
                                buttonName='ThePirateBay'
                                submitHandler={submitHandler}
                                darkMode={darkMode}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
