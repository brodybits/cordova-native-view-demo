# Cordova native demo using cordova-plugin-syr-core-experimental

Demonstrates a syr.js application, with a native view, running in an experimental Cordova plugin - [phonegap-native-demo / cordova-plugin-syr-core-experimental](https://github.com/phonegap-native-demo/cordova-plugin-syr-core-experimental)

Author: [@brodybits (Christopher J. Brody aka Chris Brody)](https://github.com/brodybits)

LICENSE: MIT

This project assumes working knowledge of the Cordova/PhoneGap framework and basic understanding of syr.js.

## How to use

### Start webpack dev server

In local clone of <https://github.com/syrjs/core>:

Do `npm i` to install the webpack server dependencies.

Make the following change to run the partially working calculator sample (with a color scheme issue) instead of the default sample:

```diff
diff --git a/webpack.config.js b/webpack.config.js
index 7361b24..33b9561 100644
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -7,3 +7,3 @@ module.exports = {
   entry: {
-    app: ['./samples/example.js']
+    app: ['./samples/calculator.js']
   },
```

This is needed due to issues with images in `cordova-plugin-syr-core-experimental`.

Then do `npm run serve` to run the webpack dev server, as currently needed to run the native demo on Cordova.

### Run on emulator

For Android:

- `cordova platform add android`
- `cordova emulate android`

For iOS:

- `cordova platform add ios`
- `cordova emulate ios` or open and run from Xcode

NOTE (TODO): It is currently not possible to run on a device due to need for local webpack dev server.


### Screenshots

With black number labels as proposed in [syrjs / core#274](https://github.com/syrjs/core/pull/274)

#### Android

![Calculator demo on Android](https://user-images.githubusercontent.com/1559888/45881127-3fdd6800-bd78-11e8-9f04-82cf42dbed66.png)

#### iOS

![Calculator demo on iOS](https://user-images.githubusercontent.com/1559888/45881159-5b487300-bd78-11e8-8f92-bb4620d104cd.png)
