// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.svg"; // Adjust the path accordingly

// const Navbar = () => {
//   return (
//     <header className="my_header w-100" id="header">
//       <div className="w-100 header_container d-flex align-items-center">
//         <div className="logo_container">
//           <Link to="/" className="d-block">
//             <img src={logo} className="w-100 default_logo" alt="Logo" />
//           </Link>
//         </div>
//         <div className="menu_container">
//           <ul className="menu_list" id="menulist">
//             <Dropdown title="Who We Are" index={0}>
//               <div className="row">
//                 <div className="col-md-12 py-md-5 py-2">
//                   <div className="row">
//                     <div className="col-md-3 bdr">
//                       <div className="menu-title">
//                         <p>Incubating a culture of innovation &amp; creativity</p>
//                       </div>
//                     </div>
//                     <DropdownColumn>
//                       <li><Link to="/about-us">About Us</Link></li>
//                       <li><Link to="/our-team">Our Team</Link></li>
//                       <li><Link to="/careers">Career</Link></li>
//                       <li><Link to="/contact-us">Contact Us</Link></li>
//                     </DropdownColumn>
//                     <DropdownColumn>
//                       <li><Link to="/our-client">Our Clients</Link></li>
//                       <li><Link to="/press-media">Press & Media</Link></li>
//                       <li><Link to="/life-at-indtechmark">Life at INDTechMark</Link></li>
//                       <li><Link to="/get-free-consultation">Get Free Consultation</Link></li>
//                     </DropdownColumn>
//                     <DropdownColumn>
//                       <li><Link to="/client-reviews">Client Reviews</Link></li>
//                       <li><Link to="/our-client-reviews">Our Client Reviews</Link></li>
//                       <li><Link to="/blog">Blog</Link></li>
//                     </DropdownColumn>
//                   </div>
//                 </div>
//               </div>
//             </Dropdown>
//             <Dropdown title="Services" index={1}>
//               <DropdownColumn>
//                 <li><Link to="/web-development">Web Development</Link></li>
//                 <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
//                 <li><Link to="/digital-marketing-services">Digital Marketing</Link></li>
//                 <li className="d-none"><Link to="/seo">Search Engine Optimization</Link></li>
//               </DropdownColumn>
//               <DropdownColumn>
//                 <li><Link to="/website-design-company">Web Designing</Link></li>
//                 <li><Link to="/portfolio">Work</Link></li>
//                 <li><Link to="/checkout">Checkout</Link></li>
//                 <li><Link to="/pricing">Pricing</Link></li>
//               </DropdownColumn>
//             </Dropdown>
//             <Dropdown title="Industries" index={2}>
//               <DropdownColumn>
//                 <li><Link to="/social-media">Social Media</Link></li>
//                 <li><Link to="/finance">Finance</Link></li>
//                 <li><Link to="/education">Education</Link></li>
//               </DropdownColumn>
//               <DropdownColumn>
//                 <li><Link to="/healthcare">Healthcare</Link></li>
//                 <li><Link to="/sports">Sports</Link></li>
//               </DropdownColumn>
//             </Dropdown>
//             <li><Link to="#">Work</Link></li>
//             <li><Link to="/careers">Careers</Link></li>
//             <li><Link to="/blog">Blog</Link></li>
//             <li>
//               <Link to="/contact-us" className="btn-darkblack px-4 text-white py-3 fw-bold d-flex">
//                 <span>Contact Us</span>
//                 <i className="icon icon-arrow"></i>
//               </Link>
//             </li>
//           </ul>
//           <div id="navtoggle" className="open" title="Open menu" onClick={() => menuToggle()}>
//             {[...Array(6)].map((_, i) => (
//               <span key={i}></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const Dropdown = ({ title, index, children }) => (
//   <li className="drop">
//     <a href="#" title={title}>
//       {title}
//       <svg>
//         <use xlinkHref="#down_arrow" />
//       </svg>
//     </a>
//     <span className="sub_menu" data-index={index}></span>
//     <div className="menu_dropdown px-md-5 px-3">{children}</div>
//   </li>
// );

// const DropdownColumn = ({ children }) => (
//   <div className="col-md-4 bdr">
//     <ul className="sub-menu">{children}</ul>
//   </div>
// );

// const menuToggle = () => {
//   document.getElementById("menulist").classList.toggle("open");
// };

// export default Navbar;
// import React, { useState } from "react";

// import logo from "../../assets/images/logo.svg";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleDropdownClick = (e) => {
//     e.preventDefault(); // Prevent default behavior
//   };

//   return (
//     <header className="my_header w-100" id="header">
//       <div className="w-100 header_container d-flex align-items-center">
//         <div className="logo_container">
//           <a href="/" className="d-block">
//             <img src={logo} className="w-100 default_logo" alt="Logo" />
//           </a>
//         </div>

//         <div className="menu_container">
//           <ul className="menu_list" id="menulist">
//             {/* Who We Are Dropdown */}
//             <li className="drop">
//               <a href="#" title="Who We Are" onClick={handleDropdownClick}>
//                 Who We Are
//                 <svg className="">
//                   <use xlinkHref="#down_arrow" />
//                 </svg>
//               </a>
//               <span className="sub_menu" data-index="0"></span>
//               <div className="menu_dropdown px-md-5 px-3">
//                 <div className="row">
//                   <div className="col-sm-12 col-md-12 py-md-5 py-2">
//                     <div className="row">
//                       <div className="col-md-3 bdr">
//                         <div className="menu-title">
//                           <p>
//                             Incubating a culture <br />
//                             of innovation &amp; <br />
//                             creativity
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col-md-3 bdr">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/about-us">About Us</a>
//                           </li>
//                           <li>
//                             <a href="/our-team">Our Team</a>
//                           </li>
//                           <li>
//                             <a href="/careers">Career</a>
//                           </li>
//                           <li>
//                             <a href="/contact-us">Contact Us</a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-3 bdr">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/our-client">Our Clients</a>
//                           </li>
//                           <li>
//                             <a href="/press-media">Press & Media</a>
//                           </li>
//                           <li>
//                             <a href="/life-at-indtechmark">
//                               Life at INDTechMark
//                             </a>
//                           </li>
//                           <li>
//                             <a href="/get-free-consultation">
//                               Get Free Consultation
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-3">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/client-reviews">Client Reviews</a>
//                           </li>
//                           <li>
//                             <a href="/our-client-reviews">Our Client Reviews</a>
//                           </li>
//                           <li>
//                             <a href="/blog">Blog</a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* Services Dropdown */}
//             <li className="drop">
//               <a href="#" title="Services" onClick={handleDropdownClick}>
//                 Services
//                 <svg>
//                   <use xlinkHref="#down_arrow" />
//                 </svg>
//               </a>
//               <span className="sub_menu" data-index="1"></span>
//               <div className="menu_dropdown px-md-5 px-3">
//                 <div className="row">
//                   <div className="col-sm-12 col-md-12 py-md-5 py-2">
//                     <div className="row">
//                       <div className="col-md-3 bdr">
//                         <div className="menu-title">
//                           <p>
//                             Incubating a culture of innovation &amp; creativity
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col-md-4 bdr">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/web-development">Web Development</a>
//                           </li>
//                           <li>
//                             <a href="/mobile-app-development">
//                               Mobile App Development
//                             </a>
//                           </li>
//                           <li>
//                             <a href="/digital-marketing-services">
//                               Digital Marketing
//                             </a>
//                           </li>
//                           <li className="d-none">
//                             <a href="/seo">Search Engine Optimization</a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-4">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/website-design-company">Web Designing</a>
//                           </li>
//                           <li>
//                             <a href="/portfolio">Work</a>
//                           </li>
//                           <li>
//                             <a href="/checkout">Checkout</a>
//                           </li>
//                           <li>
//                             <a href="/pricing">Pricing</a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* Industries Dropdown */}
//             <li className="drop">
//               <a href="#" title="Industries" onClick={handleDropdownClick}>
//                 Industries
//                 <svg>
//                   <use xlinkHref="#down_arrow" />
//                 </svg>
//               </a>
//               <span className="sub_menu" data-index="2"></span>
//               <div className="menu_dropdown px-md-5 px-3">
//                 <div className="row">
//                   <div className="col-sm-12 col-md-12 py-md-5 py-2">
//                     <div className="row">
//                       <div className="col-md-3 bdr">
//                         <div className="menu-title">
//                           <p>
//                             Incubating a culture <br />
//                             of innovation &amp; <br />
//                             creativity
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col-md-4 bdr">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/social-media">Social Media</a>
//                           </li>
//                           <li>
//                             <a href="/finance">Finance</a>
//                           </li>
//                           <li>
//                             <a href="/education">Education</a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-4">
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="/healthcare">Healthcare</a>
//                           </li>
//                           <li>
//                             <a href="/sports">Sports</a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li>
//               <a href="/work" title="Work">
//                 Work
//               </a>
//             </li>
//             <li>
//               <a href="/careers" title="Careers">
//                 Careers
//               </a>
//             </li>
//             <li>
//               <a href="/blog" title="Blog">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact-us"
//                 className="btn-darkblack px-4 text-white py-3 fw-bold d-flex"
//               >
//                 <span>Contact Us</span>
//                 <i className="icon icon-arrow"></i>
//               </a>
//             </li>
//           </ul>

//           <div
//             id="navtoggle"
//             className={menuOpen ? "open" : ""}
//             onClick={menuToggle}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="my_header w-100" id="header">
      <div className="w-100 header_container d-flex align-items-center">
        <div className="logo_container">
          <a href="/" className="d-block">
            <img src={logo} className="w-100 default_logo" alt="Logo" />
          </a>
        </div>

        <div className="menu_container">
          <ul className="menu_list" id="menulist">
            {/* Dropdown Items */}
            {["Who We Are ", "Services ", "Industries "].map((item, index) => (
              <li
                key={index}
                className="drop"
                onMouseEnter={() => setHoveredDropdown(index)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <svg
                  style={{ display: "none" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <symbol id="down_arrow" viewBox="0 0 10 6">
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </symbol>
                  </defs>
                </svg>

                <a href="#" title={item} onClick={handleDropdownClick}>
                  {item}
                  <svg width="7" height="4">
                    <use href="#down_arrow"></use>
                  </svg>
                </a>

                <span className="sub_menu" data-index={index}></span>
                <div className="menu_dropdown px-md-5 px-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 py-md-5 py-2">
                      <div className="row">
                        <div className="col-md-3 bdr">
                          <div className="menu-title">
                            <p>
                              Incubating a culture of innovation & creativity
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3 bdr">
                          <ul className="sub-menu">
                            <li>
                              <a href="/about-us">About Us</a>
                            </li>
                            <li>
                              <a href="/our-team">Our Team</a>
                            </li>
                            <li>
                              <a href="/careers">Career</a>
                            </li>
                            <li>
                              <a href="/contact-us">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 bdr">
                          <ul className="sub-menu">
                            <li>
                              <a href="/our-client">Our Clients</a>
                            </li>
                            <li>
                              <a href="/press-media">Press & Media</a>
                            </li>
                            <li>
                              <a href="/life-at-indtechmark">
                                Life at INDTechMark
                              </a>
                            </li>
                            <li>
                              <a href="/get-free-consultation">
                                Get Free Consultation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="sub-menu">
                            <li>
                              <a href="/client-reviews">Client Reviews</a>
                            </li>
                            <li>
                              <a href="/our-client-reviews">
                                Our Client Reviews
                              </a>
                            </li>
                            <li>
                              <a href="/blog">Blog</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}

            {/* Static Links */}
            <li>
              <a href="/work" title="Work">
                Work
              </a>
            </li>
            <li>
              <a href="/careers" title="Careers">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" title="Blog">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="btn-darkblack px-4 text-white py-3 fw-bold d-flex"
              >
                <span>Contact Us</span>
                <i className="icon icon-arrow"></i>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            id="navtoggle"
            className={menuOpen ? "open" : ""}
            onClick={menuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
