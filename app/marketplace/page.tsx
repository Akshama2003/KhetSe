"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, ShoppingCart, Filter, Truck, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const crops = [
    {
      id: 1,
      name: "Organic Wheat",
      farmer: "राम सिंह",
      location: "Haryana",
      price: 25,
      quantity: "500 kg available",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      organic: true,
      harvestDate: "2024-01-15",
      description: "Premium quality wheat, organically grown",
    },
    {
      id: 2,
      name: "Basmati Rice",
      farmer: "सुरेश कुमार",
      location: "Punjab",
      price: 45,
      quantity: "300 kg available",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      organic: true,
      harvestDate: "2024-01-10",
      description: "Aromatic basmati rice, premium grade",
    },
    {
      id: 3,
      name: "Fresh Tomatoes",
      farmer: "प्रिया शर्मा",
      location: "Maharashtra",
      price: 30,
      quantity: "200 kg available",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      organic: false,
      harvestDate: "2024-01-20",
      description: "Fresh red tomatoes, perfect for cooking",
    },
    {
      id: 4,
      name: "Organic Onions",
      farmer: "विकास पटेल",
      location: "Gujarat",
      price: 20,
      quantity: "400 kg available",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      organic: true,
      harvestDate: "2024-01-12",
      description: "Organic onions, grown without chemicals",
    },
  ]

  const categories = [
    { value: "all", label: "All Crops" },
    { value: "grains", label: "Grains" },
    { value: "vegetables", label: "Vegetables" },
    { value: "fruits", label: "Fruits" },
    { value: "organic", label: "Organic Only" },
  ]

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.farmer.includes(searchTerm) ||
      crop.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "organic" && crop.organic) ||
      (selectedCategory === "grains" && ["wheat", "rice"].some((grain) => crop.name.toLowerCase().includes(grain))) ||
      (selectedCategory === "vegetables" && ["tomato", "onion"].some((veg) => crop.name.toLowerCase().includes(veg)))

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-xl font-bold">KisanSetu</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                Cart (0)
              </Button>
              <Button>Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Fresh from Farm to Your Table</h1>
          <p className="text-gray-600 mb-6">Buy directly from farmers across India</p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search crops, farmers, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold mb-1">Blockchain Verified</h3>
              <p className="text-sm text-gray-600">Every crop is traceable from farm to plate</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Direct from farm with GPS tracking</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <h3 className="font-semibold mb-1">Quality Assured</h3>
              <p className="text-sm text-gray-600">Rated by community, verified by blockchain</p>
            </CardContent>
          </Card>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">{filteredCrops.length} crops available</h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCrops.map((crop, index) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={crop.image || "/placeholder.svg"}
                    alt={crop.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {crop.organic && <Badge className="absolute top-2 left-2 bg-green-600">Organic</Badge>}
                  <Badge className="absolute top-2 right-2 bg-blue-600">Fresh</Badge>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{crop.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{crop.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {crop.location} • by {crop.farmer}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-3">{crop.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold">₹{crop.price}/kg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Available:</span>
                      <span>{crop.quantity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Harvested:</span>
                      <span>{new Date(crop.harvestDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Link href={`/crop/${crop.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredCrops.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Crops
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCrops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No crops found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
