import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const risingSignData = {
  aries: { emoji: "♈", description: "Aries rising signs are known for their confident and energetic demeanor. They often appear bold, assertive, and ready to take on any challenge that comes their way." },
  taurus: { emoji: "♉", description: "Taurus rising signs exude a calm and steady presence. They often appear grounded, practical, and have a strong appreciation for beauty and comfort." },
  gemini: { emoji: "♊", description: "Gemini rising signs are typically perceived as quick-witted and communicative. They often appear curious, adaptable, and enjoy engaging in diverse conversations." },
  cancer: { emoji: "♋", description: "Cancer rising signs often come across as nurturing and empathetic. They may appear sensitive, intuitive, and deeply connected to their emotions and the emotions of others." },
  leo: { emoji: "♌", description: "Leo rising signs tend to have a charismatic and dramatic presence. They often appear confident, warm-hearted, and naturally draw attention in social situations." },
  virgo: { emoji: "♍", description: "Virgo rising signs are often perceived as analytical and detail-oriented. They may appear organized, helpful, and have a knack for problem-solving." },
  libra: { emoji: "♎", description: "Libra rising signs typically have a charming and diplomatic demeanor. They often appear balanced, social, and have a strong sense of fairness and harmony." },
  scorpio: { emoji: "♏", description: "Scorpio rising signs often have an intense and mysterious aura. They may appear passionate, perceptive, and have a powerful presence that others find intriguing." },
  sagittarius: { emoji: "♐", description: "Sagittarius rising signs are usually seen as optimistic and adventurous. They often appear enthusiastic, philosophical, and have a love for exploring new ideas and experiences." },
  capricorn: { emoji: "♑", description: "Capricorn rising signs tend to have a serious and responsible demeanor. They often appear ambitious, disciplined, and have a strong sense of authority." },
  aquarius: { emoji: "♒", description: "Aquarius rising signs are typically perceived as unique and innovative. They often appear independent, intellectual, and have a progressive outlook on life." },
  pisces: { emoji: "♓", description: "Pisces rising signs often have a dreamy and compassionate presence. They may appear intuitive, creative, and have a deep connection to the spiritual or artistic realms." },
}

export default function Component() {
  const [risingSign, setRisingSign] = useState('')
  const [signInfo, setSignInfo] = useState<{ emoji: string; description: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sign = risingSign.toLowerCase()
    if (sign in risingSignData) {
      setSignInfo(risingSignData[sign as keyof typeof risingSignData])
    } else {
      setSignInfo(null)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Rising Sign Description</CardTitle>
        <CardDescription>Enter a rising sign to see its description and emoji</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="risingSign">Rising Sign</Label>
            <Input
              type="text"
              id="risingSign"
              value={risingSign}
              onChange={(e) => setRisingSign(e.target.value)}
              placeholder="e.g., Aries, Taurus, Gemini"
              required
            />
          </div>
          <Button type="submit" className="w-full">Get Description</Button>
        </form>
        {signInfo && (
          <div className="mt-6 space-y-2">
            <h3 className="text-2xl font-semibold text-center">
              {risingSign.charAt(0).toUpperCase() + risingSign.slice(1)} Rising {signInfo.emoji}
            </h3>
            <p className="text-center text-6xl">{signInfo.emoji}</p>
            <p className="text-center">{signInfo.description}</p>
          </div>
        )}
        {risingSign && !signInfo && (
          <p className="mt-4 text-center text-red-500">
            Rising sign not found. Please enter a valid zodiac sign.
          </p>
        )}
      </CardContent>
    </Card>
  )
}