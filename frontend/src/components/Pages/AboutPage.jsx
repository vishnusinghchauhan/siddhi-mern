
const AboutPage = () => {

  return (
      
    <div class="flex flex-col shadow bg-white mx-auto my-10 max-w-4xl sm:mt-16">
    <span class="font-medium text-lg px-2 sm:px-8 py-4 border-b">About Us</span>
    
    <div class="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">
        <div class="flex flex-col gap-5 items-start w-full">
            <h2 class="text-xl font-bold">Welcome to Our Company</h2>
            <p class="text-gray-700">
                We are dedicated to providing the best products and services to our customers. Our mission is to enhance your shopping experience with quality items at competitive prices.
            </p>
            
            <h3 class="text-lg font-semibold mt-4">Our Values</h3>
            <ul class="list-disc list-inside text-gray-700">
                <li>Customer Satisfaction</li>
                <li>Quality Products</li>
                <li>Innovation and Improvement</li>
                <li>Integrity and Transparency</li>
            </ul>

            <h3 class="text-lg font-semibold mt-4">Our Story</h3>
            <p class="text-gray-700">
                Founded in 2020, we started as a small team of enthusiasts who wanted to make a difference in the retail industry. Over the years, we have grown into a trusted brand known for our commitment to excellence.
            </p>

            <h3 class="text-lg font-semibold mt-4">Contact Us</h3>
            <p class="text-gray-700">
                If you have any questions or feedback, feel free to reach out to us at: 
                <a href="mailto:info@example.com" class="text-blue-500 hover:underline">info@example.com</a>
            </p>
        </div>
    </div>

    <div class="flex justify-end p-4">
        <button class="bg-primary-orange w-full sm:w-1/3 mx-2 sm:mx-6 py-2 font-medium text-white shadow hover:shadow-lg rounded-sm">
            Get in Touch
        </button>
    </div>
</div>
  )
}

export default AboutPage