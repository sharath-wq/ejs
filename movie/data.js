const movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Science Fiction",
        director: "Christopher Nolan",
        imbdRating: 8.8,
        poster: "https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_480x.progressive.jpg?v=1573618694",
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        director: "Frank Darabont",
        imbdRating: 9.3,
        poster: "https://www.movieposters.com/cdn/shop/products/9f22e23817c4accbf052e0f91a2b7821_156f8e4f-814c-4dcb-896d-0b077053cd51_480x.progressive.jpg?v=1573593734",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        director: "Christopher Nolan",
        imbdRating: 9.0,
        poster: "https://www.movieposters.com/cdn/shop/products/darkknight.building.mp_480x.progressive.jpg?v=1648745750",
    },
];

const cars = [
    {
        Brand: "Ferrari",
        Model: "LaFerrari",
        Horsepower: 950,
        TopSpeedMPH: 217,
        Acceleration: "0-60 in 2.4 seconds",
        Price: "$1.4 million",
        Image: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        Brand: "Lamborghini",
        Model: "Aventador SVJ",
        Horsepower: 770,
        TopSpeedMPH: 217,
        Acceleration: "0-60 in 2.8 seconds",
        Price: "$517,770",
        Image: "https://images.pexels.com/photos/13980813/pexels-photo-13980813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        Brand: "Bugatti",
        Model: "Chiron",
        Horsepower: 1500,
        TopSpeedMPH: 261,
        Acceleration: "0-60 in 2.5 seconds",
        Price: "$2.9 million",
        Image: "https://images.pexels.com/photos/10017333/pexels-photo-10017333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        Brand: "Koenigsegg",
        Model: "Jesko",
        Horsepower: 1600,
        TopSpeedMPH: 300,
        Acceleration: "0-60 in 2.5 seconds",
        Price: "$3 million",
        Image: "https://images.pexels.com/photos/9764734/pexels-photo-9764734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        Brand: "McLaren",
        Model: "P1",
        Horsepower: 903,
        TopSpeedMPH: 217,
        Acceleration: "0-60 in 2.8 seconds",
        Price: "$1.15 million",
        Image: "https://images.pexels.com/photos/12568008/pexels-photo-12568008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

const galaxy = [
    {
        Name: "Milky Way",
        Type: "Spiral",
        Age: "13.6 billion years",
        Distance: "100,000 light-years",
        Constellation: "Sagittarius",
        Description: "The Milky Way is our home galaxy, a vast collection of stars, planets, and other celestial objects.",
    },
    {
        Name: "Andromeda",
        Type: "Spiral",
        Age: "TBD",
        Distance: "2.537 million light-years",
        Constellation: "Andromeda",
        Description:
            "The Andromeda Galaxy is the closest spiral galaxy to the Milky Way and is on a collision course with it.",
    },
    {
        Name: "Triangulum",
        Type: "Spiral",
        Age: "TBD",
        Distance: "3 million light-years",
        Constellation: "Triangulum",
        Description:
            "The Triangulum Galaxy is the third-largest galaxy in the Local Group, which also includes the Milky Way and Andromeda.",
    },
    {
        Name: "Whirlpool",
        Type: "Spiral",
        Age: "TBD",
        Distance: "23.5 million light-years",
        Constellation: "Canes Venatici",
        Description: "The Whirlpool Galaxy is famous for its spiral arms and interacting nature with a smaller galaxy.",
    },
    {
        Name: "Messier 87",
        Type: "Elliptical",
        Age: "TBD",
        Distance: "53.5 million light-years",
        Constellation: "Virgo",
        Description:
            "Messier 87 is a massive elliptical galaxy and was the first to have an image of its black hole captured.",
    },
    {
        Name: "Sombrero",
        Type: "Spiral",
        Age: "TBD",
        Distance: "29.3 million light-years",
        Constellation: "Virgo",
        Description: "The Sombrero Galaxy has a bright nucleus and a wide, bright central bulge resembling a sombrero hat.",
    },
    {
        Name: "Centaurus A",
        Type: "Elliptical",
        Age: "TBD",
        Distance: "13 million light-years",
        Constellation: "Centaurus",
        Description: "Centaurus A is a peculiar galaxy with an active galactic nucleus and a prominent dust lane.",
    },
    {
        Name: "Pinwheel",
        Type: "Spiral",
        Age: "TBD",
        Distance: "21 million light-years",
        Constellation: "Ursa Major",
        Description: "The Pinwheel Galaxy is a stunning spiral galaxy with bright arms and a well-defined central region.",
    },
    {
        Name: "Leo",
        Type: "Spiral",
        Age: "TBD",
        Distance: "35 million light-years",
        Constellation: "Leo",
        Description: "The Leo Galaxy is an intermediate spiral galaxy with a relatively low surface brightness.",
    },
    {
        Name: "Black Eye",
        Type: "Spiral",
        Age: "TBD",
        Distance: "24.4 million light-years",
        Constellation: "Coma Berenices",
        Description: "The Black Eye Galaxy is known for its distinctive dark band of dust that gives it its name.",
    },
];

const choclates = [
    {
        name: "ChocoBliss",
        brand: "ChocoDelight",
        type: "Milk Chocolate",
        flavor: "Classic Milk",
        price: 3.99,
        image: "https://youngsbazar.com/wp-content/uploads/2021/09/Hazelnut.webp",
    },
    {
        name: "Dark Elegance",
        brand: "CocoaMasters",
        type: "Dark Chocolate",
        flavor: "Bittersweet",
        price: 4.49,
        image: "https://example.com/darkelegance.jpg",
    },
    {
        name: "Crispy Hazelnut",
        brand: "SweetCocoa",
        type: "Milk Chocolate",
        flavor: "Hazelnut Crunch",
        price: 3.79,
        image: "https://example.com/crispyhazelnut.jpg",
    },
    {
        name: "Raspberry Dream",
        brand: "DivineCacao",
        type: "Dark Chocolate",
        flavor: "Raspberry Delight",
        price: 4.99,
        image: "https://example.com/raspberrydream.jpg",
    },
    {
        name: "Golden White",
        brand: "LuxeChocolat",
        type: "White Chocolate",
        flavor: "Classic White",
        price: 3.89,
        image: "https://example.com/goldenwhite.jpg",
    },
    {
        name: "Salted Caramel Fusion",
        brand: "SweetCocoa",
        type: "Milk Chocolate",
        flavor: "Sea Salt Caramel",
        price: 4.29,
        image: "https://example.com/saltedcaramel.jpg",
    },
    {
        name: "Ruby Delight",
        brand: "ChocoDelight",
        type: "Ruby Chocolate",
        flavor: "Berry Bliss",
        price: 4.79,
        image: "https://example.com/rubydelight.jpg",
    },
    {
        name: "Organic Pure Bliss",
        brand: "CocoaMasters",
        type: "Organic Chocolate",
        flavor: "Pure Chocolate",
        price: 5.49,
        image: "https://example.com/organicbliss.jpg",
    },
    {
        name: "Velvet Crunch",
        brand: "LuxeChocolat",
        type: "Dark Chocolate",
        flavor: "Velvet Smooth",
        price: 4.19,
        image: "https://example.com/velvetcrunch.jpg",
    },
    {
        name: "Minty Fresh",
        brand: "DivineCacao",
        type: "Milk Chocolate",
        flavor: "Mint Chocolate",
        price: 3.99,
        image: "https://example.com/mintyfresh.jpg",
    },
];

module.exports = { cars, movies, galaxy, choclates };
