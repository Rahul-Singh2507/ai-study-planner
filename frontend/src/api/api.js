import axios from "axios"



/* =========================
   AXIOS INSTANCE
========================= */

const API = axios.create({
  baseURL: "http://localhost:3000/api",
})



/* =========================
   AUTO TOKEN INTERCEPTOR
========================= */

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token")

  if (token) {

    req.headers.Authorization = `Bearer ${token}`
  }

  return req
})



/* =========================
   AUTH ROUTES
========================= */

// Register User

export const registerUser = async (userData) => {

  const response = await API.post(
    "/auth/register",
    userData
  )

  return response.data
}



// Login User

export const loginUser = async (userData) => {

  const response = await API.post(
    "/auth/login",
    userData
  )

  return response.data
}



/* =========================
   SUBJECT ROUTES
========================= */

// Get All Subjects

export const getSubjects = async () => {

  const response = await API.get(
    "/subjects"
  )

  return response.data
}



// Create Subject

export const createSubject = async (
  subjectData
) => {

  const response = await API.post(
    "/subjects",
    subjectData
  )

  return response.data
}



// Delete Subject

export const deleteSubject = async (
  id
) => {

  const response = await API.delete(
    `/subjects/${id}`
  )

  return response.data
}



/* =========================
   AI PLANNER ROUTE
========================= */

// Generate AI Study Plan

export const generateStudyPlan = async () => {

  const response = await API.get(
    "/planner"
  )

  return response.data
}



export default API