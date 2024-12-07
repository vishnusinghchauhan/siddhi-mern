const CareerPage = () => {
  return (
    <div class="max-w-6xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg sm:mt-16">
      <h1 class="text-3xl font-bold text-center mb-6">Join Our Team</h1>
      <p class="text-gray-700 text-center mb-8">
        We are looking for talented individuals to join our growing team.
        Explore our current job openings below.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-xl font-semibold">UI/UX Designer</h2>
          <p class="text-gray-600">Location: Remote</p>
          <p class="mt-2">
            Join our team as a UI/UX Designer and help create intuitive and
            engaging user interfaces.
          </p>
          <ul class="list-disc list-inside mt-4 text-gray-600">
            <li>Proficient in design tools like Figma or Adobe XD</li>
            <li>Strong portfolio showcasing design work</li>
            <li>Ability to conduct user research and usability testing</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-xl font-semibold">Marketing Specialist</h2>
          <p class="text-gray-600">Location: Remote</p>
          <p class="mt-2">
            We are seeking a Marketing Specialist to help us grow our brand
            presence.
          </p>
          <ul class="list-disc list-inside mt-4 text-gray-600">
            <li>Experience with digital marketing strategies</li>
            <li>Strong communication skills and creativity</li>
            <li>Ability to analyze market trends and customer needs</li>
          </ul>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="text-xl font-bold mb-4">Our Values</h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            Integrity: We uphold the highest standards of integrity in all our
            actions.
          </li>
          <li>Innovation: We strive to innovate and improve continuously.</li>
          <li>
            Teamwork: We work together, across boundaries, to meet the needs of
            our customers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerPage;
