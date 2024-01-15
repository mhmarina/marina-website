import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hviebstkftltmuhofkju.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2aWVic3RrZnRsdG11aG9ma2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDQ1NTgsImV4cCI6MjAyMDg4MDU1OH0.w2Td1rrApLmsaBIh6Hu4wCH11vAZqPE-Pm4al8l0VOw"
);
