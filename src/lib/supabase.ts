import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          email: string;
          full_name: string;
          target_score: number;
          daily_hours: number;
          current_level: string;
          start_date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          email: string;
          full_name: string;
          target_score: number;
          daily_hours: number;
          current_level: string;
          start_date: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          email?: string;
          full_name?: string;
          target_score?: number;
          daily_hours?: number;
          current_level?: string;
          start_date?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_tasks: {
        Row: {
          id: string;
          user_id: string;
          task_id: string;
          task_name: string;
          priority: string;
          section: string;
          daily_target: number;
          completed: number;
          date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          task_id: string;
          task_name: string;
          priority: string;
          section: string;
          daily_target: number;
          completed?: number;
          date: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          task_id?: string;
          task_name?: string;
          priority?: string;
          section?: string;
          daily_target?: number;
          completed?: number;
          date?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          total_tasks: number;
          completed_tasks: number;
          study_time_minutes: number;
          mock_test_scores: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          date: string;
          total_tasks: number;
          completed_tasks: number;
          study_time_minutes?: number;
          mock_test_scores?: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          date?: string;
          total_tasks?: number;
          completed_tasks?: number;
          study_time_minutes?: number;
          mock_test_scores?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
      study_sessions: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          start_time: string;
          end_time: string;
          tasks: string[];
          completed: boolean;
          notes: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          date: string;
          start_time: string;
          end_time: string;
          tasks: string[];
          completed?: boolean;
          notes?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          date?: string;
          start_time?: string;
          end_time?: string;
          tasks?: string[];
          completed?: boolean;
          notes?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};