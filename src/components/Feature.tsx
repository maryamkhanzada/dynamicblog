import React from 'react'

export default function Feature () {
    return(
        <div>
            <section className="py-8 bg-neutral-100 mb-40">
                <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500
                ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
                Maryam Khan: Unveiling the Charm of Pakistan is Villages
                </h2>

                <p className="text-center m-4 mt-4  text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
                I am Maryam Khan, and this blog is my way of celebrating the unparalleled beauty of Pakistan is villages. These quaint and peaceful communities are the soul of our country, offering a glimpse into a way of life that is both simple and deeply enriching. From the vibrant fields that stretch to the horizon to the timeless traditions preserved by the locals, each village is a masterpiece of culture and nature. Through my words and insights, I hope to bring you closer to the essence of rural Pakistan, where beauty lies in every detail and every moment. 
                </p>

                <div className="mx-auto max-w-7xl px-5">
                    <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories</h1>


                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
                      {[
                        " Embracing the Serene Beauty of Swat Valley",
                        "Exploring the Scenic Splendor of Gilgit",
                        "Unveiling the Paradise of Kashmir",
                        "Journey Through the Enchanting Valleys of Naran",
                        "Journey Through the Enchanting Valleys of Naran",
                        "Discovering the Peaceful Charm of Hunza Village",

                      ].map((category, index) =>(
                        <div key={index}
                        className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-items-center justify-center text-neutral-600">
                            <p className="text-center text-lg font-semibold">{category}</p>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out">

                            </div>

                        </div>
                      ))}
                    </div>

                </div>

                <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
                Pakistan is villages are the heart and soul of the country, offering a serene escape from the bustling city life. These villages are a testament to simplicity, natural beauty, and rich cultural heritage. Spread across lush green fields, rugged mountains, and vast deserts, each village has its unique charm.
                </p>

            </section>
        </div>
        
    )
}