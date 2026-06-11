export type ActivityType = "email" | "text" | "call" | "meeting" | "note";
export type ActivityDirection = "inbound" | "outbound";
export type TaskStatus = "open" | "done";
export type MeetingStatus = "confirmed" | "cancelled" | "completed";
export type AutomationTrigger =
  | "contact_created"
  | "meeting_booked"
  | "activity_logged";

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string;
          name: string;
          industry: string | null;
          website: string | null;
          email: string | null;
          phone: string | null;
          address_line: string | null;
          city: string | null;
          state: string | null;
          postal_code: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          industry?: string | null;
          website?: string | null;
          email?: string | null;
          phone?: string | null;
          address_line?: string | null;
          city?: string | null;
          state?: string | null;
          postal_code?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          industry?: string | null;
          website?: string | null;
          email?: string | null;
          phone?: string | null;
          address_line?: string | null;
          city?: string | null;
          state?: string | null;
          postal_code?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      contacts: {
        Row: {
          id: string;
          company_id: string | null;
          first_name: string;
          last_name: string | null;
          title: string | null;
          email: string | null;
          phone: string | null;
          mobile: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_id?: string | null;
          first_name: string;
          last_name?: string | null;
          title?: string | null;
          email?: string | null;
          phone?: string | null;
          mobile?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string | null;
          first_name?: string;
          last_name?: string | null;
          title?: string | null;
          email?: string | null;
          phone?: string | null;
          mobile?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "contacts_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      activities: {
        Row: {
          id: string;
          contact_id: string | null;
          company_id: string | null;
          type: ActivityType;
          direction: ActivityDirection | null;
          subject: string | null;
          body: string | null;
          occurred_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          contact_id?: string | null;
          company_id?: string | null;
          type: ActivityType;
          direction?: ActivityDirection | null;
          subject?: string | null;
          body?: string | null;
          occurred_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          contact_id?: string | null;
          company_id?: string | null;
          type?: ActivityType;
          direction?: ActivityDirection | null;
          subject?: string | null;
          body?: string | null;
          occurred_at?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "activities_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "activities_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      tasks: {
        Row: {
          id: string;
          title: string;
          details: string | null;
          contact_id: string | null;
          company_id: string | null;
          due_at: string | null;
          status: TaskStatus;
          source: string;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          details?: string | null;
          contact_id?: string | null;
          company_id?: string | null;
          due_at?: string | null;
          status?: TaskStatus;
          source?: string;
          created_at?: string;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          title?: string;
          details?: string | null;
          contact_id?: string | null;
          company_id?: string | null;
          due_at?: string | null;
          status?: TaskStatus;
          source?: string;
          created_at?: string;
          completed_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "tasks_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tasks_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      meetings: {
        Row: {
          id: string;
          contact_id: string | null;
          contact_name: string;
          contact_email: string;
          contact_phone: string | null;
          company_name: string | null;
          starts_at: string;
          ends_at: string;
          notes: string | null;
          status: MeetingStatus;
          created_at: string;
        };
        Insert: {
          id?: string;
          contact_id?: string | null;
          contact_name: string;
          contact_email: string;
          contact_phone?: string | null;
          company_name?: string | null;
          starts_at: string;
          ends_at: string;
          notes?: string | null;
          status?: MeetingStatus;
          created_at?: string;
        };
        Update: {
          id?: string;
          contact_id?: string | null;
          contact_name?: string;
          contact_email?: string;
          contact_phone?: string | null;
          company_name?: string | null;
          starts_at?: string;
          ends_at?: string;
          notes?: string | null;
          status?: MeetingStatus;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "meetings_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts";
            referencedColumns: ["id"];
          },
        ];
      };
      automation_rules: {
        Row: {
          id: string;
          name: string;
          trigger: AutomationTrigger;
          action: string;
          task_title_template: string;
          delay_days: number;
          enabled: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          trigger: AutomationTrigger;
          action?: string;
          task_title_template: string;
          delay_days?: number;
          enabled?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          trigger?: AutomationTrigger;
          action?: string;
          task_title_template?: string;
          delay_days?: number;
          enabled?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      get_booked_slots: {
        Args: { p_from: string; p_to: string };
        Returns: { starts_at: string; ends_at: string }[];
      };
      book_meeting: {
        Args: {
          p_name: string;
          p_email: string;
          p_phone: string | null;
          p_company: string | null;
          p_starts_at: string;
          p_notes?: string | null;
        };
        Returns: string;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type CompanyRow = Database["public"]["Tables"]["companies"]["Row"];
export type ContactRow = Database["public"]["Tables"]["contacts"]["Row"];
export type ActivityRow = Database["public"]["Tables"]["activities"]["Row"];
export type TaskRow = Database["public"]["Tables"]["tasks"]["Row"];
export type MeetingRow = Database["public"]["Tables"]["meetings"]["Row"];
export type AutomationRuleRow =
  Database["public"]["Tables"]["automation_rules"]["Row"];
