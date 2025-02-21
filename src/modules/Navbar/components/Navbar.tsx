import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <Card className="bg-yellow-200 py-3 px-6 border-0 flex items-center justify-between mt-0">
            {/* Left: Logo */}
            <div className="flex flex-col text-2xl font-bold">
                
                <h1>ASHRAFI</h1>
                <h1>LIGHTS</h1>
            </div>

            {/* Hamburger Icon (visible on small screens) */}
            <div className="md:hidden">
                <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </Button>
            </div>

            {/* Navigation Links */}
            <ul className={`md:flex text-lg gap-6 justify-center items-center absolute md:static top-16 left-0 w-full md:w-auto bg-yellow-200 p-4 md:p-0 md:bg-transparent transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
                
                <div className="hidden md:flex gap-4">
                    <input className="px-18 py-1.5 rounded-full bg-white" />
                    <Button className="border-black" variant="outline">Search</Button>
                </div>
                
                
                <li className="md:hidden">
                    <a href="#" className="block text-gray-600 hover:text-gray-800 py-2">Login</a>
                </li>
                <li className="md:hidden">
                    <a href="#" className="block text-gray-600 hover:text-gray-800 py-2">Register</a>
                </li>
            </ul>

            {/* Right: Buttons (Hidden on small screens) */}
            <div className="hidden md:flex gap-4">
                <Button variant="outline">Login</Button>
                <Button>Register</Button>
            </div>
        </Card>
    );
}

export default Navbar;
