"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MapPin, Star, Truck, Shield, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const categories = [
    { id: "all", name: "सभी", icon: "🌾" },
    { id: "grains", name: "अनाज", icon: "🌾" },
    { id: "vegetables", name: "सब्जी", icon: "🥬" },
    { id: "fruits", name: "फल", icon: "🍎" },
    { id: "dairy", name: "डेयरी", icon: "🥛" },
    { id: "spices", name: "मसाले", icon: "🌶️" },
  ]

  const products = [
    {
      id: 1,
      name: "जैविक बासमती चावल",
      farmer: "गुरदीप सिंह",
      location: "अमृतसर, पंजाब",
      price: "₹120/किलो",
      originalPrice: "₹150/किलो",
      rating: 4.8,
      reviews: 156,
      image: "/images/basmati-rice.jpg",
      category: "grains",
      organic: true,
      inStock: true,
      quantity: "50 किलो उपलब्ध",
      description: "प्रीमियम गुणवत्ता का जैविक बासमती चावल",
      farmerImage: "/images/punjabi-farmer-rice.jpg",
    },
    {
      id: 2,
      name: "ताज़े टमाटर",
      farmer: "प्रिया शर्मा",
      location: "नासिक, महाराष्ट्र",
      price: "₹40/किलो",
      originalPrice: "₹55/किलो",
      rating: 4.6,
      reviews: 89,
      image: "/images/fresh-tomatoes.jpg",
      category: "vegetables",
      organic: true,
      inStock: true,
      quantity: "100 किलो उपलब्ध",
      description: "खेत से ताज़े तोड़े गए जैविक टमाटर",
      farmerImage: "/images/female-farmer-vegetables.jpg",
    },
    {
      id: 3,
      name: "गेहूं (शरबती किस्म)",
      farmer: "राम सिंह",
      location: "करनाल, हरियाणा",
      price: "₹35/किलो",
      originalPrice: "₹42/किलो",
      rating: 4.9,
      reviews: 234,
      image: "/images/wheat-grains.jpg",
      category: "grains",
      organic: false,
      inStock: true,
      quantity: "200 किलो उपलब्ध",
      description: "उच्च गुणवत्ता का शरबती गेहूं",
      farmerImage: "/images/male-farmer-cotton.jpg",
    },
    {
      id: 4,
      name: "जैविक प्याज",
      farmer: "सुनीता देवी",
      location: "पटना, बिहार",
      price: "₹25/किलो",
      originalPrice: "₹32/किलो",
      rating: 4.5,
      reviews: 67,
      image: "/images/onions-fresh.jpg",
      category: "vegetables",
      organic: true,
      inStock: true,
      quantity: "80 किलो उपलब्ध",
      description: "बिना रसायन के उगाए गए प्याज",
      farmerImage: "/images/female-farmer-rice.jpg",
    },
    {
      id: 5,
      name: "आलू (देसी किस्म)",
      farmer: "विकास यादव",
      location: "आगरा, उत्तर प्रदेश",
      price: "₹20/किलो",
      originalPrice: "₹28/किलो",
      rating: 4.4,
      reviews: 123,
      image: "/images/potatoes-fresh.jpg",
      category: "vegetables",
      organic: false,
      inStock: true,
      quantity: "150 किलो उपलब्ध",
      description: "देसी किस्म के ताज़े आलू",
      farmerImage: "/images/male-farmer-wheat.jpg",
    },
    {
      id: 6,
      name: "मिश्रित सब्जियां",
      farmer: "अनिता पटेल",
      location: "अहमदाबाद, गुजरात",
      price: "₹60/किलो",
      originalPrice: "₹75/किलो",
      rating: 4.7,
      reviews: 91,
      image: "/images/organic-vegetables.jpg",
      category: "vegetables",
      organic: true,
      inStock: true,
      quantity: "30 किलो उपलब्ध",
      description: "मौसमी जैविक सब्जियों का मिश्रण",
      farmerImage: "/images/female-farmer.jpg",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesLocation = selectedLocation === "all" || product.location.includes(selectedLocation)

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  वापस
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">KhetSe मार्केटप्लेस</h1>
                  <p className="text-xs text-orange-600">ताज़ा, सीधा, भरोसेमंद</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-green-600">{filteredProducts.length} उत्पाद उपलब्ध</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="उत्पाद या किसान खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-green-200 focus:border-green-400"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-green-200">
                <SelectValue placeholder="श्रेणी चुनें" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="border-green-200">
                <SelectValue placeholder="स्थान चुनें" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">सभी स्थान</SelectItem>
                <SelectItem value="पंजाब">पंजाब</SelectItem>
                <SelectItem value="हरियाणा">हरियाणा</SelectItem>
                <SelectItem value="महाराष्ट्र">महाराष्ट्र</SelectItem>
                <SelectItem value="बिहार">बिहार</SelectItem>
                <SelectItem value="उत्तर प्रदेश">उत्तर प्रदेश</SelectItem>
                <SelectItem value="गुजरात">गुजरात</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-green-600 hover:bg-green-700">
              <Filter className="h-4 w-4 mr-2" />
              फिल्टर लगाएं
            </Button>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-green-50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-1 text-sm data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 group">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.organic && (
                      <Badge className="bg-green-600 text-xs">
                        <Leaf className="h-3 w-3 mr-1" />
                        जैविक
                      </Badge>
                    )}
                    {product.inStock && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        स्टॉक में
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                      {(
                        ((Number.parseFloat(product.originalPrice.replace("₹", "").replace("/किलो", "")) -
                          Number.parseFloat(product.price.replace("₹", "").replace("/किलो", ""))) /
                          Number.parseFloat(product.originalPrice.replace("₹", "").replace("/किलो", ""))) *
                        100
                      ).toFixed(0)}
                      % छूट
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-gray-800 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">{product.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Farmer Info */}
                  <div className="flex items-center gap-3 mb-4 p-2 bg-green-50 rounded-lg">
                    <img
                      src={product.farmerImage || "/placeholder.svg"}
                      alt={product.farmer}
                      className="w-10 h-10 object-cover rounded-full border-2 border-green-200"
                    />
                    <div>
                      <p className="font-medium text-sm text-gray-800">{product.farmer}</p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {product.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews} समीक्षा)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-green-700">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>

                  {/* Quantity */}
                  <p className="text-sm text-gray-600 mb-4">{product.quantity}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/crop/${product.id}`} className="flex-1">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Truck className="h-4 w-4 mr-2" />
                        अभी खरीदें
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="border-green-200 hover:bg-green-50 bg-transparent">
                      <Shield className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">कोई उत्पाद नहीं मिला</h3>
            <p className="text-gray-600 mb-4">कृपया अपनी खोज या फिल्टर बदलकर दोबारा कोशिश करें</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedLocation("all")
              }}
              variant="outline"
              className="border-green-200 hover:bg-green-50"
            >
              सभी फिल्टर हटाएं
            </Button>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-12 bg-white rounded-lg p-6 border-2 border-green-100">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">KhetSe पर खरीदारी क्यों करें?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">ब्लॉकचेन भरोसा</h4>
              <p className="text-sm text-gray-600">हर उत्पाद की पूरी जानकारी ब्लॉकचेन पर सुरक्षित</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">तुरंत डिलीवरी</h4>
              <p className="text-sm text-gray-600">खेत से सीधे आपके घर तक 24-48 घंटे में</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">जैविक गारंटी</h4>
              <p className="text-sm text-gray-600">प्रमाणित जैविक उत्पाद, रसायन मुक्त</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
