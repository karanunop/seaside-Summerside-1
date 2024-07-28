// pages/Gallery.js

import React from "react";
import Image from "next/image";
import work1 from "../public/work1.jpg";
import work2 from "../public/work2.jpg";
import work3 from "../public/work3.jpg";
import work4 from "../public/work4.jpg";
import work5 from "../public/work5.jpg";
import work6 from "../public/work6.jpg";
import work7 from "../public/work7.jpg";
import work8 from "../public/work8.jpg";
import work9 from "../public/work9.jpg";
import work10 from "../public/work10.jpg";
import work11 from "../public/work11.jpg";

const Gallery = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Landscaping Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work1}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work2}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work3}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work4}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work5}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work6}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work7}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work8}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work9}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work10}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative" style={{ width: "300px", height: "200px" }}>
          <Image
            src={work11}
            alt="Landscaping Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
