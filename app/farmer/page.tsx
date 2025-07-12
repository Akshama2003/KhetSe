"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Mic,
  Upload,
  Camera,
  MapPin,
  TrendingUp,
  Wallet,
  Users,
  Leaf,
  ArrowLeft,
  Plus,
  Edit,
  Eye,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FarmerPage() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [selectedCrop, setSelectedCrop] = useState("")
  const [cropQuantity, setCropQuantity] = useState("")
  const [cropPrice, setCropPrice] = useState("")

  const farmerStats = {
    totalEarnings: "₹2,45,000",
    monthlyEarnings: "₹45,000",
    totalSales: 156,
    rating: 4.8,
    tokensEarned: "1,250 KHET",
    activeCrops: 5,
  }

  const recentSales = [
    {
      id: 1,
      crop: "बासमती चावल",
      quantity: "50 किलो",
      price: "₹6,000",
      buyer: "राज कुमार",
      date: "2 दिन पहले",
      status: "पूर्ण",
    },
    {
      id: 2,
      crop: "जैविक टमाटर",
      quantity: "25 किलो",
      price: "₹1,000",
      buyer: "सुनीता शर्मा",
      date: "5 दिन पहले",
      status: "डिलीवरी में",
    },
    {
      id: 3,
      crop: "गेहूं",
      quantity: "100 किलो",
      price: "₹3,500",
      buyer: "अमित पटेल",
      date: "1 सप्ताह पहले",
      status: "पूर्ण",
    },
  ]

  const activeCrops = [
    {
      id: 1,
      name: "धान",
      quantity: "200 किलो",
      price: "₹40/किलो",
      planted: "15 जून 2024",
      expectedHarvest: "15 अक्टूबर 2024",
      progress: 75,
      image: "/images/female-farmer-rice.jpg",
    },
    {
      id: 2,
      name: "कपास",
      quantity: "150 किलो",
      price: "₹85/किलो",
      planted: "1 जुलाई 2024",
      expectedHarvest: "1 नवंबर 2024",
      progress: 60,
      image: "/images/male-farmer-cotton.jpg",
    },
  ]

  const cropOptions = [
    { value: "rice", label: "धान/चावल", icon: "🌾" },
    { value: "wheat", label: "गेहूं", icon: "🌾" },
    { value: "cotton", label: "कपास", icon: "🌱" },
    { value: "tomato", label: "टमाटर", icon: "🍅" },
    { value: "onion", label: "प्याज", icon: "🧅" },
    { value: "potato", label: "आलू", icon: "🥔" },
    { value: "sugarcane", label: "गन्ना", icon: "🎋" },
    { value: "corn", label: "मक्का", icon: "🌽" },
  ]

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
                  <h1 className="text-xl font-bold text-gray-800">KhetSe किसान डैशबोर्ड</h1>
                  <p className="text-xs text-orange-600">आपकी खेती, आपका व्यापार</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className={`border-2 ${isVoiceActive ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}`}
                onClick={() => setIsVoiceActive(!isVoiceActive)}
              >
                <Mic className="h-4 w-4 mr-1" />
                {isVoiceActive ? "बंद करें" : "आवाज़ से बोलें"}
              </Button>
              <Badge className="bg-green-600">
                <Wallet className="h-3 w-3 mr-1" />
                {farmerStats.tokensEarned}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Voice Demo Section */}
      {isVoiceActive && (
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-6 bg-green-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75" />
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150" />
              </div>
              <p className="text-lg font-medium mb-2">🎤 सुन रहा हूँ...</p>
              <p className="text-green-100 text-sm">कहें: "मैं 50 किलो धान बेचना चाहता हूँ" या "आज का भाव क्या है?"</p>
            </div>
          </div>
        </motion.section>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="border-green-200">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-700">{farmerStats.totalEarnings}</p>
              <p className="text-xs text-gray-600">कुल कमाई</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-700">{farmerStats.monthlyEarnings}</p>
              <p className="text-xs text-gray-600">इस महीने</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-700">{farmerStats.totalSales}</p>
              <p className="text-xs text-gray-600">कुल बिक्री</p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <p className="text-2xl font-bold text-yellow-700">{farmerStats.rating}</p>
              <p className="text-xs text-gray-600">रेटिंग</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardContent className="p-4 text-center">
              <Wallet className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-purple-700">{farmerStats.tokensEarned}</p>
              <p className="text-xs text-gray-600">KHET टोकन</p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-4 text-center">
              <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-700">{farmerStats.activeCrops}</p>
              <p className="text-xs text-gray-600">सक्रिय फसलें</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-green-50">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              डैशबोर्ड
            </TabsTrigger>
            <TabsTrigger value="sell" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              फसल बेचें
            </TabsTrigger>
            <TabsTrigger value="crops" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              मेरी फसलें
            </TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              बिक्री इतिहास
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Active Crops */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Leaf className="h-5 w-5" />
                    सक्रिय फसलें
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeCrops.map((crop) => (
                    <div key={crop.id} className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={crop.image || "/placeholder.svg"}
                          alt={crop.name}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">{crop.name}</h4>
                          <p className="text-sm text-gray-600">
                            {crop.quantity} • {crop.price}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>प्रगति</span>
                          <span>{crop.progress}%</span>
                        </div>
                        <Progress value={crop.progress} className="h-2" />
                        <p className="text-xs text-gray-600">कटाई: {crop.expectedHarvest}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <TrendingUp className="h-5 w-5" />
                    हाल की बिक्री
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSales.slice(0, 3).map((sale) => (
                    <div key={sale.id} className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{sale.crop}</h4>
                          <p className="text-sm text-gray-600">{sale.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-700">{sale.price}</p>
                          <Badge variant={sale.status === "पूर्ण" ? "default" : "secondary"} className="text-xs">
                            {sale.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        {sale.buyer} • {sale.date}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sell Crop Tab */}
          <TabsContent value="sell" className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Plus className="h-5 w-5" />
                  नई फसल बेचें
                </CardTitle>
                <CardDescription>अपनी फसल की जानकारी दें और तुरंत बेचना शुरू करें</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="crop-type">फसल का प्रकार</Label>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger className="border-green-200">
                        <SelectValue placeholder="फसल चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        {cropOptions.map((crop) => (
                          <SelectItem key={crop.value} value={crop.value}>
                            <span className="flex items-center gap-2">
                              <span>{crop.icon}</span>
                              <span>{crop.label}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">मात्रा (किलो में)</Label>
                    <Input
                      id="quantity"
                      placeholder="जैसे: 100"
                      value={cropQuantity}
                      onChange={(e) => setCropQuantity(e.target.value)}
                      className="border-green-200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">मूल्य (प्रति किलो)</Label>
                    <Input
                      id="price"
                      placeholder="जैसे: ₹50"
                      value={cropPrice}
                      onChange={(e) => setCropPrice(e.target.value)}
                      className="border-green-200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">स्थान</Label>
                    <Input id="location" placeholder="गांव, जिला, राज्य" className="border-green-200" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">फसल का विवरण</Label>
                  <Textarea
                    id="description"
                    placeholder="अपनी फसल के बारे में बताएं - गुणवत्ता, जैविक है या नहीं, कब तैयार होगी..."
                    className="border-green-200"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>फसल की तस्वीर अपलोड करें</Label>
                    <div className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center">
                      <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">तस्वीर खींचें या अपलोड करें</p>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        फाइल चुनें
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>गुणवत्ता प्रमाणपत्र</Label>
                    <div className="border-2 border-dashed border-orange-200 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">जैविक/गुणवत्ता प्रमाणपत्र</p>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        अपलोड करें
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    फसल लिस्ट करें
                  </Button>
                  <Button variant="outline" className="border-green-200 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    प्रीव्यू देखें
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Crops Tab */}
          <TabsContent value="crops" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCrops.map((crop) => (
                <Card key={crop.id} className="border-green-200">
                  <div className="relative">
                    <img
                      src={crop.image || "/placeholder.svg"}
                      alt={crop.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">सक्रिय</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{crop.name}</CardTitle>
                    <CardDescription>
                      {crop.quantity} • {crop.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>फसल की प्रगति</span>
                          <span>{crop.progress}%</span>
                        </div>
                        <Progress value={crop.progress} className="h-2" />
                      </div>

                      <div className="text-sm space-y-1">
                        <p>
                          <span className="font-medium">बुआई:</span> {crop.planted}
                        </p>
                        <p>
                          <span className="font-medium">कटाई:</span> {crop.expectedHarvest}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Edit className="h-3 w-3 mr-1" />
                          संपादित करें
                        </Button>
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <Eye className="h-3 w-3 mr-1" />
                          देखें
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sales History Tab */}
          <TabsContent value="sales" className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <TrendingUp className="h-5 w-5" />
                  बिक्री का इतिहास
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSales.map((sale) => (
                    <div
                      key={sale.id}
                      className="p-4 border border-green-100 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{sale.crop}</h4>
                          <p className="text-gray-600">{sale.quantity}</p>
                          <p className="text-sm text-gray-500">खरीदार: {sale.buyer}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-700">{sale.price}</p>
                          <Badge variant={sale.status === "पूर्ण" ? "default" : "secondary"} className="mb-1">
                            {sale.status}
                          </Badge>
                          <p className="text-xs text-gray-500">{sale.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="mt-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Users className="h-5 w-5" />
              मदद चाहिए?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mic className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">आवाज़ से मदद</h4>
                <p className="text-sm text-gray-600">बोलकर अपनी समस्या बताएं</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">समुदाय सहायता</h4>
                <p className="text-sm text-gray-600">अन्य किसानों से जुड़ें</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">स्थानीय सहायता</h4>
                <p className="text-sm text-gray-600">नजदीकी एजेंट से मिलें</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
