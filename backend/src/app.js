import express from 'express';
import authRoutes from './routes/auth.routes.js';
import subjectRoutes from './routes/subject.routes.js';
import plannerRoutes from './routes/planner.routes.js'; 
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true
}))
app.use('/api/auth', authRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/planner', plannerRoutes);

export default app;