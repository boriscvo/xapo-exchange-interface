# Xapo Exchange Interface Homework

## Installation

The project is built using create-next-app. Clone/download the repo, install dependencies, run the development server and start the application:

```bash
npm install
npm run dev
```

The app is running on [http://localhost:3000](http://localhost:3000).

## Stack

- Next, React, TypeScript, Tailwind CSS - the core of it.
- Zustand - for state management.
- Tanstack Query - for data fetching and caching, only once used though.
- MSW - for mocking purposes.
- Under normal circumstances I would add Jest and React Testing Library for unit tests, but I've not seen it as a mandatory and my feeling is that for the focus of this task that is of a secondary importance. Please let me know if you want to see some examples of that.

## Features

- I have tried to take over basic design structures from your website, so I've used colors that resemble it. No logo used, nor any other resource. Except for lucide icons, everything else is my work.
- The app has options to select sides - buy or sell - then it has two dependent inputs, money and BTC quantity. Both could be used to calculate the other one. It has a confirmation dialog with appropriate state handling. The app is elementary responsive, but I haven't spent too much time on it.
- There are two calls in the app. One of them is a server side fetching of BTC price from api.binance.com. The second one is a fictional submit call, which response is mocked using MSW, in order to showcase success and loading states.
- The app is made to be scallable and extendable with any other library or analytics integration.

## What is missing from being fully rounded

- The Dialog is missing keyboard focus capturing. Maybe a close button as well.
- No major work for handling errors.
- Due to simplicity I didn't bother with validations, code splitting or similar things.
- No unit tests.
- No middleware extensions (i18n, CSP etc).

Please let me know if you want to see any of the above mentioned added to the app.
