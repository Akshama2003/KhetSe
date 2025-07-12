"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Star,
  MapPin,
  Truck,
  Shield,
  Heart,
  Share2,
  MessageCircle,
  Calendar,
  Leaf,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function CropDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState("1")
  const [selectedDelivery, setSelectedDelivery] = useState("standard")

  // Mock data - in real app, this would be fetched based on params.id
  const crop = {
    id: 1,
    name: "जैविक बासमती चावल",
    farmer: "गुरदीप सिंह",
    location: "अमृतसर, पंजाब",
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviews: 156,
    image: "/images/basmati-rice.jpg",
    farmerImage: "/images/punjabi-farmer-rice.jpg",
    category: "अनाज",
    organic: true,
    inStock: true,
    availableQuantity: 50,
    description:
      "प्रीमियम गुणवत्ता का जैविक बासमती चावल। यह चावल पारंपरिक तरीकों से उगाया गया है और किसी भी रसायन का उपयोग नहीं किया गया है। लंबे दाने और खुशबूदार स्वाद के लिए प्रसिद्ध।",
    features: [
      "100% जैविक और रसायन मुक्त",
      "पारंपरिक बासमती किस्म",
      "लंबे दाने और खुशबूदार",
      "प्राकृतिक तरीकों से सुखाया गया",
      "FSSAI प्रमाणित",
    ],
    nutritionalInfo: {
      protein: "7.1g",
      carbs: "78g",
      fiber: "0.4g",
      calories: "345 kcal",
    },
    harvestDate: "15 अक्टूबर 2024",
    packagingDate: "20 अक्टूबर 2024",
    expiryDate: "20 अक्टूबर 2025",
  }

  const deliveryOptions = [
    {
      id: "standard",
      name: "मानक डिलीवरी",
      time: "2-3 दिन",
      price: 0,
      description: "नियमित डिलीवरी सेवा",
    },
    {
      id: "express",
      name: "एक्सप्रेस डिलीवरी",
      time: "24 घंटे",
      price: 50,
      description: "तुरंत डिलीवरी",
    },
    {
      id: "pickup",
      name: "स्वयं उठाएं",
      time: "तुरंत",
      price: 0,
      description: "किसान से सीधे मिलें",
    },
  ]

  const reviews = [
    {
      id: 1,
      user: "राज कुमार",
      rating: 5,
      comment: "बहुत बढ़िया चावल है। स्वाद और खुशबू दोनों शानदार है।",
      date: "2 दिन पहले",
      verified: true,
    },
    {
      id: 2,
      user: "सुनीता शर्मा",
      rating: 4,
      comment: "गुणवत्ता अच्छी है लेकिन पैकेजिंग और बेहतर हो सकती है।",
      date: "1 सप्ताह पहले",
      verified: true,
    },
    {
      id: 3,
      user: "अमित पटेल",
      rating: 5,
      comment: "जैविक होने का फायदा दिखता है। परिवार को बहुत पसंद आया।",
      date: "2 सप्ताह पहले",
      verified: false,
    },
  ]

  const totalPrice = crop.price * Number.parseInt(quantity || "1")
  const deliveryPrice = deliveryOptions.find((d) => d.id === selectedDelivery)?.price || 0
  const finalPrice = totalPrice + deliveryPrice

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/marketplace">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  मार्केटप्लेस
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-800">उत्पाद विवरण</h1>
                <p className="text-xs text-orange-600">KhetSe से ताज़ा और भरोसेमंद</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                शेयर करें
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={crop.image || "/placeholder.svg"}
                alt={crop.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {crop.organic && (
                  <Badge className="bg-green-600">
                    <Leaf className="h-3 w-3 mr-1" />
                    जैविक
                  </Badge>
                )}
                <Badge className="bg-blue-600">स्टॉक में</Badge>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                {Math.round(((crop.originalPrice - crop.price) / crop.originalPrice) * 100)}% छूट
              </div>
            </div>

            {/* Farmer Info Card */}
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={crop.farmerImage || "/placeholder.svg"}
                    alt={crop.farmer}
                    className="w-16 h-16 object-cover rounded-full border-2 border-green-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{crop.farmer}</h3>
                    <p className="text-gray-600 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {crop.location}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{crop.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({crop.reviews} समीक्षा)</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    संपर्क करें
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{crop.name}</h1>
              <p className="text-gray-600 mb-4">{crop.description}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-green-700">₹{crop.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{crop.originalPrice}</span>
                  <span className="text-sm text-gray-600">प्रति किलो</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  कटाई: {crop.harvestDate}
                </span>
                <span>{crop.availableQuantity} किलो उपलब्ध</span>
              </div>
            </div>

            {/* Purchase Section */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">अभी खरीदें</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">मात्रा (किलो)</label>
                  <Input
                    type="number"
                    min="1"
                    max={crop.availableQuantity}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="border-orange-200"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">डिलीवरी विकल्प</label>
                  <div className="space-y-2">
                    {deliveryOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedDelivery === option.id
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                        onClick={() => setSelectedDelivery(option.id)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{option.name}</p>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{option.time}</p>
                            <p className="text-sm text-gray-600">{option.price === 0 ? "मुफ्त" : `₹${option.price}`}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>उत्पाद मूल्य ({quantity} किलो)</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>डिलीवरी शुल्क</span>
                    <span>{deliveryPrice === 0 ? "मुफ्त" : `₹${deliveryPrice}`}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>कुल राशि</span>
                    <span className="text-green-700">₹{finalPrice}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <Truck className="h-4 w-4 mr-2" />
                    अभी खरीदें
                  </Button>
                  <Button variant="outline" className="flex-1 border-orange-200 bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    पसंदीदा में जोड़ें
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
                <p className="text-xs font-medium">ब्लॉकचेन सुरक्षा</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <Truck className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-medium">तुरंत डिलीवरी</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                <p className="text-xs font-medium">गुणवत्ता गारंटी</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-green-50">
              <TabsTrigger value="details" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                विवरण
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                पोषण तत्व
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                समीक्षा
              </TabsTrigger>
              <TabsTrigger
                value="blockchain"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                ब्लॉकचेन ट्रैकिंग
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>उत्पाद विशेषताएं</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">मुख्य विशेषताएं</h4>
                      <ul className="space-y-2">
                        {crop.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">महत्वपूर्ण तारीखें</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>कटाई की तारीख:</span>
                          <span>{crop.harvestDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>पैकेजिंग तारीख:</span>
                          <span>{crop.packagingDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>समाप्ति तारीख:</span>
                          <span>{crop.expiryDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>पोषण संबंधी जानकारी (प्रति 100 ग्राम)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">{crop.nutritionalInfo.calories}</div>
                      <div className="text-sm text-gray-600">कैलोरी</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">{crop.nutritionalInfo.protein}</div>
                      <div className="text-sm text-gray-600">प्रोटीन</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700">{crop.nutritionalInfo.carbs}</div>
                      <div className="text-sm text-gray-600">कार्बोहाइड्रेट</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700">{crop.nutritionalInfo.fiber}</div>
                      <div className="text-sm text-gray-600">फाइबर</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    ग्राहक समीक्षा ({crop.reviews})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                सत्यापित खरीदार
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
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blockchain" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    ब्लॉकचेन ट्रैकिंग
                  </CardTitle>
                  <CardDescription>इस उत्पाद की पूरी यात्रा ब्लॉकचेन पर सुरक्षित रूप से दर्ज है</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">बीज बुआई</p>
                        <p className="text-sm text-gray-600">15 जून 2024 • GPS: 31.6340°N, 74.8723°E</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">जैविक खाद डाली गई</p>
                        <p className="text-sm text-gray-600">1 अगस्त 2024 • प्रमाणित जैविक खाद</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">फसल कटाई</p>
                        <p className="text-sm text-gray-600">15 अक्टूबर 2024 • गुणवत्ता जांच पास</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">पैकेजिंग और लेबलिंग</p>
                        <p className="text-sm text-gray-600">20 अक्टूबर 2024 • FSSAI प्रमाणित सुविधा</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">ब्लॉकचेन हैश:</p>
                    <code className="text-xs bg-white p-2 rounded border block">
                      0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3
                    </code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
