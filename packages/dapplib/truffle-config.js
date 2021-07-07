require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain erosion gloom private swallow slight'; 
let testAccounts = [
"0x74a6da980c04cc48db489c86d22c3ed056efc81f5c9d909be9a4e9e0ff610cef",
"0x37ca6c678cce12d46cb6e75acdae292339e020890e55b489ee96d1ac0d79914c",
"0xf901319be7406a176138cdbe5d0e55f4227e64b4973d1031b53dcf00648c4ef1",
"0xc9666d1967b99a49d6bcbbc02edd1dc5133678d44fd52869d2b93961c7c9d78b",
"0xa5204dd1377e871a5426d5542ee5a8237cd929800a9970778b96f0a4e75731dc",
"0x35d95be6898dae8c13dd927e20470b7592d4a0db11b720c4df35a7ab24f5349c",
"0xc543b60a6918612b84d2f5134d9eb5460abd7a1826f92f067c3162c2e22ad5e2",
"0xb8c07a11150285c3c28884eb00f073ca2c38be12cd28a02ad85fc8968ba80bac",
"0xf6378c001216ee0db3308e796759186f853168b0675362b91eb6011753cd0e5b",
"0xd7ac941807d8dfbb29292d8c8ea47392fcd08c3eb2044fe31323998fd5e89275"
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
            version: '^0.8.0'
        }
    }
};

