import React from 'react';
import './Crypto.css';

const Crypto = ({name, image, symbol,price,  volume, priceChange}) => {
    const nString = image.split('/');
    const link = `https://www.coingecko.com/coins/${nString[5]}/sparkline`;
    return (
        <div className="container">
            <div className="row">
                <div className="crypto-value">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="crypto-symbol">{symbol}</p>
                </div>
                <div className="crypto-info">
                    <p className="price">${price}</p> 
                    <p className="volume">${volume.toLocaleString()}</p>
    {priceChange < 0 ? (<p className="percentage-loss">{priceChange.toFixed(2)}</p>) : (<p className="percentage-win">{priceChange.toFixed(2)}%</p>)}
    <img src={link} alt="" className="graph"/>
                </div>
            </div>
        </div>
    )
}

export default Crypto;
