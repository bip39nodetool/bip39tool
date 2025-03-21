# BIP39 Tool

## Introduction
With this JavaScript/Node tool, you can split a BIP39 phrase into x shares and store them in potentially insecure locations for later recovery. For example, with 3 shares, 2 shares are needed for recovery. It is important to note the order.

## Installation
npm install

## Example Shares:

{
  '1': 'among angry spray firm change dress flower claim clay bar shoulder buyer',
  '2': 'bunker cherry wet lumber guitar collect muffin network survey panic duty symbol',
  '3': 'hour deliver click wreck pulse zero choose panther human moral upset sun',
  '4': 'robot physical marriage tongue together region panel arrange sponsor dismiss north lab',
  '5': 'slam salon fork pact clarify grit cheap also gravity consider digital jungle',
  '6': 'spoon much hybrid escape gym another unusual riot notable penalty sauce road'
}
## Wordlist of all possible BIP39 words
node_modules/shamir-bip39/src/wordlist.ts

## Build code to recover a BIP39 phrase
npx tsc recoverShares.ts

## Execute recovery of a BIP39 phrase
node recoverShares.js

## Build shares
npx tsc createShares.ts

## Execute shares creation
node createShares.js