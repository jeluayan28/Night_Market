import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { NightMarketLights } from "@/components/night-market-lights";
import { AnimatedStreetScene } from "@/components/animated-street-scene";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Flame, Star, Clock } from "lucide-react";

// Mock Data - All stalls set to isOpen: false
const MOCK_STALLS = [
  {
    id: "1",
    name: "Sizzling Skewers & BBQ",
    category: "Street Food",
    isOpen: false,
    location: "Lane A - Stall 12",
    popularItem: "Spicy Sizzling Sisig",
    rating: "4.8",
    prepTime: "10-15 min",
    image: "/f1.png",
  },
  {
    id: "2",
    name: "Grab A-TEA",
    category: "Milk Tea",
    isOpen: false,
    location: "Lane B - Stall 04",
    popularItem: "Velvet Oreo MilkTea",
    rating: "4.9",
    prepTime: "5-10 min",
    image: "/f2.png",
  },
  {
    id: "3",
    name: "Night Owl Boba & Tea",
    category: "Beverages",
    isOpen: false,
    location: "Lane A - Stall 02",
    popularItem: "Brown Sugar Milk Tea",
    rating: "4.7",
    prepTime: "5 min",
    image: "/f3.png",
  },
  {
    id: "4",
    name: "Tokyo Ramen & Noodle",
    category: "Japanese",
    isOpen: false,
    location: "Lane C - Stall 08",
    popularItem: "Tonkotsu Special Ramen",
    rating: "4.9",
    prepTime: "15-20 min",
    image: "/f4.png",
  },
  {
    id: "5",
    name: "Lugaw ni Jeseca",
    category: "Filipino Lugaw",
    isOpen: false,
    location: "Lane B - Stall 10",
    popularItem: "Overload Lugaw",
    rating: "4.8",
    prepTime: "10 min",
    image: "/f5.png",
  },
  {
    id: "6",
    name: "Sweet Crave Crepes",
    category: "Desserts",
    isOpen: false,
    location: "Lane D - Stall 01",
    popularItem: "Nutella Banana Crepe",
    rating: "4.6",
    prepTime: "5-8 min",
    image: "/f6.png",
  },
  {
    id: "7",
    name: "MatCUP",
    category: "Matcha Series",
    isOpen: false,
    location: "Lane C - Stall 15",
    popularItem: "Matcha Cloud(Premium Matcha)",
    rating: "4.9",
    prepTime: "15 min",
    image: "/f7.png",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#17152B] text-foreground">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Night Market Lights Banner */}
      <NightMarketLights />

      {/* 3. Animated Street Market & Walking Family Scene */}
      <AnimatedStreetScene />

      {/* 4. Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <section className="mb-10 text-center">
          <Badge className="mb-3 bg-[#FF4FA3]/20 text-[#FF4FA3] hover:bg-[#FF4FA3]/30 border-none px-3 py-1 text-sm">
            <Flame className="mr-1 h-3.5 w-3.5 fill-[#FF4FA3]" /> Live Stall
            Directory
          </Badge>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 flex items-center justify-center gap-1">
            <span>BUE-</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] via-[#FF4FA3] to-[#FFD166]">
              NIGHT
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Browse active vendors, explore tonight's special menus, and find
            your favorite street eats.
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
            <span className="text-sm text-muted-foreground">
              Showing active market stalls
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_STALLS.map((stall) => (
              <Card
                key={stall.id}
                className="bg-[#FFF8EC] text-[#17152B] border-none shadow-xl hover:scale-[1.01] transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Frame Container */}
                  <div className="relative w-full h-48 bg-[#17152B]/90 p-2 overflow-hidden flex items-center justify-center">
                    <Image
                      src={stall.image}
                      alt={stall.name}
                      fill
                      className={`object-contain p-2 transition-transform duration-300 hover:scale-105 ${
                        !stall.isOpen ? "grayscale opacity-75" : ""
                      }`}
                    />

                    {/* Overlay Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      {/* Category Badge */}
                      <span className="bg-[#17152B]/90 backdrop-blur-md text-[#FFF8EC] text-xs font-semibold px-2.5 py-1 rounded-md border border-white/10">
                        {stall.category}
                      </span>

                      {/* Status Badge */}
                      {stall.isOpen ? (
                        <Badge className="bg-emerald-500 text-white border-none shadow-md">
                          OPEN NOW
                        </Badge>
                      ) : (
                        <Badge
                          variant="secondary"
                          className="bg-gray-900/90 text-gray-200 border-none"
                        >
                          CLOSED
                        </Badge>
                      )}
                    </div>

                    {/* Bottom Gradient Overlay for Rating & Prep Time */}
                    <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#17152B] to-transparent flex items-end justify-between px-3 pb-2 text-white text-xs font-semibold z-10">
                      <div className="flex items-center gap-1 bg-[#FFD166] text-[#17152B] px-1.5 py-0.5 rounded font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{stall.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/90">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{stall.prepTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <CardHeader className="pb-1 pt-3 px-4">
                    <CardTitle className="text-xl font-bold text-[#17152B] leading-tight">
                      {stall.name}
                    </CardTitle>
                    <div className="flex items-center text-xs text-gray-600 gap-1 mt-1">
                      <MapPin className="h-3.5 w-3.5 text-[#FF8A3D] shrink-0" />
                      <span>{stall.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 pb-3 pt-1 space-y-2">
                    <div className="rounded-lg bg-amber-100/60 p-2.5 border border-amber-200/60">
                      <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
                        Must Try
                      </p>
                      <p className="text-sm font-bold text-[#17152B] line-clamp-1">
                        {stall.popularItem}
                      </p>
                    </div>
                  </CardContent>
                </div>

                {/* Card Action Button */}
                <div className="px-4 pb-4">
                  <Button className="w-full bg-[#17152B] hover:bg-[#17152B]/90 text-white font-medium">
                    View Menu
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
