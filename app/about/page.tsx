import React from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="about py-10 px-6 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            About Arsheyr.Loom
          </h2>
          <p className="text-lg leading-relaxed text-center mb-10">
            At Arsheyr.Loom, we believe in the power of fashion to inspire
            confidence and express individuality. Since our launch, we’ve been
            committed to providing high-quality, trendy, and affordable fashion
            to customers around the world.
          </p>

          <div className="objectives mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Objectives</h3>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                To offer a wide range of stylish and sustainable products for
                fashion-forward individuals.
              </li>
              <li className="mb-2">
                To provide an exceptional shopping experience with seamless
                browsing and checkout.
              </li>
              <li className="mb-2">
                To prioritize customer satisfaction with responsive support and
                easy return policies.
              </li>
              <li className="mb-2">
                To stay ahead of trends by constantly updating our collection
                with the latest in fashion.
              </li>
            </ul>
          </div>

          <div className="mission mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to empower individuals through fashion, making
              style accessible to everyone. We aim to be more than just an
              online store – we strive to be a community where everyone can
              discover their unique style and enjoy a memorable shopping
              experience.
            </p>
          </div>

          <div className="values mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <strong>Quality</strong>: We carefully curate products from top
                brands and ensure every item meets our quality standards.
              </li>
              <li className="mb-2">
                <strong>Innovation</strong>: We continuously innovate our
                platform to provide an intuitive and enjoyable shopping
                experience.
              </li>
              <li className="mb-2">
                <strong>Sustainability</strong>: We are committed to offering
                eco-friendly products and reducing our carbon footprint.
              </li>
              <li className="mb-2">
                <strong>Customer-Centric</strong>: Everything we do revolves
                around making our customers happy, from product offerings to
                customer support.
              </li>
            </ul>
          </div>

          <div className="commitment mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              Our Commitment to You
            </h3>
            <p className="text-lg leading-relaxed">
              We are dedicated to providing a seamless shopping experience. Our
              customer support team is always here to help with any questions or
              concerns. Whether you’re shopping for the latest trends or looking
              for timeless pieces, we promise to deliver quality and value in
              every purchase.
            </p>
          </div>

          <div className="cta text-center mt-8">
            <Link href="/products">
              <button className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-gray-800">
                Shop Our Collection
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
