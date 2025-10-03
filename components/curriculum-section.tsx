"use client"

import { useState } from "react"
import Image from "next/image"

export function CurriculumSection() {
  const modules = [
    {
      number: 1,
      title: "",
      subtitle: "",
      image: "/images/module1.jpg",
      details: [
      ],
    },
    {
      number: 2,
      title: "",
      subtitle: "",
      image: "/images/module2.jpg",
      details: [],
    },
    {
      number: 3,
      title: "",
      subtitle: "",
      image: "/images/module3.jpg",
      details: [
      ],
    },
    {
      number: 4,
      title: "",
      subtitle: "",
      image: "/images/module4.jpg",
      details: [
      ],
    },
    {
      number: 5,
      title: "",
      subtitle: "",
      image: "/images/module5.jpg",
      details: [
      ],
    },
  ]

  const [selected, setSelected] = useState<number>(1)

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#01693c] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Lộ trình 5+1
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT{" "}
            <span className="text-[#01693c]"></span>
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#01693c]">
            KHÓA HỌC TIẾNG ANH
          </h3>
        </div>

        {/* 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Bên trái: danh sách card */}
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.number}
                onClick={() => setSelected(module.number)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 
                  ${
                    selected === module.number
                      ? "bg-[#01693c] text-white"
                      : "bg-yellow-500 text-black"
                  }
                  hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-sm font-bold text-white">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                    <p className="text-sm opacity-80">{module.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bên phải: hiển thị ảnh + chi tiết */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
            {modules
              .filter((m) => m.number === selected)
              .map((module) => (
                <div key={module.number}>
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={600}
                    height={400}
                    className="rounded-lg mb-6 object-cover w-full h-64"
                  />
                  <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.subtitle}</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
                    {module.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
