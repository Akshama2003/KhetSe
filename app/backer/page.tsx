"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MapPin, Star, TrendingUp, Users, Shield, Coins, Leaf } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BackerInterface() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [fundingType, setFundingType] = useState("pre-order")

  const farmersNeedingFunding = [
    {
      id: 1,
      name: "सुरेश कुमार",
      location: "जालंधर, पंजाब",
      crop: "बासमती चावल",
      needed: "₹25,000",
      raised: "₹18,000",
      timeline: "60 दिन",
      expectedReturn: "150 kg चावल",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      backers: 12,
      organic: true,
      verified: true,
    },
    {
      id: 2,
      name: "प्रिया शर्मा",
      location: "नासिक, महाराष्ट्र",
      crop: "जैविक टमाटर",
      needed: "₹15,000",
      raised: "₹8,500",
      timeline: "45 दिन",
      expectedReturn: "100 kg टमाटर",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      backers: 8,
      organic: true,
      verified: true,
    },
    {
      id: 3,
      name: "राजेश पटेल",
      location: "अहमदाबाद, गुजरात",
      crop: "कपास",
      needed: "₹35,000",
      raised: "₹12,000",
      timeline: "90 दिन",
      expectedReturn: "200 kg कपास",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      backers: 15,
      organic: false,
      verified: true,
    },
  ]

  const myInvestments = [
    {
      id: 1,
      farmer: "राम सिंह",
      crop: "गेहूं",
      invested: "₹5,000",
      expectedReturn: "50 kg गेहूं",
      status: "Growing",
      daysLeft: 25,
      currentValue: "₹5,500",
    },
    {
      id: 2,
      farmer: "सुनीता देवी",
      crop: "प्याज",
      invested: "₹3,000",
      expectedReturn: "40 kg प्याज",
      status: "Ready",
      daysLeft: 0,
      currentValue: "₹4,200",
    },
  ]

  const fundingTypes = [
    {
      value: "donation",
      label: "दान (Donation)",
      description: "किसान की मदद करें, कुछ वापसी की उम्मीद न करें",
      icon: "❤️",
    },
    {
      value: "pre-order",
      label: "प्री-ऑर्डर (Pre-order)",
      description: "फसल तैयार होने पर डिस्काउंट पर खरीदें",
      icon: "🛒",
    },
    {
      value: "token-stake",
      label: "टोकन स्टेक (Token Stake)",
      description: "$KRISHI टोकन कमाएं और गवर्नेंस में भाग लें",
      icon: "🪙",
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
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">KisanSetu</span>
                <p className="text-xs text-orange-600">किसान को सहारा दें</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="bg-transparent">
                Sign In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">Register as Backer</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">🌾 किसानों का साथ दें, भारत का भविष्य बनाएं</h1>
            <p className="text-xl text-gray-600 mb-6">सीधे किसानों को फंड करें और ताज़ी फसल का फायदा उठाएं</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-600 text-lg px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                ब्लॉकचेन सुरक्षित
              </Badge>
              <Badge className="bg-orange-500 text-lg px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                500+ किसान
              </Badge>
              <Badge className="bg-blue-600 text-lg px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                15% औसत रिटर्न
              </Badge>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="fund-farmers" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="fund-farmers">किसान को फंड करें</TabsTrigger>
            <TabsTrigger value="my-investments">मेरे निवेश</TabsTrigger>
            <TabsTrigger value="dao-governance">DAO गवर्नेंस</TabsTrigger>
          </TabsList>

          {/* Fund Farmers Tab */}
          <TabsContent value="fund-farmers">
            <div className="space-y-8">
              {/* Funding Types */}
              <Card className="border-2 border-orange-200">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                  <CardTitle className="text-center text-orange-800">फंडिंग के प्रकार चुनें</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {fundingTypes.map((type) => (
                      <Card
                        key={type.value}
                        className={`cursor-pointer transition-all border-2 ${
                          fundingType === type.value
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                        onClick={() => setFundingType(type.value)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-3xl mb-2">{type.icon}</div>
                          <h3 className="font-semibold mb-2">{type.label}</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Farmers Needing Funding */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {farmersNeedingFunding.map((farmer, index) => (
                  <motion.div
                    key={farmer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all border-2 border-green-200 hover:border-green-400">
                      <div className="relative">
                        <img
                          src={farmer.image || "/placeholder.svg"}
                          alt={farmer.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2 flex gap-2">
                          {farmer.organic && (
                            <Badge className="bg-green-600">
                              <Leaf className="h-3 w-3 mr-1" />
                              जैविक
                            </Badge>
                          )}
                          {farmer.verified && (
                            <Badge className="bg-blue-600">
                              <Shield className="h-3 w-3 mr-1" />
                              वेरिफाइड
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{farmer.name}</CardTitle>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{farmer.rating}</span>
                          </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {farmer.location}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-green-700 mb-2">{farmer.crop}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">जरूरत:</span>
                              <span className="font-semibold">{farmer.needed}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">जुटाया:</span>
                              <span className="text-green-600 font-semibold">{farmer.raised}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">समय:</span>
                              <span>{farmer.timeline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">रिटर्न:</span>
                              <span className="font-semibold">{farmer.expectedReturn}</span>
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>प्रगति</span>
                            <span>
                              {Math.round(
                                (Number.parseInt(farmer.raised.replace(/[₹,]/g, "")) /
                                  Number.parseInt(farmer.needed.replace(/[₹,]/g, ""))) *
                                  100,
                              )}
                              %
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full transition-all"
                              style={{
                                width: `${(Number.parseInt(farmer.raised.replace(/[₹,]/g, "")) / Number.parseInt(farmer.needed.replace(/[₹,]/g, ""))) * 100}%`,
                              }}
                            />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Users className="h-3 w-3" />
                            <span>{farmer.backers} बैकर्स</span>
                          </div>
                        </div>

                        {/* Funding Amount Input */}
                        <div className="space-y-2">
                          <Label htmlFor={`amount-${farmer.id}`} className="text-sm font-medium">
                            फंडिंग राशि
                          </Label>
                          <div className="flex gap-2">
                            <Input
                              id={`amount-${farmer.id}`}
                              placeholder="₹1000"
                              value={selectedAmount}
                              onChange={(e) => setSelectedAmount(e.target.value)}
                            />
                            <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">
                              <Heart className="h-4 w-4 mr-1" />
                              फंड करें
                            </Button>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            विवरण देखें
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            किसान से बात करें
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Investments Tab */}
          <TabsContent value="my-investments">
            <div className="space-y-6">
              <Card className="border-2 border-green-200">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <TrendingUp className="h-5 w-5" />
                    मेरे निवेश (My Investments)
                  </CardTitle>
                  <CardDescription>आपके द्वारा फंड किए गए किसान और उनकी प्रगति</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {myInvestments.map((investment) => (
                      <div
                        key={investment.id}
                        className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">{investment.farmer}</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                            <div>फसल: {investment.crop}</div>
                            <div>निवेश: {investment.invested}</div>
                            <div>रिटर्न: {investment.expectedReturn}</div>
                            <div>वर्तमान मूल्य: {investment.currentValue}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={investment.status === "Ready" ? "default" : "secondary"}
                            className={investment.status === "Ready" ? "bg-green-600" : "bg-orange-500"}
                          >
                            {investment.status === "Ready" ? "तैयार" : "बढ़ रही"}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">
                            {investment.daysLeft > 0 ? `${investment.daysLeft} दिन बचे` : "अब क्लेम करें"}
                          </p>
                          <Button size="sm" className="mt-2" disabled={investment.status !== "Ready"}>
                            {investment.status === "Ready" ? "क्लेम करें" : "ट्रैक करें"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* DAO Governance Tab */}
          <TabsContent value="dao-governance">
            <div className="space-y-6">
              <Card className="border-2 border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Users className="h-5 w-5" />
                    Farmer DAO गवर्नेंस
                  </CardTitle>
                  <CardDescription>समुदायिक निर्णयों में भाग लें और $KRISHI टोकन कमाएं</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* DAO Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border border-purple-200">
                        <CardContent className="p-4 text-center">
                          <Coins className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                          <p className="text-2xl font-bold text-purple-800">2,500</p>
                          <p className="text-sm text-gray-600">आपके KRISHI टोकन</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-green-200">
                        <CardContent className="p-4 text-center">
                          <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                          <p className="text-2xl font-bold text-green-800">1,250</p>
                          <p className="text-sm text-gray-600">कुल DAO सदस्य</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-orange-200">
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                          <p className="text-2xl font-bold text-orange-800">15</p>
                          <p className="text-sm text-gray-600">सक्रिय प्रस्ताव</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Active Proposals */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">सक्रिय प्रस्ताव (Active Proposals)</h3>

                      <div className="space-y-3">
                        <Card className="border border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">न्यूनतम फसल कीमत निर्धारण</h4>
                              <Badge className="bg-green-600">सक्रिय</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              गेहूं की न्यूनतम कीमत ₹25/kg से बढ़ाकर ₹28/kg करने का प्रस्ताव
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                <span className="text-green-600 font-semibold">85% हां</span> •
                                <span className="text-red-600 font-semibold"> 15% नहीं</span>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  हां में वोट
                                </Button>
                                <Button size="sm" variant="outline" className="bg-transparent">
                                  नहीं में वोट
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">नए राज्य में विस्तार</h4>
                              <Badge className="bg-orange-500">चर्चा में</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              KisanSetu को राजस्थान और मध्य प्रदेश में लॉन्च करने का प्रस्ताव
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                <span className="text-green-600 font-semibold">72% हां</span> •
                                <span className="text-red-600 font-semibold"> 28% नहीं</span>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  हां में वोट
                                </Button>
                                <Button size="sm" variant="outline" className="bg-transparent">
                                  नहीं में वोट
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Create Proposal */}
                    <Card className="border-2 border-dashed border-purple-300">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold mb-2">नया प्रस्ताव बनाएं</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          समुदाय के लिए नया प्रस्ताव सुझाएं (न्यूनतम 1000 KRISHI टोकन आवश्यक)
                        </p>
                        <Button className="bg-purple-600 hover:bg-purple-700">प्रस्ताव बनाएं</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
