# Google Maps Integration Setup

## Overview
This project uses `@react-google-maps/api` package for Google Maps integration in the parcel delivery step 2 form.

## Setup Steps

### 1. Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API
   - Places API
4. Go to Credentials → Create Credentials → API Key
5. Copy your API key

### 2. Configure Environment Variable
Create a `.env` file in your project root and add:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. Restart Development Server
After adding the environment variable, restart your React development server:

```bash
npm start
# or
yarn start
```

## Features

### Interactive Map
- Click anywhere on the map to select a location
- Automatic address detection using Google's Geocoding service
- Visual marker showing selected location
- Automatically centers on user's current location (if permission granted)
- Falls back to world view if geolocation is not available

### Manual Input Fallback
- If no API key is configured, users can manually enter:
  - Full address
  - Latitude and longitude coordinates
- Useful for development/testing without API key

### Location Data Structure
The form outputs location data in this format:
```json
{
  "pick_up_location": {
    "name": "Full address from Google",
    "type": "detected_place_type",
    "coordinates": [latitude, longitude]
  },
  "drop_of_location": {
    "name": "Full address from Google", 
    "type": "detected_place_type",
    "coordinates": [latitude, longitude]
  }
}
```

## Troubleshooting

### "Google Maps failed to load" Error
- Check if your API key is correct
- Verify the APIs are enabled in Google Cloud Console
- Check browser console for detailed error messages
- Ensure your API key has proper restrictions (domain, IP, etc.)

### Map Not Displaying
- Check if `@react-google-maps/api` package is installed
- Verify environment variable is loaded correctly
- Check browser console for JavaScript errors

### Geocoding Not Working
- Ensure Geocoding API is enabled
- Check if your API key has access to Geocoding API
- Verify billing is enabled for your Google Cloud project

## Package Dependencies
```json
{
  "@react-google-maps/api": "^2.20.7"
}
```

## Security Notes
- Never commit your actual API key to version control
- Use environment variables for sensitive configuration
- Set appropriate API key restrictions in Google Cloud Console
- Monitor API usage to avoid unexpected charges
