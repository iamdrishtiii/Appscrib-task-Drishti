import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center text-gray-800">
      <main className="w-full max-w-6xl px-6 py-12">

        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="font-bold text-3xl mb-6 text-center">Who We Are</h2>
          <div className="space-y-4 text-gray-600 text-center">
            <p>
              Appscrib began as a simple idea: to make high-quality, stylish products
              accessible to everyone. Founded in 2019 by a team of passionate designers
              and entrepreneurs, we've grown from a small startup to a trusted brand
              serving customers worldwide.
            </p>
            <p>
              Our journey started when our founders noticed a gap in the market for
              products that combined exceptional quality with contemporary design at fair
              prices.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white shadow-md rounded-xl p-6">
              <span className="block text-2xl font-bold ">50K+</span>
              <span className="text-gray-500">Happy Customers</span>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <span className="block text-2xl font-bold ">500+</span>
              <span className="text-gray-500">Products</span>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <span className="block text-2xl font-bold ">25+</span>
              <span className="text-gray-500">Countries</span>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <span className="block text-2xl font-bold ">99%</span>
              <span className="text-gray-500">Satisfaction Rate</span>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl">⭐</div>
              <h3 className="font-semibold text-xl mt-3 mb-2">Quality First</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure it meets our
                high standards for durability, functionality, and design excellence.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl">🌱</div>
              <h3 className="font-semibold text-xl mt-3 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical sourcing and eco-friendly practices,
                working with suppliers who share our environmental values.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl">💝</div>
              <h3 className="font-semibold text-xl mt-3 mb-2">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. Our dedicated support team ensures
                every interaction exceeds your expectations.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl">🚀</div>
              <h3 className="font-semibold text-xl mt-3 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new ways to improve our products and services,
                staying ahead of trends and customer needs.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-gray-600">The passionate people behind TrendCraft</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-100  rounded-full text-xl font-bold">D</div>
              <h3 className="font-semibold text-lg mt-3">Drishti</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-100  rounded-full text-xl font-bold">X</div>
              <h3 className="font-semibold text-lg mt-3">XYZ</h3>
              <p className="text-gray-500">Head of Design</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-100  rounded-full text-xl font-bold">A</div>
              <h3 className="font-semibold text-lg mt-3">ABC</h3>
              <p className="text-gray-500">Customer Success</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-100  rounded-full text-xl font-bold">H</div>
              <h3 className="font-semibold text-lg mt-3">Harry</h3>
              <p className="text-gray-500">Operations Director</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-800 text-white py-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="mb-6 text-lg">
            Discover our curated collection of premium products designed for modern living
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-[700]  font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-500 transition"
          >
            Shop Now
          </Link>
        </section>
      </main>
    </div>
  )
}

export default About
