import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import delivery_icon from './delivery_icon.png'
import payment_icon from './payment_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img_01 from './about_img_01.png'
import about_img_02 from './about_img_02.jpeg'
import about_img_03 from './about_img_03.jpg'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    delivery_icon,
    payment_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img_01,
    about_img_02,
    about_img_03,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This women's round neck T-shirt is crafted from 100% premium cotton, offering ultimate comfort and a lightweight feel. Its simple and modern design makes it suitable for casual outings and everyday wear.",
            "Material": "100% cotton, breathable and sweat-absorbent.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This men's round neck T-shirt is crafted from 100% premium cotton, offering ultimate comfort and a lightweight feel. Its simple and modern design makes it suitable for casual outings and everyday wear.",
            "Material": "100% cotton, breathable and sweat-absorbent.",
            "Size Recommendations": {
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for waist sizes 32-34 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            },
        },
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This men's round neck T-shirt is made from 100% premium cotton for comfort and breathability, perfect for casual wear and everyday activities.",
            "Material": "100% cotton, ensuring a soft and breathable feel.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 110,
        image: [p_img4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This women's round neck top is made from 100% premium cotton, providing ultimate comfort and breathability, making it ideal for casual outings and daily wear.",
            "Material": "Crafted from soft, breathable cotton, it keeps you comfortable throughout the day.",
            "Size Recommendations": {
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "These tapered fit flat-front trousers are perfect for a sleek, modern look. Made with high-quality fabric for ultimate comfort and style.",
            "Material": "A blend of cotton and polyester for durability and comfort.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 190,
        image: [p_img7],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This men's round neck T-shirt is crafted from premium pure cotton, offering both comfort and breathability. The simple yet classic design makes it a versatile choice for any casual occasion.",
            "Material": "100% pure cotton, soft and breathable for all-day comfort.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 140,
        image: [p_img8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaj",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "These men’s tapered fit trousers provide a sharp and sleek look, perfect for both casual and semi-formal occasions. The flat-front design offers a streamlined silhouette.",
            "Material": "Made with a blend of cotton and polyester for comfort and durability.",
            "Size Recommendations": {
                "S": "Ideal for waist sizes 28-30 inches.",
                "L": "Ideal for waist sizes 32-34 inches.",
                "XL": "Ideal for waist sizes 36-38 inches."
            }
        },
        price: 110,
        image: [p_img10],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: true
    },
    {
        _id: "aaaak",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This men's pure cotton round neck T-shirt is perfect for all-day wear. Its versatile style and breathable fabric make it ideal for casual or outdoor activities.",
            "Material": "100% pure cotton, lightweight and soft to the touch.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 120,
        image: [p_img11],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: true
    },
    {
        _id: "aaaal",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This classic men's round neck T-shirt is made of pure cotton for a soft and breathable fit. Ideal for a casual day out or as an essential layering piece.",
            "Material": "100% pure cotton, ensuring comfort and breathability.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 150,
        image: [p_img12],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "This women's round neck cotton top is made from high-quality cotton, offering comfort and style for everyday wear. A versatile piece for both casual and semi-casual outings.",
            "Material": "Made of 100% cotton for a soft and breathable feel.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "Men's tapered fit flat-front trousers for a streamlined and modern look. Ideal for both casual and smart-casual occasions, offering comfort and style.",
            "Material": "Made from a cotton-polyester blend for easy maintenance and comfort.",
            "Size Recommendations": {
                "S": "Ideal for waist sizes 28-30 inches.",
                "M": "Ideal for waist sizes 30-32 inches.",
                "L": "Ideal for waist sizes 32-34 inches.",
                "XL": "Ideal for waist sizes 34-36 inches."
            }
        },
        price: 140,
        image: [p_img15],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        description_detail: {
            "Introduction": "These men’s tapered fit flat-front trousers offer a perfect blend of style and comfort, making them ideal for a variety of occasions.",
            "Material": "Cotton and polyester blend for a smooth, easy-care finish.",
            "Size Recommendations": {
                "S": "Ideal for waist sizes 28-30 inches.",
                "M": "Ideal for waist sizes 30-32 inches.",
                "L": "Ideal for waist sizes 32-34 inches.",
                "XL": "Ideal for waist sizes 34-36 inches."
            }
        },
        price: 180,
        image: [p_img17],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },    
    {
        _id: "aaaat",
        name: "Women Palazzo Pants with Waist Belt",
        description: "Elegant and comfortable palazzo pants with a stylish waist belt, perfect for casual or semi-formal occasions.",
        description_detail: {
            "Introduction": "These women's palazzo pants feature a flattering fit and a chic waist belt, ideal for elevating your everyday style or pairing with formal tops.",
            "Material": "Soft and breathable fabric blend for maximum comfort and durability.",
            "Size Recommendations": {
                "S": "Fits waist sizes 26-28 inches.",
                "M": "Fits waist sizes 28-30 inches.",
                "L": "Fits waist sizes 30-32 inches.",
                "XL": "Fits waist sizes 32-34 inches."
            }
        },
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A trendy zip-front jacket with a relaxed fit, designed for comfort and style in cooler weather.",
        description_detail: {
            "Introduction": "This women's zip-front relaxed fit jacket is the perfect choice for layering during chilly days, offering a stylish yet cozy look.",
            "Material": "Made of high-quality fleece and polyester for warmth and durability.",
            "Size Recommendations": {
                "S": "Fits chest sizes 32-34 inches.",
                "M": "Fits chest sizes 34-36 inches.",
                "L": "Fits chest sizes 36-38 inches.",
                "XL": "Fits chest sizes 38-40 inches."
            }
        },
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Women Palazzo Pants with Waist Belt",
        description: "Sophisticated and flowy palazzo pants with a functional waist belt, suitable for all-day wear.",
        description_detail: {
            "Introduction": "Enhance your wardrobe with these elegant palazzo pants featuring a stylish belt, perfect for office wear or casual outings.",
            "Material": "Premium-quality fabric offering a light and airy feel.",
            "Size Recommendations": {
                "S": "Fits waist sizes 26-28 inches.",
                "M": "Fits waist sizes 28-30 inches.",
                "L": "Fits waist sizes 30-32 inches.",
                "XL": "Fits waist sizes 32-34 inches."
            }
        },
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "Cozy and fashionable zip-front jacket, ideal for layering during the winter season.",
        description_detail: {
            "Introduction": "This jacket combines relaxed fit and functional design, making it a must-have for staying warm and stylish.",
            "Material": "Blended fleece for superior warmth and comfort.",
            "Size Recommendations": {
                "S": "Fits chest sizes 32-34 inches.",
                "M": "Fits chest sizes 34-36 inches.",
                "L": "Fits chest sizes 36-38 inches.",
                "XL": "Fits chest sizes 38-40 inches."
            }
        },
        price: 220,
        image: [p_img26],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false
    },    
    {
        _id: "aaabb",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A stylish denim jacket designed for a modern slim fit, ideal for layering in cool weather.",
        description_detail: {
            "Introduction": "This men's slim fit relaxed denim jacket is crafted for versatility and comfort. A perfect addition to your wardrobe for casual outings or light winter wear.",
            "Material": "Made from durable denim with a soft inner lining for added comfort.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 36-38 inches.",
                "M": "Ideal for chest sizes 38-40 inches.",
                "L": "Ideal for chest sizes 40-42 inches.",
                "XL": "Ideal for chest sizes 42-44 inches."
            }
        },
        price: 230,
        image: [p_img28],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight and breathable cotton top, perfect for everyday casual wear.",
        description_detail: {
            "Introduction": "This women's round neck cotton top offers a blend of comfort and style. It’s ideal for casual outings or relaxed days at home.",
            "Material": "100% cotton for a soft and airy feel.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 210,
        image: [p_img29],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A breathable and lightweight T-shirt, designed for comfort and everyday wear.",
        description_detail: {
            "Introduction": "This classic men’s round neck T-shirt is made from premium cotton for a relaxed and breathable fit, perfect for daily use.",
            "Material": "100% pure cotton, ensuring softness and durability.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 220,
        image: [p_img31],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A breathable and lightweight T-shirt, designed for comfort and everyday wear.",
        description_detail: {
            "Introduction": "This premium men’s round neck T-shirt offers a stylish look and unmatched comfort, perfect for casual occasions.",
            "Material": "100% pure cotton, providing a soft and breathable experience.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 250,
        image: [p_img32],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Round Neck Cotton Top",
        description: "A stylish cotton top designed for both comfort and versatility, suitable for daily wear.",
        description_detail: {
            "Introduction": "This women’s round neck cotton top combines elegance and ease, making it an essential wardrobe staple for casual settings.",
            "Material": "100% high-quality cotton for softness and durability.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 260,
        image: [p_img34],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false
    },    
    {
        _id: "aaabi",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img35],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A versatile and stylish zip-front jacket, ideal for cold weather with a relaxed fit and comfortable design.",
        description_detail: {
            "Introduction": "This women’s zip-front relaxed fit jacket combines style and warmth, making it an essential winterwear item. Perfect for casual outings or layering over your favorite tops.",
            "Material": "Crafted from high-quality polyester blend for durability and insulation.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 270,
        image: [p_img36],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, breathable, and soft cotton top designed for everyday comfort and style.",
        description_detail: {
            "Introduction": "This women’s round neck cotton top is perfect for casual outings and semi-casual settings. Its breathable fabric ensures all-day comfort while maintaining a chic look.",
            "Material": "100% pure cotton, lightweight and soft to wear.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 250,
        image: [p_img37],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, classic round neck T-shirt made from pure cotton, providing comfort and durability for everyday wear.",
        description_detail: {
            "Introduction": "This men’s round neck T-shirt is crafted from pure cotton, offering a soft, breathable fit for casual and active lifestyles.",
            "Material": "100% pure cotton, ensuring breathability and comfort.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 280,
        image: [p_img38],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, printed cotton shirt designed for comfort and casual style. Perfect for daily wear or semi-casual outings.",
        description_detail: {
            "Introduction": "This men's printed plain cotton shirt offers a perfect blend of style and comfort, making it suitable for both casual and semi-casual occasions.",
            "Material": "100% pure cotton, lightweight and breathable.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 36-38 inches.",
                "M": "Ideal for chest sizes 38-40 inches.",
                "L": "Ideal for chest sizes 40-42 inches.",
                "XL": "Ideal for chest sizes 42-44 inches."
            }
        },
        price: 260,
        image: [p_img39],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, slim-fit denim jacket designed for both warmth and casual fashion, ideal for layering in cooler weather.",
        description_detail: {
            "Introduction": "This men's slim-fit relaxed denim jacket provides a stylish and practical option for winter wear. The versatile design suits various occasions.",
            "Material": "Premium quality denim with a soft inner lining for added comfort.",
            "Size Recommendations": {
                "S": "Fits chest sizes 36-38 inches.",
                "M": "Fits chest sizes 38-40 inches.",
                "L": "Fits chest sizes 40-42 inches.",
                "XL": "Fits chest sizes 42-44 inches."
            }
        },
        price: 290,
        image: [p_img40],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, pure cotton T-shirt with a classic round neck design, perfect for casual wear and layering.",
        description_detail: {
            "Introduction": "This men's pure cotton round neck T-shirt is crafted for comfort and durability, making it an essential wardrobe staple.",
            "Material": "100% pure cotton for a soft and breathable fit.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 34-36 inches.",
                "M": "Ideal for chest sizes 36-38 inches.",
                "L": "Ideal for chest sizes 38-40 inches.",
                "XL": "Ideal for chest sizes 40-42 inches."
            }
        },
        price: 270,
        image: [p_img41],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        bestseller: false
    },    
    {
        _id: "aaabr",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A cozy zip-front jacket designed for comfort and warmth, featuring a relaxed fit and versatile style for winter days.",
        description_detail: {
            "Introduction": "This women's zip-front jacket is perfect for chilly weather, offering both comfort and style. Its relaxed fit makes it a versatile piece for casual outings or layering.",
            "Material": "Made from a blend of premium cotton and polyester for durability and warmth.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 310,
        image: [p_img44],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A stylish slim-fit denim jacket designed for a relaxed yet modern look, perfect for layering during cooler months.",
        description_detail: {
            "Introduction": "This men's slim-fit denim jacket offers a sleek and comfortable fit, making it an essential addition to your winter wardrobe. Ideal for casual or semi-formal outings.",
            "Material": "Crafted from high-quality denim for durability and style.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 36-38 inches.",
                "M": "Ideal for chest sizes 38-40 inches.",
                "L": "Ideal for chest sizes 40-42 inches.",
                "XL": "Ideal for chest sizes 42-44 inches."
            }
        },
        price: 290,
        image: [p_img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A stylish slim-fit denim jacket designed for a relaxed yet modern look, perfect for layering during cooler months.",
        description_detail: {
            "Introduction": "Upgrade your winter style with this slim-fit denim jacket for men. Its versatile design ensures both comfort and a contemporary aesthetic.",
            "Material": "Made of premium denim to provide long-lasting quality and a refined look.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 36-38 inches.",
                "M": "Ideal for chest sizes 38-40 inches.",
                "L": "Ideal for chest sizes 40-42 inches.",
                "XL": "Ideal for chest sizes 42-44 inches."
            }
        },
        price: 320,
        image: [p_img46],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A stylish slim-fit denim jacket designed for a relaxed yet modern look, perfect for layering during cooler months.",
        description_detail: {
            "Introduction": "This men's denim jacket blends comfort with style. The slim fit provides a flattering silhouette, making it an excellent choice for any casual outfit.",
            "Material": "Crafted from durable denim, offering timeless style and comfort.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 36-38 inches.",
                "M": "Ideal for chest sizes 38-40 inches.",
                "L": "Ideal for chest sizes 40-42 inches.",
                "XL": "Ideal for chest sizes 42-44 inches."
            }
        },
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaaby",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A cozy zip-front jacket designed for comfort and warmth, featuring a relaxed fit and versatile style for winter days.",
        description_detail: {
            "Introduction": "Stay warm and stylish with this women's zip-front jacket. Its relaxed fit and soft fabric make it an excellent option for chilly days.",
            "Material": "A blend of cotton and polyester for ultimate comfort and durability.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 32-34 inches.",
                "M": "Ideal for chest sizes 34-36 inches.",
                "L": "Ideal for chest sizes 36-38 inches.",
                "XL": "Ideal for chest sizes 38-40 inches."
            }
        },
        price: 320,
        image: [p_img51],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A stylish slim-fit denim jacket designed for a relaxed yet modern look, perfect for layering during cooler months.",
        description_detail: {
            "Introduction": "Elevate your wardrobe with this slim-fit denim jacket for men. Its contemporary style pairs well with both casual and semi-formal attire.",
            "Material": "Premium quality denim ensures durability and a polished look.",
            "Size Recommendations": {
                "S": "Ideal for chest sizes 36-38 inches.",
                "M": "Ideal for chest sizes 38-40 inches.",
                "L": "Ideal for chest sizes 40-42 inches.",
                "XL": "Ideal for chest sizes 42-44 inches."
            }
        },
        price: 350,
        image: [p_img52],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false
    }    

]