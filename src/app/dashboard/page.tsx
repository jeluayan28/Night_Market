"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Plus, Store, ArrowLeft, Trash2, Edit } from "lucide-react";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#17152B] text-foreground p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
          </Link>
          <Badge variant="outline" className="border-[#6C4CF1] text-[#6C4CF1]">
            Vendor Portal
          </Badge>
        </div>

        {/* Store Open/Closed Realtime Control */}
        <Card className="bg-[#FFF8EC] text-[#17152B] border-none shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">Sizzling Skewers & BBQ</CardTitle>
                <CardDescription className="text-gray-600">
                  Lane A - Stall 12 • Real-Time Store Control
                </CardDescription>
              </div>
              <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-xl border border-amber-200">
                <span className="font-semibold text-sm">
                  {isOpen ? "Store Open" : "Store Closed"}
                </span>
                <Switch checked={isOpen} onCheckedChange={setIsOpen} />
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Menu Management Section */}
        <div className="flex items-center justify-between pt-4">
          <h2 className="text-xl font-bold">Menu Items</h2>
          <Button className="bg-[#FF4FA3] hover:bg-[#FF4FA3]/90 text-white">
            <Plus className="mr-2 h-4 w-4" /> Add New Item
          </Button>
        </div>

        {/* Menu List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#17152B] border-border text-foreground">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Spicy Pork Belly Skewers</h3>
                <p className="text-sm text-muted-foreground">$4.50</p>
                <Badge className="mt-2 bg-[#FF8A3D]/20 text-[#FF8A3D] border-none">
                  In Stock
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="hover:bg-white/10">
                  <Edit className="h-4 w-4 text-[#FFD166]" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-white/10 text-red-400">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}