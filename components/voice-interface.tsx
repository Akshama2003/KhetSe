"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MicOff, Volume2, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface VoiceInterfaceProps {
  onVoiceCommand?: (command: string) => void
  language?: "hindi" | "english" | "punjabi" | "marathi" | "bhojpuri"
  compact?: boolean
}

export default function VoiceInterface({ onVoiceCommand, language = "hindi", compact = false }: VoiceInterfaceProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  const voicePrompts = {
    hindi: {
      start: "🎤 बोलना शुरू करें",
      stop: "⏹️ बोलना बंद करें",
      listening: "सुन रहा हूँ...",
      processing: "समझ रहा हूँ...",
      examples: ["मैं 50 किलो गेहूं बेचना चाहता हूँ", "आज का भाव क्या है?", "मेरी फसल कब तैयार होगी?", "पेमेंट कैसे मिलेगा?"],
      placeholder: "यहाँ आपका संदेश दिखेगा...",
    },
    english: {
      start: "🎤 Start Speaking",
      stop: "⏹️ Stop Speaking",
      listening: "Listening...",
      processing: "Processing...",
      examples: [
        "I want to sell 50 kg wheat",
        "What's today's price?",
        "When will my crop be ready?",
        "How will I get payment?",
      ],
      placeholder: "Your message will appear here...",
    },
    punjabi: {
      start: "🎤 ਬੋਲਣਾ ਸ਼ੁਰੂ ਕਰੋ",
      stop: "⏹️ ਬੋਲਣਾ ਬੰਦ ਕਰੋ",
      listening: "ਸੁਣ ਰਿਹਾ ਹਾਂ...",
      processing: "ਸਮਝ ਰਿਹਾ ਹਾਂ...",
      examples: ["ਮੈਂ 50 ਕਿਲੋ ਕਣਕ ਵੇਚਣਾ ਚਾਹੁੰਦਾ ਹਾਂ", "ਅੱਜ ਦਾ ਭਾਅ ਕੀ ਹੈ?", "ਮੇਰੀ ਫਸਲ ਕਦੋਂ ਤਿਆਰ ਹੋਵੇਗੀ?", "ਪੇਮੈਂਟ ਕਿਵੇਂ ਮਿਲੇਗੀ?"],
      placeholder: "ਤੁਹਾਡਾ ਸੰਦੇਸ਼ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗਾ...",
    },
    marathi: {
      start: "🎤 बोलणे सुरू करा",
      stop: "⏹️ बोलणे थांबवा",
      listening: "ऐकत आहे...",
      processing: "समजत आहे...",
      examples: ["मला 50 किलो गहू विकायचा आहे", "आजचा भाव काय आहे?", "माझे पीक कधी तयार होईल?", "पेमेंट कसे मिळेल?"],
      placeholder: "तुमचा संदेश इथे दिसेल...",
    },
    bhojpuri: {
      start: "🎤 बोलल शुरू करीं",
      stop: "⏹️ बोलल बंद करीं",
      listening: "सुनत बानी...",
      processing: "समझत बानी...",
      examples: ["हम 50 किलो गेहूं बेचे के चाहत बानी", "आज के भाव का बा?", "हमार फसल कब तैयार होई?", "पेमेंट कइसे मिली?"],
      placeholder: "राउर संदेश इहाँ देखाई...",
    },
  }

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      setIsSupported(true)
    }
  }, [])

  const startListening = () => {
    if (!isSupported) return

    setIsListening(true)
    setTranscript("")
    setIsProcessing(false)

    // Simulate voice recognition for demo
    setTimeout(() => {
      setIsProcessing(true)
      setTimeout(() => {
        const examples = voicePrompts[language].examples
        const randomExample = examples[Math.floor(Math.random() * examples.length)]
        setTranscript(randomExample)
        setIsProcessing(false)
        onVoiceCommand?.(randomExample)
      }, 1500)
    }, 2000)
  }

  const stopListening = () => {
    setIsListening(false)
    setIsProcessing(false)
  }

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang =
        language === "hindi" ? "hi-IN" : language === "punjabi" ? "pa-IN" : language === "marathi" ? "mr-IN" : "en-US"
      speechSynthesis.speak(utterance)
    }
  }

  if (compact) {
    return (
      <div className="space-y-3">
        <Button
          size="lg"
          className={`w-full ${
            isListening
              ? "bg-red-500 hover:bg-red-600 animate-pulse"
              : "bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600"
          }`}
          onClick={isListening ? stopListening : startListening}
          disabled={!isSupported || isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              {voicePrompts[language].processing}
            </>
          ) : isListening ? (
            <>
              <MicOff className="h-5 w-5 mr-2" />
              {voicePrompts[language].stop}
            </>
          ) : (
            <>
              <Mic className="h-5 w-5 mr-2" />
              {voicePrompts[language].start}
            </>
          )}
        </Button>

        <AnimatePresence>
          {(isListening || isProcessing) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg border-2 border-green-200"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-75" />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150" />
              </div>
              <p className="text-green-700 font-medium">
                {isProcessing ? voicePrompts[language].processing : voicePrompts[language].listening}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-sm text-blue-700 mb-2">आपने कहा:</p>
            <p className="font-medium text-gray-800">{transcript}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 bg-transparent"
              onClick={() => speakText("आपका संदेश मिल गया। प्रोसेसिंग कर रहे हैं।")}
            >
              <Volume2 className="h-4 w-4 mr-1" />
              जवाब सुनें
            </Button>
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <Card className="w-full border-2 border-orange-200">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-green-50">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <Mic className="h-5 w-5" />
          आवाज़ सहायक (Voice Assistant)
        </CardTitle>
        <CardDescription>अपनी भाषा में बात करें</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="text-center">
          <Button
            size="lg"
            className={`w-full ${
              isListening
                ? "bg-red-500 hover:bg-red-600 animate-pulse"
                : "bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600"
            }`}
            onClick={isListening ? stopListening : startListening}
            disabled={!isSupported || isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                {voicePrompts[language].processing}
              </>
            ) : isListening ? (
              <>
                <MicOff className="h-5 w-5 mr-2" />
                {voicePrompts[language].stop}
              </>
            ) : (
              <>
                <Mic className="h-5 w-5 mr-2" />
                {voicePrompts[language].start}
              </>
            )}
          </Button>
        </div>

        <AnimatePresence>
          {(isListening || isProcessing) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg border-2 border-green-200"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-75" />
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-150" />
              </div>
              <p className="text-green-700 font-medium">
                {isProcessing ? voicePrompts[language].processing : voicePrompts[language].listening}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-sm text-blue-700 mb-2">आपने कहा:</p>
            <p className="font-medium text-gray-800 mb-3">{transcript}</p>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent"
              onClick={() => speakText("आपका संदेश मिल गया। प्रोसेसिंग कर रहे हैं।")}
            >
              <Volume2 className="h-4 w-4 mr-1" />
              जवाब सुनें
            </Button>
          </motion.div>
        )}

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">उदाहरण वाक्य:</p>
          <div className="space-y-1">
            {voicePrompts[language].examples.slice(0, 3).map((example, index) => (
              <div key={index} className="text-xs text-gray-600 p-2 bg-gray-50 rounded border">
                "{example}"
              </div>
            ))}
          </div>
        </div>

        {!isSupported && (
          <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-700">
              आवाज़ पहचान इस ब्राउज़र में उपलब्ध नहीं है। कृपया Chrome या Safari का उपयोग करें।
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
