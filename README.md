# Coin Tanda - Reference Frontend.

The newest UI for communicating with the (unreleased) Coin Tanda protocol. 

To run the project against a local node you can use the [cointanda-contracts](https://github.com/cointanda/cointanda-contracts/). With those contracts you can bootstrap a local Buidler EVM instance with test data so that you can develop the app locally.

# Setup

Install dependencies:

```bash
$ yarn
```

Make sure you have [`direnv`](https://direnv.net/) installed and copy `.envrc.example` to `.envrc`:

```bash
$ cp .envrc.example .envrc
```

Fill in your own values for `.envrc`, then run:

```bash
$ direnv allow .
```

If this does not work for you try adding a hook to bash https://direnv.net/docs/hook.html for mac add the entire path to direnv executable file

To run the local server, run:

```
$ yarn dev
```
