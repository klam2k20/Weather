<p align="center">
    <img src="imgs/demo.gif" height="500">
</p>

## Overview

This is a responsive Weather App. It utilizes the OpenWeather API to provide hourly and daily
forcast for either a specified city or the user's current location. It supports both metric and imperial units.

## Technology

- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">

## Features

- Responsive Design
<p align="center">
    <img src="imgs/responsive.gif" height="400">
</p>

- Supports Metric and Imperial Units
<p align="center">
    <img src="imgs/metric.gif" height="400">
</p>

- Provides Forcast for User's Location
<p align="center">
    <img src="imgs/location.gif" height="400">
</p>

## Getting Started

### Prerequisites

- yarn/npm
- Sign up for One Call API 3.0 Subscription

#### Installation

```sh
# Clone the repo
git clone https://github.com/klam2k20/Weather.git

# Create .config.js
cd Weather/src
const config = {
	WEATHER_API_KEY: { API_KEY },
};
export default config;

# Install dependencies
yarn install

# Start the application
yarn start
```
