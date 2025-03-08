import { FaStar } from 'react-icons/fa';
import { Progress } from "@/components/ui/progress"


const RatingReview = () => {
    return (
        
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
        
        <div className="flex flex-col md:flex-row md:gap-x-22">
            <div className="flex-col space-y-2 mt-4">
                <h4 className='text-lg'>4.0</h4>
                <div className='flex gap-3'>
                    {[1,2,3,4,5].map(() => (
                        <FaStar className='text-yellow-500' />    
                    ))}
                    
                    
                </div>
                <span className="">3 Reviews</span>
            </div>

            <div className="flex-col w-2xl mt-4">
                {[5,4,3,2,1].map((num) => (
                    <div className='flex items-center gap-6'>
                    {num} <Progress value={Math.random() * (100 - 0) + 0} />
                </div>
                ))}
            </div>    

        </div>
        
        <div className="mb-6">
            <p className="font-semibold mb-2">Rate this product:</p>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        className="w-8 h-8 cursor-pointer text-gray-300"
                    />
                ))}
            </div>
        </div>    

        <div className='bg-gray-50 p-4 rounded-lg space-y-2 mt-4'>
            <img className='w-10 h-10 rounded-full mr-3 border-2 border-gray-300' 
                src="" alt="" 
            />
            <p className='font-semibold'>Aqib Khan</p>
            
            <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className='w-4 h-4 text-yellow-400'
                    />
                  ))}
            </div>
            <p className="text-gray-700 mb-2">Great product! Highly recommended.</p>
        </div>

        
        <div className='bg-gray-50 p-4 rounded-lg space-y-2 mt-4'>
            <img className='w-10 h-10 rounded-full mr-3 border-2 border-gray-300' 
                src="" alt="" 
            />
            <p className='font-semibold'>Aqib Khan</p>
            
            <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className='w-4 h-4 text-yellow-400'
                    />
                  ))}
            </div>
            <p className="text-gray-700 mb-2">Great product! Highly recommended.</p>
        </div>
        
        
    
    
    </div>
    );
}


export default RatingReview;
