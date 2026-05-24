import { useEffect, useState } from "react"

import {
  PlusCircle,
  Trash2,
  Sparkles,
  LogOut,
} from "lucide-react"

import {
  getSubjects,
  createSubject,
  deleteSubject,
  generateStudyPlan,
} from "../api/api"

const Dashboard = () => {

  const [subjects, setSubjects] = useState([])

  const [title, setTitle] = useState("")
  const [examDate, setExamDate] = useState("")
  const [difficulty, setDifficulty] = useState("Medium")

  const [studyPlan, setStudyPlan] = useState("")

  const [loading, setLoading] = useState(false)



  /* =========================
      FETCH SUBJECTS
  ========================= */

  const fetchSubjects = async () => {

    try {

      const data = await getSubjects()

      setSubjects(data)

    } catch (error) {

      console.log(error)
    }
  }



  useEffect(() => {

    const loadSubjects = async () => {

      await fetchSubjects()
    }

    loadSubjects()

  }, [])



  /* =========================
      ADD SUBJECT
  ========================= */

  const handleAddSubject = async (e) => {

    e.preventDefault()

    try {

      await createSubject({
        title,
        examDate,
        difficulty,
      })

      setTitle("")
      setExamDate("")
      setDifficulty("Medium")

      fetchSubjects()

    } catch (error) {

      console.log(error)
    }
  }



  /* =========================
      DELETE SUBJECT
  ========================= */

  const handleDelete = async (id) => {

    try {

      await deleteSubject(id)

      fetchSubjects()

    } catch (error) {

      console.log(error)
    }
  }



  /* =========================
      GENERATE AI PLAN
  ========================= */

  const handleGenerateAI = async () => {

    try {

      setLoading(true)

      const data = await generateStudyPlan()

      setStudyPlan(data.studyPlan)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)
    }
  }



  /* =========================
      LOGOUT
  ========================= */

  const handleLogout = () => {

    localStorage.removeItem("token")

    window.location.href = "/login"
  }



  return (

    <div className="min-h-screen bg-[#020817] text-white px-6 py-6">

      {/* HEADER */}

      <div className="flex items-center justify-between border-b border-cyan-500/10 pb-5 mb-8">

        <div>

          <h1 className="text-2xl font-semibold text-cyan-400">
            Lumina Study AI
          </h1>

          <p className="text-slate-400 mt-1">
            Optimize your learning with AI
          </p>

        </div>



        <button
          onClick={handleLogout}
          className="border border-cyan-500/20 hover:border-cyan-400 px-5 py-3 rounded-xl flex items-center gap-2 text-cyan-300 transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>



      {/* MAIN */}

      <div className="grid lg:grid-cols-[350px_1fr] gap-6">

        {/* LEFT */}

        <div className="bg-[#0B1220] border border-cyan-500/10 rounded-3xl p-6 h-fit">

          <div className="flex items-center gap-3 mb-8">

            <PlusCircle className="text-cyan-400" />

            <h2 className="text-2xl font-semibold">
              Add Subject
            </h2>

          </div>



          <form
            onSubmit={handleAddSubject}
            className="space-y-6"
          >

            <div>

              <label className="text-slate-400 text-sm block mb-2">
                SUBJECT NAME
              </label>

              <input
                type="text"
                placeholder="e.g. Advanced Calculus"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition-all"
                required
              />

            </div>



            <div>

              <label className="text-slate-400 text-sm block mb-2">
                EXAM DATE
              </label>

              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition-all"
                required
              />

            </div>



            <div>

              <label className="text-slate-400 text-sm block mb-2">
                DIFFICULTY
              </label>

              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-cyan-400 transition-all"
              >
                <option className="bg-black">
                  Easy
                </option>

                <option className="bg-black">
                  Medium
                </option>

                <option className="bg-black">
                  Hard
                </option>

              </select>

            </div>



            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-2xl font-semibold text-white shadow-lg hover:opacity-90 transition-all"
            >
              Add Subject
            </button>

          </form>

        </div>



        {/* RIGHT */}

        <div className="space-y-6">

          {/* SUBJECTS */}

          <div className="grid md:grid-cols-2 gap-4">

            {
              subjects.map((subject) => (

                <div
                  key={subject._id}
                  className="bg-[#0B1220] border border-cyan-500/10 rounded-3xl p-5"
                >

                  <div className="flex justify-between items-start">

                    <div>

                      <h2 className="text-2xl font-semibold">
                        {subject.title}
                      </h2>

                      <p className="text-slate-400 mt-2">
                        Exam Date:
                        {" "}
                        {
                          new Date(
                            subject.examDate
                          ).toLocaleDateString()
                        }
                      </p>

                    </div>



                    <button
                      onClick={() => handleDelete(subject._id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>



                  <div className="mt-6">

                    <span className={`
                      px-4 py-2 rounded-full text-sm font-semibold
                      ${
                        subject.difficulty === "Hard"
                          ? "bg-red-500/20 text-red-300"
                          : subject.difficulty === "Medium"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-green-500/20 text-green-300"
                      }
                    `}>
                      {subject.difficulty}
                    </span>

                  </div>

                </div>
              ))
            }

          </div>



          {/* AI SECTION */}

          <div className="bg-[#0B1220] border border-cyan-500/10 rounded-3xl overflow-hidden">

            {/* TOP */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-6 border-b border-white/5">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Sparkles className="text-cyan-400" />

                </div>



                <div>

                  <h2 className="text-2xl font-semibold">
                    AI Study Optimizer
                  </h2>

                  <p className="text-slate-400">
                    Personalized roadmap generation
                  </p>

                </div>

              </div>



              <button
                onClick={handleGenerateAI}
                className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all"
              >
                {
                  loading
                    ? "Generating..."
                    : "Generate AI Plan"
                }
              </button>

            </div>



            {/* AI RESPONSE */}

            <div className="p-6">

              {
                studyPlan ? (

                  <div className="bg-[#131C2E] border border-cyan-500/10 rounded-3xl p-8">

                    <div className="flex items-center gap-3 mb-6">

                      <div className="w-3 h-3 rounded-full bg-cyan-400" />

                      <h2 className="text-2xl font-semibold text-cyan-300">
                        AI Generated Study Plan
                      </h2>

                    </div>



                    <div className="text-slate-300 leading-8 whitespace-pre-wrap text-[15px]">

                      {
                        studyPlan
                          .replace(/\*\*/g, "")
                          .replace(/##/g, "")
                          .replace(/```/g, "")
                      }

                    </div>

                  </div>

                ) : (

                  <div className="bg-[#131C2E] border border-white/5 rounded-3xl p-8 text-slate-400 leading-8">

                    Generate an AI study plan to receive a structured roadmap,
                    daily study targets, revision strategy, focus areas,
                    and personalized preparation guidance.

                  </div>

                )
              }

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard