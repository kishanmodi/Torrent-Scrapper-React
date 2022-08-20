import React from 'react';

export const ToastComp = () => {
    return (
        <div class='toast-container position-fixed top-0 end-0 p-3'>
            <div id='liveToast' class='toast' role='alert'>
                <div class='toast-header'>
                    <img src='...' class='rounded me-2' alt='...' />
                    <strong class='me-auto'>Magnet Scrapper</strong>
                    <small>Just Now</small>
                    <button type='button' class='btn-close' data-bs-dismiss='toast'></button>
                </div>
                <div class='toast-body'>Search Query cannot be empty!</div>
            </div>
        </div>
    );
};
