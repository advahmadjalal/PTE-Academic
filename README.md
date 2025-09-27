# PTE Academic 30-Day Preparation App

A comprehensive PTE Academic preparation application with multi-user support, real-time progress tracking, and AI-powered study guidance.

## Features

- **Multi-User Authentication**: Secure login/signup with email verification
- **Personalized Study Plans**: AI-generated 30-day study plans based on target scores
- **Real-time Progress Tracking**: Track daily progress, study sessions, and improvements
- **Task Management**: Complete PTE task library with scoring criteria and tips
- **Mock Tests**: Full-length practice tests with detailed analytics
- **Vocabulary Builder**: Interactive vocabulary learning with spaced repetition
- **Study Planner**: Customizable study schedules and session management
- **Progress Analytics**: Detailed charts and insights on performance

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Update the `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 3. Setup Database
1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `supabase/migrations/20250927043157_purple_beacon.sql` into the SQL Editor
3. Click "Run" to execute the migration
3. This will create all necessary tables and security policies

### 4. Configure Authentication
1. In Supabase dashboard, go to Authentication > Settings
2. **IMPORTANT**: Disable "Enable email confirmations" for development to avoid login issues
3. Configure any additional auth providers if needed

### 5. Run the Application
```bash
npm run dev
```

## Database Schema

The application uses the following main tables:
- `user_profiles`: User settings and preferences
- `user_tasks`: Daily task progress and targets
- `user_progress`: Daily study progress and analytics
- `study_sessions`: Custom study session scheduling

All tables have Row Level Security (RLS) enabled to ensure users can only access their own data.

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Authentication**: Supabase Auth with email/password

## Key Features Explained

### Multi-User Support
- Secure authentication with Supabase Auth
- Individual user profiles and progress tracking
- Data isolation with Row Level Security

### Real-time Progress
- Live updates of task completion
- Daily progress tracking
- Historical performance analytics

### Personalized Learning
- Adaptive study plans based on target scores
- Individual task targets based on study hours
- Progress-based recommendations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
