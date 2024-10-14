// JavaScript for additional functionality (if needed)
const heartIcons = document.querySelectorAll(".heart");
heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("text-red-700"); // Toggle filled heart color
  });
});

// Initialize the map
var map = L.map(document.getElementById("map")).setView(
  [30.2672, -97.7431],
  13
); // Set the initial view with coordinates

// Add the OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Event handler for map clicks to add pins
async function onMapClick(e) {
  L.marker([e.latlng.lat, e.latlng.lng])
    .addTo(map)
    .bindPopup("Pinned Location: " + e.latlng.toString())
    .openPopup();
}

// Attach the click event to the map
map.on("click", onMapClick);

// Sample property data (in a real application, this would come from an API)
const propertyData = [
  {
    id: 1,
    location: { lat: 30.2672, lng: -97.7431 },
    type: "House",
    price: "$349,000",
    beds: 3,
    baths: 2,
    sqft: "608",
    address: "123 Main St, Austin, TX",
    daysOnMarket: 10,
    src1: "./assets/property1.png",
    src2: "./assets/property2.png",
    src3: "./assets/property3.png",
  },
  {
    id: 2,
    location: { lat: 30.3072, lng: -97.7431 },
    type: "Condo",
    price: "$2,249,000",
    beds: 2,
    baths: 1,
    sqft: "998",
    address: "456 Oak St, TX",
    daysOnMarket: 8,
    src1: "./assets/property2.png",
    src2: "./assets/property3.png",
    src3: "./assets/property1.png",
  },
  {
    id: 3,
    location: { lat: 30.251848, lng: -97.740259 },
    type: "Multi-family",
    price: "$3,349,000",
    beds: 2,
    baths: 1,
    sqft: "998",
    address: "456 Oak St, TX",
    daysOnMarket: 1,
    src1: "./assets/property3.png",
    src2: "./assets/property2.png",
    src3: "./assets/property1.png",
  },
  {
    id: 4,
    location: { lat: 30.3072, lng: -98.408842 },
    type: "House",
    price: "$1,349,000",
    beds: 4,
    baths: 1,
    sqft: "998",
    address: "johnson city, TX",
    daysOnMarket: 3,
    src1: "./assets/property1.png",
    src2: "./assets/property2.png",
    src3: "./assets/property3.png",
  },
  {
    id: 5,
    location: { lat: 30.3072, lng: -98.408842 },
    type: "House",
    price: "$549,000",
    beds: 4,
    baths: 1,
    sqft: "998",
    address: "johnson city, TX",
    daysOnMarket: 3,
    src1: "./assets/property2.png",
    src2: "./assets/property1.png",
    src3: "./assets/property3.png",
    propertyType: "Re-sale",
  },
  {
    id: 6,
    location: { lat: 30.3072, lng: -98.408842 },
    type: "House",
    price: "$1,49,000",
    beds: 4,
    baths: 1,
    sqft: "998",
    address: "johnson city, TX",
    daysOnMarket: 3,
    src1: "./assets/property3.png",
    src2: "./assets/property2.png",
    src3: "./assets/property1.png",
  },
  // Add more property listings here
];

// Function to update property listings based on filters
const propertiesDiv = document.getElementById("properties");

// Event listener for the search input
document.getElementById("location").addEventListener("input", updateProperties);

function updateProperties() {
  propertiesDiv.innerHTML = ""; // Clear existing listings

  const filteredProperties = propertyData.filter((property) => {
    const priceRange = document.getElementById("price").value;
    const beds = document.getElementById("beds").value;
    const searchKeyWord = document
      .getElementById("location")
      .value.toLowerCase(); // Convert to lowercase for case-insensitive search

    let match = true;

    // Filter based on price
    if (priceRange !== "any") {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      const price = parseInt(property.price.replace(/[^\d]/g, ""));
      if (maxPrice && (price < minPrice || price > maxPrice)) match = false;
      else if (!maxPrice && price < minPrice) match = false;
    }

    // Filter based on beds
    if (beds !== "any" && property.beds < beds) {
      match = false;
    }

    // Filter based on search keyword (location match)
    if (
      searchKeyWord &&
      !property.address.toLowerCase().includes(searchKeyWord)
    ) {
      match = false;
    }

    if (searchKeyWord.length > 0) {
      document.getElementById("cancel-icon").style.display = "none";
      document.getElementById("search-icon").style.display = "none";
    }

    return match;
  });

  // Display filtered properties
  filteredProperties.forEach((property) => {
    const propertyCard = `
      <div class="card bg-white border rounded-lg">
        <div class="flex flex-col">
          <!-- Image Slider -->
          <div class="relative w-full overflow-hidden sliderWrapper">
            <div class="absolute top-2 flex justify-between w-full px-1">
              <span class="border font-medium p-1 px-2 rounded-2xl text-xs bg-white bg-opacity-100">${property.daysOnMarket} days on Houzeo</span>
              <span class="heart text-white text-lg cursor-pointer">
              <i class="uil uil-heart"></i></span>
            </div>
            <div class="flex transition-transform duration-500 ease-in-out">
              <img class="w-full h-26 rounded-tl-lg rounded-tr-lg hidden active slide" src=${property.src1} alt="property1">
              <img class="w-full h-26 hidden slide" src=${property.src2}  alt="property2">
              <img class="w-full h-26 hidden slide" src=${property.src3}  alt="property3">
              <!-- Pagination Dots -->
            </div>
            <div class="absolute bottom-2 flex justify-center w-full px-1">
            <div class="flex justify-center mt-2">
            <span class="dot h-3 w-3 mx-1 bg-white rounded-full cursor-pointer"></span>
            <span class="dot h-3 w-3 mx-1 bg-white rounded-full cursor-pointer"></span>
            <span class="dot h-3 w-3 mx-1 bg-white rounded-full cursor-pointer"></span>
          </div>
            </div>
           
          </div>
          
        
          <!-- Property Info -->
          <div class="p-4">
            <div class="flex flex-row items-center justify-between mt-2">
              <span class="text-xs border font-medium p-1 rounded-2xl"> <span>🟢</span>${property.type} For Sale</span> <span class="text-xs"><i class="uil uil-eye text-lg"></i> 2.3k</span>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-blue-800 text-md font-semibold">${property.price}</p>
              <span class="text-xs"> <span class="text-blue-800 font-semibold">${property.beds}</span> Beds • $<span class="text-blue-800 font-semibold">${property.baths}</span> Baths • <span class="text-blue-800 font-semibold">${property.sqft}</span> sqft.</span>
            </div>
            <span class="text-xs">${property.address}</span>
          </div>
        </div>
      </div>
     `;
    propertiesDiv.innerHTML += propertyCard;
  });

  // After the properties are rendered, initialize sliders (if applicable)
  initializeSliders();
}

// Function to initialize the sliders for each property
function initializeSliders() {
  document.querySelectorAll(".sliderWrapper").forEach((wrapper) => {
    let currentIndex = 0;
    const slides = wrapper.querySelectorAll(".slide");
    const dots = wrapper.parentElement.querySelectorAll(".dot");

    // Function to show the slide at the current index and update the active dot
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.add("hidden"); // Hide all slides
        dots[i].classList.remove("bg-black", "bg-gray-400"); // Remove active classes from dots
        dots[i].classList.add("bg-white"); // Set inactive dot color
      });

      slides[index].classList.remove("hidden"); // Show the current slide
      dots[index].classList.add("bg-gray-400"); // Highlight the active dot
    }

    // Initialize first slide
    showSlide(currentIndex);

    // Event listeners for dot navigation
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        currentIndex = dotIndex;
        showSlide(currentIndex); // Update slide and dot on dot click
      });
    });

    // Swipe functionality for mobile
    let startX = 0;
    let endX = 0;

    wrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX; // Capture the starting X coordinate
    });

    wrapper.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX; // Capture the ending X coordinate

      if (startX > endX + 50) {
        // Swipe left, go to the next slide
        currentIndex = (currentIndex + 1) % slides.length;
      } else if (startX < endX - 50) {
        // Swipe right, go to the previous slide
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }
      showSlide(currentIndex); // Update slide and dot based on swipe
    });
  });
}


// Initial load
window.onload = updateProperties;
