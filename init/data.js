const sampleListings = [
  {
    title: "Sunset Over Santorini",
    description:
      "Experience breathtaking sunsets from a cliffside villa in Santorini, Greece.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Santorini, Greece",
    country: "Greece",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [25.4167, 36.3932] },
  },
  {
    title: "Luxury Beachfront Villa",
    description:
      "A luxurious beachfront villa in Bali offering private pools and ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "Bali, Indonesia",
    country: "Indonesia",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Alpine Retreat in Zermatt",
    description:
      "A cozy alpine retreat in Zermatt, Switzerland, perfect for skiing enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
  },
  {
    title: "Tokyo Skyline Apartment",
    description: "Modern apartment with panoramic views of Tokyo's skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Tokyo, Japan",
    country: "Japan",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Parisian Chic Loft",
    description:
      "Stylish loft in the heart of Paris, offering a blend of modern amenities and classic charm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Paris, France",
    country: "France",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  },
  {
    title: "New York Penthouse",
    description: "Luxury penthouse with stunning views of New York City.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 30000,
    location: "New York, USA",
    country: "USA",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Maldives Overwater Bungalow",
    description:
      "Exclusive overwater bungalow in the Maldives with direct access to the lagoon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Maldives",
    country: "Maldives",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [73.4717, 3.2028] },
  },
  {
    title: "Dubai Marina Luxury Suite",
    description: "Opulent suite overlooking the Dubai Marina skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 27000,
    location: "Dubai, UAE",
    country: "UAE",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [55.2708, 25.276987] },
  },
  {
    title: "Cape Town Seaside Villa",
    description:
      "Charming seaside villa in Cape Town with panoramic ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Cape Town, South Africa",
    country: "South Africa",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] },
  },
  {
    title: "Venetian Canal House",
    description:
      "Quaint house along a canal in Venice, Italy, offering a romantic setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 16000,
    location: "Venice, Italy",
    country: "Italy",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] },
  },
  {
    title: "Beachfront Cottage in Goa",
    description:
      "Relax in this cozy beachfront cottage with stunning sunset views in Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478172-1f2e5b748b5b?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Goa",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [74.123, 15.2993] },
  },
  {
    title: "Palace Stay in Jaipur",
    description:
      "Experience royal living in this historic palace-inspired stay in Jaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1562790412-3b4f7d1d3d65?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Jaipur",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Heritage Villa in Udaipur",
    description:
      "Stay in this heritage villa overlooking the serene lakes of Udaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593083192606-30b8f1b1d5c8?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Udaipur",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [73.6752, 24.5854] },
  },
  {
    title: "Hilltop Cabin in Manali",
    description:
      "Cozy cabin nestled in the mountains of Manali, perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1581141320768-1e421929ea4c?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Manali",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [77.1092, 32.2432] },
  },
  {
    title: "Riverside Retreat in Rishikesh",
    description:
      "Peaceful riverside retreat with yoga and meditation in the spiritual city of Rishikesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Rishikesh",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  },
  {
    title: "Backwater Villa in Kerala",
    description:
      "Experience the tranquility of Kerala's backwaters in this luxurious villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598300052036-8c67c1d9e8b5?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Alleppey, Kerala",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [75.3119, 9.4981] },
  },
  {
    title: "Beachfront Cottage in Goa",
    description:
      "Relax in this cozy beachfront cottage with stunning sunset views in Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Goa",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [74.123, 15.2993] },
  },
  {
    title: "Palace Stay in Jaipur",
    description:
      "Experience royal living in this historic palace-inspired stay in Jaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Jaipur",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Heritage Villa in Udaipur",
    description:
      "Stay in this heritage villa overlooking the serene lakes of Udaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Udaipur",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [73.6752, 24.5854] },
  },
  {
    title: "Hilltop Cabin in Manali",
    description:
      "Cozy cabin nestled in the mountains of Manali, perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Manali",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [77.1092, 32.2432] },
  },
  {
    title: "Riverside Retreat in Rishikesh",
    description:
      "Peaceful riverside retreat with yoga and meditation in the spiritual city of Rishikesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Rishikesh",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  },
  {
    title: "Backwater Villa in Kerala",
    description:
      "Experience the tranquility of Kerala's backwaters in this luxurious villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Alleppey, Kerala",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [75.3119, 9.4981] },
  },
  {
    title: "Hillside Cottage in Coorg",
    description:
      "Charming hillside cottage surrounded by coffee plantations in Coorg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Coorg",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] },
  },
  {
    title: "Desert Palace in Jaisalmer",
    description:
      "Live like royalty in this stunning desert palace in Jaisalmer, Rajasthan.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Jaisalmer",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [70.9165, 26.9157] },
  },
  {
    title: "Lakeview Villa in Nainital",
    description:
      "Enjoy serene views of the lake and mountains from this beautiful villa in Nainital.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Nainital",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [79.4581, 29.3919] },
  },
  {
    title: "Fortress Stay in Udaipur",
    description:
      "Historic fortress converted into a luxurious stay with panoramic views of Udaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Udaipur",
    country: "India",
    reviews: [],
    owner: "68b3f83869140d0460236def",
    geometry: { type: "Point", coordinates: [73.6857, 24.5777] },
  },
];

module.exports = { data: sampleListings };
