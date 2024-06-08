// Header
const images = [
    'url("Images/1. Logos and BGs/AmericanBG1.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG2.jpeg")',
    'url("Images/1. Logos and BGs/AmericanBG3.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG4.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG5.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG6.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG7.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG8.jpg")',
    'url("Images/1. Logos and BGs/AmericanBG9.webp")',
    'url("Images/1. Logos and BGs/AmericanBG10.jpg")'
];
let currentIndex = 0;

const imageDiv = document.getElementById('bg-container');

function changeBackgroundImage() {
    imageDiv.style.transition = 'background-image 0.5s ease';
    imageDiv.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setTimeout(() => {
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 3000);
}, 4000);


// section-1
const regionContent = {
    'alaska': { 
        background: 'linear-gradient(180deg, #0180FD 0%, #EEE 100%)',
        title: 'Alaska', 
        image: 'Images/1. Logos and BGs/AlaskaBG.jpg', 
        description: 'Alaska, the last frontier, is a wilderness paradise with towering mountains, glaciers, and diverse wildlife. Its remote villages and unique landscapes make it a haven for outdoor enthusiasts.' 
    },
    'hawaii': { 
        background: 'linear-gradient(0deg, #FF92DA 0%, #2A96FF 86.48%)',
        title: 'Hawaii', 
        image: 'Images/1. Logos and BGs/HawaiiBG.jpg', 
        description: 'Hawaii, a tropical oasis in the Pacific, enchants visitors with its stunning beaches, lush rainforests, and volcanic wonders. Each island offers a unique blend of culture, beauty, and aloha spirit.' 
    },
    'north-east': { 
        background: 'linear-gradient(180deg, #FF92C8 0%, #1E90FF 100%)',
        title: 'North East', 
        image: 'Images/1. Logos and BGs/North-EasternBG.jpg', 
        description: 'The North-Eastern region of the USA is renowned for its historic cities, including Boston and New York City, as well as its picturesque landscapes like the New England coastline.' 
    },
    'western': { 
        background: '',
        title: 'Western', 
        image: 'Images/1. Logos and BGs/WesternBG.jpg', 
        description: 'The Western region is defined by its rugged beauty, from the Rocky Mountains to Californian beaches. Iconic landmarks like the Grand Canyon and vibrant cities like Los Angeles make it a playground for adventurers.' 
    },
    'mid-western': { 
        background: 'linear-gradient(180deg, #0180FD 20%, #FFB800 100%)',
        title: 'Mid Western', 
        image: 'Images/1. Logos and BGs/Mid-WesternBG.jpg', 
        description: 'The Mid-Western region of the USA, often called the heartland, boasts vast farmland, iconic cities like Chicago, and a strong industrial presence. It is known for its friendly communities and rich agricultural heritage.' 
    },
    'southern': { 
        background: 'linear-gradient(180deg, #0180FD 0%, #FFEA39 100%)',
        title: 'Southern', 
        image: 'Images/1. Logos and BGs/SouthernBG.jpg', 
        description: 'The Southern region is famous for its hospitality, rich cuisine, and vibrant music scene. From the bayous of Louisiana to the beaches of Florida, the South offers a warm welcome and a blend of diverse traditions.' 
    }
};

const container = document.querySelector('.section1');
const mapRegions = document.querySelectorAll('.left-div svg .map-region');
const cardImage = document.getElementById('card-img');
const cardTitle = document.getElementById('card-title');
const cardDescription = document.getElementById('card-description');

const defaultRegion = 'western';
updateCardContent(regionContent[defaultRegion]);

let clickedRegion = null;

mapRegions.forEach(region => {
    region.addEventListener('mouseover', () => {
        const regionName = region.getAttribute('id');
        if (!clickedRegion) {
            updateMapColor(regionName, "var(--AmericanRed)");
            updateCardContent(regionContent[regionName]);
        }
    });
    region.addEventListener('click', () => {
        const regionName = region.getAttribute('id');
        handleRegionClick(regionName);
    });
});

function handleRegionClick(regionName) {
    clickedRegion = regionName;
    automaticFeatureEnabled = false;
    updateMapColor(regionName, "var(--AmericanRed)");
    updateCardContent(regionContent[regionName]);
}

function updateMapColor(regionName, color) {
    mapRegions.forEach(region => {
        const paths = region.querySelectorAll('path');
        paths.forEach(path => {
            path.style.fill = ""; 
        });
    });
    const paths = document.querySelectorAll(`#${regionName} path`);
    paths.forEach(path => {
        path.style.fill = color;
    });
}

function updateCardContent(content) {
    cardImage.style.backgroundImage = `url('${content.image}')`;
    cardTitle.textContent = content.title;
    cardDescription.textContent = content.description;
    container.style.background = content.background;
}


// section-2
function nycPage() {
    window.location.href = 'Extensions/1. Cities/NYC.html';
}
function laPage() {
    window.location.href = 'Extensions/1. Cities/LA.html';
}
function miamiPage() {
    window.location.href = 'Extensions/1. Cities/Miami.html';
}
function chicagoPage() {
    window.location.href = 'Extensions/1. Cities/Chicago.html';
}
function lasVegasPage() {
    window.location.href = 'Extensions/1. Cities/LasVegas.html';
}
function sanFraciscoPage() {
    window.location.href = 'Extensions/1. Cities/SanFrancisco.html';
}

// section 3

function visaInfoPage() {
    window.location.href = 'Extensions/3. TripPlanning/VisaInfo.html';
}

// section 4
function historicalLandmarkPage() {
    window.location.href = 'Extensions/2. Attractions/HistoricalLandmarks.html';
}
function coastalDestinationsPage() {
    window.location.href = 'Extensions/2. Attractions/CoastalDestinations.html';
}
function outdoorAdventuresPage() {
    window.location.href = 'Extensions/2. Attractions/OutdoorAdventures.html';
}
function roadTripsPage() {
    window.location.href = 'Extensions/2. Attractions/RoadTrips.html';
}
function metroCitiesPage() {
    window.location.href = 'Extensions/2. Attractions/MetropolitanCities.html';
}
function themeParkPage() {
    window.location.href = 'Extensions/2. Attractions/ThemeParks.html';
}
function foodPage() {
    window.location.href = 'Extensions/2. Attractions/Food.html';
}
function festivalsPage() {
    window.location.href = 'Extensions/2. Attractions/FestivalsEvents.html';
}
function sportsPage() {
    window.location.href = 'Extensions/2. Attractions/SportsEvents.html';
}