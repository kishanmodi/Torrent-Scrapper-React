import axios from 'axios';
import React, { useContext } from 'react';
import { SafeSearch } from './SafeSearch';
import { SearchBox } from './SearchBox';
import { SearchButton } from './SearchButton';
import { AppContext } from '../../Context/AppContext';

export const SearchContainer = () => {
    const { darkMode, setItems, setLoading, query, setPrevQuery, safeSearch, setDataAvail } = useContext(AppContext);
    const submitHandler = async (siteId) => {
        try {
            setPrevQuery(query);
            setLoading(true);
            setDataAvail(true);
            setItems([]);
            const torrents = await axios.get(`https://la1ghi.deta.dev/torrents?key=${query}&safe=${safeSearch}`);
            setItems(torrents.data);
            if (torrents.data.length === 0) {
                console.log(torrents.data.length);
                setDataAvail(false);
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div
            className={`container-fluid p-0 text-center  rounded-2 ${darkMode ? ' bg-dark' : ' bg-light border border-dark'
                }`}
        >
            <div className='row d-flex justify-content-center align-items-center py-3'>
                <SearchBox />
            </div>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-xl-4 col-md-4 '>
                    <SafeSearch />
                </div>

                <div className='row d-flex justify-content-center align-items-center mb-3'>
                    <div className='col-xl-4 col-md-4'>
                        <div className='btn-group' role='group'>
                            <SearchButton buttonName='1337x' submitHandler={submitHandler} />
                            <SearchButton buttonName='ThePirateBay' submitHandler={submitHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
