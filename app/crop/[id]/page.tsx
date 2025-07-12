"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star, ShoppingCart, Shield, User, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CropDetails({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock data - in real app, fetch based on params.id
  const crop = {
    id: 1,
    name: "Organic Wheat",
    farmer: "राम सिंह (Ram Singh)",
    location: "Village Kheri, Haryana",
    price: 25,
    totalQuantity: "500 kg",
    rating: 4.8,
    reviews: 24,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    organic: true,
    harvestDate: "2024-01-15",
    description:
      "Premium quality wheat grown organically without any chemical fertilizers or pesticides. This wheat is perfect for making chapati, bread, and other wheat-based products.",
    specifications: {
      variety: "HD-2967",
      moisture: "12%",
      protein: "11.5%",
      gluten: "28%",
    },
    certifications: ["Organic Certified", "Quality Tested", "Blockchain Verified"],
    farmerInfo: {
      experience: "15 years",
      totalSales: "2,500+ kg",
      rating: 4.8,
      phone: "+91-9876543210",
      languages: ["Hindi", "Punjabi", "English"],
    },
  }

  const traceabilityData = [
    { stage: "Seed Planting", date: "2023-11-01", location: "Field A-12, Kheri Village", verified: true },
    { stage: "Growth Monitoring", date: "2023-12-15", location: "Field A-12, Kheri Village", verified: true },
    { stage: "Harvest", date: "2024-01-15", location: "Field A-12, Kheri Village", verified: true },
    { stage: "Quality Testing", date: "2024-01-16", location: "Local Testing Center", verified: true },
    { stage: "Listed for Sale", date: "2024-01-17", location: "KisanSetu Platform", verified: true },
  ]

  const reviews = [
    {
      id: 1,
      user: "Priya Sharma",
      rating: 5,
      comment: "Excellent quality wheat! Very fresh and organic as promised.",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 2,
      user: "Rajesh Kumar",
      rating: 4,
      comment: "Good quality, fast delivery. Will order again.",
      date: "2024-01-08",
      verified: true,
    },
  ]

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
              <Link href="/marketplace">
                <Button variant="outline">← Back to Marketplace</Button>
              </Link>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={crop.images[selectedImage] || "/placeholder.svg"}
                alt={crop.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {crop.organic && <Badge className="absolute top-4 left-4 bg-green-600">Organic Certified</Badge>}
              <Badge className="absolute top-4 right-4 bg-blue-600">Fresh Harvest</Badge>
            </div>

            <div className="flex gap-2">
              {crop.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-green-600" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${crop.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{crop.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{crop.rating}</span>
                  <span className="text-gray-600">({crop.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {crop.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {crop.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">₹{crop.price}/kg</div>
              <p className="text-gray-600 mb-4">Available: {crop.totalQuantity}</p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="quantity">Quantity (kg)</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      -
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                    />
                    <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                      +
                    </Button>
                  </div>
                </div>

                <div className="text-lg font-semibold">Total: ₹{(crop.price * quantity).toLocaleString()}</div>

                <div className="flex gap-3">
                  <Button className="flex-1" size="lg">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Farmer Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Farmer Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{crop.farmer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span>{crop.farmerInfo.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Sales:</span>
                    <span>{crop.farmerInfo.totalSales}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{crop.farmerInfo.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                      <Phone className="h-4 w-4" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                      <MessageCircle className="h-4 w-4" />
                      Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="description" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="traceability">Traceability</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{crop.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Harvest Date:</span>
                    <p className="font-medium">{new Date(crop.harvestDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Origin:</span>
                    <p className="font-medium">{crop.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Farming Method:</span>
                    <p className="font-medium">Organic</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Storage:</span>
                    <p className="font-medium">Cool, Dry Place</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(crop.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium capitalize">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traceability">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Blockchain Traceability
                </CardTitle>
                <CardDescription>Complete journey of this crop from seed to sale</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {traceabilityData.map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <div className={`w-3 h-3 rounded-full ${stage.verified ? "bg-green-500" : "bg-gray-300"}`} />
                      <div className="flex-1">
                        <h4 className="font-medium">{stage.stage}</h4>
                        <p className="text-sm text-gray-600">{stage.location}</p>
                        <p className="text-sm text-gray-500">{new Date(stage.date).toLocaleDateString()}</p>
                      </div>
                      {stage.verified && (
                        <Badge variant="default" className="bg-green-600">
                          Verified
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>{crop.reviews} verified reviews from buyers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full bg-transparent">
                    Load More Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
