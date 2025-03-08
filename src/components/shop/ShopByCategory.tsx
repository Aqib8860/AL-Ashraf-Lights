const ShopByCategory = () => {
    const categoriesList = [
        { "name": "Ceiling Lights", "url": "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/IMG-20250221-WA0016.jpg" },
        { "name": "Outdoor Lights", "url": "https://i5.walmartimages.com/asr/d9f967a2-8f3c-4dff-8bba-131020195b40.f413a4ed4f125ccc12caf8c4b2aabdc4.jpeg" },
        { "name": "Floor Lamps", "url": "https://i.pinimg.com/736x/a9/b6/29/a9b6298991c020aa76e1626c6410a093.jpg" },
        { "name": "Wall Lights", "url": "https://5.imimg.com/data5/ANDROID/Default/2023/4/302407249/VH/XJ/EO/74189641/product-jpeg-1000x1000.jpg" },
        { "name": "Chandeliers", "url": "https://i.pinimg.com/originals/a2/61/c2/a261c238e6bd5d630b1f79d02a310140.jpg" }
        
    ];

    return (
        <div className="mt-16 w-full bg-gradient-to-r from-rose-100 to-teal-100">
            <h1 className="text-3xl font-bold mb-6 text-center py-8">SHOP BY CATEGORY</h1>

            <div className="flex flex-col gap-8 items-center md:flex-row md:justify-center md:flex-wrap">
                {categoriesList.map((category, index) => (
                    <div key={index} className="w-60 bg-amber-300 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                        <img className="h-56 w-full object-cover" src={category.url} alt={category.name} />
                        <div className="py-4 text-center bg-white">
                            <h3 className="text-xl font-bold text-amber-700">{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopByCategory;
