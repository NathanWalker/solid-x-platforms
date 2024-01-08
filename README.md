<img src="https://github.com/NathanWalker/solid-x-platforms/blob/main/solid.png?raw=true" width="150" height="150" alt="SolidJS Logo" />

[Solid](https://www.solidjs.com/) running on Web, iOS, Android and Vision Pro.

https://github.com/NathanWalker/solid-x-platforms/assets/457187/a379a7ef-2bf8-437a-96d2-bb382320f5b5

## Setup

Prerequisites:
- [NativeScript Environment Setup](https://docs.nativescript.org/setup/macos#setting-up-macos-for-ios)
  - Install `vision` tagged CLI: `npm install -g nativescript@vision`
  - Learn more here: https://docs.nativescript.org/guide/visionos
- [Xcode 15.2 Installed for Vision Pro Simulator](https://developer.apple.com/download/applications/)
- [Download SwiftPackages here](https://drive.google.com/file/d/17wFGXOBqeXgs7mhFZ-wfg4ogHyRYlYCR/view?usp=sharing)
  - **Important for visionOS**: Once unzipped, place the folder at `apps/nativescript-hello-world/SwiftPackages`

```bash
yarn setup
```

## Run apps

```bash
yarn web

yarn ios

yarn vision

yarn android
```
