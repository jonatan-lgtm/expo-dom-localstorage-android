# expo-dom-localstorage-android

Minimal reproduction: in a `'use dom'` component on Android, `window.localStorage` is `null`, while `sessionStorage` works. On iOS both work.

`@expo/dom-webview`'s `DomWebView.kt` never sets `settings.domStorageEnabled`, which Android leaves `false` by default, and the web view has no prop to turn it on.

## Run

```sh
npm install
npx expo run:android
```

The screen shows `localStorage: null` and `sessionStorage: works (ok)`.
