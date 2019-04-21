const Keyring = require("@polkadot/keyring").default;
import {mnemonicToSeed, mnemonicGenerate} from '@polkadot/util-crypto';

it("hdkey works", async () => {
  let HDKey = require("hdkey");
  let seed =
    "a0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af";
  let hdkey = HDKey.fromMasterSeed(Buffer.from(seed, "hex"));
  expect(
    hdkey.privateExtendedKey ===
      "xprv9s21ZrQH143K2SKJK9EYRW3Vsg8tWVHRS54hAJasj1eGsQXeWDHLeuu5hpLHRbeKedDJM4Wj9wHHMmuhPF8dQ3bzyup6R7qmMQ1i1FtzNEW"
  ).toBe(true);
  expect(
    hdkey.publicExtendedKey ===
      "xpub661MyMwAqRbcEvPmRAmYndzERhyNux1GoHzHxgzVHMBFkCro3kbbCiDZZ5XabZDyXPj5mH3hktvkjhhUdCQxie5e1g4t2GuAWNbPmsSfDp2"
  );
});

it("key is generated from mnemonic seed with password", async () => {
  let mnemonic = mnemonicGenerate();

  // Create account seed based on mnemonic
  const seed = mnemonicToSeed(
    mnemonic,
    "password"
  );

  // Create an instance of the Keyring
  const keyring = new Keyring();

  // Create pair and add Alice to keyring pair dictionary (with account seed)
  const pairAlice = keyring.addFromSeed(seed);

  console.log(
    `Created keyring pair for Alice with address: ` +
      `${keyring.getPair(pairAlice.address()).address()}`
  );
  console.log(keyring);
});
