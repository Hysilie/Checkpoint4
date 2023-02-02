import React from "react";

/* Components */
import PreviousBtn from "@components/PreviousBtn";

/* Styles and Images */
import flowers from "../../assets/others/flowers.svg";

function AboutUs() {
  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl"> ABOUT US</h2>
      <div className="w-full h-full  lg:flex p-[5%]">
        <article className="relative lg:w-1/2  lg:border-r-2 lg:h-4/5 border-second-dark">
          {/* Title of the article */}
          <label htmlFor="title" className="font-serif text-2xl w-20 px-3">
            Some informations about the application
          </label>

          <img
            src={flowers}
            alt="flowers"
            className="hidden lg:block lg:absolute lg:top-[-25vh] lg:left-[-10vh] lg:z-[-10] lg:w-full lg:opacity-60 lg:-rotate-90 "
          />
        </article>

        {/* Content of the article */}
        <aside className="lg:w-1/2 px-6 my-6 lg:-my-12 h-96">
          {" "}
          <p>
            <h2 className="mb-2 font-semibold font-serif text-xl w-2/5 border-b-2 border-main-dark">
              Context
            </h2>
            This website project is a part of our journey at Wild Code School,
            where we have been honing our front-end and back-end development
            skills over the past 6 months.
            <h2 className="mb-2 mt-8 font-semibold font-serif text-xl w-2/5 border-b-2 border-main-dark">
              Design
            </h2>
            The goal of this application is to bring together a community of
            plant lovers and provide them with a platform to share their passion
            with others. We've taken inspiration from a minimalist "newspaper"
            style and created a black and white theme that keeps the focus on
            the beautiful plant images.
            <br />
            <h2 className="mb-2 mt-8 font-semibold font-serif text-xl w-2/5 border-b-2 border-second-dark">
              Functionnalities
            </h2>
            Visitors can take a tour of the site and even sign up or log in to
            access their own personal profiles. Here, they can see all the
            articles and images they've saved, leave comments, and even share
            their own pictures of their prized plants. And for those of us who
            are chosen to be administrators, we have even more control over the
            site's content and users, using a special interface.
            <br />
            It was a unique and exciting opportunity to put all that we've
            learned to the test and create something beautiful and functional.
            🌿
          </p>
        </aside>
        {/* Buttons */}
        <div className=" relative lg:absolute lg:bottom-60 flex w-full lg:w-1/2 justify-center  lg:justify-start gap-10 px-3" />
      </div>
    </section>
  );
}

export default AboutUs;
