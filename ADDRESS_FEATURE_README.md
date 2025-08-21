# Address Management Feature

This feature allows users to add and manage shipping addresses during the checkout process.

## Features

- **Add New Address**: Users can add new shipping addresses with display name, full address, latitude, and longitude
- **Address Selection**: Users can select a shipping address from their saved addresses
- **Form Validation**: Comprehensive form validation for all address fields
- **API Integration**: Seamlessly integrates with the existing API structure
- **Redux State Management**: Addresses are managed through Redux for consistent state across the application

## Components

### AddressModal (`src/component/shared/addressModal/index.js`)
- Antd modal component for adding new addresses
- Form validation for all required fields
- API integration with error handling
- Redux state updates

### CheckoutSteps (`src/component/item-purchase/checkout/step.js`)
- Main checkout component with address management integration
- Address selection and display
- Navigation between checkout steps with address validation

## API Integration

### Endpoint
- **URL**: `PUT /api/v1/users`
- **Base URL**: `https://vero-1.herokuapp.com/api/v1/users`

### Payload Structure
```json
{
  "addresses": [
    {
      "display_name": "Office",
      "formatted_location": "Full address string",
      "coords": [24.9109845, 67.0869562],
      "_id": "unique_id"
    }
  ]
}
```

### Response Structure
The API returns the updated user object with all addresses, which is then stored in Redux state.

## Redux Integration

### Actions
- `updateUserAddresses`: Updates the user's addresses in Redux state

### State Structure
```javascript
{
  user: {
    user: {
      addresses: [
        {
          display_name: "Office",
          formatted_location: "Full address",
          coords: [24.9109845, 67.0869562],
          _id: "unique_id"
        }
      ]
    }
  }
}
```

## Usage

1. **Adding a New Address**:
   - Click the "+ Add New Address" button in the shipping step
   - Fill out the form with display name, full address, latitude, and longitude
   - Submit the form to save the address

2. **Selecting an Address**:
   - Choose a shipping address from the list using radio buttons
   - The selected address will be highlighted and used for shipping

3. **Navigation**:
   - Users must select an address before proceeding to the next step
   - The continue button is disabled until an address is selected

## Form Validation

- **Display Name**: Required, max 50 characters
- **Full Address**: Required, max 200 characters
- **Latitude**: Required, valid range -90 to 90
- **Longitude**: Required, valid range -180 to 180

## Error Handling

- API errors are displayed using Antd message components
- Form validation errors are shown inline
- User-friendly error messages for common issues

## Dependencies

- React 18+
- Antd 5.x
- Redux Toolkit
- React Redux
- Axios

## Styling

The component uses existing Bootstrap classes and Antd components for consistent styling across the application.
