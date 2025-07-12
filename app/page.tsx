"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, Users, Shield, Globe, Leaf, Heart, MapPin } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState("hindi")

  const bannerImages = [
    {
      image: "/images/female-farmer-rice.jpg",
      title: "सुनीता देवी - धान किसान",
      subtitle: "जैविक धान की खेती",
      location: "पटना, बिहार",
    },
    {
      image: "/images/male-farmer-cotton.jpg",
      title: "राम सिंह जी - कपास किसान",
      subtitle: "हरियाणा से उच्च गुणवत्ता कपास",
      location: "करनाल, हरियाणा",
    },
    {
      image: "/images/female-farmer-vegetables.jpg",
      title: "प्रिया शर्मा - सब्जी उत्पादक",
      subtitle: "ताज़ी हरी सब्जियों की खेती",
      location: "नासिक, महाराष्ट्र",
    },
    {
      image: "/images/farm-landscape.jpg",
      title: "गुरदीप सिंह - बासमती चावल",
      subtitle: "प्रीमियम बासमती चावल",
      location: "अमृतसर, पंजाब",
    },
  ]

  const languages = [
    { code: "hindi", name: "हिंदी", flag: "🇮🇳" },
    { code: "english", name: "English", flag: "🇬🇧" },
    { code: "punjabi", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "marathi", name: "मराठी", flag: "🇮🇳" },
    { code: "bhojpuri", name: "भोजपुरी", flag: "🇮🇳" },
  ]

  const voiceGreeting = {
    hindi: "क्या मदद कर सकता हूँ?",
    english: "How can I help you?",
    punjabi: "ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
    marathi: "मी तुमची कशी मदत करू शकतो?",
    bhojpuri: "का मदद कर सकत बानी?",
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "आवाज़ से बात करें",
      description: "हिंदी, भोजपुरी, पंजाबी में बोलें - टाइप करने की जरूरत नहीं",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "ब्लॉकचेन भरोसा",
      description: "स्मार्ट कॉन्ट्रैक्ट से सुरक्षित पेमेंट और फसल की पूरी जानकारी",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "सीधा ग्राहक से",
      description: "बिचौलिए नहीं, किसान को पूरा मुनाफा",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "किसान को सहारा",
      description: "फसल से पहले फंडिंग, टोकन रिवार्ड्स",
    },
  ]

  const successStories = [
    {
      name: "सुनीता देवी",
      location: "पटना, बिहार",
      crop: "धान",
      income: "₹45,000",
      image: "/images/female-farmer-rice.jpg",
      story: "KhetSe से जुड़कर मेरी आमदनी दोगुनी हो गई है। अब मैं सीधे ग्राहकों को बेच सकती हूँ।",
    },
    {
      name: "राम सिंह",
      location: "करनाल, हरियाणा",
      crop: "कपास",
      income: "₹65,000",
      image: "/images/male-farmer-cotton.jpg",
      story: "आवाज़ की मदद से फसल बेचना बहुत आसान हो गया है। अब मुझे लिखना नहीं पड़ता।",
    },
    {
      name: "प्रिया शर्मा",
      location: "नासिक, महाराष्ट्र",
      crop: "सब्जी",
      income: "₹38,000",
      image: "/images/female-farmer-vegetables.jpg",
      story: "ब्लॉकचेन तकनीक से मेरी फसल की पूरी जानकारी ग्राहकों को मिलती है। भरोसा बढ़ा है।",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Header with Language Selector */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">KhetSe</h1>
                <p className="text-sm text-orange-600 font-medium">खेत से सीधे आपके घर तक</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-32 border-orange-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                className={`border-2 ${isVoiceActive ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}`}
                onClick={() => setIsVoiceActive(!isVoiceActive)}
              >
                <Mic className="h-4 w-4 mr-1" />
                {voiceGreeting[selectedLanguage as keyof typeof voiceGreeting]}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Rotating Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">खेत से सीधे आपके घर तक</h1>
              <p className="text-xl md:text-2xl mb-4 text-green-100">ताज़ा, सीधा, भरोसेमंद</p>
              <p className="text-lg mb-8 text-green-50 leading-relaxed">
                Web3 तकनीक के साथ भारतीय किसानों को सशक्त बनाना। आवाज़ की मदद से, ब्लॉकचेन भरोसे के साथ, खेत से सीधे आपके घर तक।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/farmer">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8">
                    🌾 मैं किसान हूँ
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-700 bg-transparent font-semibold px-8"
                  >
                    🛒 ताज़ा सब्जी खरीदें
                  </Button>
                </Link>
                <Link href="/backer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 font-semibold px-8">
                    ❤️ किसान की मदद करें
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Banner */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBanner}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <img
                      src={bannerImages[currentBanner].image || "/placeholder.svg"}
                      alt={bannerImages[currentBanner].title}
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{bannerImages[currentBanner].title}</h3>
                      <p className="text-green-100 mb-2">{bannerImages[currentBanner].subtitle}</p>
                      <div className="flex items-center justify-center gap-1 text-sm text-green-200">
                        <MapPin className="h-4 w-4" />
                        {bannerImages[currentBanner].location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Banner Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentBanner ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      {isVoiceActive && (
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-8 bg-green-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75" />
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150" />
              </div>
              <p className="text-lg font-medium mb-2">🎤 सुन रहा हूँ...</p>
              <p className="text-green-100 text-sm">कहें: "मैं 50 किलो गेहूं बेचना चाहता हूँ" या "आज का भाव क्या है?"</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">सफलता की कहानियां</h2>
            <p className="text-gray-600">हमारे किसान भाई-बहनों की सफलता</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-16 h-16 object-cover rounded-full border-2 border-green-200"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{story.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {story.location}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-green-600 text-xs">{story.crop}</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                            {story.income}/महीना
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm">"{story.story}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">KhetSe क्यों चुनें?</h2>
            <p className="text-gray-600">भारत के किसानों के लिए, भारत में बना</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300">
                  <CardHeader className="pb-4">
                    <div className="text-orange-600 mb-4 flex justify-center">{feature.icon}</div>
                    <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">हमारा प्रभाव</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "70%", label: "भारत की जनसंख्या कृषि पर निर्भर" },
              { number: "500+", label: "पंजीकृत किसान" },
              { number: "12", label: "राज्यों में सेवा" },
              { number: "0%", label: "कमीशन फीस" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">आधुनिक तकनीक पर आधारित</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Shield className="h-5 w-5" />
                  ब्लॉकचेन और Web3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Polygon Network
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Smart Contracts
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    IPFS Storage
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    $KHET Token
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <Mic className="h-5 w-5" />
                  AI और आवाज़ तकनीक
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    OpenAI Whisper
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Multi-language NLU
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Text-to-Speech
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Voice Commands
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Globe className="h-5 w-5" />
                  Modern Web Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Vercel Edge
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">कृषि क्रांति में शामिल हों</h2>
          <p className="text-xl mb-8 text-green-100">
            किसानों को सशक्त बनाना, समुदायों को जोड़ना, तकनीक के माध्यम से भरोसा बनाना
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/farmer">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8">
                🌾 अपनी फसल बेचना शुरू करें
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 bg-transparent font-semibold px-8"
              >
                🛒 ताज़ा उत्पाद देखें
              </Button>
            </Link>
            <Link href="/backer">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 font-semibold px-8">
                ❤️ किसान को फंड करें
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
