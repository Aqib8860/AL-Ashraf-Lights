import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DetailDropDownButton = ({buttonName, detail}: {buttonName:string, detail:string}) => {
    const [showData, setShowData] = useState(false);
    
    return (
        <>
            <button 
                onClick={() => setShowData(!showData)}
                className="w-full flex justify-between items-center bg-gray-200 py-3 px-4 rounded-md text-lg font-medium"
            >
                {buttonName}
                {showData ? <ChevronUp /> : <ChevronDown />}
            </button>
            {
                showData && (
                    <div className="mt-2 p-4 bg-gray-100 rounded-md text-gray-700">
                        <p> 
                            {detail}
                        </p>
                </div>
                )
            }
        </>

    );
}

export default DetailDropDownButton;
