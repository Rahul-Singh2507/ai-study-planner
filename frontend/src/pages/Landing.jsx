import { Link } from "react-router-dom"

const Landing = () => {
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white relative overflow-hidden flex items-center justify-center px-6">

      {/* BACKGROUND BLURS */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>



      {/* NAVBAR */}

      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AI Study Planner
        </h1>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            Get Started
          </Link>

        </div>

      </nav>



      {/* HERO SECTION */}

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center z-10">

        {/* LEFT SIDE */}

        <div>

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-6">
            AI Powered Productivity
          </p>

          <h1 className="text-7xl lg:text-8xl font-extrabold leading-tight">

            Smart AI Powered

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Study Planner
            </span>

          </h1>

          <p className="text-gray-400 text-xl mt-10 leading-9 max-w-xl">

            Organize subjects, track exams, generate personalized AI study plans,
            and boost your productivity with an intelligent dashboard built for students.

          </p>



          {/* BUTTONS */}

          <div className="flex gap-6 mt-12">

            <Link
              to="/register"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Get Started
            </Link>



            <Link
              to="/login"
              className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              Login
            </Link>

          </div>



          {/* STATS */}

          <div className="flex gap-12 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                24/7
              </h2>

              <p className="text-gray-400 mt-2">
                AI Assistance
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-400">
                Smart
              </h2>

              <p className="text-gray-400 mt-2">
                Study Planning
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-pink-400">
                Fast
              </h2>

              <p className="text-gray-400 mt-2">
                Productivity
              </p>
            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}

        <div className="relative">

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl hover:-translate-y-2 transition-all duration-500">

            <div className="space-y-6">

              <div className="bg-[#1e293b]/80 rounded-3xl p-7 border border-white/10 hover:border-cyan-400/40 transition-all duration-300">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    AI Study Plans
                  </h3>

                  <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

                </div>

                <p className="text-gray-400 mt-4 leading-7">
                  Generate intelligent daily study schedules instantly using AI.
                </p>

              </div>



              <div className="bg-[#1e293b]/80 rounded-3xl p-7 border border-white/10 hover:border-purple-400/40 transition-all duration-300">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    Subject Tracking
                  </h3>

                  <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse"></div>

                </div>

                <p className="text-gray-400 mt-4 leading-7">
                  Manage exams, deadlines, difficulty levels, and priorities easily.
                </p>

              </div>



              <div className="bg-[#1e293b]/80 rounded-3xl p-7 border border-white/10 hover:border-pink-400/40 transition-all duration-300">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    Smart Dashboard
                  </h3>

                  <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse"></div>

                </div>

                <p className="text-gray-400 mt-4 leading-7">
                  Monitor progress through a modern interactive analytics dashboard.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Landing