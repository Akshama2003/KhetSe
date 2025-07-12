"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, TrendingUp, Users, MapPin, Calendar, Target, ArrowLeft, Wallet, Shield, Leaf } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BackerPage() {
  const [selectedAmount, setSelectedAmount] = useState("")

  const fundingProjects = [
    {
      id: 1,
      title: "जैविक टमाटर की खेती",
      farmer: "प्रिया शर्मा",
      location: "नासिक, महाराष्ट्र",
      targetAmount: 50000,
      raisedAmount: 35000,
      backers: 28,
      daysLeft: 15,
      image: "/images/female-farmer-vegetables.jpg",
      description: "रसायन मुक्त टमाटर की खेती के लिए बीज और उपकरण खरीदने हेतु",
      expectedReturn: "15% वार्षिक रिटर्न",
      category: "जैविक खेती",
    },
    {
      id: 2,
      title: "बासमती चावल का विस्तार",
      farmer: "गुरदीप सिंह",
      location: "अमृतसर, पंजाब",
      targetAmount: 75000,
      raisedAmount: 45000,
      backers: 42,
      daysLeft: 22,
      image: "/images/punjabi-farmer-rice.jpg",
      description: "प्रीमियम बासमती चावल की खेती के लिए अधिक जमीन लीज पर लेना",
      expectedReturn: "18% वार्षिक रिटर्न",
      category: "अनाज उत्पादन",
    },
    {
      id: 3,
      title: "कपास की आधुनिक खेती",
      farmer: "राम सिंह",
      location: "करनाल, हरियाणा",
      targetAmount: 60000,
      raisedAmount: 25000,
      backers: 18,
      daysLeft: 30,
      image: "/images/male-farmer-cotton.jpg",
      description: "ड्रिप इरिगेशन सिस्टम और बेहतर बीज के लिए फंडिंग",
      expectedReturn: "20% वार्षिक रिटर्न",
      category: "आधुनिक तकनीक",
    },
  ]

  const myInvestments = [
    {
      id: 1,
      project: "जैविक गेहूं की खेती",
      farmer: "सुनीता देवी",
      invested: 10000,
      currentValue: 11500,
      returns: 1500,
      status: "सक्रिय",
      duration: "6 महीने",
    },
    {
      id: 2,
      project: "मिश्रित सब्जी उत्पादन",
      farmer: "अनिता पटेल",
      invested: 15000,
      currentValue: 16800,
      returns: 1800,
      status: "पूर्ण",
      duration: "8 महीने",
    },
  ]

  const quickAmounts = [1000, 2500, 5000, 10000, 25000, 50000]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
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
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">KhetSe निवेशक डैशबोर्ड</h1>
                  <p className="text-xs text-orange-600">किसानों की मदद करें, रिटर्न पाएं</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-orange-600">
                <Wallet className="h-3 w-3 mr-1" />
                ₹45,000 उपलब्ध
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-orange-50">
            <TabsTrigger value="projects" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              फंडिंग प्रोजेक्ट्स
            </TabsTrigger>
            <TabsTrigger
              value="investments"
              className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
            >
              मेरे निवेश
            </TabsTrigger>
            <TabsTrigger value="impact" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              प्रभाव रिपोर्ट
            </TabsTrigger>
          </TabsList>

          {/* Funding Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 left-2 bg-orange-600">{project.category}</Badge>
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                        {project.daysLeft} दिन बचे
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Farmer Info */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{project.farmer}</span>
                        <MapPin className="h-3 w-3 ml-2" />
                        <span>{project.location}</span>
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>₹{project.raisedAmount.toLocaleString()}</span>
                          <span>₹{project.targetAmount.toLocaleString()}</span>
                        </div>
                        <Progress value={(project.raisedAmount / project.targetAmount) * 100} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{Math.round((project.raisedAmount / project.targetAmount) * 100)}% पूर्ण</span>
                          <span>{project.backers} निवेशक</span>
                        </div>
                      </div>

                      {/* Expected Return */}
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-green-700">
                          <TrendingUp className="h-4 w-4" />
                          <span className="font-medium">{project.expectedReturn}</span>
                        </div>
                      </div>

                      {/* Investment Amount */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">निवेश राशि (₹)</label>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {quickAmounts.slice(0, 6).map((amount) => (
                            <Button
                              key={amount}
                              variant="outline"
                              size="sm"
                              className="text-xs bg-transparent"
                              onClick={() => setSelectedAmount(amount.toString())}
                            >
                              ₹{amount.toLocaleString()}
                            </Button>
                          ))}
                        </div>
                        <Input
                          placeholder="कस्टम राशि"
                          value={selectedAmount}
                          onChange={(e) => setSelectedAmount(e.target.value)}
                          className="border-orange-200"
                        />
                      </div>

                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Heart className="h-4 w-4 mr-2" />
                        निवेश करें
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* My Investments Tab */}
          <TabsContent value="investments" className="space-y-6">
            {/* Investment Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-green-200">
                <CardContent className="p-4 text-center">
                  <Wallet className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-700">₹25,000</p>
                  <p className="text-xs text-gray-600">कुल निवेश</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-700">₹28,300</p>
                  <p className="text-xs text-gray-600">वर्तमान मूल्य</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-700">₹3,300</p>
                  <p className="text-xs text-gray-600">कुल रिटर्न</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-700">5</p>
                  <p className="text-xs text-gray-600">किसान मदद किए</p>
                </CardContent>
              </Card>
            </div>

            {/* Investment List */}
            <div className="space-y-4">
              {myInvestments.map((investment) => (
                <Card key={investment.id} className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{investment.project}</h3>
                        <p className="text-gray-600">किसान: {investment.farmer}</p>
                        <p className="text-sm text-gray-500">अवधि: {investment.duration}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={investment.status === "सक्रिय" ? "default" : "secondary"} className="mb-2">
                          {investment.status}
                        </Badge>
                        <p className="text-sm text-gray-600">निवेश: ₹{investment.invested.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">वर्तमान: ₹{investment.currentValue.toLocaleString()}</p>
                        <p className="text-lg font-bold text-green-700">
                          रिटर्न: +₹{investment.returns.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Impact Report Tab */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Leaf className="h-5 w-5" />
                    पर्यावरणीय प्रभाव
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-700 mb-2">2.5 टन</div>
                    <p className="text-gray-600">CO2 कमी में योगदान</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">15,000 लीटर</div>
                    <p className="text-gray-600">पानी की बचत</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-700 mb-2">5 एकड़</div>
                    <p className="text-gray-600">जैविक खेती को बढ़ावा</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Users className="h-5 w-5" />
                    सामाजिक प्रभाव
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-700 mb-2">5</div>
                    <p className="text-gray-600">किसान परिवारों की मदद</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-700 mb-2">₹50,000</div>
                    <p className="text-gray-600">अतिरिक्त आय सृजन</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">100+</div>
                    <p className="text-gray-600">ग्राहकों को ताज़ा उत्पाद</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Success Stories */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">सफलता की कहानियां</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2">सुनीता देवी - जैविक गेहूं परियोजना</h4>
                    <p className="text-sm text-gray-700">
                      "आपके निवेश से मैं जैविक गेहूं की खेती कर सकी। अब मेरी आमदनी 40% बढ़ गई है और मैं अपने बच्चों को बेहतर शिक्षा दे सकती
                      हूं।"
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                      <Calendar className="h-3 w-3" />
                      <span>परियोजना पूर्ण: दिसंबर 2023</span>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold mb-2">अनिता पटेल - मिश्रित सब्जी उत्पादन</h4>
                    <p className="text-sm text-gray-700">
                      "KhetSe के निवेशकों की बदौलत मैं ड्रिप इरिगेशन लगा सकी। अब कम पानी में ज्यादा उत्पादन हो रहा है।"
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                      <Calendar className="h-3 w-3" />
                      <span>परियोजना पूर्ण: जनवरी 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trust and Security */}
        <Card className="mt-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Shield className="h-5 w-5" />
              भरोसा और सुरक्षा
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">ब्लॉकचेन सुरक्षा</h4>
                <p className="text-sm text-gray-600">सभी लेनदेन ब्लॉकचेन पर सुरक्षित</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">किसान सत्यापन</h4>
                <p className="text-sm text-gray-600">सभी किसान सत्यापित और प्रमाणित</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">पारदर्शी रिटर्न</h4>
                <p className="text-sm text-gray-600">रियल-टाइम प्रगति और रिटर्न ट्रैकिंग</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
