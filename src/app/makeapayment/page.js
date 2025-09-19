// 'use client';
// import Head from 'next/head';
// import '../styles/warranty.css'; 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

// export default function Makeapayment() {
//   const pathname = usePathname();
//   const siteUrl = "https://www.beyondbikes.com.au";

//   useEffect(() => {
//     const accordionButtons = document.querySelectorAll('.accordion-button');

//     accordionButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const isExpanded = this.getAttribute('aria-expanded') === 'true';
//         // Close all accordions
//         accordionButtons.forEach(btn => {
//           btn.setAttribute('aria-expanded', 'false');
//           btn.classList.add('collapsed');
//           const targetId = btn.getAttribute('data-bs-target');
//           document.querySelector(targetId).classList.remove('show');
//         });

//         // Toggle the clicked accordion
//         if (!isExpanded) {
//           this.setAttribute('aria-expanded', 'true');
//           this.classList.remove('collapsed');
//           const targetId = this.getAttribute('data-bs-target');
//           document.querySelector(targetId).classList.add('show');
//         }
//       });
//     });

//     // Cleanup listeners when component unmounts
//     return () => {
//       accordionButtons.forEach(button => {
//         button.removeEventListener('click', () => {});
//       });
//     };
//   }, []);


//   return (
//     <>
//       <Head>
//         {/* Primary Meta Tags */}
//         <title>Privacy Policy | Beyond Bikes</title>
//         <meta name="description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta name="keywords" content="Beyond Bikes, privacy policy, warranty, data protection, e-bike, rental bike, user data, security measures" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`${siteUrl}/warranty`} />

//         {/* Open Graph / Facebook */}
//         <meta property="og:title" content="Privacy & Warranty Policy | Beyond Bikes" />
//         <meta property="og:description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta property="og:url" content={`${siteUrl}/warranty`} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Privacy & Warranty Policy | Beyond Bikes" />
//         <meta name="twitter:description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta name="twitter:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

//         {/* Structured Data for WebPage and Organization */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": "Privacy Policy | Beyond Bikes",
//               "url": `${siteUrl}/warranty`,
//               "description": "Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information.",
//               "publisher": {
//                 "@type": "Organization",
//                 "name": "Beyond Bikes",
//                 "logo": {
//                   "@type": "ImageObject",
//                   "url": `${siteUrl}/images/beyond-bikes-og.png`
//                 }
//               }
//             })
//           }}
//         />
//       </Head>

//       <Header />


//       {/* Main Content */}
//      <main>
//         {/* Hero Section */}
//         <section className="py-5" style={{ backgroundColor: "#f8f9fa" }} id="how-to-rent">
//           <div className="container text-center">
//             <p className="fw-bold text-uppercase mb-3 letter-spacing-wide" style={{ color: "rgb(26, 59, 25)" }}>
//               HOW TO RENT
//             </p>
//             <h1 className="display-4 fw-bold text-dark mb-4 text-balance">
//               Make 4 Simple Steps to
//               <br />
//               Rent an E-Bike!
//             </h1>
//             <p className="lead text-dark mb-5">
//               Find E-bike rentals at Melbourne CBD with Latino Rentals.
//               <br />
//               Your bike is <strong>READY</strong> waiting for you!
//             </p>

//             {/* Steps Process */}
//             <div className="row g-4 my-5">
//               {/* Step 1 */}
              
//               <div className="col-lg-3 col-md-6">
//                 <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <span className="text-white fw-bold" style={{ fontSize: "18px" }}>
//                         1
//                       </span>
//                     </div>
                    
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-2">
//                     {/* Number Circle - positioned above icon */}
                    

//                     {/* Icon Circle - separate from number */}
//                     <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <i className="bi bi-geo-alt-fill text-white" style={{ fontSize: "2rem" }}></i>
//                     </div>
//                   </div>

//                   <h5 className="fw-bold text-dark mb-2 text-center">Date</h5>
//                   <p className="text-secondary mb-0 text-center">Decide when you are ready to rent a bike.</p>
//                 </div>

//                 {/* Connector Line */}
                
//               </div>

//               {/* Step 2 */}
//               <div className="col-lg-3 col-md-6">
//                 <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <span className="text-white fw-bold" style={{ fontSize: "18px" }}>
//                         2
//                       </span>
//                     </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-2">
//                     {/* Number Circle - positioned above icon */}
                    

//                     {/* Icon Circle - separate from number */}
//                     <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <i className="bi bi-bicycle text-white" style={{ fontSize: "2rem" }}></i>
//                     </div>
//                   </div>

//                   <h5 className="fw-bold text-dark mb-2 text-center">Book Your Pickup</h5>
//                   <p className="text-secondary mb-0 text-center">No online fees. Free inspection available.</p>
//                 </div>

//                 {/* Connector Line */}
               
//               </div>

//               {/* Step 3 */}
//               <div className="col-lg-3 col-md-6">
//                 <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <span className="text-white fw-bold" style={{ fontSize: "18px" }}>
//                         3
//                       </span>
//                     </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-3">
//                     {/* Number Circle - positioned above icon */}
                    

//                     {/* Icon Circle - separate from number */}
//                     <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <i className="bi bi-lightning-charge-fill text-white" style={{ fontSize: "2rem" }}></i>
//                     </div>
//                   </div>

//                   <h5 className="fw-bold text-dark mb-2 text-center">Enjoy Your Ride</h5>
//                   <p className="text-secondary mb-0 text-center">Start earning money instantly.</p>
//                 </div>

//                 {/* Connector Line */}
               
//               </div>

//               {/* Step 4 */}
//               <div className="col-lg-3 col-md-6">
//                 <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <span className="text-white fw-bold" style={{ fontSize: "18px" }}>
//                         4
//                       </span>
//                     </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-2">
//                     {/* Number Circle - positioned above icon */}
                    

//                     {/* Icon Circle - separate from number */}
//                     <div
//                       className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         backgroundColor: "rgb(26, 59, 25)",
//                       }}
//                     >
//                       <i className="bi bi-bicycle text-white position-relative" style={{ fontSize: "2rem" }}>
                        
//                       </i>
//                     </div>
//                   </div>

//                   <h5 className="fw-bold text-dark mb-2 text-center">Return The E-Bike</h5>
//                   <p className="text-secondary mb-0 text-center">Leave the bike at one of our offices in the CBD.</p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="mt-5" id="rent-now">
//               <a
//                 href='/bookrent'
//                 className="btn btn-md fw-bold px-5 py-2 rounded-pill text-white"
//                 style={{ backgroundColor: "rgb(26, 59, 25)", borderColor: "rgb(26, 59, 25)" }}
//               >
//                 Rent Your Bike Now
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="py-5 bg-white">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-5 mb-5 mb-lg-0">
//                 <p className="fw-bold text-uppercase mb-3" style={{ color: "rgb(26, 59, 25)" }}>
//                   FAQ
//                 </p>
//                 <h2 className="display-5 fw-bold text-dark mb-4 text-balance">Everything About Renting Your E-Bike</h2>
//                 <p className="text-muted mb-4">
//                   Renting with Latino Rentals is easy, and we are here to make sure you feel confident at every step.
//                   Here are answers to the most common questions from riders like you.
//                 </p>
//                 <a
//                   href="/contact"
//                   className="btn btn-outline fw-medium px-3 py-2 rounded-pill"
//                   style={{ borderColor: "rgb(26, 59, 25)", color: "rgb(26, 59, 25)" }}
//                 >
//                   <i className="bi bi-telephone me-2"></i>
//                   Any questions? Reach out
//                 </a>
//               </div>

//               <div className="col-lg-7">
//                 <div className="accordion" id="faqAccordion">
//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq1"
//                         aria-expanded="false"
//                         aria-controls="faq1"
//                       >
//                         What types of e-bikes do you offer for rent?
//                       </button>
//                     </h3>
//                     <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         We offer a variety of high-quality electric bikes including city e-bikes, mountain e-bikes, and
//                         cargo e-bikes to suit different riding preferences and needs.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq2"
//                         aria-expanded="false"
//                         aria-controls="faq2"
//                       >
//                         How much does it cost to rent an e-bike?
//                       </button>
//                     </h3>
//                     <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         Our rental rates start from $25 per day with discounts available for longer rental periods.
//                         Contact us for detailed pricing information.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq3"
//                         aria-expanded="false"
//                         aria-controls="faq3"
//                       >
//                         What is included in the rental price?
//                       </button>
//                     </h3>
//                     <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         The rental includes the e-bike, helmet, lock, charger, and basic maintenance support during your
//                         rental period.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq4"
//                         aria-expanded="false"
//                         aria-controls="faq4"
//                       >
//                         Do I need to pay a deposit?
//                       </button>
//                     </h3>
//                     <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         Yes, we require a refundable security deposit which varies depending on the e-bike model. The
//                         deposit is fully refunded upon safe return of the bike.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq5"
//                         aria-expanded="false"
//                         aria-controls="faq5"
//                       >
//                         What happens if the e-bike breaks down?
//                       </button>
//                     </h3>
//                     <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         We provide 24/7 support and will arrange immediate assistance or replacement if you experience
//                         any technical issues during your rental.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq6"
//                         aria-expanded="false"
//                         aria-controls="faq6"
//                       >
//                         Can I extend my rental period?
//                       </button>
//                     </h3>
//                     <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         Yes, you can extend your rental period subject to availability. Contact us at least 24 hours
//                         before your return date to arrange an extension.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq7"
//                         aria-expanded="false"
//                         aria-controls="faq7"
//                       >
//                         Where are you located?
//                       </button>
//                     </h3>
//                     <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         We have multiple pickup and drop-off locations throughout Melbourne CBD. Our main office is
//                         located in the heart of the city with convenient access to public transport.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq8"
//                         aria-expanded="false"
//                         aria-controls="faq8"
//                       >
//                         What documents do I need to rent an e-bike?
//                       </button>
//                     </h3>
//                     <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         You will need a valid government-issued photo ID (driver is license or passport) and a credit card
//                         for the security deposit. International visitors are welcome.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

// 'use client';
// import Head from 'next/head';
// import '../styles/warranty.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

// export default function Makeapayment() {
//   const pathname = usePathname();
//   const siteUrl = "https://www.beyondbikes.com.au";

//   // Accordion logic
//   useEffect(() => {
//     const accordionButtons = document.querySelectorAll('.accordion-button');
//     accordionButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const isExpanded = this.getAttribute('aria-expanded') === 'true';
//         accordionButtons.forEach(btn => {
//           btn.setAttribute('aria-expanded', 'false');
//           btn.classList.add('collapsed');
//           const targetId = btn.getAttribute('data-bs-target');
//           document.querySelector(targetId).classList.remove('show');
//         });
//         if (!isExpanded) {
//           this.setAttribute('aria-expanded', 'true');
//           this.classList.remove('collapsed');
//           const targetId = this.getAttribute('data-bs-target');
//           document.querySelector(targetId).classList.add('show');
//         }
//       });
//     });
//     return () => {
//       accordionButtons.forEach(button => {
//         button.removeEventListener('click', () => {});
//       });
//     };
//   }, []);

//   return (
//     <>
//       <Head>
//         {/* ✅ SEO Primary Meta */}
//         <title>E-Bike Rentals Melbourne CBD | Beyond Bikes</title>
//         <meta
//           name="description"
//           content="Affordable E-Bike rentals in Melbourne CBD. Rent city, mountain & cargo e-bikes from Beyond Bikes. Easy booking, daily rates from $25. Book now!"
//         />
//         <meta
//           name="keywords"
//           content="E-Bike Rental Melbourne, Electric Bike Hire, Melbourne CBD Bike Rentals, Beyond Bikes, Latino Rentals"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`${siteUrl}/warranty`} />

//         {/* ✅ Open Graph */}
//         <meta property="og:title" content="E-Bike Rentals Melbourne CBD | Beyond Bikes" />
//         <meta
//           property="og:description"
//           content="Rent premium e-bikes in Melbourne CBD with Beyond Bikes. Daily rentals from $25. Easy pickup & return. Book your e-bike today!"
//         />
//         <meta property="og:url" content={`${siteUrl}/warranty`} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

//         {/* ✅ Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="E-Bike Rentals Melbourne CBD | Beyond Bikes" />
//         <meta
//           name="twitter:description"
//           content="Affordable daily e-bike rentals in Melbourne CBD. Book online now with Beyond Bikes."
//         />
//         <meta name="twitter:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

//         {/* ✅ Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify([
//               {
//                 "@context": "https://schema.org",
//                 "@type": "WebPage",
//                 "name": "E-Bike Rentals Melbourne CBD | Beyond Bikes",
//                 "url": `${siteUrl}/warranty`,
//                 "description":
//                   "Affordable E-Bike rentals in Melbourne CBD with Beyond Bikes. Rent city, mountain, and cargo e-bikes today!",
//                 "publisher": {
//                   "@type": "Organization",
//                   "name": "Beyond Bikes",
//                   "logo": {
//                     "@type": "ImageObject",
//                     "url": `${siteUrl}/images/beyond-bikes-og.png`
//                   }
//                 }
//               },
//               {
//                 "@context": "https://schema.org",
//                 "@type": "BreadcrumbList",
//                 "itemListElement": [
//                   { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}` },
//                   { "@type": "ListItem", "position": 2, "name": "E-Bike Rentals", "item": `${siteUrl}/warranty` }
//                 ]
//               },
//               {
//                 "@context": "https://schema.org",
//                 "@type": "FAQPage",
//                 "mainEntity": [
//                   {
//                     "@type": "Question",
//                     "name": "What types of e-bikes do you offer for rent?",
//                     "acceptedAnswer": {
//                       "@type": "Answer",
//                       "text": "We offer premium electric city bikes, mountain e-bikes, and cargo e-bikes for daily and long-term rentals in Melbourne CBD."
//                     }
//                   },
//                   {
//                     "@type": "Question",
//                     "name": "How much does it cost to rent an e-bike?",
//                     "acceptedAnswer": {
//                       "@type": "Answer",
//                       "text": "E-Bike rental prices start from just $25 per day. Longer rental packages are available at discounted rates."
//                     }
//                   },
//                   {
//                     "@type": "Question",
//                     "name": "Do I need to pay a deposit?",
//                     "acceptedAnswer": {
//                       "@type": "Answer",
//                       "text": "Yes, we require a refundable security deposit based on the bike model. The deposit is fully refunded when you return the bike safely."
//                     }
//                   }
//                 ]
//               }
//             ])
//           }}
//         />
//       </Head>

//       <Header />

//       {/* ✅ Main Content */}
//       <main>
//         {/* Hero Section */}
//         <section className="py-5" style={{ backgroundColor: "#f8f9fa" }} id="how-to-rent">
//           <div className="container text-center">
//             <p className="fw-bold text-uppercase mb-3 letter-spacing-wide" style={{ color: "rgb(26, 59, 25)" }}>
//               HOW TO RENT
//             </p>
//             <h1 className="display-4 fw-bold text-dark mb-4 text-balance">
//               E-Bike Rentals in Melbourne – 4 Simple Steps
//             </h1>
//             <p className="lead text-dark mb-5">
//               Rent an e-bike in Melbourne CBD with Beyond Bikes. <br />
//               Affordable, reliable, and ready when you are.
//             </p>

//             {/* Steps Section */}
//             <div className="row g-4 my-5">
//               {/* Step 1 */}
//               <div className="col-lg-3 col-md-6">
//                 <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                   style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
//                   <span className="text-white fw-bold" style={{ fontSize: "18px" }}>1</span>
//                 </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-2">
//                     <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
//                       <i className="bi bi-geo-alt-fill text-white" style={{ fontSize: "2rem" }} aria-hidden="true"></i>
//                     </div>
//                   </div>
//                   <h5 className="fw-bold text-dark mb-2 text-center">Choose Date</h5>
//                   <p className="text-secondary mb-0 text-center">Select when you want to start your e-bike rental.</p>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="col-lg-3 col-md-6">
//                 <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                   style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
//                   <span className="text-white fw-bold" style={{ fontSize: "18px" }}>2</span>
//                 </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-2">
//                     <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
//                       <i className="bi bi-bicycle text-white" style={{ fontSize: "2rem" }} aria-hidden="true"></i>
//                     </div>
//                   </div>
//                   <h5 className="fw-bold text-dark mb-2 text-center">Book Pickup</h5>
//                   <p className="text-secondary mb-0 text-center">Reserve your bike online with zero booking fees.</p>
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="col-lg-3 col-md-6">
//                 <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                   style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
//                   <span className="text-white fw-bold" style={{ fontSize: "18px" }}>3</span>
//                 </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-3">
//                     <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
//                       <i className="bi bi-lightning-charge-fill text-white" style={{ fontSize: "2rem" }} aria-hidden="true"></i>
//                     </div>
//                   </div>
//                   <h5 className="fw-bold text-dark mb-2 text-center">Enjoy Ride</h5>
//                   <p className="text-secondary mb-0 text-center">Start exploring Melbourne with your e-bike instantly.</p>
//                 </div>
//               </div>

//               {/* Step 4 */}
//               <div className="col-lg-3 col-md-6">
//                 <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                   style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
//                   <span className="text-white fw-bold" style={{ fontSize: "18px" }}>4</span>
//                 </div>
//                 <div className="card border-0 shadow-sm py-3 px-4 h-75">
//                   <div className="text-center mb-2">
//                     <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                       style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
//                       <i className="bi bi-box-arrow-in-down text-white" style={{ fontSize: "2rem" }} aria-hidden="true"></i>
//                     </div>
//                   </div>
//                   <h5 className="fw-bold text-dark mb-2 text-center">Return Bike</h5>
//                   <p className="text-secondary mb-0 text-center">Return the bike easily at one of our Melbourne CBD offices.</p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="mt-5" id="rent-now">
//               <a
//                 href="/bookrent"
//                 className="btn btn-md fw-bold px-5 py-2 rounded-pill text-white"
//                 style={{ backgroundColor: "rgb(26, 59, 25)", borderColor: "rgb(26, 59, 25)" }}
//               >
//                 Rent Your Bike Now
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* ✅ FAQ Section */}
//         <section className="py-5 bg-white">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-5 mb-5 mb-lg-0">
//                 <p className="fw-bold text-uppercase mb-3" style={{ color: "rgb(26, 59, 25)" }}>
//                   FAQ
//                 </p>
//                 <h2 className="display-5 fw-bold text-dark mb-4 text-balance">
//                   Frequently Asked Questions About E-Bike Rentals
//                 </h2>
//                 <p className="text-muted mb-4">
//                   Renting with Beyond Bikes is simple. Here are the most common questions from riders in Melbourne.
//                 </p>
//                 <a
//                   href="/contact"
//                   className="btn btn-outline fw-medium px-3 py-2 rounded-pill"
//                   style={{ borderColor: "rgb(26, 59, 25)", color: "rgb(26, 59, 25)" }}
//                 >
//                   <i className="bi bi-telephone me-2"></i>
//                   Contact Us
//                 </a>
//               </div>

//               <div className="col-lg-7">
//                 <div className="accordion" id="faqAccordion">
//                   {/* FAQ 1 */}
//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq1"
//                         aria-expanded="false"
//                         aria-controls="faq1"
//                       >
//                         What types of e-bikes do you offer for rent?
//                       </button>
//                     </h3>
//                     <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         We offer <strong>city e-bikes, mountain e-bikes, and cargo e-bikes</strong> to match your riding
//                         style. All bikes come with helmets and locks included. <a href="/bookrent">Book your ride today</a>.
//                       </div>
//                     </div>
//                   </div>

//                   {/* FAQ 2 */}
//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq2"
//                         aria-expanded="false"
//                         aria-controls="faq2"
//                       >
//                         How much does it cost to rent an e-bike?
//                       </button>
//                     </h3>
//                     <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         Rentals start at <strong>$25 per day</strong>. We also offer discounted weekly and monthly packages.
//                         <a href="/contact"> Contact us for special deals</a>.
//                       </div>
//                     </div>
//                   </div>

//                   {/* FAQ 3 */}
//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq3"
//                         aria-expanded="false"
//                         aria-controls="faq3"
//                       >
//                         Do I need to pay a deposit?
//                       </button>
//                     </h3>
//                     <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         Yes, we require a refundable deposit depending on the e-bike model. Your deposit will be
//                         refunded upon safe return of the bike.
//                       </div>
//                     </div>
//                   </div>

//                   {/* FAQ 4 */}
//                   <div className="accordion-item border-0 mb-3">
//                     <h3 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed bg-light border-0 fw-medium py-3"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#faq4"
//                         aria-expanded="false"
//                         aria-controls="faq4"
//                       >
//                         Can I extend my rental?
//                       </button>
//                     </h3>
//                     <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body text-muted">
//                         Absolutely. You can extend your rental if bikes are available. Just let us know at least 24 hours
//                         before your return date.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

'use client';
import Head from 'next/head';
import '../styles/warranty.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Makeapayment() {
  const pathname = usePathname();
  const siteUrl = "https://www.beyondbikes.com.au";

  // Accordion logic
  useEffect(() => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        accordionButtons.forEach(btn => {
          btn.setAttribute('aria-expanded', 'false');
          btn.classList.add('collapsed');
          const targetId = btn.getAttribute('data-bs-target');
          document.querySelector(targetId).classList.remove('show');
        });
        if (!isExpanded) {
          this.setAttribute('aria-expanded', 'true');
          this.classList.remove('collapsed');
          const targetId = this.getAttribute('data-bs-target');
          document.querySelector(targetId).classList.add('show');
        }
      });
    });
    return () => {
      accordionButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <Head>
        {/* ✅ SEO Primary Meta */}
        <title>E-Bike Rentals Melbourne CBD | Beyond Bikes</title>
        <meta
          name="description"
          content="Affordable E-Bike rentals in Melbourne CBD. Rent city, mountain & cargo e-bikes from Beyond Bikes. Easy booking, daily rates from $25. Book now!"
        />
        <meta
          name="keywords"
          content="E-Bike Rental Melbourne, Electric Bike Hire, Melbourne CBD Bike Rentals, Beyond Bikes, Latino Rentals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${siteUrl}/warranty`} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="E-Bike Rentals Melbourne CBD | Beyond Bikes" />
        <meta
          property="og:description"
          content="Rent premium e-bikes in Melbourne CBD with Beyond Bikes. Daily rentals from $25. Easy pickup & return. Book your e-bike today!"
        />
        <meta property="og:url" content={`${siteUrl}/warranty`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Bike Rentals Melbourne CBD | Beyond Bikes" />
        <meta
          name="twitter:description"
          content="Affordable daily e-bike rentals in Melbourne CBD. Book online now with Beyond Bikes."
        />
        <meta name="twitter:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "E-Bike Rentals Melbourne CBD | Beyond Bikes",
                "url": `${siteUrl}/warranty`,
                "description":
                  "Affordable E-Bike rentals in Melbourne CBD with Beyond Bikes. Rent city, mountain, and cargo e-bikes today!",
                "publisher": {
                  "@type": "Organization",
                  "name": "Beyond Bikes",
                  "logo": {
                    "@type": "ImageObject",
                    "url": `${siteUrl}/images/beyond-bikes-og.png`
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}` },
                  { "@type": "ListItem", "position": 2, "name": "E-Bike Rentals", "item": `${siteUrl}/warranty` }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What types of e-bikes do you offer for rent?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer premium electric city bikes, mountain e-bikes, and cargo e-bikes for daily and long-term rentals in Melbourne CBD."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does it cost to rent an e-bike?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "E-Bike rental prices start from just $25 per day. Longer rental packages are available at discounted rates."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need to pay a deposit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we require a refundable security deposit based on the bike model. The deposit is fully refunded when you return the bike safely."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </Head>

      <Header />

      {/* ✅ Main Content */}
      <main>
        {/* Hero Section with Background Image */}
        <motion.section
          id="how-to-rent"
          className="py-5 text-white position-relative"
          style={{
            backgroundImage: "url('/images/Rental-process-Booking-process.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          ></div>

          <div className="container text-center position-relative" style={{ zIndex: 1 }}>
            <p className="fw-bold text-uppercase mb-3" style={{ fontSize: '30px' }}>
              HOW TO RENT
            </p>
            <h1 className="display-4 fw-bold mb-4">E-Bike Rentals in Melbourne – 4 Simple Steps</h1>
            <p className="lead mb-5">Rent an e-bike in Melbourne CBD with Beyond Bikes.</p>
          </div>
        </motion.section>

            {/* Steps Section */}
          <section>
  <div className='container'>
    <motion.h2
      className='mt-5 text-center heading-underline'
      style={{ color: 'rgb(26, 59, 25)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Step to Book Rental E-bike
    </motion.h2>

    <div className="row g-4 mt-3 mb-3">
      {/* Step 1 */}
      <motion.div
        className="col-lg-3 col-md-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
          <span className="text-white fw-bold" style={{ fontSize: "18px" }}>1</span>
        </div>
        <div className="card border-0 shadow-sm py-3 px-4 h-75">
          <div className="text-center mb-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
              <i className="bi bi-geo-alt-fill text-white" style={{ fontSize: "2rem" }}></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark mb-2 text-center">Choose Date</h5>
          <p className="text-secondary mb-0 text-center">Select when you want to start your e-bike rental.</p>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        className="col-lg-3 col-md-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
          <span className="text-white fw-bold" style={{ fontSize: "18px" }}>2</span>
        </div>
        <div className="card border-0 shadow-sm py-3 px-4 h-75">
          <div className="text-center mb-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
              <i className="bi bi-bicycle text-white" style={{ fontSize: "2rem" }}></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark mb-2 text-center">Book Pickup</h5>
          <p className="text-secondary mb-0 text-center">Reserve your bike online with zero booking fees.</p>
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        className="col-lg-3 col-md-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
          <span className="text-white fw-bold" style={{ fontSize: "18px" }}>3</span>
        </div>
        <div className="card border-0 shadow-sm py-3 px-4 h-75">
          <div className="text-center mb-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
              <i className="bi bi-lightning-charge-fill text-white" style={{ fontSize: "2rem" }}></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark mb-2 text-center">Enjoy Ride</h5>
          <p className="text-secondary mb-0 text-center">Start exploring Melbourne with your e-bike instantly.</p>
        </div>
      </motion.div>

      {/* Step 4 */}
      <motion.div
        className="col-lg-3 col-md-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{ width: "50px", height: "50px", backgroundColor: "rgb(26, 59, 25)" }}>
          <span className="text-white fw-bold" style={{ fontSize: "18px" }}>4</span>
        </div>
        <div className="card border-0 shadow-sm py-3 px-4 h-75">
          <div className="text-center mb-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "70px", height: "70px", backgroundColor: "rgb(26, 59, 25)" }}>
              <i className="bi bi-box-arrow-in-down text-white" style={{ fontSize: "2rem" }}></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark mb-2 text-center">Return Bike</h5>
          <p className="text-secondary mb-0 text-center">Return the bike easily at one of our Melbourne CBD offices.</p>
        </div>
      </motion.div>
    </div>

    {/* CTA */}
    <motion.div
      className="mt-5 d-flex justify-content-center"
      id="rent-now"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <a
        href="/bookrent"
        className="btn btn-md fw-bold px-5 py-2 rounded-pill text-white"
        style={{ backgroundColor: "rgb(26, 59, 25)" }}
      >
        Rent Your Bike Now
      </a>
    </motion.div>
  </div>
</section>


<section className="py-5 bg-white">
  <div className="container">
    <div className="row">
      {/* Left Side */}
      <motion.div
        className="col-lg-5 mb-5 mb-lg-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p
          className="fw-bold text-uppercase mb-1"
          style={{ color: "rgb(26, 59, 25)", fontSize: "30px" }}
        >
          FAQ
        </p>
        <h2 className="display-5 fw-bold text-dark mb-4 text-balance">
          Frequently Asked Questions About E-Bike Rentals
        </h2>
        <p className="text-muted mb-4">
          Renting with Beyond Bikes is simple. Here are the most common
          questions from riders in Melbourne.
        </p>

        <motion.a
          href="/contact"
          className="btn btn-outline fw-medium px-3 py-2 rounded-pill"
          style={{
            borderColor: "rgb(26, 59, 25)",
            color: "rgb(26, 59, 25)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="bi bi-telephone me-2"></i>
          Contact Us
        </motion.a>
      </motion.div>

      {/* Right Side (Accordion with animation for each item) */}
      <motion.div
        className="col-lg-7"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="accordion" id="faqAccordion">
          {[
            {
              q: "What types of e-bikes do you offer for rent?",
              a: "We offer city e-bikes, mountain e-bikes, and cargo e-bikes to match your riding style. All bikes come with helmets and locks included. ",
              link: "/bookrent",
              linkText: "Book your ride today",
            },
            {
              q: "How much does it cost to rent an e-bike?",
              a: "Rentals start at $25 per day. We also offer discounted weekly and monthly packages.",
              link: "/contact",
              linkText: "Contact us for special deals",
            },
            {
              q: "Do I need to pay a deposit?",
              a: "Yes, we require a refundable deposit depending on the e-bike model. Your deposit will be refunded upon safe return of the bike.",
            },
            {
              q: "Can I extend my rental?",
              a: "Absolutely. You can extend your rental if bikes are available. Just let us know at least 24 hours before your return date.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="accordion-item border-0 mb-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-light border-0 fw-medium py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${i + 1}`}
                  aria-expanded="false"
                  aria-controls={`faq${i + 1}`}
                >
                  {faq.q}
                </button>
              </h3>
              <div
                id={`faq${i + 1}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  {faq.a}{" "}
                  {faq.link && (
                    <a href={faq.link} className="fw-medium">
                      {faq.linkText}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
