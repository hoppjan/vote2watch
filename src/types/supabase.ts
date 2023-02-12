export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      movie: {
        Row: {
          created_at: string | null
          description: string | null
          duration: number | null
          movie_db_id: string | null
          movie_db_link: string | null
          movie_id: number
          release_year: number | null
          title: string | null
          trailer_link: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration?: number | null
          movie_db_id?: string | null
          movie_db_link?: string | null
          movie_id?: number
          release_year?: number | null
          title?: string | null
          trailer_link?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration?: number | null
          movie_db_id?: string | null
          movie_db_link?: string | null
          movie_id?: number
          release_year?: number | null
          title?: string | null
          trailer_link?: string | null
        }
      }
      movie_in_list: {
        Row: {
          created_at: string | null
          movie_id: number
          movie_list_id: number
          watched: boolean
        }
        Insert: {
          created_at?: string | null
          movie_id: number
          movie_list_id: number
          watched?: boolean
        }
        Update: {
          created_at?: string | null
          movie_id?: number
          movie_list_id?: number
          watched?: boolean
        }
      }
      movie_in_poll: {
        Row: {
          created_at: string | null
          movie_id: number
          poll_id: number
        }
        Insert: {
          created_at?: string | null
          movie_id: number
          poll_id: number
        }
        Update: {
          created_at?: string | null
          movie_id?: number
          poll_id?: number
        }
      }
      movie_list: {
        Row: {
          created_at: string | null
          movie_list_id: number
          owner: string
        }
        Insert: {
          created_at?: string | null
          movie_list_id?: number
          owner: string
        }
        Update: {
          created_at?: string | null
          movie_list_id?: number
          owner?: string
        }
      }
      poll: {
        Row: {
          created_at: string | null
          movie_list_id: number | null
          poll_id: number
        }
        Insert: {
          created_at?: string | null
          movie_list_id?: number | null
          poll_id?: number
        }
        Update: {
          created_at?: string | null
          movie_list_id?: number | null
          poll_id?: number
        }
      }
      vote: {
        Row: {
          created_at: string | null
          movie_id: number
          poll_id: number
          user_id: string
          vote_id: number
        }
        Insert: {
          created_at?: string | null
          movie_id: number
          poll_id: number
          user_id: string
          vote_id?: number
        }
        Update: {
          created_at?: string | null
          movie_id?: number
          poll_id?: number
          user_id?: string
          vote_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
