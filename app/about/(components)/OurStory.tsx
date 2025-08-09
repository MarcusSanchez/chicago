import { Heart, Users, Target, Award, ArrowRight, Lightbulb, Compass, Rocket } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-yellow-100 text-[#002552] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-200">
            <Heart className="w-5 h-5 mr-3" />
            Our Story
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6">
            From Personal Journey to
            <span className="block text-yellow-500">Professional Mission</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A deeply personal path that sparked a lifelong passion for helping others find their professional voice
            and navigate the evolving world of work with confidence.
          </p>
        </div>

        {/* Timeline Story */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-[#002552] to-yellow-400 hidden lg:block"></div>

          <div className="space-y-16">
            {/* Story Point 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:text-right lg:pr-12">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-lg border border-yellow-200">
                  <div className="flex items-center justify-center lg:justify-end mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-[#002552]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002552] mb-4">The Spark at 20</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Chicago Career Collective was born from a deeply personal path. Our founder first stepped
                    into career services at the age of 20 as a work-study peer advisor at the University of Minnesota.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    That experience sparked a lifelong passion for helping others find their professional voice
                    and discover meaningful career paths.
                  </p>
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">University career services image</p>
                  </div>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
            </div>

            {/* Story Point 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-12 order-2 lg:order-1">
                <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">Diverse professionals collaboration</p>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12 order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#002552] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002552] mb-4">Diverse Impact</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Over the years, we've worked with diverse populations—from recent grads and mid-career changers
                    to creatives, tech professionals, and nonprofit leaders.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Always with the goal of helping them align their skills with work that fits their lives
                    and creates meaningful impact.
                  </p>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#002552] rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
            </div>

            {/* Story Point 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:text-right lg:pr-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg border border-green-200">
                  <div className="flex items-center justify-center lg:justify-end mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002552] mb-4">Future-Ready Vision</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We created this practice to offer a thoughtful, human-centered approach to career development
                    rooted in strategy, equity, and real transformation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In today's rapidly evolving job market, that means supporting clients as they adapt to
                    AI-influenced industries—preparing them to not only survive change, but lead through it.
                  </p>
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">AI and future of work visualization</p>
                  </div>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
            </div>
          </div>
        </div>

        {/* Our Foundation */}
        <div className="bg-gradient-to-r from-[#002552] to-[#001a3d] rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-[#002552]" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Foundation</h3>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed text-lg">
              Built on passion, experience, and genuine care for each client's success. We believe that everyone
              has the potential to achieve their career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-yellow-400/30">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Diverse Populations</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Supporting everyone from recent graduates and mid-career changers to creatives,
                tech professionals, and nonprofit leaders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-yellow-400/30">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Strategic Focus</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Helping clients align their skills with work that fits their lives through
                thoughtful strategy and personalized guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-yellow-400/30">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Real Transformation</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Rooted in equity and designed for real change, preparing clients to not only
                survive change, but lead through it.
              </p>
            </div>
          </div>
        </div>

        {/* Future of Work Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-[#002552] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-blue-200">
              <Compass className="w-5 h-5 mr-3" />
              Adapting to Change
            </div>
            <h3 className="text-3xl font-bold text-[#002552] mb-6">Navigating the Future of Work</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              As automation and artificial intelligence continue to reshape industries, many people are finding
              themselves at a crossroads in their careers. At Chicago Career Collective, we recognize this shift
              and are committed to helping individuals pivot, upskill, and retrain to remain competitive.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-[#002552] text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-1">Future-Proofing Careers</h4>
                  <p className="text-gray-600 text-sm">Preparing professionals for an AI-driven world with strategic career planning</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-[#002552] text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-1">Career Transitions</h4>
                  <p className="text-gray-600 text-sm">Supporting pivots from traditional industries to emerging opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-[#002552] text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-1">Embracing Innovation</h4>
                  <p className="text-gray-600 text-sm">Helping clients leverage new technologies and evolving industry landscapes</p>
                </div>
              </div>
            </div>
            <button className="bg-yellow-400 text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center group">
              Learn About Our Approach
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#002552] mb-2">AI & Automation Ready</h4>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're exploring tech, transitioning from the arts, or navigating
                  the uncertainties of automation, we're here to help you thrive in the future of work.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#002552] mb-1">500+</div>
                  <div className="text-xs text-gray-600">Professionals Guided</div>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#002552] mb-1">20+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}