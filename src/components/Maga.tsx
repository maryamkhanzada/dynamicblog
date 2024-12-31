import React from 'react';
import BlogCard  from '../components/BlogCard';



export default function Mega () {
    const posts = [
        {
            id: "1",
            title: "Embracing the Serene Beauty of Swat Valley",
            description: "Swat, often referred to as the switzerland of pakistan, is a breathtakingly beautiful valley located in the Khyber Pakhtunkhwa province of Pakistan.Nestled amidst the majestic Hindu Kush mountains, Swat is renowned for its stunning landscapes, rich history, and vibrant culture. It is a top destination for both domestic and international tourists seeking natural beauty and serenity. ",
            date: "2024-12-25",
            imageUrl: "/image1.jpg ",
        },
        {
            id: "2",
            title: " Exploring the Scenic Splendor of Gilgit",
            description: "Gilgit, often referred to as the crown jewel of northern Pakistan, is a paradise of breathtaking beauty and cultural heritage. Nestled amidst the towering peaks of the Karakoram and Himalayan ranges, it serves as a gateway to some of the world is most iconic landscapes.",
            date: "2024-12-26",
            imageUrl: "/image_2.jpg ",
        },
        {
            id: "3",
            title: "Unveiling the Paradise of Kashmir",
            description: "Kashmir, often called paradise on earth, is a region of unparalleled beauty that captivates the heart and soul. Nestled in the northern part of Pakistan, its lush green valleys, crystal-clear lakes, and majestic snow-capped mountains create a breathtaking landscape that feels like a dream. The villages of Kashmir, with their traditional wooden houses and serene surroundings, offer a peaceful retreat from the chaos of modern life.",
            date: "2024-12-27",
            imageUrl: "/image_3.avif ",
        },
        {
            id: "4",
            title: "Journey Through the Enchanting Valleys of Naran",
            description: "Naran, a breathtaking town nestled in the heart of the Kaghan Valley in northern Pakistan, is a true gem for nature lovers. Surrounded by towering mountains, lush green meadows, and crystal-clear rivers, Naran offers a serene escape from the fast-paced world.",
            date: "2024-12-28",
            imageUrl: "/image_4.png",
        },
        {
            id: "5",
            title: "Experiencing the Timeless Charm of Kaghan",
            description: "Kaghan, located in the mesmerizing Kaghan Valley of northern Pakistan, is a breathtaking destination that captures the essence of nature's beauty. Surrounded by towering peaks, lush green valleys, and crystal-clear rivers, Kaghan is a paradise for those seeking tranquility and adventure. The region is renowned for its stunning landscapes, with lush meadows, tranquil lakes, and vibrant forests that offer a picturesque backdrop to every corner. ",
            date: "2024-12-29",
            imageUrl: "/image_5.jpg ",
        },
        {
            id: "6",
            title: "Discovering the Peaceful Charm of Hunza Village",
            description: "Hunza, a mesmerizing valley in the Gilgit-Baltistan region of northern Pakistan, is a place where nature is beauty reaches its pinnacle. Surrounded by towering peaks like Rakaposhi and Ultar Sar, and dotted with emerald-green terraced fields, Hunza offers one of the most stunning landscapes in the world.",
            date: "2024-12-29",
            imageUrl: "/image_ 6.webp",
        },
        {
            id:"7",
            title: "Exploring the Vibrant Culture of Kalash Valley",
            description: "Kalash, a stunning and culturally rich valley nestled in the Chitral District of Khyber Pakhtunkhwa, Pakistan, is home to the indigenous Kalash people, known for their unique traditions and vibrant culture. Surrounded by towering peaks and lush forests, the valley exudes a mystical charm that has fascinated visitors for centuries. The Kalash people, with their distinct customs, colorful clothing, and ancient festivals, offer a window into a way of life that has remained largely untouched by time. ",
            date: "2024-12-29",
            imageUrl: "/images_7.jpg ",
        },
        {
            id: "8",
            title: "Embracing the Timeless Beauty of Gojal Valley",
            description: "Gojal, a breathtakingly beautiful region in the uppermost part of the Hunza Valley, is a hidden gem in the Gilgit-Baltistan region of northern Pakistan. Known for its rugged terrain, towering mountains, and pristine rivers, Gojal offers an unparalleled landscape that captivates all who visit. The region is home to remote villages nestled amidst snow-capped peaks and green valleys, where traditional life continues in harmony with nature.",
            date: "2024-12-30",
            imageUrl: "/image_ 8.jpg",
        },
        {
            id:"9",
            title: "Unveiling the Hidden Gems of Passu Village",
            description: "Passu, a picturesque village located in the Gojal region of the Hunza Valley, is one of the most stunning destinations in northern Pakistan. Surrounded by majestic snow-capped peaks, including the iconic Passu Cones, this small village offers a breathtaking panoramic view of the Karakoram Mountain Range. The rugged, dramatic landscapes of Passu, with its lush green fields, winding rivers, and towering cliffs, create an atmosphere of tranquility and awe. ",
            date: "2024-12-30",
            imageUrl: "/images_9.jpg ",
        },
        {
            id: "10",
            title: "Experiencing the Serenity of Skardu is Remote Villages",
            description: "Skardu, the gateway to some of the highest peaks in the world, is a breathtaking valley located in the Gilgit-Baltistan region of northern Pakistan. Surrounded by towering mountains such as K2 and Broad Peak, Skardu is a paradise for adventurers, trekkers, and nature lovers. The region is renowned for its stunning landscapes, including pristine lakes like Shangrila Resort, the mesmerizing Satpara Lake, and the serene Sheosar Lake, all set against the backdrop of snow-capped peaks and lush green valleys. ",
            date: "2024-12-31",
            imageUrl: "/images_10.jpg ",
        },
        {
            id: "11",
            title: "A Journey Through the Lush Green Fields of Neelum Valley",
            description: "Neelum Valley, often referred to as the blue gem of pakistan is a stunningly beautiful valley in Azad Jammu and Kashmir. Stretching along the Neelum River this paradise-like region is renowned for its lush green meadows, dense forests, and crystal-clear streams that flow through its serene landscapes. The valley is dotted with charming villages, each offering breathtaking views and a sense of peace and tranquility. The locals, known for their warm hospitality, make visitors feel at home while preserving the region's unique culture and traditions.",
            date: "2024-12-31",
            imageUrl: "/image_11.jpg",
        },
        {
            id: "12",
            title: "Capturing the Traditional Life of Cholistan Desert Villages",
            description: "Cholistan, a vast desert region in southern Pakistan, is a land of timeless beauty and rich cultural heritage. Known as the land of the desert Cholistan stretches across miles of golden sand dunes, where the silence of the wilderness is broken only by the gentle whispers of the wind. Despite its harsh climate, Cholistan is home to vibrant communities that have adapted to desert life with remarkable resilience.",
            date: "2024-12-31",
            imageUrl: "/images_12.jpeg",
        },
        {
            id: "13",
            title: "Immersing in the Simplicity of Balakot is Villages",
            description: "Balakot, a picturesque town in Khyber Pakhtunkhwa, Pakistan, is often called the Gateway to the Kaghan Valley. Surrounded by lush green mountains, flowing rivers, and serene landscapes, Balakot is a haven for nature lovers and travelers seeking tranquility. The town holds historical significance as a center of resilience and strength, particularly after the devastating earthquake of 2005, which it has since rebuilt with remarkable spirit. ",
            date: "2024-12-31",
            imageUrl: "/images_13.jpeg",
        },
        {
            id: "14",
            title: "Walking Through the History of Thatta is Villages",
            description: "Thatta is villages, located in the heart of Sindh, are a reflection of rural life steeped in tradition and simplicity. Surrounded by vast plains and the shimmering waters of Keenjhar Lake, these villages offer a peaceful retreat into nature, where time seems to slow down. The people of Thatta’s villages are known for their warm hospitality, living in close-knit communities where family and culture play an essential role.",
            date: "2024-12-31",
            imageUrl: "/images_14.jpg ",
        },
        {
            id: "15",
            title: "Celebrating the Beauty of Tharparkar is Desert Villages",
            description: "Tharparkar is desert villages, nestled in the vast expanse of the Thar Desert in Sindh, Pakistan, are a unique blend of resilience, culture, and natural beauty. These villages are characterized by their traditional mud-thatched huts, known as chaunras which are designed to withstand the harsh desert climate. Despite the arid environment, the people of Tharparkar have cultivated a vibrant way of life, deeply rooted in their traditions and harmony with nature.",
            date: "2024-12-31",
            imageUrl: "/images_15.jpg",
        },


    ];
    return(
        <div className='my-8'>
            <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring The World  Most Beautiful Villages</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post,index) =>(
        <div className="fade-in " key={post.id}>
            <div className="blog-card">
                <BlogCard post={post} isDarkBackground={index % 2 === 0}/>

            </div>
        </div>
    ))}

</div>
        </div>
        
    )
}












