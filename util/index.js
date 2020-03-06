const EC = require('elliptic').ec;
const cryptoHash = require('./crypto-hash');

const ec = new EC('secp256k1');

const verifySignature = ({ publicKey, data, signature }) => {
    //tell its in hex form
    const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
    
    return keyFromPublic.verify(cryptoHash(data), signature);
};

module.exports = {ec, verifySignature};