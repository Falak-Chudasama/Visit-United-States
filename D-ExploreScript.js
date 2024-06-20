
// card logic

let mostVisitedMap = [
    {
        bgImg: "Images/12. Explore/mostVisited1.jpg",
        title: "Statue of Liberty",
        description: "The Statue of Liberty stands as a timeless symbol of freedom and democracy, welcoming visitors from around the world to the shores of New York City.",
        href: "libertyPage()",
    },
    {
        bgImg: "Images/12. Explore/mostVisited2.jpeg",
        title: "Times Square",
        description: "Times Square, known as 'The Crossroads of the World' is a bustling and electrifying hub in the heart of Manhattan. Neon billboards illuminate the streets.",
        href: "timePage()",
    },
    {
        bgImg: "Images/12. Explore/mostVisited3.jpg",
        title: "Hollywood sign",
        description: "Perched atop the Hollywood Hills, the Hollywood Sign stands as a timeless beacon of the entertainment industry. Its iconic letters evoke dreams and aspirations.",
        href: "hollyPage()",
    },
    {
        bgImg: "Images/12. Explore/mostVisited4.jpg",
        title: "Golden Gate Bridge",
        description: "Nestled amidst the fog-kissed shores of San Francisco, the Golden Gate Bridge commands attention with its towering presence and iconic orange hue. Spanning the picturesque strait that bears its name.",
        href: "ggbPage()",
    },
    {
        bgImg: "Images/12. Explore/mostVisited5.png",
        title: "Mount Rushmore",
        description: "Carved into the granite face of the Black Hills in South Dakota, Mount Rushmore National Memorial features the colossal sculptures of four U.S. presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln.",
        href: "rushmorePage()",
    },
    {
        bgImg: "Images/12. Explore/mostVisited6.jpeg",
        title: "Grand Canyon",
        description: "The Grand Canyon, one of the most iconic natural wonders of the world, is a testament to the power and beauty of geological forces. Carved by the mighty Colorado River over millions of years.",
        href: "canyonPage()",
    }
];

let citiesMap = [
    {
        bgImg: "Images/12. Explore/city1.jpg",
        title: "New York City",
        description: "Where dreams soar higher than skyscrapers, and every street corner holds a story waiting to be discovered, inviting you to explore its vibrant tapestry of culture and history.",
        href: "nycPage()",
    },
    {
        bgImg: "Images/12. Explore/city2.jpg",
        title: "Los Angeles",
        description: "Where Hollywood dreams touch the sky, and the streets hum with tales of fame and fortune, beckoning you to uncover its glitzy allure.",
        href: "laPage()",
    },
    {
        bgImg: "Images/12. Explore/city3.jpg",
        title: "Miami",
        description: " A tropical paradise where the sun-kissed beaches and pulsating nightlife create a canvas of endless possibilities, inviting you to indulge in its vibrant fusion of culture and excitement.",
        href: "miamiPage()",
    },
    {
        bgImg: "Images/12. Explore/city4.jpg",
        title: "Chicago",
        description: "A city where architectural wonders stand tall against the winds off Lake Michigan, while the soulful rhythms of blues and jazz echo through its bustling streets, welcoming you to immerse yourself in its rich heritage and modern charm.",
        href: "chicagoPage()",
    },
    {
        bgImg: "Images/12. Explore/city5.jpg",
        title: "Las Vegas",
        description: "An electrifying oasis in the desert, where the neon lights of the Strip illuminate the night sky, and the promise of endless entertainment lures you into its dazzling embrace, promising an unforgettable adventure at every turn.",
        href: "lvPage()",
    },
    {
        bgImg: "Images/12. Explore/city6.jpg",
        title: "San Francisco",
        description: "A city of contrasts, where the iconic Golden Gate Bridge spans the bay, and the eclectic neighborhoods buzz with creativity and innovation, inviting you to explore its diverse culture and storied past.",
        href: "sfPage()",
    },
];

let regionsMap = [
    {
        bgImg: "Images/12. Explore/region1.jpg",
        title: "Alaska",
        description: "Alaska, the last frontier, is a wilderness paradise with towering mountains, glaciers, and diverse wildlife",
        href: "alaskaPage()",
    },
    {
        bgImg: "Images/12. Explore/region2.jpg",
        title: "Hawaii",
        description: "Hawaii, a tropical oasis in the Pacific, enchants visitors with its stunning beaches, lush rainforests, and volcanic wonders.",
        href: "hawaiiPage()",
    },
    {
        bgImg: "Images/12. Explore/region3.jpg",
        title: "North East",
        description: "The North-Eastern region of the USA is renowned for its historic cities, including Boston and New York City, as well as its picturesque landscapes",
        href: "nePage()",
    },
    {
        bgImg: "Images/12. Explore/region4.jpg",
        title: "Mid West",
        description: "The Mid-Western region of the USA, often called the heartland, boasts vast farmland, iconic cities like Chicago, and a strong industrial presence.",
        href: "mwPage()",
    },
    {
        bgImg: "Images/12. Explore/region5.jpg",
        title: "South",
        description: "The Southern region is famous for its hospitality, rich cuisine, and vibrant music scene",
        href: "southPage()",
    },
    {
        bgImg: "Images/12. Explore/region6.jpg",
        title: "West",
        description: "The Western region is defined by its rugged beauty, from the Rocky Mountains to Californian beaches.",
        href: "westPage()",
    },
];

const cards = document.querySelectorAll(".card");

function updateCards(map) {
    cards.forEach((card, index) => {
        if (map[index]) {
            let image = card.querySelector(".img");
            let title = card.querySelector(".title");
            let description = card.querySelector(".description");
            let button = card.querySelector(".button");

            image.style.background = `url("${map[index].bgImg}") lightgray 50% / cover no-repeat`;
            title.textContent = map[index].title;
            description.textContent = map[index].description;
            button.setAttribute("onclick", map[index].href);
        }
    });
}


// Button Logic main
document.addEventListener('DOMContentLoaded', function () {
    let button1 = document.querySelector('.most-visited-button');
    let button2 = document.querySelector('.cities-button');
    let button3 = document.querySelector('.attractions-button');

    function setHoverColor(button, flag) {
        button.addEventListener('mouseenter', () => {
            if (flag) {
                button.style.backgroundColor = "var(--AmericanDarkRed)";
            } else {
                button.style.backgroundColor = "var(--AmericanBlue)";
            }
        });
        button.addEventListener('mouseleave', () => {
            if (flag == true) {
                button.style.backgroundColor = "var(--AmericanRed)";
            } else {
                button.style.backgroundColor = "var(--AmericanBlue)";
            }
        });
    }

    function changeToRed(buttonA, buttonB) {
        buttonA.style.backgroundColor = "var(--AmericanRed)";
        buttonB.style.backgroundColor = "var(--AmericanRed)";
        setHoverColor(buttonA, true);
        setHoverColor(buttonB, true);
    }

    function mostVisited() {
        button1.style.backgroundColor = "var(--AmericanBlue)";
        setHoverColor(button1, false);
        changeToRed(button2, button3);
        updateCards(mostVisitedMap);
    }

    function cities() {
        button2.style.backgroundColor = "var(--AmericanBlue)";
        setHoverColor(button2, false);
        changeToRed(button1, button3);
        updateCards(citiesMap);
    }

    function attractions() {
        button3.style.backgroundColor = "var(--AmericanBlue)";
        setHoverColor(button3, false);
        changeToRed(button1, button2);
        updateCards(regionsMap);
    }

    button1.addEventListener('click', mostVisited);
    button2.addEventListener('click', cities);
    button3.addEventListener('click', attractions);

    // Initialize by showing most visited as default
    mostVisited();
});

