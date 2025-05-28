import { supabase } from './supabase';
import { Project, Service } from '../types';

// Authentication functions
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data.user;
};

// Projects API
export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const createProject = async (project: Omit<Project, 'id' | 'created_at'>): Promise<Project> => {
  try {
    console.log('API createProject called with data:', project);
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'imageUrl', 'category', 'client', 'completionDate'];
    const missingFields = requiredFields.filter(field => !project[field as keyof typeof project]);
    
    if (missingFields.length > 0) {
      const error = new Error(`Missing required fields: ${missingFields.join(', ')}`);
      console.error('Validation error:', error);
      throw error;
    }
    
    // Make the API call
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single();

    if (error) {
      console.error('Supabase error in createProject:', error);
      throw error;
    }
    
    if (!data) {
      const noDataError = new Error('No data returned after creating project');
      console.error('No data error:', noDataError);
      throw noDataError;
    }
    
    console.log('Project created successfully:', data);
    return data;
  } catch (err) {
    console.error('Error in createProject:', err);
    throw err;
  }
};

export const updateProject = async (id: string, updates: Partial<Omit<Project, 'id' | 'created_at'>>): Promise<Project> => {
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteProject = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Services API
export const getServices = async (): Promise<Service[]> => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message || 'Failed to fetch services');
    }
    
    return data || [];
  } catch (err: any) {
    console.error('Get services error:', err);
    throw err;
  }
};

export const getServiceById = async (id: string): Promise<Service | null> => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const createService = async (service: Omit<Service, 'id' | 'created_at'>): Promise<Service> => {
  try {
    // Ensure features is properly formatted as an array if it exists
    const serviceData = {
      ...service,
      features: Array.isArray(service.features) ? service.features : []
    };

    // Make the API call to Supabase
    const { data, error } = await supabase
      .from('services')
      .insert([serviceData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message || 'Failed to create service');
    }
    
    if (!data) {
      throw new Error('No data returned after creating service');
    }
    
    return data;
  } catch (err: any) {
    console.error('Create service error:', err);
    throw err;
  }
};

export const updateService = async (id: string, updates: Partial<Omit<Service, 'id' | 'created_at'>>): Promise<Service> => {
  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteService = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Test Supabase Connection
export const testSupabaseConnection = async (): Promise<boolean> => {
  try {
    // Try to get a single row from services to test read permissions
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase connection test error:', error);
      return false;
    }
    
    console.log('Supabase connection successful', data);
    return true;
  } catch (err) {
    console.error('Supabase connection test failed:', err);
    return false;
  }
};

// Supabase real-time subscriptions
export const subscribeToProjects = (callback: (payload: { new: Project }) => void) => {
  const subscription = supabase
    .channel('public:projects')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, callback)
    .subscribe();

  return subscription;
};

export const subscribeToServices = (callback: (payload: { new: Service }) => void) => {
  const subscription = supabase
    .channel('public:services')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, callback)
    .subscribe();

  return subscription;
}; 