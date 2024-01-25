



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