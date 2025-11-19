import { useState } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-german-red">German</span>
                <span className="text-german-black">Ed</span>
                <span className="text-german-gold"> Institute</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-german-red transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-german-red transition">About</a>
              <a href="#courses" className="text-gray-700 hover:text-german-red transition">Courses</a>
              <a href="#why-us" className="text-gray-700 hover:text-german-red transition">Why Us</a>
              <a href="#timeline" className="text-gray-700 hover:text-german-red transition">Process</a>
              <a href="#contact" className="text-gray-700 hover:text-german-red transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</a>
              <a href="#courses" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Courses</a>
              <a href="#why-us" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Why Us</a>
              <a href="#timeline" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Process</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-german-black via-gray-900 to-german-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-2xl mb-6">
              <div className="text-6xl">📚</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            GermanEd Institute
          </h1>
          <p className="text-2xl md:text-3xl text-german-gold mb-8 font-semibold">
            Your Digital Pathway to German Universities
          </p>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Master German language online with native speakers. From A1 to B1, we prepare you for integration, career, and academic success in Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#courses" className="btn-primary">Explore Courses</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">About GermanEd Institute</h2>
          <p className="section-subtitle">
            A digital language and study academy based in Berlin, providing high-quality German education to learners worldwide
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-german-red">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We aim to build a digital language and study academy that enables learners from the Arabic world, Latin America, Southern Europe, and beyond to access high-quality German education. Our fully online model provides flexible learning paths without the need for physical presence in Germany.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-german-red">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver structured, exam-oriented German courses (A1-B1) in small online groups with native German speakers. We combine the flexibility of online platforms with the quality and authenticity of traditional language schools.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-german-black">Development Phases</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-german-red pl-6">
                <h4 className="text-xl font-bold mb-3 text-german-red">Phase 1: Language Courses A1-B1</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Fully online-based courses</li>
                  <li>✓ Preparation for integration, career, and academic success</li>
                  <li>✓ Small online groups (8-12 participants)</li>
                  <li>✓ Targeted preparation for recognized language exams (Goethe/TELC)</li>
                </ul>
              </div>

              <div className="border-l-4 border-german-gold pl-6">
                <h4 className="text-xl font-bold mb-3 text-german-black">Phase 2: Expansion & Partnerships</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Introduction of B2 German courses</li>
                  <li>✓ Partner for digital academic education programs</li>
                  <li>✓ Collaborations with German universities</li>
                  <li>✓ Complete educational bridge: from first language level to recognized study programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">
            Structured German courses aligned with the Common European Framework of Reference (CEFR)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* A1 Course */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-3xl font-bold mb-4 text-blue-900">A1 Beginner</h3>
              <p className="text-gray-700 mb-6">Start your German journey from scratch. Learn essential vocabulary, basic grammar, and everyday communication.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>100 teaching hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Small groups (8-12 students)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Native German instructors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>All lessons recorded</span>
                </li>
              </ul>
              <p className="text-2xl font-bold text-blue-900">€350</p>
              <p className="text-sm text-gray-600">(€450 after pilot phase)</p>
            </div>

            {/* A2 Course */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-3xl font-bold mb-4 text-green-900">A2 Elementary</h3>
              <p className="text-gray-700 mb-6">Build on your foundation. Expand vocabulary, improve grammar, and handle everyday situations confidently.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>100 teaching hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Interactive learning methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Exam preparation (Goethe/TELC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Flexible online access</span>
                </li>
              </ul>
              <p className="text-2xl font-bold text-green-900">€350</p>
              <p className="text-sm text-gray-600">(€450 after pilot phase)</p>
            </div>

            {/* B1 Course */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="text-3xl font-bold mb-4 text-orange-900">B1 Intermediate</h3>
              <p className="text-gray-700 mb-6">Achieve fluency for work and study. Master complex topics and prepare for university admission in Germany.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>100 teaching hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Advanced conversation practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>University admission preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Career-focused German</span>
                </li>
              </ul>
              <p className="text-2xl font-bold text-orange-900">€350</p>
              <p className="text-sm text-gray-600">(€450 after pilot phase)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose GermanEd Institute?</h2>
          <p className="section-subtitle">
            We combine the best of both worlds: digital flexibility and traditional quality
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold mb-3">All Lessons Recorded</h3>
              <p className="text-gray-700">Review and repeat content anytime. Never miss important information.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-3">Native German Speakers</h3>
              <p className="text-gray-700">Learn authentic pronunciation and cultural nuances from qualified native instructors.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Small Groups</h3>
              <p className="text-gray-700">8-12 participants ensure personalized attention and active participation.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">100% Online</h3>
              <p className="text-gray-700">Study from anywhere in the world with flexible scheduling.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-3">Exam Preparation</h3>
              <p className="text-gray-700">Targeted preparation for Goethe and TELC certifications.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Fair Pricing</h3>
              <p className="text-gray-700">Quality education at €350 per course - significantly lower than traditional institutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Who Is This For?</h2>
          <p className="section-subtitle">
            Our courses are designed for those who want to actively shape their future in Germany
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Students</h3>
              <p className="text-gray-700">International students who need recognized German language certificates for university admission in Germany.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4 text-green-900">Professionals</h3>
              <p className="text-gray-700">International specialists in healthcare, IT, or skilled trades who want to expand their career opportunities through German language skills.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-6xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-900">Newcomers</h3>
              <p className="text-gray-700">Family members and newcomers who want to navigate everyday life and the workplace confidently with practical language courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Your Learning Journey</h2>
          <p className="section-subtitle">
            A clear path from beginner to fluency
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-german-red rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Enrollment & Assessment</h3>
                <p className="text-gray-700">Sign up for your desired level. Complete a placement test if needed to ensure you're in the right group.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-german-red rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Interactive Online Classes</h3>
                <p className="text-gray-700">Join live classes with native German instructors. Participate in small groups of 8-12 students for optimal learning.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-german-red rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Practice & Review</h3>
                <p className="text-gray-700">Access all recorded lessons anytime. Complete homework and exercises using proven Hueber materials.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-german-red rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Exam Preparation</h3>
                <p className="text-gray-700">Receive targeted preparation for Goethe or TELC certification exams with personalized guidance.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-german-gold rounded-full flex items-center justify-center text-black font-bold">5</div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Progress to Next Level</h3>
                <p className="text-gray-700">Successfully complete your level and continue your journey from A1 → A2 → B1 and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Project Leadership</h2>
          <p className="section-subtitle">
            Led by experienced professionals with technical and academic expertise
          </p>

          <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-german-red rounded-full flex items-center justify-center text-white text-5xl font-bold">
                  MJ
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Mouaaz Jbarah</h3>
                <p className="text-xl text-german-red mb-4">Founder & Project Director</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Background:</strong> German citizen with Arabic heritage</p>
                  <p><strong>Education:</strong> Bachelor's degree in Computer Engineering from a German university</p>
                  <p><strong>Languages:</strong> Fluent in Arabic, English, and German</p>
                  <p><strong>Expertise:</strong> Technical infrastructure, digital learning platforms, strategic development, and quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-german-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white">Get In Touch</h2>
          <p className="section-subtitle text-gray-300">
            Ready to start your German learning journey? Contact us today!
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-german-gold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <p className="font-semibold text-german-gold">Email</p>
                    <a href="mailto:m.jbarah@german-ed.com" className="hover:text-german-gold transition">m.jbarah@german-ed.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🌐</div>
                  <div>
                    <p className="font-semibold text-german-gold">Website</p>
                    <a href="http://www.german-ed.com" target="_blank" rel="noopener noreferrer" className="hover:text-german-gold transition">www.german-ed.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <p className="font-semibold text-german-gold">Location</p>
                    <p>Berlin, Germany</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-german-gold">Office Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM (CET)</p>
                <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM (CET)</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-german-red focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-german-red focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Course Interest</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-german-red focus:border-transparent">
                    <option>A1 - Beginner</option>
                    <option>A2 - Elementary</option>
                    <option>B1 - Intermediate</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-german-red focus:border-transparent" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-german-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-german-red">German</span>
              <span className="text-white">Ed</span>
              <span className="text-german-gold"> Institute</span>
            </h3>
            <p className="text-gray-400 mb-4">Your Digital Pathway to German Universities</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-german-gold transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-german-gold transition">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-german-gold transition">Imprint</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">© 2025 GermanEd Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
