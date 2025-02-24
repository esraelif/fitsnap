"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router için
import { FaComment, FaShareAlt } from "react-icons/fa";
import { faqData } from "../data/faq"; // FAQ verilerini import ediyoruz

export default function Header() {
  const router = useRouter(); // Yönlendirme hook'u
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [showBlog, setShowBlog] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false); // FAQ bölümünü göstermek için state
  const [expandedPost, setExpandedPost] = useState(null);
  const [flippedCards, setFlippedCards] = useState({}); // Her bir kartın dönme durumunu tutacak state
  const options = ["Breakfast", "Lunch", "Dinner", "Snack", "All"];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogPosts");
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data);
        } else {
          console.error("Failed to fetch blog posts");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleOptionClick = (option) => {
    if (option === "All") {
      setSelectedOptions(["All"]);
    } else {
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions.filter((item) => item !== "All"), option];
      setSelectedOptions(updatedOptions);
    }
  };

  const toggleReadMore = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  // Anasayfaya yönlendirme fonksiyonu
  const goToHome = () => {
    router.push("/");
  };

  // Kartın dönme durumunu değiştiren fonksiyon
  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Kartın mevcut durumunu tersine çevir
    }));
  };

  return (
    <div className="bg-white absolute inset-0">
      <header
        id="header"
        className="flex flex-wrap justify-between items-center p-4 bg-teal-600 text-white"
      >
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          {/* FITSNAP başlığı - Tıklayınca ana sayfaya yönlendirir */}
          <h1
            className="text-2xl font-bold w-full md:w-auto text-center md:text-left cursor-pointer"
            onClick={goToHome}
          >
            FITSNAP
          </h1>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            <button
              className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
              onClick={() => setShowOptions(!showOptions)}
            >
              Popular Recipes
            </button>
            {showOptions && (
              <div className="flex flex-col gap-2 mt-2">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`px-4 py-2 rounded ${
                      selectedOptions.includes(option)
                        ? "bg-yellow-500"
                        : "bg-teal-500"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            <button
              className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
              onClick={() => setShowBlog(!showBlog)}
            >
              Blog
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start mt-4 md:mt-0">
          <button
            className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
            onClick={() => setShowFAQ(!showFAQ)}
          >
            F.A.Q
          </button>
          <button className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400">
            LOGIN
          </button>
          <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">
            GET STARTED
          </button>
        </div>
      </header>

      {showBlog && (
        <div className="p-4 space-y-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-xl font-bold text-teal-700">{post.title}</h2>
              <p className="text-sm text-gray-500">By {post.author}</p>
              <p className="mt-2">
                {expandedPost === post.id ? post.fullContent : post.body}
              </p>
              <button
                className="text-blue-500 mt-2 hover:underline"
                onClick={() => toggleReadMore(post.id)}
              >
                {expandedPost === post.id ? "Show Less" : "Read More..."}
              </button>

              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center text-gray-600">
                  <FaComment className="mr-1" /> Comment
                </button>
                <button className="flex items-center text-gray-600">
                  <FaShareAlt className="mr-1" /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showFAQ && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="relative h-48 cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => toggleFlip(faq.id)} // Kartın üzerine tıklandığında döndür
            >
              {/* Kartın ön yüzü */}
              <div
                className={`absolute w-full h-full bg-white rounded-lg shadow-lg p-4 flex items-center justify-center text-center transition-transform duration-500 ${
                  flippedCards[faq.id] ? "rotate-y-180" : ""
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-teal-700 font-bold">{faq.question}</p>
              </div>
              {/* Kartın arka yüzü */}
              <div
                className={`absolute w-full h-full bg-teal-500 rounded-lg shadow-lg p-4 flex items-center justify-center text-center transition-transform duration-500 ${
                  flippedCards[faq.id] ? "" : "rotate-y-180"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
