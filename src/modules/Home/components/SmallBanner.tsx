import { Button } from "@/components/ui/button";

const SmallBanner = () => {
    return(
            <section className="px-4">
        <div
            className="bg-gradient-to-br from-sky-400 via-sky-400 to-violet-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
            <div className="flex flex-col gap-6">
                <div className="">
                    <span className="text-gray-200">Sale</span>
                    <br />
                    <span className="text-gray-200 text-4xl font-semibold">20% off every Product</span>
                </div>
                
                <Button variant="secondary" className="w-32 border-black border-s-black">
                    Buy Now                    
                </Button>

            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-100" viewBox="0 0 15 15">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
                        clip-rule="evenodd"></path>
                    <path fill="currentColor" d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z">
                    </path>
                </svg>
            </div>
        </div>
        </section>
    );
}

export default SmallBanner;
