# Supervisor Subscription App

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## How to Run the App

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# OR using Yarn
yarn android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ shortly provided you have set up your emulator/simulator correctly.

## Libraries

### react-navigation

This package is required to enable navigation in react native app. This navigation lib is the most use of the others. It's easy to use and the concept is quite simple. In the latest version, It also already support for native navigation. The drawback is this navigation library wasn't implemented from native at first place. So the integration with native is done by the hacky way.

### react-native-safe-area-context

This package is required to handle the safe area in react native app. This package is used to handle the safe area in the app. It's quite simple to use. You just need to wrap the root component with SafeAreaProvider and use SafeAreaView in the component.

### react-native-dropdown-picker

Customizable drop-down picker for react native

## Previews

There is a demo attached which can be viewed under `media/Screen_recording.mp4`

<img src="media/Screenshot.png" alt="Logo Folly" width="350" height="745"  />

## Future Improvements

- Add iOS support
