import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { getProductDetail, updateProduct } from "@/api/productApi"
import { ProductSchema } from "@/schemas/productSchema"


const EditProduct = ({ productId }: { productId: number }) => {
    const [open, setOpen] = useState(false);
    
    const { register, handleSubmit, setValue, reset } = useForm<ProductSchema>();  // No defaultValues here

    const fetchProductDetail = async () => {
        const productData = await getProductDetail(productId);
        if (productData) {
            console.log("Product Updated Data ", productData);
            reset(productData);  // Set form values after fetching data
        }
    };

    const handleDialogOpen = (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen) {
            fetchProductDetail(); // Fetch data only when the modal opens
        }
    };

    const changeProduct = async(data: ProductSchema) => {
        try {
            const response = await updateProduct(data);
            if (response?.status === 200) {
                handleDialogOpen(false);  // Close the modal after successful update
                window.location.reload();
                alert("Product updated successfully");
                
            } else {
                console.error("Failed to update product:", response);
                alert("Failed to update product");
                handleDialogOpen(false);  // Close the modal if update fails
            }
        }
        catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product");
            handleDialogOpen(false);  // Close the modal if update fails
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogDescription>
                        Make changes to your product here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(changeProduct)}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Id
                            </Label>
                            <Input {...register('id')} className="col-span-3" disabled/>
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input {...register('name')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Sale Price
                            </Label>
                            <Input type="number" {...register('sale_price')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Original Price
                            </Label>
                            <Input type="number" {...register('original_price')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Available</Label>
                            <Select onValueChange={(value) => setValue("is_available", value === "true")}>
                                <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select Availability" />
                                </SelectTrigger>
                                <SelectContent >
                                <SelectGroup >
                                    <SelectLabel>Available</SelectLabel>
                                    <SelectItem value="true">Yes</SelectItem>
                                    <SelectItem value="false">No</SelectItem>    
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                            
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Category
                            </Label>
                            <Input type="text" {...register('category')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Description
                            </Label>
                            <Input type="text" {...register('description')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Height
                            </Label>
                            <Input type="number" step={0.1} {...register('height')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Width
                            </Label>
                            <Input type="number" step={0.1} {...register('width')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Length
                            </Label>
                            <Input type="number" step={0.1} {...register('length')} className="col-span-3"/>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Quantity
                            </Label>
                            <Input type="number" step={0.1} {...register('quantity')} className="col-span-3"/>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditProduct;
