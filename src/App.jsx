import { useState } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-german-red to-german-black rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                GE
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight">
                  <span className="text-german-black">GermanEd</span>
                  <span className="text-german-red"> Institute</span>
                </h1>
                <p className="text-xs text-gray-500">Berlin, Germany</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-german-red transition font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-german-red transition font-medium">About</a>
              <a href="#courses" className="text-gray-700 hover:text-german-red transition font-medium">Courses</a>
              <a href="#testimonials" className="text-gray-700 hover:text-german-red transition font-medium">Success</a>
              <a href="#contact" className="bg-german-red hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition font-semibold shadow-md hover:shadow-lg">
                Enroll Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              <a href="#home" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Home</a>
              <a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">About</a>
              <a href="#courses" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Courses</a>
              <a href="#testimonials" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Success</a>
              <a href="#contact" className="block px-4 py-3 bg-german-red text-white rounded-lg text-center font-semibold">Enroll Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-german-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-german-gold rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Accredited Online German Courses</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-german-red to-german-gold">
                  Pathway to Germany
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Master German language online with native speakers. Achieve A1-B1 certification and unlock opportunities for integration, career growth, and university admission in Germany.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#courses" className="group inline-flex items-center justify-center gap-2 bg-german-red hover:bg-red-700 text-white px-8 py-4 rounded-xl transition font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform">
                  Explore Courses
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl transition font-bold text-lg border-2 border-white/20 hover:border-white/40">
                  Contact Us
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-german-gold">100+</div>
                  <div className="text-sm text-gray-400">Teaching Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-german-gold">8-12</div>
                  <div className="text-sm text-gray-400">Students/Class</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-german-gold">100%</div>
                  <div className="text-sm text-gray-400">Online</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-german-red to-german-gold rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                  {/* German Flag */}
                  <div className="space-y-4">
                    <div className="h-4 bg-black rounded"></div>
                    <div className="h-4 bg-german-red rounded"></div>
                    <div className="h-4 bg-german-gold rounded"></div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 pt-6">
                    {[
                      { icon: '🎓', text: 'Native German Instructors' },
                      { icon: '📜', text: 'Goethe & TELC Certified' },
                      { icon: '🎥', text: 'All Lessons Recorded' },
                      { icon: '💰', text: 'Affordable Pricing €350' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="text-white font-medium">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-german-red">A1-B1</div>
              <div className="text-sm text-gray-600 font-medium">CEFR Levels</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-german-red">Native</div>
              <div className="text-sm text-gray-600 font-medium">German Teachers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-german-red">€350</div>
              <div className="text-sm text-gray-600 font-medium">Per Course</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-german-red">Berlin</div>
              <div className="text-sm text-gray-600 font-medium">Based Institute</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-german-red/10 rounded-full mb-6">
              <span className="text-german-red font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Premium German Language <span className="text-german-red">Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A digital language and study academy based in Berlin, connecting international learners with authentic German language expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-german-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To build a digital language and study academy that enables learners from the Arabic world, Latin America, Southern Europe, and beyond to access high-quality German education with complete flexibility and without geographical barriers.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-german-gold to-yellow-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver structured, exam-oriented German courses (A1-B1) in small online groups with native German speakers, combining digital flexibility with the quality and authenticity of traditional language schools.
              </p>
            </div>
          </div>

          {/* Development Phases */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Development Roadmap</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-german-red rounded-lg flex items-center justify-center font-bold">1</div>
                  <h4 className="text-xl font-bold">Phase 1: Language Courses A1-B1</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fully online-based courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Preparation for integration, career, and academic success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Small online groups (8-12 participants)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Targeted exam preparation (Goethe/TELC)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-german-gold text-black rounded-lg flex items-center justify-center font-bold">2</div>
                  <h4 className="text-xl font-bold">Phase 2: Expansion & Partnerships</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Introduction of B2 German courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Digital academic education programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Collaborations with German universities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-german-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete pathway to German study programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-german-gold/10 rounded-full mb-6">
              <span className="text-german-black font-semibold">Our Courses</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-german-red">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured German courses aligned with the Common European Framework of Reference (CEFR)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* A1 Course */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200 hover:border-blue-400">
              <div className="absolute top-6 right-6 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                BEGINNER
              </div>
              <div className="text-6xl mb-6">🌱</div>
              <h3 className="text-3xl font-bold mb-3 text-blue-900">A1 Level</h3>
              <p className="text-blue-700 font-semibold mb-6">Foundation Course</p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Start your German journey from scratch. Build essential vocabulary, master basic grammar, and develop everyday communication skills.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  '100 teaching hours',
                  'Small groups (8-12 students)',
                  'Native German instructors',
                  'All lessons recorded',
                  'Exam preparation included'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-200 pt-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-blue-900">€350</span>
                  <span className="text-sm text-gray-600">/course</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">€450 after pilot phase</p>
                <a href="#contact" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-bold transition">
                  Start Learning
                </a>
              </div>
            </div>

            {/* A2 Course */}
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-200 hover:border-green-400">
              <div className="absolute top-6 right-6 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                ELEMENTARY
              </div>
              <div className="text-6xl mb-6">🌿</div>
              <h3 className="text-3xl font-bold mb-3 text-green-900">A2 Level</h3>
              <p className="text-green-700 font-semibold mb-6">Building Fluency</p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Expand your German foundation. Enhance vocabulary, refine grammar, and confidently handle everyday situations.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  '100 teaching hours',
                  'Interactive learning methods',
                  'Exam preparation (Goethe/TELC)',
                  'Flexible online access',
                  'Personal progress tracking'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-green-200 pt-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-green-900">€350</span>
                  <span className="text-sm text-gray-600">/course</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">€450 after pilot phase</p>
                <a href="#contact" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-bold transition">
                  Continue Journey
                </a>
              </div>
            </div>

            {/* B1 Course */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-200 hover:border-orange-400">
              <div className="absolute top-6 right-6 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                INTERMEDIATE
              </div>
              <div className="text-6xl mb-6">🌳</div>
              <h3 className="text-3xl font-bold mb-3 text-orange-900">B1 Level</h3>
              <p className="text-orange-700 font-semibold mb-6">Advanced Competency</p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Achieve fluency for work and study. Master complex topics and prepare for university admission in Germany.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  '100 teaching hours',
                  'Advanced conversation practice',
                  'University admission prep',
                  'Career-focused German',
                  'Final certification support'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-orange-200 pt-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-orange-900">€350</span>
                  <span className="text-sm text-gray-600">/course</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">€450 after pilot phase</p>
                <a href="#contact" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-xl font-bold transition">
                  Achieve Fluency
                </a>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-16 bg-gradient-to-r from-german-red to-red-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Complete Learning Path: A1 → A2 → B1</h3>
            <p className="text-lg mb-6 opacity-90">Total investment: €1,050 for full German proficiency (€1,350 after pilot phase)</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">✓ 300 Teaching Hours</div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">✓ University Ready</div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">✓ Career Qualified</div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">✓ Integration Prepared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-german-red/10 rounded-full mb-6">
              <span className="text-german-red font-semibold">Why GermanEd</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence in <span className="text-german-red">German Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine digital flexibility with traditional quality for an unmatched learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎥',
                title: 'All Lessons Recorded',
                description: 'Review and repeat content anytime. Never miss important information with lifetime access to class recordings.',
                color: 'from-purple-500 to-purple-700'
              },
              {
                icon: '👨‍🏫',
                title: 'Native German Speakers',
                description: 'Learn authentic pronunciation and cultural nuances from qualified native instructors with academic credentials.',
                color: 'from-blue-500 to-blue-700'
              },
              {
                icon: '👥',
                title: 'Small Group Classes',
                description: '8-12 participants ensure personalized attention, active participation, and meaningful peer interaction.',
                color: 'from-green-500 to-green-700'
              },
              {
                icon: '🌍',
                title: '100% Online Learning',
                description: 'Study from anywhere in the world with flexible scheduling that fits your lifestyle and timezone.',
                color: 'from-red-500 to-red-700'
              },
              {
                icon: '📜',
                title: 'Exam Certification',
                description: 'Targeted preparation for Goethe and TELC certifications with proven success strategies.',
                color: 'from-yellow-500 to-yellow-700'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'Quality education at €350 per course - significantly lower than traditional institutes without hidden fees.',
                color: 'from-pink-500 to-pink-700'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-german-gold/10 rounded-full mb-6">
              <span className="text-german-black font-semibold">Who We Serve</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Path to <span className="text-german-red">Success in Germany</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for those ready to shape their future in Germany
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'International Students',
                description: 'Aspiring university students who need recognized German language certificates for admission to German universities and colleges.',
                bg: 'from-blue-500 to-blue-700',
                items: ['University Admission', 'Student Visa Support', 'Academic German']
              },
              {
                icon: '💼',
                title: 'Professionals',
                description: 'International specialists in healthcare, IT, engineering, or skilled trades seeking career advancement through German language proficiency.',
                bg: 'from-green-500 to-green-700',
                items: ['Career Development', 'Professional German', 'Work Visa Preparation']
              },
              {
                icon: '👨‍👩‍👧',
                title: 'Families & Newcomers',
                description: 'Family members and newcomers who want to navigate everyday life and the workplace confidently with practical language skills.',
                bg: 'from-orange-500 to-orange-700',
                items: ['Daily Communication', 'Cultural Integration', 'Community Connection']
              }
            ].map((audience, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200">
                <div className={`h-2 bg-gradient-to-r ${audience.bg}`}></div>
                <div className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${audience.bg} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition shadow-lg`}>
                    {audience.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{audience.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
                  <div className="space-y-2">
                    {audience.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="font-semibold">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Journey <span className="text-german-gold">Starts Here</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join international learners achieving their German language goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-german-red to-red-700 rounded-full flex items-center justify-center text-2xl font-bold">
                  A
                </div>
                <div>
                  <div className="font-bold text-lg">Ahmad M.</div>
                  <div className="text-sm text-gray-400">Syrian Student → TU Berlin</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-german-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "The small group sizes and native instructors made all the difference. I passed my B1 exam and got admitted to TU Berlin. GermanEd Institute gave me the foundation I needed for success in Germany."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-german-gold to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                  M
                </div>
                <div>
                  <div className="font-bold text-lg">Maria S.</div>
                  <div className="text-sm text-gray-400">Brazilian Nurse → Munich Hospital</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-german-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "As a healthcare professional, I needed quality German courses that fit my schedule. The recorded lessons and flexible timing allowed me to learn while working. Now I'm practicing nursing in Munich!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process Timeline */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-german-red/10 rounded-full mb-6">
              <span className="text-german-red font-semibold">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Learning <span className="text-german-red">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              A clear, structured path from beginner to German proficiency
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-german-red via-german-gold to-green-500 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  number: '01',
                  title: 'Enrollment & Assessment',
                  description: 'Sign up for your desired level. Complete a free placement test to ensure you join the right group for your current skills.',
                  color: 'from-red-500 to-red-700',
                  icon: '📝'
                },
                {
                  number: '02',
                  title: 'Interactive Live Classes',
                  description: 'Join engaging live sessions with native German instructors. Participate actively in small groups of 8-12 students for optimal learning.',
                  color: 'from-orange-500 to-orange-700',
                  icon: '💬'
                },
                {
                  number: '03',
                  title: 'Practice & Review',
                  description: 'Access all recorded lessons anytime for review. Complete homework and exercises using proven Hueber teaching materials.',
                  color: 'from-yellow-500 to-yellow-700',
                  icon: '📚'
                },
                {
                  number: '04',
                  title: 'Exam Preparation',
                  description: 'Receive targeted preparation for Goethe or TELC certification exams with personalized feedback and practice tests.',
                  color: 'from-green-500 to-green-700',
                  icon: '🎯'
                },
                {
                  number: '05',
                  title: 'Certification & Progress',
                  description: 'Successfully complete your level exam and continue your journey from A1 → A2 → B1 and beyond to achieve your goals.',
                  color: 'from-blue-500 to-blue-700',
                  icon: '🏆'
                }
              ].map((step, idx) => (
                <div key={idx} className="relative flex gap-8 items-start">
                  <div className={`hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl items-center justify-center text-white font-bold text-xl shadow-lg z-10`}>
                    {step.number}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="md:hidden text-sm font-bold text-gray-400 mb-2">STEP {step.number}</div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-german-gold/10 rounded-full mb-6">
              <span className="text-german-black font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Led by <span className="text-german-red">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leadership with technical and academic expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-40 h-40 bg-gradient-to-br from-german-red to-german-black rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                      MJ
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-german-gold rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      🎓
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Mouaaz Jbarah</h3>
                  <p className="text-xl text-german-red font-semibold mb-6">Founder & Project Director</p>

                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-german-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Background:</strong> German citizen with Arabic heritage
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-german-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Education:</strong> Bachelor's degree in Computer Engineering from a German university
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-german-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Languages:</strong> Fluent in Arabic, English, and German
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-german-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Expertise:</strong> Technical infrastructure, digital learning platforms, strategic development, and quality assurance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-german-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-german-gold rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="font-semibold">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your <span className="text-german-gold">German Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today and take the first step toward mastering German
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-german-gold">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-german-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-german-gold mb-1">Email</p>
                      <a href="mailto:m.jbarah@german-ed.com" className="text-gray-300 hover:text-white transition">
                        m.jbarah@german-ed.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-german-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-german-gold mb-1">Website</p>
                      <a href="http://www.german-ed.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                        www.german-ed.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-german-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-german-gold mb-1">Location</p>
                      <p className="text-gray-300">Berlin, Germany</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold mb-4 text-german-gold">Office Hours</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (CET)</p>
                  <p>Saturday: 10:00 AM - 2:00 PM (CET)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-german-red focus:border-transparent transition text-gray-900"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-german-red focus:border-transparent transition text-gray-900"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Interest *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-german-red focus:border-transparent transition text-gray-900" required>
                      <option value="">Select a course level</option>
                      <option value="a1">A1 - Beginner Level</option>
                      <option value="a2">A2 - Elementary Level</option>
                      <option value="b1">B1 - Intermediate Level</option>
                      <option value="complete">Complete Path (A1-B1)</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-german-red focus:border-transparent transition text-gray-900"
                      placeholder="+49 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-german-red focus:border-transparent transition text-gray-900"
                      placeholder="Tell us about your German learning goals..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-german-red to-red-700 hover:from-red-700 hover:to-german-red text-white font-bold py-4 px-8 rounded-xl transition shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-german-red to-german-black rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  GE
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    <span className="text-white">GermanEd</span>
                    <span className="text-german-red"> Institute</span>
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your Digital Pathway to German Universities. Master German language online with native speakers from Berlin.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-german-gold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Success Stories</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-bold mb-4 text-german-gold">Our Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#courses" className="hover:text-white transition">A1 - Beginner</a></li>
                <li><a href="#courses" className="hover:text-white transition">A2 - Elementary</a></li>
                <li><a href="#courses" className="hover:text-white transition">B1 - Intermediate</a></li>
                <li><a href="#contact" className="hover:text-white transition">Enroll Now</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 GermanEd Institute. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition">Imprint</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
