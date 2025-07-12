"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Star, Shield, Truck, Heart, Leaf } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const crops = [
    {
      id: 1,
      name: "जैविक धान",
      farmer: "सुनीता देवी",
      location: "पटना, बिहार",
      price: "₹28/kg",
      quantity: "200 kg",
      rating: 4.9,
      image: "/images/basmati-rice.jpg",
      farmerImage: "/images/female-farmer-rice.jpg",
      verified: true,
      organic: true,
      distance: "12 km",
      harvestDate: "2 दिन पहले",
      description: "प्राकृतिक खाद से उगाया गया बेहतरीन धान",
    },
    {
      id: 2,
      name: "कपास",
      farmer: "राम सिंह",
      location: "करनाल, हरियाणा",
      price: "₹45/kg",
      quantity: "300 kg",
      rating: 4.8,
      image: "/images/organic-vegetables.jpg",
      farmerImage: "/images/male-farmer-cotton.jpg",
      verified: true,
      organic: false,
      distance: "8 km",
      harvestDate: "1 दिन पहले",
      description: "उच्च गुणवत्ता की कपास, सीधे खेत से",
    },
    {
      id: 3,
      name: "हरी सब्जियां",
      farmer: "प्रिया शर्मा",
      location: "नासिक, महाराष्ट्र",
      price: "₹35/kg",
      quantity: "150 kg",
      rating: 4.7,
      image: "/images/fresh-tomatoes.jpg",
      farmerImage: "/images/female-farmer-vegetables.jpg",
      verified: true,
      organic: true,
      distance: "20 km",
      harvestDate: "आज",
      description: "ताज़ी और पौष्टिक हरी सब्जियां",
    },
    {
      id: 4,
      name: "बासमती चावल",
      farmer: "गुरदीप सिंह",
      location: "अमृतसर, पंजाब",
      price: "₹55/kg",
      quantity: "400 kg",
      rating: 4.9,
      image: "/images/basmati-rice.jpg",
      farmerImage: "/images/punjabi-farmer-rice.jpg",
      verified: true,
      organic: true,
      distance: "15 km",
      harvestDate: "आज",
      description: "प्रीमियम बासमती चावल, खुशबूदार और स्वादिष्ट",
    },
    {
      id: 5,
      name: "जैविक टमाटर",
      farmer: "अनिल कुमार",
      location: "नाशिक, महाराष्ट्र",
      price: "₹32/kg",
      quantity: "250 kg",
      rating: 4.6,
      image: "/images/fresh-tomatoes.jpg",
      farmerImage: "/images/organic-vegetables.jpg",
      verified: true,
      organic: true,
      distance: "18 km",
      harvestDate: "3 दिन पहले",
      description: "रसीले और ताज़े जैविक टमाटर",
    },
    {
      id: 6,
      name: "गेहूं",
      farmer: "सुरेश यादव",
      location: "आगरा, उत्तर प्रदेश",
      price: "₹25/kg",
      quantity: "600 kg",
      rating: 4.5,
      image: "/images/wheat-grains.jpg",
      farmerImage: "/images/male-farmer-wheat.jpg",
      verified: true,
      organic: false,
      distance: "25 km",
      harvestDate: "1 सप्ताह पहले",
      description: "उच्च गुणवत्ता का गेहूं, बेकिंग के लिए बेहतरीन",
    },
  ]

  const categories = [
    { value: "all", label: "सभी फसलें" },
    { value: "grains", label: "अनाज" },
    { value: "vegetables", label: "सब्जियां" },
    { value: "fruits", label: "फल" },
    { value: "organic", label: "जैविक" },
    { value: "cotton", label: "कपास" },
  ]

  const locations = [
    { value: "all", label: "सभी स्थान" },
    { value: "bihar", label: "बिहार" },
    { value: "haryana", label: "हरियाणा" },
    { value: "punjab", label: "पंजाब" },
    { value: "maharashtra", label: "महाराष्ट्र" },
    { value: "up", label: "उत्तर प्रदेश" },
  ]

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.farmer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "organic" && crop.organic) ||
      (selectedCategory === "grains" && ["गेहूं", "जैविक धान", "बासमती चावल"].includes(crop.name)) ||
      (selectedCategory === "vegetables" && ["हरी सब्जियां", "जैविक टमाटर"].includes(crop.name)) ||
      (selectedCategory === "cotton" && crop.name === "कपास")
    const matchesLocation =
      selectedLocation === "all" ||
      crop.location.includes(locations.find((l) => l.value === selectedLocation)?.label || "")

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">KisanSetu</span>
                <p className="text-xs text-orange-600">ताज़ा उत्पाद बाज़ार</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-green-200 bg-transparent">
                <Heart className="h-4 w-4 mr-2" />
                पसंदीदा
              </Button>
              <Button variant="outline" className="border-orange-200 bg-transparent">
                <Truck className="h-4 w-4 mr-2" />
                कार्ट (0)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">🛒 ताज़ा उत्पाद बाज़ार</h1>
          <p className="text-gray-600">सीधे किसानों से खरीदें, ताज़गी की गारंटी</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-green-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="फसल या किसान का नाम खोजें..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-green-200"
                />
              </div>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-green-200">
                <SelectValue placeholder="श्रेणी चुनें" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="border-green-200">
                <SelectValue placeholder="स्थान चुनें" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">फिल्टर:</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Shield className="h-3 w-3 mr-1" />
                ब्लॉकचेन वेरिफाइड
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Leaf className="h-3 w-3 mr-1" />
                जैविक
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Truck className="h-3 w-3 mr-1" />
                तुरंत डिलीवरी
              </Badge>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-green-700">{filteredCrops.length}</span> फसलें मिलीं
          </p>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map((crop, index) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 group">
                <div className="relative">
                  <img
                    src={crop.image || "/placeholder.svg"}
                    alt={crop.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {crop.verified && (
                      <Badge className="bg-green-600 text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        वेरिफाइड
                      </Badge>
                    )}
                    {crop.organic && (
                      <Badge className="bg-orange-500 text-xs">
                        <Leaf className="h-3 w-3 mr-1" />
                        जैविक
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-800">{crop.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{crop.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm">{crop.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={crop.farmerImage || "/placeholder.svg"}
                      alt={crop.farmer}
                      className="w-8 h-8 rounded-full object-cover border border-green-200"
                    />
                    <div>
                      <p className="font-medium text-sm text-gray-800">{crop.farmer}</p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {crop.location} • {crop.distance}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">कीमत</p>
                      <p className="font-bold text-green-700 text-lg">{crop.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">उपलब्ध</p>
                      <p className="font-medium">{crop.quantity}</p>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    <p>हार्वेस्ट: {crop.harvestDate}</p>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/crop/${crop.id}`} className="flex-1">
                      <Button className="w-full bg-green-600 hover:bg-green-700">विवरण देखें</Button>
                    </Link>
                    <Button variant="outline" className="border-orange-200 hover:bg-orange-50 bg-transparent">
                      <Truck className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCrops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">कोई फसल नहीं मिली</h3>
            <p className="text-gray-500">कृपया अपनी खोज या फिल्टर बदलकर दोबारा कोशिश करें</p>
          </div>
        )}
      </div>
    </div>
  )
}
