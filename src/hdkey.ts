declare let HDKey = require('hdkey');
import Wallet from './index';

let MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8');
let HARDENED_OFFSET = 0x80000000;
let LEN = 78;

// Bitcoin hardcoded by default, can use package `coininfo` for others
let BITCOIN_VERSIONS = { private: 0x0488ade4, public: 0x0488b21e };

interface PolkadotHDKeyInterface {
  fromMasterSeed (seedBuffer: Buffer);
  fromExtendedKey (base58key: string);
  derivePath (path: string);
  deriveChild (index: number);
  getWallet (): Wallet;
}

export default class PolkadotHDKey implements PolkadotHDKeyInterface {
  versions: Buffer;
  depth: number;
  index: number;
  _privateKey: Buffer | undefined;
  _publicKey: Buffer | undefined;
  chaincode: Buffer;

  constructor (versions) {
    this.versions = versions || BITCOIN_VERSIONS;

  }
}
