"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";

const data = [
  {
    title: "মহা ধুমধামে",
    description: "বট-পাকুর গাছের বিয়ে",
    views: "1.2k",
    thumbnail: "/img/news.jpg",
  },
  {
    title: "আমরা এই কমিশন মানি না",
    description: "জামায়াত আমির",
    views: "2.2k",
    thumbnail: "/img/news.jpg",
  },
  {
    title: "৩ দিন বিদ্যুৎ না থাকায়",
    description: "লাইন ধরে ফোন চার্জ দিচ্ছে গ্রামবাসী",
    views: "612",
    thumbnail: "/img/news.jpg",
  },
  {
    title: "বিশ্বের এই বিশাল জুতোই কি",
    description: "বিশ্বের সবচেয়ে বড়?",
    views: "790",
    thumbnail: "/img/news.jpg",
  },
  {
    title: "এক ইলিশ বিক্রি হল ১৪ হাজার টাকা",
    description: "ওজন আড়াই কেজি",
    views: "1.1k",
    thumbnail: "/img/news.jpg",
  },
  {
    title: "ইউরেজিতে ভিডিও বানিয়ে",
    description: "নেট দুনিয়ায় ভাইরাল ট্রাক্টর চালক",
    views: "1.3k",
    thumbnail: "/img/news.jpg",
  },
];

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  // small divece responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 250;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: isMobile ? "100%" : "20%",
        overflow: "hidden",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdKeyboardArrowRight />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          gap: "20px",
          scrollSnapType: "x mandatory",
          width: "100%",
        }}
      >
        {/* Hide scrollbar */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {data.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: "250px",
              height: "350px",
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              scrollSnapAlign: "start",
            }}
          >
            <Image
              src={item.thumbnail}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
              }}
            ></div>

              {/* play button  */}
            <button
              onClick={scrollLeft}
              style={{
                position: "absolute",
                left: "45%",
                top: "50%",
                right: "50%",
                transform: "translateY(-50%)",
                // transform: "translatex(-50%)",
                zIndex: 1,
                // backgroundColor: "#fff",
                border: "3px solid white",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPlay style={{fontSize: "20px", color: "white"}} />
            </button>

            {/* Views */}
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "5px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IoMdEye style={{ fontSize: "16px" }} />
              {item.views}
            </div>

            {/* Title and Description */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                right: 10,
                color: "white",
                textAlign: "center",
              }}
            >
              <h4 style={{ marginBottom: "5px", fontSize: "16px" }}>
                {item.title}
              </h4>
              <p style={{ margin: 0, fontSize: "14px" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
