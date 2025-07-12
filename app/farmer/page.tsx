"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wallet, TrendingUp, Package, Users, Star, Plus, Shield, Coins } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import VoiceInterface from "@/components/voice-interface"

export default function FarmerDashboard() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [walletConnected, setWalletConnected] = useState(true)
  const [profileCompletion, setProfileCompletion] = useState(85)
  const [selectedLanguage, setSelectedLanguage] = useState("hindi")

  const myListings = [
    {
      id: 1,
      crop: "गेहूं (Wheat)",
      quantity: "500 kg",
      price: "₹25/kg",
      status: "Active",
      orders: 3,
      location: "हरियाणा",
      image: "/placeholder.svg?height=150&width=200",
      verified: true,
    },
    {
      id: 2,
      crop: "चावल (Rice)",
      quantity: "300 kg",
      price: "₹30/kg",
      status: "Sold Out",
      orders: 8,
      location: "पंजाब",
      image: "/placeholder.svg?height=150&width=200",
      verified: true,
    },
  ]

  const recentOrders = [
    {
      id: 1,
      buyer: "राजेश कुमार",
      crop: "गेहूं",
      quantity: "50 kg",
      amount: "₹1,250",
      status: "Delivered",
      blockchain: true,
    },
    {
      id: 2,
      buyer: "प्रिया शर्मा",
      crop: "चावल",
      quantity: "25 kg",
      amount: "₹750",
      status: "In Transit",
      blockchain: true,
    },
  ]

  const fundingOffers = [
    {
      id: 1,
      backer: "Urban Organic Co.",
      crop: "टमाटर",
      amount: "₹15,000",
      expectedReturn: "200 kg",
      timeline: "45 दिन",
      status: "Pending",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">KisanSetu</span>
                <p className="text-xs text-orange-600">सीधा सौदा, सीधा भरोसा</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Button
                variant={walletConnected ? "default" : "outline"}
                onClick={() => setWalletConnected(!walletConnected)}
                className={`flex items-center gap-2 ${walletConnected ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                <Wallet className="h-4 w-4" />
                {walletConnected ? "वॉलेट जुड़ा है" : "वॉलेट जोड़ें"}
                {walletConnected && <Shield className="h-3 w-3 text-green-200" />}
              </Button>

              <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">र</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">राम सिंह जी</p>
                  <p className="text-xs text-orange-600">करनाल, हरियाणा</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl font-bold mb-2 text-gray-800">🙏 नमस्ते राम सिंह जी!</h1>
            <p className="text-gray-600 mb-4">आपके किसान डैशबोर्ड में स्वागत है</p>

            {/* Profile Completion */}
            <div className="bg-white p-4 rounded-lg border-2 border-orange-200 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">प्रोफाइल पूर्णता</span>
                <span className="text-sm font-bold text-orange-600">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">अपनी प्रोफाइल पूरी करें और अधिक ऑर्डर पाएं</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 font-medium">कुल कमाई</p>
                  <p className="text-2xl font-bold text-green-800">₹45,250</p>
                  <p className="text-xs text-green-600">इस महीने +₹8,500</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 font-medium">सक्रिय लिस्टिंग</p>
                  <p className="text-2xl font-bold text-blue-800">3</p>
                  <p className="text-xs text-blue-600">2 बिक गई</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-700 font-medium">कुल ऑर्डर</p>
                  <p className="text-2xl font-bold text-purple-800">28</p>
                  <p className="text-xs text-purple-600">सभी डिलीवर</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-700 font-medium">रेटिंग</p>
                  <p className="text-2xl font-bold text-yellow-800">4.8</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    <p className="text-xs text-yellow-600">24 रिव्यू</p>
                  </div>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Crop Listings */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Crops */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-orange-50">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Package className="h-5 w-5" />
                  मेरी फसलें (My Crops)
                </CardTitle>
                <CardDescription>अपनी सूचीबद्ध फसलों को देखें और प्रबंधित करें</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <motion.div
                      key={listing.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-green-300 transition-all"
                    >
                      <img
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.crop}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-800">{listing.crop}</h3>
                          {listing.verified && (
                            <Badge className="bg-green-600 text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              ब्लॉकचेन वेरिफाइड
                            </Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>मात्रा: {listing.quantity}</div>
                          <div>कीमत: {listing.price}</div>
                          <div>ऑर्डर: {listing.orders}</div>
                          <div>स्थान: {listing.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={listing.status === "Active" ? "default" : "secondary"}
                          className={listing.status === "Active" ? "bg-green-600" : ""}
                        >
                          {listing.status === "Active" ? "सक्रिय" : "बिक गई"}
                        </Badge>
                        <div className="flex gap-1 mt-2">
                          <Button variant="outline" size="sm" className="text-xs bg-transparent">
                            एडिट
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs bg-transparent">
                            देखें
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Users className="h-5 w-5" />
                  हाल के ऑर्डर (Recent Orders)
                </CardTitle>
                <CardDescription>अपनी बिक्री और डिलीवरी को ट्रैक करें</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-800">{order.buyer}</h3>
                          {order.blockchain && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                              <Shield className="h-3 w-3 mr-1" />
                              ब्लॉकचेन
                            </Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                          <div>फसल: {order.crop}</div>
                          <div>मात्रा: {order.quantity}</div>
                          <div>राशि: {order.amount}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={order.status === "Delivered" ? "default" : "secondary"}
                          className={order.status === "Delivered" ? "bg-green-600" : "bg-orange-500"}
                        >
                          {order.status === "Delivered" ? "डिलीवर" : "ट्रांजिट में"}
                        </Badge>
                        <div className="flex gap-1 mt-2">
                          <Button variant="outline" size="sm" className="text-xs bg-transparent">
                            ट्रैक
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs bg-transparent">
                            कॉल
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Actions & Wallet */}
          <div className="space-y-6">
            {/* Add New Crop - Voice First */}
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Plus className="h-5 w-5" />
                  नई फसल जोड़ें
                </CardTitle>
                <CardDescription>आवाज़ से या फॉर्म भरकर</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <VoiceInterface
                  language={selectedLanguage as any}
                  onVoiceCommand={(command) => {
                    console.log("Voice command:", command)
                  }}
                />

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">या मैन्युअल रूप से भरें</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Plus className="h-4 w-4 mr-2" />
                    फॉर्म भरें
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Wallet Summary */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Wallet className="h-5 w-5" />
                  वॉलेट सारांश
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-700">INR बैलेंस</span>
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-green-800">₹12,450</p>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-700">$KRISHI टोकन</span>
                      <Coins className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-blue-800">1,250 KRISHI</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      UPI में निकालें
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      टोकन ट्रेड
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Funding Offers */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <Plus className="h-5 w-5" />
                  फंडिंग ऑफर
                </CardTitle>
                <CardDescription>आपके लिए फंडिंग के अवसर</CardDescription>
              </CardHeader>
              <CardContent>
                {fundingOffers.map((offer) => (
                  <div key={offer.id} className="p-3 border border-purple-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{offer.backer}</h4>
                      <Badge className="bg-purple-600 text-xs">नया</Badge>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>फसल: {offer.crop}</div>
                      <div>राशि: {offer.amount}</div>
                      <div>रिटर्न: {offer.expectedReturn}</div>
                      <div>समय: {offer.timeline}</div>
                    </div>
                    <Button size="sm" className="w-full mt-3 bg-purple-600 hover:bg-purple-700">
                      स्वीकार करें
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
