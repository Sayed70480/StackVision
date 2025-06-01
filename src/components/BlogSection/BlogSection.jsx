import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // If using React Router

export default function BlogSection() {
  return (
    <section className="bg-white py-16" id="blog">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <FileText className="mx-auto text-primary w-10 h-10 mb-3" />
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover insights, tips, and stories from our team on design, development, and technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {/* Blog Post 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Why UI/UX Design Matters</h3>
            <p className="text-gray-600 text-sm mb-4">
              Great design isn't just about looks — it's about creating an intuitive, satisfying user experience...
            </p>
            <Link
              to="/blog/ui-ux-design"
              className="inline-flex items-center text-primary hover:underline text-sm font-medium"
            >
              Read More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Top 5 Web Dev Trends in 2025</h3>
            <p className="text-gray-600 text-sm mb-4">
              From AI integration to serverless architecture, here's what's shaping the web in 2025...
            </p>
            <Link
              to="/blog/web-trends-2025"
              className="inline-flex items-center text-primary hover:underline text-sm font-medium"
            >
              Read More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">React vs React Native</h3>
            <p className="text-gray-600 text-sm mb-4">
              Understand the core differences, use cases, and when to choose React vs React Native for your next app...
            </p>
            <Link
              to="/blog/react-vs-react-native"
              className="inline-flex items-center text-primary hover:underline text-sm font-medium"
            >
              Read More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
