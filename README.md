

## Real Estate Listing Page

- This project creates a real estate listing page featuring an interactive map, a search bar, and property listings. The page is responsive and optimized for both desktop and mobile devices,. Below are the details and instructions for setting up the project.
## Features
## Header
- Logo: Positioned on the left side of the header.
## Filter Bar
- Search Location: An input box where users can search for a - location and property will list dynamically while typing the location. 
- The input box has a smooth transition effect for the border color when hovered over or focused on.Uses CSS transition for a smooth border color change.
## Map Section
- US Map: Displayed on the left side of the page.
- Maps : integrated the OpenStreet map so that user can pin the location as per the requirement
## Property Listings Section
- The property listings are displayed on the right side of the page and include the following elements for each property card:

- Image Slider: A carousel that displays multiple property images.
- Property Type Label: For example, "House For Sale". Price
- Property Details: Includes the number of bedrooms, bathrooms, and the square footage.
- Address & Broker Information
- Days on the Market: Shows how long the property has been listed (e.g., "6 days on Houzeo").
- Favorite Icon (Heart): Users can favorite properties. When hovering over the heart icon, a CSS-based pulse effect animation is triggered.
- Card Hover Effect: On hovering over the entire property card, a box shadow effect appears to emphasize the card.


## Responsive Design

- Desktop Layout: The map is on the left side and property listings on the right side. Optimized for standard desktop resolutions.
- Mobile Layout (iPhone 14 Pro Max): The map display top of the property listings, and the property cards stack vertically, showing one card per row for better readability.
## Technologies Used

- HTML5 and CSS3 for layout and styling
- JavaScript (ES6+) for interactivity
- openstreet Maps API => https://unpkg.com/leaflet/dist/leaflet.css
- Responsive Design with media queries
- CSS Transitions and Animations for hover effects
- Tailwind Css => https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css
- Unicons => https://unicons.iconscout.com/release/v4.0.0/css/line.css

 ## Installation Instructions
- Clone the repository:
```bash

git clone https://github.com/PranxXxD/Houzeo-Assignment.git

```

- Navigate to the project folder:

```bash
cd houzeo-assignment

```

## Folder Structure

```bash
HOUZEO ASSIGNMENT
/assets
new-logo.svg
property1.png
property2.png
property3.png
.gitattributes
index.html
README.md
JS scriptfile.js
style.css


```
    