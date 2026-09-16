"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, Plus, Upload, MapPin, Trash2, Utensils, X } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  image: string;
  lane: string;
  stallNumber: string;
}

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Spicy Sizzling Sisig",
      image: "/f1.png",
      lane: "Lane A",
      stallNumber: "Stall 12",
    },
  ]);

  // Form States
  const [foodName, setFoodName] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [lane, setLane] = useState("");
  const [stallNumber, setStallNumber] = useState("");

  // Handle File Picker Selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImageFile(file);
      // Create a temporary local URL for immediate image preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Clear selected file
  const handleRemoveImage = () => {
    setSelectedImageFile(null);
    setImagePreview("");
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!foodName || !lane || !stallNumber) return;

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: foodName,
      // Fallback to /f1.png if no file was picked
      image: imagePreview || "/f1.png",
      lane: lane.startsWith("Lane") ? lane : `Lane ${lane}`,
      stallNumber: stallNumber.startsWith("Stall") ? stallNumber : `Stall ${stallNumber}`,
    };

    setMenuItems([newItem, ...menuItems]);

    // Reset Form State
    setFoodName("");
    setSelectedImageFile(null);
    setImagePreview("");
    setLane("");
    setStallNumber("");
    setIsDialogOpen(false);
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#17152B] text-foreground p-4 sm:p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Navigation Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
          </Link>
          <Badge variant="outline" className="border-[#6C4CF1] text-[#6C4CF1]">
            Vendor Portal
          </Badge>
        </div>

        {/* Store Open/Closed Toggle */}
        <Card className="bg-[#FFF8EC] text-[#17152B] border-none shadow-xl">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold">Vendor Dashboard</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage your store real-time status and menu items
                </CardDescription>
              </div>
              <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-xl border border-amber-200 self-start sm:self-auto">
                <span className="font-semibold text-sm">
                  {isOpen ? "Store Open" : "Store Closed"}
                </span>
                <Switch checked={isOpen} onCheckedChange={setIsOpen} />
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Menu Controls */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <h2 className="text-xl font-bold">Menu Items</h2>
            <p className="text-xs text-muted-foreground">Active dishes listed on the public directory</p>
          </div>

          {/* Add Item Pop-up Modal */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#FF4FA3] hover:bg-[#FF4FA3]/90 text-white font-medium">
                <Plus className="mr-2 h-4 w-4" /> Add Menu Item
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md bg-[#17152B] border-border text-foreground shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#FF4FA3]">
                  <Utensils className="h-5 w-5" /> Add New Menu Item
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Choose a picture from your device to display with your dish.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleAddItem} className="space-y-4 py-2">
                {/* Food Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Name of Food</label>
                  <Input
                    required
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="e.g. Velvet Oreo Milk Tea"
                    className="bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                  />
                </div>

                {/* File Upload Control */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Food Picture</label>

                  {imagePreview ? (
                    /* Selected Image Preview Box */
                    <div className="relative w-full h-36 rounded-lg overflow-hidden border border-[#6C4CF1] bg-[#17152B]/80 flex items-center justify-center">
                      <Image src={imagePreview} alt="Food Preview" fill className="object-contain p-2" />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    /* File Upload Drop Zone */
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-border rounded-lg cursor-pointer bg-[#17152B]/50 hover:bg-white/5 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                        <Upload className="w-6 h-6 text-[#FF4FA3] mb-1" />
                        <p className="text-xs text-gray-300 font-medium">Click to choose a photo</p>
                        <p className="text-[10px] text-muted-foreground">PNG, JPG, or WEBP</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Lane & Stall Number */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300">What Lane</label>
                    <Input
                      required
                      value={lane}
                      onChange={(e) => setLane(e.target.value)}
                      placeholder="e.g. Lane A"
                      className="bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300">Stall Number</label>
                    <Input
                      required
                      value={stallNumber}
                      onChange={(e) => setStallNumber(e.target.value)}
                      placeholder="e.g. Stall 12"
                      className="bg-[#17152B] border-border focus-visible:ring-[#6C4CF1]"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsDialogOpen(false)}
                    className="w-1/2 border border-border hover:bg-white/5"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="w-1/2 bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white font-medium"
                  >
                    Save Item
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Display Items List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {menuItems.map((item) => (
            <Card key={item.id} className="bg-[#FFF8EC] text-[#17152B] border-none shadow-md overflow-hidden flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-amber-100 border border-amber-200 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                    <MapPin className="h-3 w-3 text-[#FF8A3D]" />
                    <span>{item.lane} • {item.stallNumber}</span>
                  </div>
                </div>
              </div>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-100"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}