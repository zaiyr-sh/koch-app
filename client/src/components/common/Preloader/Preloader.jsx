import React from 'react';

import "./Preloader.css";

const Preloader = () => {
    return (
        <div className="preloader__inner">
            <div className="preloader">
                <div className='spanloader'>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </div>
    );
};

export default Preloader;