"use client";
import Head from "next/head";
import Image from "next/image";
import "../styles/About.css";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Footer from "../components/Footer";
import EbikesDeliveryAbout from "../../../public/images/EbikesDeliveryAbout-latest.jpg";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const pathname = usePathname();
  const siteUrl = "https://www.beyondbikes.com.au";

  // ✅ Content + Image data
  const contentData = [
    {
      title: "MISSION",
      description:
        "Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.",
      linkText: "MISSION",
      image: "/images/Latest-admin-image.jpg",
    },
    {
      title: "STORE BACKGROUND",
      description:
        "At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.",
      linkText: "STORE BACKGROUND",
      image: "/images/Latest-repairer-admin.jpg",
    },
  ];

  const handleArrowClick = () => {
    setFade(true); // start fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      setFade(false); // fade in new content
    }, 300); // match CSS animation time
  };

  const currentContent = contentData[currentIndex];
  const MainHeadingTag = pathname === "/about" ? "h1" : "h2";
  const SubHeadingTag = pathname === "/about" ? "h2" : "h3";

  return (
    <>
      <Head>
        <title>{currentContent.title} | Beyond Bikes – Melbourne e-Bike Rentals</title>
        <meta name="description" content={currentContent.description} />
        <link rel="canonical" href={`${siteUrl}/about`} />
        <meta name="robots" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="keywords" content="Beyond Bikes, electric bike rentals Melbourne, rent e-bikes, e-bike hire Melbourne, food delivery e-bikes" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Beyond Bikes" />
<meta property="og:title" content="About Us | Beyond Bikes – Melbourne e-Bike Rentals" />
<meta property="og:description" content="Learn more about Beyond Bikes – our mission, store background, and why we’re Melbourne’s trusted choice for e-bike rentals." />
<meta property="og:url" content="https://www.beyondbikes.com.au/about" />
<meta property="og:image" content="https://www.beyondbikes.com.au/images/EbikesDeliveryAbout-latest.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About Us | Beyond Bikes – Melbourne e-Bike Rentals" />
<meta name="twitter:description" content="Learn more about Beyond Bikes – our mission, store background, and why we’re Melbourne’s trusted choice for e-bike rentals." />
<meta name="twitter:image" content="https://www.beyondbikes.com.au/images/EbikesDeliveryAbout-latest.jpg" />
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntityOfPage": "https://www.beyondbikes.com.au/about",
        "headline": "About Beyond Bikes – Melbourne e-Bike Rentals",
        "description":
          "Beyond Bikes offers reliable and affordable electric bike rentals designed for everyday riders and food delivery professionals in Melbourne.",
        "publisher": {
          "@type": "Organization",
          "name": "Beyond Bikes",
          "url": "https://www.beyondbikes.com.au",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.beyondbikes.com.au/images/logo.png"
          }
        }
      }),
    }}
  />
      </Head>

      {pathname !== "/" && <Header />}

      {/* Hero Banner */}
      <section
        className="hero-section position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${EbikesDeliveryAbout.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
        role="banner"
        aria-label="About Us Hero Section"
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <MainHeadingTag className="display-4 text-center fw-bold mb-0">About Us</MainHeadingTag>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 bg-light">
        <div className="container scroll-fade">
          <div className="row align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <div className={`${fade ? "fade-out" : "fade-in"}`}>
                <Image
                  key={currentContent.image} // force reload on change
                  src={currentContent.image}
                  alt={currentContent.title}
                  width={500}
                  height={500}
                  className="rounded img-fluid shadow set-image-size-about-latest-ui"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="col-lg-6">
              <div className={`ps-lg-4 content-wrapper ${fade ? "fade-out" : "fade-in"}`}>
                <SubHeadingTag className="fs-3 fw-bold mb-2" style={{color:'#1A3B19',fontFamily:'system-ui'}}>
                  {currentContent.title}
                </SubHeadingTag>
                <p className="mb-2">{currentContent.description}</p>
                <button
                  onClick={handleArrowClick}
                  className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center"
                  style={{color:'#1A3B19',fontWeight:'bold',fontFamily:'system-ui'}}
                >
                  <span className="me-2">{currentContent.linkText}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow-icon"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
  dangerouslySetInnerHTML={{
    __html: `
      function handleScrollFade() {
        const elements = document.querySelectorAll('.scroll-fade');
        const windowBottom = window.innerHeight + window.scrollY;
        elements.forEach(el => {
          const elementTop = el.getBoundingClientRect().top + window.scrollY;
          if (windowBottom > elementTop + 100) {
            el.classList.add('visible');
          }
        });
      }
      window.addEventListener('scroll', handleScrollFade);
      window.addEventListener('load', handleScrollFade);
    `,
  }}
/>


      <style jsx>{`
        .image-wrapper,
        .content-wrapper {
          transition: opacity 0.3s ease-in-out;
        }
        .fade-out {
          opacity: 0;
        }
        .fade-in {
          opacity: 1;
        }
        .btn:hover .arrow-icon {
          transform: translateX(5px);
          transition: transform 0.3s ease;
        }

        .scroll-fade {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .scroll-fade.visible {
    opacity: 1;
    transform: translateY(0);
  }
      `}</style>

      {pathname === "/about" && <Footer />}
    </>
  );
}
