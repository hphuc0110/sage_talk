"use client"

import { useState } from "react"
import { RefreshCw, User, Users, Shield, Apple } from "lucide-react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    { icon: RefreshCw, label: "Flipped Classroom", content: "Học lý thuyết tại nhà - Toàn bộ thời gian trên lớp dành cho luyện tập thực chiến & phản hồi trực tiếp." },
    { icon: User, label: "Phản Biện 1:1", content: "Giảng viên đóng vai đối tác chiến lược - Đặt câu hỏi phản biện, giúp tinh chỉnh thông điệp." },
    { icon: Users, label: "Cá nhân hóa", content: "Mỗi học viên phát triển chính bài thuyết trình thực tế của mình." },
    { icon: Shield, label: "Andragogy", content: "Thiết kế theo phương pháp học tập trưởng thành - Chủ động, xuất phát từ nhu cầu thật." },
    { icon: Apple, label: "Learning by Doing", content: "Trình bày trong môi trường mô phỏng - Luyện phản xạ và bản lĩnh trình bày chuyên nghiệp." },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#dbe4f9] to-[#b9c7e8]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#01693c] mb-3">
            Phương Pháp Đào Tạo
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black/80">
            Tinh gọn - Thực chiến - Cá nhân hóa - Uy tín
          </p>
        </div>

        {/* Các bước */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative max-w-[220px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#01693c] flex items-center justify-center mb-3 shadow-md transition-transform duration-300 hover:scale-110">
                <step.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              {/* Label */}
              <span className="text-black font-semibold text-sm sm:text-base">
                {step.label}
              </span>

              {/* Nội dung luôn hiển thị trên mobile, tooltip hover trên desktop */}
              <div className="block lg:hidden mt-2 text-xs sm:text-sm text-black/70">
                {step.content}
              </div>
              {hoveredIndex === index && (
                <div className="hidden lg:block absolute top-full mt-5 w-60 bg-white text-black text-sm p-4 rounded-xl shadow-lg z-10 animate-fadeInUp">
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
