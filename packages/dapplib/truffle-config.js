require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth talk property hunt loan equal genuine'; 
let testAccounts = [
"0xc491a8cce5af72a054b1718d59821fd50977438934de968b69c5a71759e34e92",
"0xbf75679a9c5dc76bf84f45143246736057cfe6307f1ba01edb33cd2b85851627",
"0x0186bfae85f3d18b7ef429a7ac74f89a634392e8227ff71a774386c7f9638dfa",
"0x806356a3a0313b811d8c1f94a2b4344d36d3f2485a1d239c789934b1fa7d99da",
"0x1c0aa6a096f54ebcd3ec4516e15f3a6b27a8d93adc1b60e7555e8bba6a92e5a6",
"0x6d1d52f6092d18c42c1ec9ffbee11e15448e3e1f3e616ce060a1977ab6b121e9",
"0x264a3e64164bd2bd06a717b4cb18f1d0a6c5cc1bad7cdb33621f6fda442b4d8a",
"0x83c23fbf42b79020b79ff769fbc2d4857db06011dca436c8acdecdb28fe5e2f8",
"0xa146f6f027497e90e2542f020dccdaef4ce6e7e148ec4dcfa612b3088b4b8b1a",
"0x92ac2bffbd182b42d9dbede27b5ed6eac47a7b37d223be4bad24f0fc616b82f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
