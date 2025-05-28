import { supabase } from '../lib/supabase';

// Checks if a table exists and returns its columns
export async function checkDatabaseSchema(tableName: string): Promise<{ exists: boolean; columns?: string[]; error?: any }> {
  try {
    const { data, error } = await supabase
      .from('information_schema.columns')
      .select('column_name')
      .eq('table_name', tableName);
    if (error) return { exists: false, error };
    if (data && data.length > 0) {
      return { exists: true, columns: data.map((col: any) => col.column_name) };
    } else {
      return { exists: false };
    }
  } catch (err) {
    return { exists: false, error: err };
  }
}

// Attempts to insert a test row into a table
export async function runInsertTest(tableName: string, testRow: Record<string, any>): Promise<{ success: boolean; error?: any }> {
  try {
    const { error } = await supabase.from(tableName).insert([testRow]);
    if (error) return { success: false, error };
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
} 