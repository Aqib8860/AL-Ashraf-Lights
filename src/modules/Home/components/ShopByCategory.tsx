const ShopByCategory = () => {
    const categoriesList = [
        {"name": "Ceiling Lights", "url": "https://i5.walmartimages.com/asr/f74e90bc-32fe-423f-9d42-5d624a598835.986e6660ab9e514b2047b18560589443.jpeg"},
        {"name": "Outdoor Lights", "url": "https://i5.walmartimages.com/asr/d9f967a2-8f3c-4dff-8bba-131020195b40.f413a4ed4f125ccc12caf8c4b2aabdc4.jpeg"},
        {"name": "Floor Lamps", "url": "https://i.pinimg.com/736x/a9/b6/29/a9b6298991c020aa76e1626c6410a093.jpg"},
        {"name": "Wall Ligts", "url": "https://5.imimg.com/data5/ANDROID/Default/2023/4/302407249/VH/XJ/EO/74189641/product-jpeg-1000x1000.jpg"},
        {"name": "Chandeliers", "url": "https://i.pinimg.com/originals/a2/61/c2/a261c238e6bd5d630b1f79d02a310140.jpg"}
    ];

    return (
    
    <div className="mt-16 w-full bg-gradient-to-r from-rose-100 to-teal-100">
        
        <h1 className="text-3xl font-bold mb-6 text-center py-8">SHOP BY CATEGORY</h1>
        
        <div className=" flex flex-col gap-16 items-center justify-around md:flex-row md:justify-around">

            {categoriesList.map((category, index)=> (
                <div key={index} className="container bg-amber-300 h-72 w-50 rounded-2xl">
                    <img className="h-72 w-full rounded-2xl object-cover" src={category.url} alt="" />

                    <div className="flex justify-center">
                        <h3 className="text-2xl font-bold font-serif text-amber-700">{category.name}</h3>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
    );
}

export default ShopByCategory;
