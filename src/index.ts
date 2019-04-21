import { PolkadotHDKey } from './hdkey';

interface WalletInterface {
  generate (): PolkadotHDKey;
  generateVanityAddress (): Wallet;
  getPrivateKey (): Buffer;
  getPublicKey (): Buffer;
  getPublicKeyString (): string;
  getAddress (): Buffer;
  getAddressString (): string;
  getChecksumAddressString (): string;
  fromPublicKey (): Wallet;
  fromExtendedPublicKey (): Wallet;
  fromPrivateKey (): Wallet;
  fromExtendedPrivateKey (): Wallet;
}

export default class Wallet implements WalletInterface {
  private _pubKey: Buffer | undefined;
  private _privKey: Buffer | undefined;

  constructor (priv?: Buffer, pub?: Buffer) {
    if (priv && pub) {
      throw new Error(
        'Cannot supply both a private and a public key to the constructor'
      );
    }

    /* Validate priv and pub keys */

    this._privKey = priv;
    this._pubKey = pub;
  }

  get privKey (): Buffer {
    return this._privKey as Buffer;
  }

  get pubKey (): Buffer {
    return this._pubKey as Buffer;
  }

  fromExtendedPrivateKey () {}

  fromExtendedPublicKey () {}

  fromPrivateKey () {}

  // tslint:disable-next-line:no-empty
  fromPublicKey () {}

  // tslint:disable-next-line:no-empty
  generate () {}

  // tslint:disable-next-line:no-empty
  generateVanityAddress () {}

  // tslint:disable-next-line:no-empty
  getAddress () {}

  // tslint:disable-next-line:no-empty
  getAddressString () {}

  // tslint:disable-next-line:no-empty
  getChecksumAddressString () {}

  // tslint:disable-next-line:no-empty
  getPrivateKey () {}

  // tslint:disable-next-line:no-empty
  getPublicKey () {}

  // tslint:disable-next-line:no-empty
  getPublicKeyString () {}
}
