import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  
const SortDropDown = ({title, menu_items}: {title:string, menu_items: string[]}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Sort by {title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    menu_items.map((item, index) => (
                        <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
            </DropdownMenu>

    );
}

export default SortDropDown;
