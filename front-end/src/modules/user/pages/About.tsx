export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          About QuizMaster
        </h1>
        
        <div className="space-y-6 text-gray-700">
          <p>
            QuizMaster was founded in 2025 with a simple mission: to make learning 
            engaging through interactive quizzes. Our platform helps both students 
            and educators achieve better learning outcomes.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            Our Team
          </h2>
          <p>
            We're a small team of educators and developers passionate about 
            creating effective learning tools. With backgrounds in both education 
            and technology, we understand what makes learning stick.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Simple, intuitive interface</li>
            <li>Research-backed question formats</li>
            <li>Secure and privacy-focused</li>
            <li>Always free for students</li>
          </ul>
        </div>
      </div>
    </div>
  );
}