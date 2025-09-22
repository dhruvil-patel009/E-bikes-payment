// 'use client';
// import Head from 'next/head';
// import '../styles/Payment.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// export default function bookrent() {

//   const siteUrl = "https://www.beyondbikes.com.au";

//   const [ranges, setRanges] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const [errors, setErrors] = useState({});

//   // Validation function
//   const validateField = (name, value) => {
//     let message = "";

//     if (name === "Full Name") {
//       if (!value.trim()) message = "Full name is required.";
//       else if (value.length < 3) message = "Name must be at least 3 characters.";
//     }

//     if (name === "Email Address") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!value.trim()) message = "Email is required.";
//       else if (!emailRegex.test(value)) message = "Enter a valid email address.";
//     }

//     if (name === "Phone Number") {
//       const phoneRegex = /^[0-9]{10}$/; // Adjust pattern if needed
//       if (value && !phoneRegex.test(value))
//         message = "Enter a valid 10-digit phone number.";
//     }

//     setErrors((prev) => ({ ...prev, [name]: message }));
//   };

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

//             <h1 className="fw-bold text-dark mb-2 text-balance">
//               Book Rental E-bike
//               <br />

//             </h1>
//            <p className='text-secondary' style={{fontSize:'16px'}}>Complete Form fullfill information to rent E-bike</p>
//  </div>
//          <section className="container px-sm-0 px-3 py-3">

//           <div className="row g-4 d-flex justify-content-center">

//             {/* Form Section */}
//             <div className="col-lg-6" itemScope itemType="https://schema.org/ContactPage">

// <div className="interactive-card p-4">
//       <form
//         className="contact-form"
//         action="https://formsubmit.co/info.beyondbikes@gmail.com"
//         method="POST"
//       >
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="table" />
//         <input type="hidden" name="_next" value={`${siteUrl}/thankyou`} />
//         <input
//           type="hidden"
//           name="_subject"
//           value="New Contact Submission from Beyond Bikes"
//         />

//         <div className="row g-3 mb-3">
//           <div className="col-md-12">
//             <div className="form-floating">
//               <input
//                 type="text"
//                 id="name"
//                 className={`form-control ${errors["Full Name"] ? "is-invalid" : ""}`}
//                 placeholder="Your Name"
//                 name="Full Name"
//                 required
//                 aria-required="true"
//                 onChange={(e) => validateField(e.target.name, e.target.value)}
//               />
//               <label htmlFor="name">Full Name</label>
//               {errors["Full Name"] && (
//                 <div className="invalid-feedback">{errors["Full Name"]}</div>
//               )}
//             </div>
//           </div>

//           <div className="col-md-12">
//             <div className="form-floating">
//               <input
//                 type="email"
//                 id="email"
//                 className={`form-control form-control-lg ${
//                   errors["Email Address"] ? "is-invalid" : ""
//                 }`}
//                 placeholder="Your Email"
//                 name="Email Address"
//                 required
//                 aria-required="true"
//                 onChange={(e) => validateField(e.target.name, e.target.value)}
//               />
//               <label htmlFor="email">Email Address</label>
//               {errors["Email Address"] && (
//                 <div className="invalid-feedback">{errors["Email Address"]}</div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="form-floating">
//             <input
//               type="text"
//               id="phone"
//               className={`form-control form-control-lg ${
//                 errors["Phone Number"] ? "is-invalid" : ""
//               }`}
//               placeholder="Your Phone Number"
//               name="Phone Number"
//               onChange={(e) => validateField(e.target.name, e.target.value)}
//             />
//             <label htmlFor="phone">Phone Number</label>
//             {errors["Phone Number"] && (
//               <div className="invalid-feedback">{errors["Phone Number"]}</div>
//             )}
//           </div>
//         </div>

//         <div className="col-md-12 py-3">
//           <DateRange
//             editableDateInputs={true}
//             onChange={(item) => setRanges([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={ranges}
//             rangeColors={["#1A3B19"]}
//             minDate={new Date()}
//           />
//         </div>

//         <div className="col-md-12 pb-3">
//           <div className="input-group mb-3">
//             <span
//               className="input-group-text"
//               id="basic-addon1"
//               style={{ padding: ".60rem 1.5rem" }}
//             >
//               $
//             </span>
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Amount"
//               aria-label="PayNow"
//               aria-describedby="basic-addon1"
//             />
//           </div>
//         </div>

//         <div className="d-flex row px-2 justify-content-center align-items-center">
//           <button
//             type="submit"
//             className="btn text-light rent-now fw-semibold px-4 py-2"
//             style={{ background: "#1a3b19" }}
//           >
//             Pay Now
//           </button>
//         </div>
//       </form>
//     </div>
//             </div>

//             {/* Info Section */}

// </div>

//         </section>
//  <section className="container text-center pt-3" aria-labelledby="expect-heading" itemScope itemType="https://schema.org/Service">

//       <h2 id="expect-heading" className="mb-4 heading-underline">What to Expect</h2>

//       <div className="row justify-content-center">

//         {/* Step 1 */}
//         <article className="col-md-4 mb-4" itemProp="hasPart" itemScope itemType="https://schema.org/HowToStep">
//           <div className="step-icon bg-warning text-white rounded-circle mx-auto">
//             <span aria-hidden="true">1</span>
//           </div>
//           <h3 itemProp="name" className="mt-3">Book Your Slot</h3>
//           <p itemProp="description">
//             Choose your preferred pickup time from available slots.
//           </p>
//         </article>

//         {/* Step 2 */}
//         <article className="col-md-4 mb-4" itemProp="hasPart" itemScope itemType="https://schema.org/HowToStep">
//           <div className="step-icon bg-warning text-white rounded-circle mx-auto">
//             <span aria-hidden="true">2</span>
//           </div>
//           <h3 itemProp="name" className="mt-3">Get Confirmation</h3>
//           <p itemProp="description">
//             Receive pickup details and preparation instructions via email.
//           </p>
//         </article>

//         {/* Step 3 */}
//         <article className="col-md-4 mb-4" itemProp="hasPart" itemScope itemType="https://schema.org/HowToStep">
//           <div className="step-icon bg-warning text-white rounded-circle mx-auto">
//             <span aria-hidden="true">3</span>
//           </div>
//           <h3 itemProp="name" className="mt-3">Pick Up & Ride</h3>
//           <p itemProp="description">
//             Come to our location and start earning with your e-bike.
//           </p>
//         </article>
//       </div>

//       <address className="mt-4">
//         <p>
//           Need help with booking or have questions?<br />
//           <a href="tel:+61432203305" className="text-decoration-none">
//             <i className="bi bi-telephone-fill" style={{color:'#1A3B19'}}></i>
//             <span style={{color:'#1A3B19'}}> +61 432 203 305</span>
//           </a>
//           <br />
//           <a href="mailto:info.beyondbikes@gmail.com" className="text-decoration-none">
//             <i className="bi bi-envelope-fill me-2" style={{color:'#1A3B19'}}></i>
//             <span style={{color:'#1A3B19'}}>info.beyondbikes@gmail.com</span>
//           </a>
//         </p>
//       </address>

//     </section>

//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }

//src/app/bookrent/page.js

// "use client";
// import React, { useState } from "react";
// import Head from "next/head";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import "../styles/Payment.css";
// // import GooglePayCheck from "../components/GooglePayCheck";

// export default function BookRent() {
//   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [amount, setAmount] = useState(50); // default AUD
//   const [ranges, setRanges] = useState([
//     { startDate: new Date(), endDate: new Date(), key: "selection" },
//   ]);

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Validation
//   const validateField = (field, value) => {
//     let message = "";
//     if (field === "Full Name") {
//       if (!value.trim()) message = "Full name is required.";
//       else if (value.length < 3)
//         message = "Name must be at least 3 characters.";
//     }
//     if (field === "Email Address") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!value.trim()) message = "Email is required.";
//       else if (!emailRegex.test(value))
//         message = "Enter a valid email address.";
//     }
//     if (field === "Phone Number") {
//       const phoneRegex = /^[0-9]{8,15}$/;
//       if (value && !phoneRegex.test(value))
//         message = "Enter a valid phone number (digits only).";
//     }
//     setErrors((prev) => ({ ...prev, [field]: message }));
//     return message === "";
//   };

//   // Handle checkout
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const okName = validateField("Full Name", name);
//     const okEmail = validateField("Email Address", email);
//     const okPhone = validateField("Phone Number", phone);

//     if (!okName || !okEmail || !okPhone) {
//       alert("Please fix validation errors before submitting.");
//       return;
//     }

//     if (loading) return;
//     setLoading(true);

//     try {
//       const res = await fetch("/api/create-checkout-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           email,
//           phone,
//           startDate: ranges[0].startDate,
//           endDate: ranges[0].endDate,
//           amount,
//         }),
//       });

//       const data = await res.json();
//       console.log("Available methods:", data.availableMethods);

//       if (data.url) {
//         window.location.href = data.url; // Stripe Checkout redirect
//       } else {
//         console.error("No session URL returned", data);
//         alert("Payment session error. Check console.");
//       }
//     } catch (err) {
//       console.error("Error creating checkout session", err);
//       alert("Error creating payment session. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Book Rental E-bike | Beyond Bikes</title>
//         <meta
//           name="description"
//           content="Book your rental e-bike online with Beyond Bikes."
//         />
//         <link rel="canonical" href={`${siteUrl}/bookrent`} />
//       </Head>

//       <Header />

//       <main>
//         <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//           <div className="container text-center">
//             <h1 className="fw-bold text-dark mb-2">Book Rental E-bike</h1>
//             <p className="text-secondary" style={{ fontSize: "16px" }}>
//               Complete the form to rent your E-bike
//             </p>
//           </div>

//           <section className="container px-sm-0 px-3 py-3">
//             <div className="row g-4 d-flex justify-content-center">
//               <div className="col-lg-6">
//                 <div
//                   className="interactive-card p-4"
//                   style={{ position: "relative" }}
//                 >
//                   <form className="contact-form">
//                     <div className="form-floating mb-3">
//                       <input
//                         type="text"
//                         id="name"
//                         name="Full Name"
//                         value={name}
//                         onChange={(e) => {
//                           setName(e.target.value);
//                           validateField("Full Name", e.target.value);
//                         }}
//                         className={`form-control ${
//                           errors["Full Name"] ? "is-invalid" : ""
//                         }`}
//                         placeholder="Your name"
//                         required
//                       />
//                       <label htmlFor="name">Full Name</label>
//                       {errors["Full Name"] && (
//                         <div className="invalid-feedback">
//                           {errors["Full Name"]}
//                         </div>
//                       )}
//                     </div>

//                     <div className="form-floating mb-3">
//                       <input
//                         type="email"
//                         id="email"
//                         name="Email Address"
//                         value={email}
//                         onChange={(e) => {
//                           setEmail(e.target.value);
//                           validateField("Email Address", e.target.value);
//                         }}
//                         className={`form-control ${
//                           errors["Email Address"] ? "is-invalid" : ""
//                         }`}
//                         placeholder="you@example.com"
//                         required
//                       />
//                       <label htmlFor="email">Email Address</label>
//                       {errors["Email Address"] && (
//                         <div className="invalid-feedback">
//                           {errors["Email Address"]}
//                         </div>
//                       )}
//                     </div>

//                     <div className="form-floating mb-3">
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="Phone Number"
//                         value={phone}
//                         onChange={(e) => {
//                           setPhone(e.target.value);
//                           validateField("Phone Number", e.target.value);
//                         }}
//                         className={`form-control ${
//                           errors["Phone Number"] ? "is-invalid" : ""
//                         }`}
//                         placeholder="Phone number"
//                       />
//                       <label htmlFor="phone">Phone Number</label>
//                       {errors["Phone Number"] && (
//                         <div className="invalid-feedback">
//                           {errors["Phone Number"]}
//                         </div>
//                       )}
//                     </div>

//                     <div className="mb-3" style={{ zIndex: 1 }}>
//                       <DateRange
//                         editableDateInputs={true}
//                         onChange={(item) => setRanges([item.selection])}
//                         moveRangeOnFirstSelection={false}
//                         ranges={ranges}
//                         rangeColors={["#1A3B19"]}
//                         minDate={new Date()}
//                       />
//                     </div>

//                     <div className="input-group mb-3">
//                       <span
//                         className="input-group-text"
//                         style={{ padding: ".60rem 1.5rem" }}
//                       >
//                         $
//                       </span>
//                       <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Amount (AUD)"
//                         value={amount}
//                         onChange={(e) => setAmount(Number(e.target.value || 0))}
//                         min="0"
//                       />
//                     </div>

//                     <div
//                       className="d-flex justify-content-center"
//                       style={{ marginTop: 6 }}
//                     >
//                       <button
//                         type="button"
//                         className="btn text-light rent-now fw-semibold px-4 py-2"
//                         onClick={handleSubmit}
//                         disabled={loading}
//                         style={{
//                           background: "#1a3b19",
//                           cursor: loading ? "wait" : "pointer",
//                         }}
//                       >
//                         {loading ? "Processing..." : "Pay Now"}
//                       </button>
//                     </div>
                    
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }


//src/app/bookrent/page.js
'use client';
import Head from 'next/head';
import '../styles/Payment.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useRouter } from "next/navigation";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function BookRent() {
  const siteUrl = "https://www.beyondbikes.com.au";
  const router = useRouter();

  const [ranges, setRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Validation function
  const validateField = (name, value) => {
    let message = "";

    if (name === "Full Name") {
      if (!value.trim()) message = "Full name is required.";
      else if (value.length < 3) message = "Name must be at least 3 characters.";
    }

    if (name === "Email Address") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) message = "Email is required.";
      else if (!emailRegex.test(value)) message = "Enter a valid email address.";
    }

    if (name === "Phone Number") {
      const phoneRegex = /^[0-9]{10}$/;
      if (value && !phoneRegex.test(value))
        message = "Enter a valid 10-digit phone number.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    validateField(e.target.name, e.target.value);
  };

const handlePayNow = (e) => {
  e.preventDefault();

  if (!formData["Full Name"] || !formData["Email Address"]) {
    alert("Please fill in your name and email.");
    return;
  }

  const startDate = ranges[0].startDate.toISOString();
  const endDate = ranges[0].endDate.toISOString();

  router.push(
    `/checkout?productId=rental-ebike&price=${amount}&currency=AUD` +
      `&email=${encodeURIComponent(formData["Email Address"])}` +
      `&name=${encodeURIComponent(formData["Full Name"])}` +
      `&start=${encodeURIComponent(startDate)}` +
      `&end=${encodeURIComponent(endDate)}`
  );
};


  return (
    <>
      <Head>
        {/* Meta Tags */}
        <title>Book Rental E-bike | Beyond Bikes</title>
        <meta name="description" content="Book your rental e-bike and pay online securely." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/bookrent`} />
      </Head>

      <Header />

      <main>
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }} id="how-to-rent">
          <div className="container text-center">
            <h1 className="fw-bold text-dark mb-2 text-balance">
              Book Rental E-bike
            </h1>
            <p className='text-secondary' style={{ fontSize: '16px' }}>
              Complete the form and proceed to secure checkout.
            </p>
          </div>

          <section className="container px-sm-0 px-3 py-3">
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-lg-6" itemScope itemType="https://schema.org/ContactPage">
                <div className="interactive-card p-4">
                  <form className="contact-form" onSubmit={handlePayNow}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="name"
                            className={`form-control ${errors["Full Name"] ? "is-invalid" : ""}`}
                            placeholder="Your Name"
                            name="Full Name"
                            required
                            aria-required="true"
                            onChange={handleChange}
                          />
                          <label htmlFor="name">Full Name</label>
                          {errors["Full Name"] && (
                            <div className="invalid-feedback">{errors["Full Name"]}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            id="email"
                            className={`form-control form-control-lg ${errors["Email Address"] ? "is-invalid" : ""}`}
                            placeholder="Your Email"
                            name="Email Address"
                            required
                            aria-required="true"
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Email Address</label>
                          {errors["Email Address"] && (
                            <div className="invalid-feedback">{errors["Email Address"]}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="phone"
                          className={`form-control form-control-lg ${errors["Phone Number"] ? "is-invalid" : ""}`}
                          placeholder="Your Phone Number"
                          name="Phone Number"
                          onChange={handleChange}
                        />
                        <label htmlFor="phone">Phone Number</label>
                        {errors["Phone Number"] && (
                          <div className="invalid-feedback">{errors["Phone Number"]}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12 py-3">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setRanges([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={ranges}
                        rangeColors={["#1A3B19"]}
                        minDate={new Date()}
                      />
                    </div>

                    <div className="col-md-12 pb-3">
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text"
                          id="basic-addon1"
                          style={{ padding: ".60rem 1.5rem" }}
                        >
                          $
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                          aria-label="PayNow"
                          aria-describedby="basic-addon1"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="d-flex row px-2 justify-content-center align-items-center">
                      <button
                        type="submit"
                        className="btn text-light rent-now fw-semibold px-4 py-2"
                        style={{ background: "#1a3b19" }}
                      >
                        Pay Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
