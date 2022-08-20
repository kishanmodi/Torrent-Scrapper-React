import axios from 'axios';
import React, { useState } from 'react';

export const SearchContainer = (props) => {
    const { darkMode, setItems, setLoading } = props;
    const [query, setQuery] = useState('');
    const [safeSearch, setSafeSearch] = useState(false);

    const submitHandler = async (siteId) => {
        setLoading(true);
        const torrents = await axios.get(
            `http://samcloud.tplinkdns.com:50000/getTorrents?search_key=${query}&site_id=${siteId}&safe_search=${safeSearch}`
        );
        setItems(torrents.data);
        if (torrents.data) {
            setLoading(false);
        }

        console.log(torrents.data);
    };
    return (
        <div
            className={`container-fluid p-0 text-center  rounded-2 ${
                darkMode ? ' bg-dark' : ' bg-light border border-dark'
            }`}
        >
            <div className='row d-flex justify-content-center align-items-center py-3'>
                <div className='col-xl-6 col-md-8 px-4'>
                    <div class='input-group'>
                        <span
                            class={`input-group-text${
                                darkMode ? ' bg-secondary text-light' : 'bg-primary text-light border border-dark'
                            }`}
                        >
                            Search Query
                        </span>
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={`form-control ${
                                darkMode ? ' bg-dark text-light' : ' bg-light border border-dark'
                            }`}
                        />
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-xl-4 col-md-4 '>
                    <div className='input-group mb-3 justify-content-center'>
                        <div
                            className={`input-group-text${
                                darkMode ? ' bg-secondary text-light' : ' bg-light border border-dark'
                            }`}
                        >
                            <input
                                className='form-check-input mt-0'
                                type='checkbox'
                                value={safeSearch}
                                onChange={(e) => setSafeSearch(e.target.checked)}
                            />
                        </div>
                        <div
                            class={`input-group-text${
                                darkMode ? ' bg-secondary text-light' : ' bg-light border border-dark'
                            }`}
                        >
                            Safe Search (Beta)
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center align-items-center mb-3'>
                    <div className='col-xl-4 col-md-4'>
                        <div className='btn-group' role='group'>
                            <button
                                type='button'
                                name='1'
                                onClick={(e) => submitHandler(e.target.name)}
                                className={`btn btn-secondary  border border-white${
                                    darkMode ? ' bg-secondary text-light' : ' bg-primary     border border-dark'
                                }`}
                            >
                                1337x
                            </button>

                            <button
                                type='button'
                                name='2'
                                className={`btn btn-secondary  border border-white${
                                    darkMode ? ' bg-secondary text-light' : ' bg-primary border border-dark'
                                }`}
                                onClick={(e) => submitHandler(e.target.name)}
                            >
                                ThePirateBay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
