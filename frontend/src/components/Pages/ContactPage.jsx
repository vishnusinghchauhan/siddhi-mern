const ContactPage = () => {
  return (
    <div class="max-w-6xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg sm:mt-16">
      <h1 class="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div class="flex flex-col gap-3 py-5 pl-2 sm:pl-6 overflow-hidden">
      <   h2 class="text-xl font-bold">Welcome to Our Company</h2>
          <p class="text-gray-700">
            We are dedicated to providing the best products and services to our
            customers. Our mission is to enhance your shopping experience with
            quality items at competitive prices.
          </p>
        <p class="text-gray-700">
          If you have any questions or feedback, feel free to reach out to us
          at:
          <a
            href="mailto: support@siddhicreatives.com"
            class="text-blue-500 hover:underline"
          >
            support@siddhicreatives.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
