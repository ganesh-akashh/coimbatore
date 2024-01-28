


export const stores = [
  {
    title: "Clothing",
    imgUrl: require("../assets/images/clothing.png")
  },
  {
    title: "Geo Tagging",
    imgUrl: require("../assets/images/map.png")
  },
  {
    title: "Donation",
    imgUrl: require("../assets/images/blood.png")
  },
  {
    title: "Share Cab",
    imgUrl: require("../assets/images/taxi.png"),
  },
  {
    title: "Alms Giving",
    imgUrl: require("../assets/images/donation.png")
  },
  {
    title: "Restaurants",
    imgUrl: require("../assets/images/food.png")
  },
  {
    title: "Pharmacy",
    imgUrl: require("../assets/images/health.png")
  },
  {
    title: "Accessories",
    imgUrl: require("../assets/images/gadgets.png")
  },
  {
    title: "Fitness",
    imgUrl: require("../assets/images/fitness.png")
  },
  {
    title: "Beauty",
    imgUrl: require("../assets/images/beauty.png")
  },
  {
    title: "Development",
    imgUrl: require("../assets/images/software.png")
  },
  {
    title: "Cleaning",
    imgUrl: require("../assets/images/cleaning.png")
  },
  {
    title: "Repairs",
    imgUrl: require("../assets/images/repair.png")
  },
  {
    title: "Pet Shop",
    imgUrl: require("../assets/images/pets.png")
  },
  {
    title: "Real Estate",
    imgUrl: require("../assets/images/house.png")
  },
  {
    title: "Travel",
    imgUrl: require("../assets/images/travel.png")
  },

  {
    title: "Others",
    imgUrl: require("../assets/images/bulb.png")
  }
]


export const API_KEY = "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"



export const sliderImages = [
  require('../assets/images/slide1.jpeg'),
  require('../assets/images/slide2.jpeg'),
  require('../assets/images/slide3.jpeg'),
  require('../assets/images/slide4.jpeg'),
]


export const newsApiQuery = async () => {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=coimbatore&apiKey=be07bce3d90a42098bd315b93de77ace');

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.error(`Failed to fetch data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
};


export const checkImageURL = (url) => {
  if (!url) return false
  else {
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url);
  }
};

export const dummyMessages = [
  {
    role: 'user',
    content: 'How are you?'
  },
  {
    role: 'assistant',
    content: "I'm fine, How may i help you today."
  },
  {
    role: 'user',
    content: 'Create an image of a dog playing with cat'
  },
  {
    role: 'assistant',
    content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
  }
]