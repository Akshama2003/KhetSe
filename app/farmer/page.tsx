"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, Plus, Upload, Wallet, TrendingUp, Users, Shield, Camera, MapPin, Leaf, Star, Coins } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FarmerDashboard() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [selectedCrop, setSelectedCrop] = useState("")
  const [cropQuantity, setCropQuantity] = useState("")
  const [cropPrice, setCropPrice] = useState("")

  const farmerProfile = {
    name: "राम सिंह",
    location: "करनाल, हरियाणा",
    image: "/images/male-farmer-cotton.jpg",
    completeness: 85,
    totalEarnings: "₹1,25,000",
    monthlyEarnings: "₹45,000",
    totalCrops: 12,
    activeCrops: 5,
    rating: 4.8,
    verified: true
  }

  const myCrops = [
    {
      id: 1,
      name: "कपास",
      quantity: "300 kg",
      price: "₹45/kg",
      status: "बिक्री के लिए उपलब्ध",
      image: "/images/organic-vegetables.jpg",
      harvestDate: "2024-01-15",
      views: 45,
      inquiries: 8
    },
    {
      id: 2,
      name: "गेहूं",
      quantity: "500 kg",
      price: "₹25/kg",
      status: "बेची गई",
      image: "/images/wheat-grains.jpg",
      harvestDate: "2024-01-10",
      views: 32,
      inquiries: 12
    },
    {
      id: 3,
      name: "सरसों",
      quantity: "200 kg",
      price: "₹35/kg",
      status: "पैकिंग में",
      image: "/images/organic-vegetables.jpg",
      harvestDate: "2024-01-20",
      views: 28,
      inquiries: 5
    }
  ]

  const recentOrders = [
    {
      id: 1,
      buyer: "राजेश कुमार",
      crop: "कपास",
      quantity: "50 kg",
      amount: "₹2,250",
      status: "डिलीवर हो गया",
      blockchain: true,
    },
    {
      id: 2,
      buyer: "प्रिया शर्मा",
      crop: "गेहूं",
      quantity: "100 kg",
      amount: "₹2,500",
      status: "ट्रांजिट में",
      blockchain: true,
    },
  ]

  const fundingOffers = [
    {
      id: 1,
      backer: "अग्रिकल्चर फंड",
      amount: "₹50,000",
      crop: "कपास",
      terms: "6 महीने, 8% ब्याज",
      status: "स्वीकृत"
    },
    {
      id: 2,
      backer: "ग्रीन इन्वेस्ट",
      amount: "₹75,000",
      crop: "जैविक सब्जी",
      terms: "4 महीने, 10% रिटर्न",
      status: "पेंडिंग"
    }
  ]

  const cropOptions = [
    "गेहूं", "चावल", "मक्का", "बाजरा", "ज्वार", "दाल", "चना", "मटर", 
    "सरसों", "सूरजमुखी", "टमाटर", "प्याज", "आलू", "गाजर", "पत्तागोभी", "कपास"
  ]

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
                <p className="text-xs text-orange-600">किसान डैशबोर्ड</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className={`border-2 ${isVoiceActive ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}`}
                onClick={() => setIsVoiceActive(!isVoiceActive)}
              >
                <Mic className="h-4 w-4 mr-1" />
                {isVoiceActive ? "बंद करें" : "आवाज़ सहायक"}
              </Button>
              <Link href="/marketplace">
                <Button variant="outline" className="border-orange-200 bg-transparent">
                  बाज़ार देखें
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Voice Assistant Active */}
      {isVoiceActive && (
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-4 bg-green-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75" />
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
            </div>
            <p className="text-sm">🎤 कहें: "मैं 50 किलो कपास बेचना चाहता हूँ" या "आज का भाव क्या है?"</p>
          </div>
        </motion.section>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <img
                    src={farmerProfile.image || "/placeholder.svg"}
                    alt={farmerProfile.name}
                    className="w-full h-full rounded-full object-cover border-2 border-green-300"
                  />
                  {farmerProfile.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1">
                      <Shield className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl text-gray-800">{farmerProfile.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {farmerProfile.location}
                </CardDescription>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{farmerProfile.rating}</span>
                  <Badge className="ml-2 bg-green-600 text-xs">वेरिफाइड</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>प्रोफाइल पूर्णता</span>
                      <span>{farmerProfile.completeness}%</span>
                    </div>
                    <Progress value={farmerProfile.completeness} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-green-700">{farmerProfile.totalCrops}</p>
                      <p className="text-xs text-gray-600">कुल फसलें</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-orange-700">{farmerProfile.activeCrops}</p>
                      <p className="text-xs text-gray-600">सक्रिय फसलें</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Earnings Card */}
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <Wallet className="h-5 w-5" />
                  आमदनी
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-700">{farmerProfile.monthlyEarnings}</p>
                    <p className="text-sm text-gray-600">इस महीने</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-700">{farmerProfile.totalEarnings}</p>
                    <p className="text-sm text-gray-600">कुल आमदनी</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      रिपोर्ट
                    </Button>
                    <Button size="sm" variant="outline" className="border-green-200 bg-transparent">
                      <Coins className="h-3 w-3 mr-1" />
                      टोकन
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Funding Offers */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Users className="h-5 w-5" />
                  फंडिंग ऑफर्स
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {fundingOffers.map((offer) => (
                    <div key={offer.id} className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{offer.backer}</h4>
                        <Badge 
                          variant={offer.status === "स्वीकृत" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {offer.status}
                        </Badge>
                      </div>
                      <p className="text-lg font-bold text-blue-700">{offer.amount}</p>
                      <p className="text-xs text-gray-600">{offer.crop} • {offer.terms}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add New Crop */}
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Plus className="h-5 w-5" />
                  नई फसल जोड़ें
                </CardTitle>
                <CardDescription>
                  आवाज़ की मदद से या मैन्युअल रूप से अपनी फसल की जानकारी दें
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">फसल का नाम</label>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger>
                        <SelectValue placeholder="फसल चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        {cropOptions.map((crop) => (
                          <SelectItem key={crop} value={crop}>
                            {crop}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">मात्रा (kg)</label>
                    <Input
                      placeholder="जैसे: 500"
                      value={cropQuantity}
                      onChange={(e) => setCropQuantity(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">कीमत (प्रति kg)</label>
                    <Input
                      placeholder="जैसे: 25"
                      value={cropPrice}
                      onChange={(e) => setCropPrice(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">हार्वेस्ट की तारीख</label>
                    <Input type="date" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">विवरण</label>
                    <Textarea placeholder="अपनी फसल के बारे में बताएं..." />
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Upload className="h-4 w-4 mr-2" />
                        फसल अपलोड करें
                      </Button>
                      <Button variant="outline" className="border-orange-200 bg-transparent">
                        <Camera className="h-4 w-4 mr-2" />
                        फोटो लें
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`border-2 ${isVoiceActive ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}`}
                        onClick={() => setIsVoiceActive(!isVoiceActive)}
                      >
                        <Mic className="h-4 w-4 mr-2" />
                        आवाज़
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* My Crops */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Leaf className="h-5 w-5" />
                  मेरी फसलें
                </CardTitle>
                <CardDescription>अपनी सूचीबद्ध फसलों को देखें और प्रबंधित करें</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myCrops.map((crop) => (
                    <motion.div
                      key={crop.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
