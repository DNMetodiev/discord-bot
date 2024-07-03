# Discord Bot with Weather and Astronomical Information

This project is a Discord bot built using Node.js and Discord.js. The bot provides weather forecasts and astronomical information based on user input, such as location.

## Features

- **Weather Forecast**: Provides a 3-day weather forecast for a specified location.
- **Astronomical Information**: Displays sunrise, sunset, moonrise, and moonset times for a specified location.
- **Ping Command**: Replies with "Pong!" to test the bot's responsiveness.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Discord account and server](https://discord.com/)
- [WeatherAPI key](https://www.weatherapi.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/discord-bot.git
    cd discord-bot
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Discord bot token and WeatherAPI key:

    ```env
    DISCORD_TOKEN=your_discord_token
    WEATHER_API_KEY=your_weatherapi_key
    CLIENT_ID=your_client_id
    GUILD_ID=your_guild_id
    ```

## Usage

To start the bot, use the following command:

```bash
npm start
```

For development, you can use:
```
bash
Copy code
npm run dev
```

Commands

/ping
Description: Replies with "Pong!" to test the bot's responsiveness.
Usage: /ping

/forecast
Description: Replies with the weather forecast.
Usage: /forecast location:<location> [units:<units>]

Options:
location (required): The location can be a city, zip/postal code, or latitude and longitude.
units (optional): The unit system of the results, either "metric" or "imperial".

/astro
Description: Replies with the astronomical information for the day.
Usage: /astro location:<location>

Options:
location (required): The location can be a city, zip/postal code, or latitude and longitude.

## Project Structure

commands/: Contains the command files (astro.js, forecast.js, ping.js).

events/: Contains event handlers (clientReady.js, interactionCreate.js).

requests/: Contains the API request logic (forecast.js).

index.js: The main entry point of the bot.

package.json: Project metadata and dependencies.


## Code Explanation
commands/astro.js
Provides astronomical information based on user input.

commands/forecast.js
Provides weather forecast based on user input.

commands/ping.js
Simple command to test the bot's responsiveness.

events/clientReady.js
Handles the event when the bot is ready and registers the commands.

events/interactionCreate.js
Handles interactions and executes the corresponding commands.

requests/forecast.js
Fetches weather and astronomical data from the WeatherAPI.

index.js
Main entry point of the bot. Initializes the bot, registers commands, and sets up event handlers.

package.json
Contains project metadata, dependencies, and scripts for running the bot.

