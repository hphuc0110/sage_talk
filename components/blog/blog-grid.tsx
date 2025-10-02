import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Cách để thuyết trình hay hơn bằng phương pháp Storytelling",
    image: "/images/blog/star-method.webp",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Mở đầu thuyết trình chiến lược với SCQA Model trong 60s",
    image: "/images/blog/experience-storytelling.webp",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "THE ARENA – Làm chủ kỹ năng trả lời Q&A bằng tiếng Anh cho lãnh đạo",
    image: "/images/blog/tell-me-about-yourself.webp",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
  {
    id: "power-method",
    title: "Tiếng Anh Thuyết Trình Cho Quản Lý Cấp Cao: Lộ Trình Học Dựa Trên Khoa Học Andragogy",
    image: "/images/blog/power-method.webp",
    category: "Kỹ năng giao tiếp",
    readTime: "5 phút đọc",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
            Tất cả
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Phỏng vấn
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Kỹ năng giao tiếp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
