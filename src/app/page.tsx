import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock, Flame } from "lucide-react";

// Mock Data for UI Preview
const MOCK_STALLS = [
  {
    id: "1",
    name: "Sizzling Skewers & BBQ",
    category: "Street Food",
    isOpen: true,
    location: "Lane A - Stall 12",
    popularItem: "Spicy Pork Belly Skewers",
  },
  {
    id: "2",
    name: "Golden Dumpling House",
    category: "Asian Specialties",
    isOpen: true,
    location: "Lane B - Stall 04",
    popularItem: "Pan-Fried Steamed Buns",
  },
  {
    id: "3",
    name: "Night Owl Boba & Tea",
    category: "Beverages",
    isOpen: false,
    location: "Lane A - Stall 02",
    popularItem: "Brown Sugar Milk Tea",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#17152B] text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <section className="mb-10 text-center">
          <Badge className="mb-3 bg-[#FF4FA3]/20 text-[#FF4FA3] hover:bg-[#FF4FA3]/30 border-none px-3 py-1 text-sm">
            <Flame className="mr-1 h-3.5 w-3.5 fill-[#FF4FA3]" /> Live Stall Directory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Discover Open Food Stalls <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] via-[#FF4FA3] to-[#FFD166]">
              In Real-Time
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Browse active vendors, explore tonight's special menus, and find your favorite street eats.
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search food, drinks, or stall name..."
              className="pl-10 bg-[#17152B] border-border text-foreground focus-visible:ring-[#6C4CF1]"
            />
          </div>
        </section>

        {/* Stalls Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Featured Vendors</h2>
            <span className="text-sm text-muted-foreground">Showing active market stalls</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_STALLS.map((stall) => (
              <Card key={stall.id} className="bg-[#FFF8EC] text-[#17152B] border-none shadow-xl hover:scale-[1.01] transition-transform">
                <CardHeader className="pb-2 flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-[#17152B]">{stall.name}</CardTitle>
                    <span className="text-xs font-semibold text-[#6C4CF1]">{stall.category}</span>
                  </div>
                  {stall.isOpen ? (
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                      OPEN NOW
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-gray-300 text-gray-700">
                      CLOSED
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <div className="flex items-center text-sm text-gray-600 gap-1.5">
                    <MapPin className="h-4 w-4 text-[#FF8A3D]" />
                    <span>{stall.location}</span>
                  </div>
                  <div className="rounded-lg bg-white/70 p-2.5 border border-amber-100">
                    <p className="text-xs text-gray-500 font-medium">Popular Dish</p>
                    <p className="text-sm font-bold text-[#17152B]">{stall.popularItem}</p>
                  </div>
                  <Button className="w-full bg-[#6C4CF1] hover:bg-[#6C4CF1]/90 text-white font-medium mt-2">
                    View Full Menu
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}