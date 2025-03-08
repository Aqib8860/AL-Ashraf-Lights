import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { addProductSchema, AddProductSchema } from "@/schemas/productSchema";
import { addProduct, uploadProductImage } from "@/api/productApi";


const AddProduct = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const {register, handleSubmit, setValue, formState:{errors}} = useForm<AddProductSchema>({resolver:zodResolver(addProductSchema)});

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files;
        console.log(file);
        if (file) {
            setSelectedFile(file[0]);
        }
        else return;
    };

    const uploadImage = async (productId: number) => {
        if (!selectedFile) return;
    
        const formData = new FormData();
        formData.append('product_id', productId.toString());
        formData.append('image', selectedFile);
    
        const isImageUpload = await uploadProductImage(formData);
        if (isImageUpload) {
            return true;
        } else {
            return false;
        }
    };

    const formSubmit = async (product: AddProductSchema) => {        
        const productId = await addProduct(product);
        const isImageUpload = await uploadImage(productId);
        
        if (isImageUpload) {
            alert("Product added successfully");
        }
        else {
            alert("Failed to add product");
        }

    };
    return (
        <>
        
        <h1 className="text-3xl font-bold text-center">Add Product</h1>
        <br />
        <form  onSubmit={handleSubmit(formSubmit)}>    
            
            <div className="px-8 flex flex-wrap gap-6">
                <div className="space-y-5">
                    <Label className="text-2xl">Product Name</Label>
                    <Input {...register('name')} type="text" placeholder="Enter Product Name" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.name?.message}</p>

                </div>
                <div className="space-y-5">
                    <Label className="text-2xl">Category</Label>
                    <Input {...register('category')} type="text" placeholder="Enter Product Category" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.category?.message}</p>
                </div>

                <div className="space-y-5">
                    <Label className="text-2xl">Price</Label>
                    <Input {...register('price', { valueAsNumber: true })} type="number" placeholder="Enter Product Price" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.price?.message}</p>
                </div>
                
                <div className="space-y-5">
                    <Label className="text-2xl">Quantity</Label>
                    <Input {...register('quantity', { valueAsNumber: true })} type="number" placeholder="Enter Product Available Quantity" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.quantity?.message}</p>    
                </div>
                
                <div className="space-y-5">
                    <Label className="text-2xl">Height</Label>
                    <Input {...register('height', { valueAsNumber: true })} type="number" placeholder="Enter Height" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.height?.message}</p>
                </div>

                <div className="space-y-5">
                    <Label className="text-2xl">Width</Label>
                    <Input {...register('width', { valueAsNumber: true })} type="number" placeholder="Enter Width" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.width?.message}</p>
                </div>

                <div className="space-y-5">
                    <Label className="text-2xl">Length</Label>
                    <Input {...register('length', { valueAsNumber: true })} type="number" placeholder="Enter Length" className="w-[500px]"/>
                    <p className="text-red-500">{errors?.length?.message}</p>
                </div>

                <div className="space-y-5">
                <Label className="text-2xl">Available</Label>
                    <Select onValueChange={(value) => setValue("is_available", value === "true")}>
                        <SelectTrigger className="w-[500px]">
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
                    
                    <p className="text-red-500">{errors?.is_available?.message}</p>
                </div>

                <div className="space-y-5">
                    <Label className="text-2xl">Image</Label>
                    <Input id="picture" type="file" onChange={onFileChange} />
                </div>

                <div className="space-y-5">
                    <Label className="text-2xl">Desciption</Label>
                    <Textarea {...register('description')} placeholder="Enter Product Description" className="w-[500px] h-[150px]"/>
                    <p className="text-red-500">{errors?.description?.message}</p>
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <Button>Submit</Button>
            </div>
        </form>
        
        </>

    );
}

export default AddProduct;
