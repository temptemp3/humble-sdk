# HumbleSDK 

<header>
  <img src="./logo-white.svg" width="80" height="auto">
</header>

A Javascript library for interacting with the [HumbleSwap DEx](https://app.humble.sh).

## Table of contents
- [HumbleSDK](#humblesdk)
  - [Table of contents](#table-of-contents)
  - [Installing the SDK](#installing-the-sdk)
    - [Option 1. NPM (recommended)](#option-1-npm-recommended)
    - [Option 2. Cloning the repo directly](#option-2-cloning-the-repo-directly)
  - [Importing SDK Functions](#importing-sdk-functions)
  - [SDK Contents](#sdk-contents)
  - [Methods](#methods)
  - [Types](#types)

---

## Installing the SDK

### Option 1. NPM (recommended)
The fastest way is to use `npm`:
```bash
$. npm i -s @reach-sh/humble-sdk
```

### Option 2. Cloning the repo directly
To get started without NPM, you can clone and build the SDK from the repository. 
```bash
# Clone the repository 
$. git clone # ...

# Enter the directory with the repo (replace with path to your repository clone)
# and install dependencies (there aren't a lot)
$. cd path/to/humble-sdk && npm install

# Build the SDK. Will output to a ./lib directory in the same folder as the 
# package.json file. This takes seconds and doesn't output anything to your terminal.
$. npm run build
``` 
You will know it is complete when your (terminal's) typing prompt reappears.\
Then, as a **FINAL STEP**, copy or move the new `lib/` directory into your project. This will allow you to access it like any other JS module.

---

## Importing SDK Functions
You can import [SDK functions](#methods) individually or as a single blob.\
These examples are exactly the same: 
```typescript
import * as HumbleSDK from "humble-sdk";

HumbleSDK.initHumbleSDK();
```
or
```typescript
import { initHumbleSDK } from "humble-sdk";

initHumbleSDK();
```

---

## SDK Contents
This SDK contains:
* Reach-compiled **smart contracts** (`.mjs` files) used by the HumbleSWAP front-end to communicate with the blockchain
* `@reach-sh/stdlib@0.1.8-rc7`
* A Javascript API for interacting with the compiled smart contracts.

Some input parameters will require objects created by reach's Javascript standard library (`stdlib`). The SDK allows you to access its `stdlib` instance, so you may not need to install or instantiate reach yourself. You should ideally be familiar with reach, as well as reach concepts.

---

## Methods
See a full list of methods [**here**](./METHODS.md)

--- 

## Types
See a full list of types [**here**](./TYPES.md)

--- 
