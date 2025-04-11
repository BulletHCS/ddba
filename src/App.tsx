import React from 'react';
import { Dumbbell, Users, Calendar, Trophy, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80&w=2000"
            alt="Boxing Ring"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-wider">DDBA</h1>
              <div className="hidden md:flex space-x-8">
                <a href="#classes" className="hover:text-yellow-500 transition">Classes</a>
                <a href="#trainers" className="hover:text-yellow-500 transition">Trainers</a>
                <a href="#membership" className="hover:text-yellow-500 transition">Membership</a>
                <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
              </div>
            </div>
          </nav>
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-bold mb-4">Train Like a Champion</h2>
              <p className="text-xl mb-8">Join Downtown District Boxing Academy and discover your inner fighter.</p>
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition flex items-center">
                Get Started <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Dumbbell className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Pro Equipment</h3>
              <p className="text-gray-400">State-of-the-art facilities and professional boxing equipment.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-400">Learn from experienced professional boxers and certified coaches.</p>
            </div>
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Competition Ready</h3>
              <p className="text-gray-400">Train for amateur and professional competitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Classes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Boxing",
                description: "Learn the fundamentals of boxing in a supportive environment.",
                image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Advanced Training",
                description: "Intensive training for experienced boxers.",
                image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Youth Program",
                description: "Special classes designed for young aspiring boxers.",
                image: "https://images.unsplash.com/photo-1615117972428-28de87cf5d19?auto=format&fit=crop&q=80&w=800"
              }
            ].map((cls, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden">
                <img src={cls.image} alt={cls.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                  <p className="text-gray-400 mb-4">{cls.description}</p>
                  <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition flex items-center">
                    Learn More <ChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join DDBA today and transform your life through boxing.</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">DDBA</h2>
              <p className="text-gray-400">Downtown District Boxing Academy</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DDBA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;