# Assignment Demo App

This mobile app project is an assignment. The assignment details can be found [here](https://drive.google.com/file/d/19AmgtOwnNYi7-m69hOBIo9BdjHq23Jjj/view).

[Scroll for preview images.](#preview)

[Download debug apk](https://drive.google.com/file/d/1-yHPht66BwotfEnxdk53tvxCp1DOjFGh/view?usp=sharing)

## Features

- Uses React Native Navigation for navigation between screens.
- Utilizes useContext and useReducer for state management.
- Implements API calls to fetch assignment data.
- Utilizes FlatList to display assignment items.
- Implements SkeletonView Moti to enhance the user experience while loading data.

## Setup

Follow these steps to set up and run the app on your local machine:

### 1. Clone Repository

```bash
git clone https://github.com/niteshkamble/Q2payAssignmentDemoApp.git
```
### 2. Open Project Folder in Terminal
```bash
cd Q2payAssignmentDemoApp
```
### 3. Install Dependencies
```bash
npm install --legacy-peer-deps
```
For iOS:
```bash
cd ios && pod install && cd ..
```
### 4. Run the App
To run the app on an Android emulator or device:
```bash
npx react-native run-android
```
o run the app on an iOS simulator or device:
```bash
npx react-native run-ios
```
### 5. Build Debug APK
To build a debug APK for Android:
```bash
npm run debug_apk
```
### Preview
<a name="preview"></a>
<img width="346" alt="products_page" src="https://github.com/niteshkamble/Q2payAssignmentDemoApp/assets/54447050/d7b714a9-db4b-48a1-803a-d26f23026640">
<img width="342" alt="details_page" src="https://github.com/niteshkamble/Q2payAssignmentDemoApp/assets/54447050/27caa732-9880-4eb8-bbb2-7a71723462aa">


<img width="338" alt="android_products_page" src="https://github.com/niteshkamble/Q2payAssignmentDemoApp/assets/54447050/f16020d1-8ce2-49b8-9653-dea2e4f91fe2">
<img width="332" alt="android_detail_page" src="https://github.com/niteshkamble/Q2payAssignmentDemoApp/assets/54447050/ddf92fbe-dae3-4760-88bf-9b9f25cef5b3">


My system setup:
- Node: v20.10.0
- Java: 17.0.9" 2023-10-17 LTS
