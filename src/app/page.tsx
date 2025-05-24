import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const votingPolls = [
  {
    id: 1,
    title: "Student Government Election",
    description:
      "Vote for your student government representatives. Voting power based on academic year (1-4 votes). Only juniors and seniors can run for office.",
    date: "Wed Nov 23, 2023",
    participants: "0x5cC...9293",
    image: "/placeholder.svg?height=200&width=300",
    contestantImage: "/placeholder.svg?height=100&width=100",
    minVotingPower: 3,
    type: "government",
  },
  {
    id: 2,
    title: "Class Representative Election",
    description:
      "Choose your class representatives for the academic year. All students with valid voter NFTs can participate.",
    date: "Wed Nov 23, 2023",
    participants: "0x5cC...9293",
    image: "/placeholder.svg?height=200&width=300",
    contestantImage: "/placeholder.svg?height=100&width=100",
    minVotingPower: 1,
    type: "class",
  },
  {
    id: 3,
    title: "Student Union Board Election",
    description: "Select the student union board members. Higher academic standing provides more voting weight.",
    date: "Wed Nov 23, 2023",
    participants: "0x5cC...9293",
    image: "/placeholder.svg?height=200&width=300",
    contestantImage: "/placeholder.svg?height=100&width=100",
    minVotingPower: 2,
    type: "union",
  },
  {
    id: 4,
    title: "Academic Senate Election",
    description:
      "Vote for student representatives to the academic senate. Only senior students can run for these positions.",
    date: "Wed Nov 23, 2023",
    participants: "0x5cC...9293",
    image: "/placeholder.svg?height=200&width=300",
    contestantImage: "/placeholder.svg?height=100&width=100",
    minVotingPower: 4,
    type: "senate",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold text-xl">Blue</span>
          <span className="text-white font-bold text-xl">Votes</span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Connect wallet</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">University Voting System</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Transparent university elections powered by blockchain. Your voting power increases with academic progression.
          NFT-based voter verification ensures fair and secure elections.
        </p>
        <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium">
          Register as Candidate
        </Button>
      </section>

      {/* Start Voting Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Start Voting</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {votingPolls.map((poll) => (
              <Card key={poll.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                <div className="relative">
                  <Image
                    src={poll.image || "/placeholder.svg"}
                    alt={poll.title}
                    width={600}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Image
                      src={poll.contestantImage || "/placeholder.svg"}
                      alt="Contestant"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg border-2 border-white object-cover"
                    />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{poll.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{poll.description}</p>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="border-blue-500 text-blue-500">
                        Min. {poll.minVotingPower} votes required
                      </Badge>
                    </div>
                    <div className="text-gray-400">
                      {poll.type === "government" && "Juniors/Seniors only"}
                      {poll.type === "senate" && "Seniors only"}
                      {poll.type === "class" && "All students"}
                      {poll.type === "union" && "Sophomores+"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{poll.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{poll.participants}</span>
                    </div>
                  </div>

                  <Link href={`/poll/${poll.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enter</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
            <p className="mt-1">With Love ❤️ by Ashley</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
