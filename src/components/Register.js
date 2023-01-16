import React,{useRef,useEffect} from "react";
import "./Register.css"
import anime from "animejs/lib/anime.es.js";

// const Register = () => {
  function Register() {
    useEffect(() => {
      const items = document.querySelectorAll(".nav--header-1 > .nav__item");
      const rootElement = document.querySelector(".layout");

      const colors = ["hsla(14, 97%, 65%, 0.4)"];

      // Local state.
      const state = {
        navigationItems: {},
        root: rootElement,
      };

      for (let navItemIndex = 0; navItemIndex < items.length; ++navItemIndex) {
        const stateItem = {
          color: colors[navItemIndex % colors.length],
          element: items[navItemIndex],
          id: navItemIndex,
          isActive: false,
          type: "DEFAULT",
        };

        const subNav = items[navItemIndex].querySelector(".nav");
        if (subNav) {
          // current element has a subNav.
          stateItem.childNavigation = subNav;
          stateItem.type = "PARENT";
        }

        stateItem.onClick = (event) => {
          const actualOnClick = () => {
            if (state.activeItem === navItemIndex) {
              return;
            }

            if (state.activeItem) {
              state.activeItem = null;
            }

            if ("PARENT" === state.navigationItems[navItemIndex].type) {
              // Set new active item.
              state.activeItem = navItemIndex;

              animateShow(state);
            }
          };

          if (state.activeItem) {
            return animateHide(state, actualOnClick);
          }

          return actualOnClick();
        };

        // Add this item to the state.
        state.navigationItems[navItemIndex] = stateItem;
      }

      const animateShow = (state) => {
        const animation = anime.timeline();
        console.log(state.navigationItems[state.activeItem]);

        animation
          .add({
            backgroundColor: state.navigationItems[state.activeItem].color,
            begin: () => {
              state.root.classList.add("nav--active");
            },
            complete: () => {
              state.navigationItems[state.activeItem].element.classList.add(
                "nav__item--active"
              );
            },
            duration: 450,
            easing: "easeOutExpo",
            opacity: 1,
            translateX: [{ delay: 300, value: "270px" }],
            scaleX: [{ value: 0 }, { value: 1 }],
            targets: ".layout__frontdrop",
          })
          .add({
            duration: 70,
            opacity: [0, 1],
            targets: state.navigationItems[state.activeItem].childNavigation,
          })
          .add({
            delay: anime.stagger(70),
            opacity: [0, 1],
            translateY: ["100%", "0"],
            targets: state.navigationItems[
              state.activeItem
            ].childNavigation.querySelectorAll(".nav__item"),
          });

        return animation;
      };

      const animateHide = (state, complete) => {
        const animation = anime.timeline({
          complete: complete,
        });

        animation
          .add({
            duration: 210,
            opacity: [1, 0],
            translateY: [0, "+=50px"],
            targets: state.navigationItems[state.activeItem].childNavigation,
          })
          .add({
            complete: () => {
              // Clean-up current active item.
              state.root.classList.remove("nav--active");
              state.navigationItems[state.activeItem].element.classList.remove(
                "nav__item--active"
              );
            },
            duration: 250,
            easing: "easeOutCirc",
            scaleX: [{ value: 0 }],
            translateX: [{ value: 0 }],
            targets: ".layout__frontdrop",
          });

        return animation;
      };

      (() => {
        // Ready to fight.
        const introAnimation = anime.timeline({
          complete: () => {
            for (
              let stateItemIndex = 0;
              stateItemIndex < Object.values(state.navigationItems).length;
              ++stateItemIndex
            ) {
              state.navigationItems[stateItemIndex].element.addEventListener(
                "click",
                state.navigationItems[stateItemIndex].onClick
              );

              // Reset transform to prevent the implicit z-index / position relative to trigger.
              state.navigationItems[stateItemIndex].element.style.transform =
                "";
            }
          },
        });

        introAnimation
          .add({
            duration: 350,
            delay: 1000,
            easing: "easeOutCirc",
            targets: ".layout__backdrop",
            scaleX: [0, 1],
          })
          .add({
            delay: anime.stagger(75),
            duration: 450,
            easing: "easeOutCirc",
            opacity: [0, 1],
            translateY: ["100%", "0%"],
            targets: ".nav--header-1 > .nav__item:not(.nav__item--home)",
          })
          .add({
            easing: "easeOutExpo",
            targets: ".layout__backdrop",
            translateX: [{ delay: 350, value: 67 + "%" }],
          })
          .add({
            duration: 350,
            easing: "easeOutExpo",
            targets: ".hero-title",
            opacity: [0, 1],
            translateY: ["50px", "0"],
          })
          .add(
            {
              duration: 350,
              easing: "easeOutExpo",
              targets: ".hero-text",
              opacity: [0, 1],
              translateY: ["0", "-3rem"],
            },
            "-=100"
          );
      })();
    }, []);
   
  return (
    <div style={{ backgroundColor: "#e8e0cd" }}>
      {/* <div ref={containerRef} /> */}
      {/* <h1 class="black-lives-matter">#e-FIESTA</h1> */}
      <div class="layout">
        <div class="layout__backdrop"></div>
        <div class="layout__frontdrop"></div>
        <div class="layout__wrapper">
          <header class="layout__header">
            <nav style={{ paddingTop: "5vh" }}>
              <ul class="nav nav--header nav--header-1">
                <li class="nav__item nav__item--about">
                  <a class="nav__link">About</a>
                </li>
                <li class="nav__item nav__item--clients">
                  <a class="nav__link">Menu</a>
                  <ul class="nav nav--header nav--header-2">
                    <li class="nav__item">
                      <a class="nav__link">
                        Mocktails-{" "}
                        <i style={{ fontSize: "0.7em", opacity: "0.5" }}>
                          (Virgin Mojito, Blue Lagoon & Soft Drinks)
                        </i>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a
                        class="nav__link"
                        style={{
                          display: "flex",
                          // justifyContent: "space-between",
                        }}
                      >
                        <span style={{ position: "relative" }}>Starters</span>
                        <ol
                          style={{
                            listStyleType: "disc",
                            display: "inline-block",
                            paddingLeft: "11vw",
                          }}
                        >
                          <li>Honey Chilli Potato</li>
                          <li>Crispy Cheezy Balls</li>
                          <li>Chilli Paneer</li>
                        </ol>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a
                        class="nav__link"
                        style={{
                          display: "flex",
                          // justifyContent: "space-between",
                        }}
                      >
                        <span style={{ position: "relative" }}>
                          Main Course
                        </span>
                        <ol
                          style={{
                            listStyleType: "disc",
                            display: "inline-block",
                            paddingLeft: "11vw",
                          }}
                        >
                          <li>Paneer Butter Masala</li>
                          <li>Subz Jhalfrezi</li>
                          <li>Dal Fry</li>
                          <li>Jeera Rice</li>
                          <li>Butter Naan & Tandoori Roti</li>
                        </ol>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a
                        class="nav__link"
                        style={{
                          display: "flex",
                          // justifyContent: "space-between",
                        }}
                      >
                        <span style={{ position: "relative" }}>Dessert</span>
                        <ol
                          style={{
                            listStyleType: "disc",
                            display: "inline-block",
                            paddingLeft: "11vw",
                          }}
                        >
                          <li>Gulab Jamun</li>
                          <li>Vanilla Ice Cream</li>
                          <li>Hot Choclate Sauce</li>
                        </ol>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a
                        class="nav__link"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        [ Unlimited ]
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav__item nav__item--services">
                  <a class="nav__link">Instruction</a>
                  <ul class="nav nav--header nav--header-2">
                    <li class="nav__item">
                      <a class="nav__link" style={{ fontSize: "1.4em" }}>
                        Registrations are open till{" "}
                        <span style={{ textDecoration: "underline" }}>
                          19-Jan
                        </span>{" "}
                        and uske baad koi bhi RR entertain nahi kiya jaega 🙃{" "}
                        <i>( Tickets are limited so jaldi jaldi Tut pado )</i>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a class="nav__link" style={{ fontSize: "1.4em" }}>
                        Ye tumhari hi party hai prof ke lectures nahi so time se
                        pahle phoch jana to make sure you don't miss any moment
                        of it.
                      </a>
                    </li>
                    <li class="nav__item">
                      <a class="nav__link" style={{ fontSize: "1.4em" }}>
                        {" "}
                        You and your I'd cards presence are complementary so ya
                        to sath aana ya agle saal aana
                      </a>
                    </li>
                    <li class="nav__item">
                      <a class="nav__link" style={{ fontSize: "1.4em" }}>
                        {" "}
                        Registration for girls are compulsory{" "}
                        <i>( kyuki ratio bhi to maintain krna hai 😇 )</i>
                      </a>
                    </li>
                    <li class="nav__item">
                      <a class="nav__link" style={{ fontSize: "1.4em" }}>
                        {" "}
                        Don't bring your friends or <i>bandi</i> from any other
                        branch{" "}
                        <i>
                          ( Agar laye to bartan dhone ka sabun sath lete aana 🙃
                          )
                        </i>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li class="nav__item nav__item--contact">
                  <a class="nav__link">
                    Contact
                  </a>
                </li> */}
              </ul>
            </nav>
          </header>
          <main class="layout__main">
            <section class="hero">
              <div class="hero-block hero-block--header">
                <h1 class="hero-title">
                  e-FIESTA{" "}
                  <em>Electrical First Ever Fresher's Party, 28 Jan 2023.</em>
                </h1>
                <p class="hero-text">
                  Freshers party is a great way to get to know your new
                  colleagues and make some lasting memories! And at{" "}
                  <a href="https://forms.gle/3Rh8bnnW2JBkrPpC9" target="_blank">
                    e-FIESTA,
                  </a>{" "}
                  we're taking it a step further by throwing our first ever
                  freshers party! Let’s light up the night with electrifying
                  beats and exciting activities! Put on your dancing shoes{" "}
                  <i> ( without shoes entry bhi nhi hai 😂 )</i> and come join
                  us for an unforgettable evening of fun and games. Get ready to
                  spark the night away with your new team members!
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;
