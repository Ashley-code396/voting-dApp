"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X, User, GraduationCap, Vote } from "lucide-react"

export default function RegisterCandidatePage() {
  const [campaignPromises, setCampaignPromises] = useState<string[]>([""])
  const [candidateName, setCandidateName] = useState("")
  const [isEligible, setIsEligible] = useState(true)

  const addPromise = () => {
    setCampaignPromises([...campaignPromises, ""])
  }

  const removePromise = (index: number) => {
    setCampaignPromises(campaignPromises.filter((_, i) => i !== index))
  }

  const updatePromise = (index: number, value: string) => {
    const updated = [...campaignPromises]
    updated[index] = value
    setCampaignPromises(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle candidate registration
    console.log("Registering candidate:", { candidateName, campaignPromises })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 font-bold text-xl">Blue</span>
            <span className="text-white font-bold text-xl">Votes</span>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Connect wallet</Button>
      </header>

      {/* Registration Form */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Register as Candidate</h1>
            <p className="text-gray-400">Join the university election as a candidate</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Eligibility Check */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span>Eligibility Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Academic Year:</span>
                  <Badge className="bg-green-600">Junior</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Voting Power:</span>
                  <div className="flex items-center space-x-1">
                    <Vote className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500 font-bold">3</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Min. Required:</span>
                  <span className="text-green-500">3 ✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status:</span>
                  <Badge className={isEligible ? "bg-green-600" : "bg-red-600"}>
                    {isEligible ? "Eligible" : "Not Eligible"}
                  </Badge>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold mb-2">Eligible Positions:</h4>
                  <div className="space-y-1">
                    <Badge variant="outline" className="border-green-500 text-green-500 text-xs block w-fit">
                      Student Government
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-500 text-xs block w-fit">
                      Class Representative
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-500 text-xs block w-fit">
                      Student Union Board
                    </Badge>
                    <Badge variant="outline" className="border-gray-500 text-gray-500 text-xs block w-fit">
                      Academic Senate (Seniors only)
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span>Candidate Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                      <Input
                        type="text"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Campaign Promises</label>
                      <div className="space-y-3">
                        {campaignPromises.map((promise, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Textarea
                              value={promise}
                              onChange={(e) => updatePromise(index, e.target.value)}
                              placeholder={`Campaign promise ${index + 1}`}
                              className="bg-gray-800 border-gray-700 text-white flex-1"
                              rows={2}
                              required
                            />
                            {campaignPromises.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removePromise(index)}
                                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={addPromise}
                          className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Promise
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Minimum voting power of 3 (Junior standing)</li>
                        <li>• Valid student voter NFT</li>
                        <li>• At least one campaign promise</li>
                        <li>• Must not be graduated</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={!isEligible || !candidateName || campaignPromises.every((p) => !p.trim())}
                    >
                      Register as Candidate
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© 2023</p>
            <p className="mt-1">With Love ❤️ by Daltonic</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
