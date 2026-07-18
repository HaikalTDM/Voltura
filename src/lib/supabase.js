import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export function isConfigured() { return !!supabase; }

export async function pushSession(id, data) {
  if (!supabase) return null;
  const { error } = await supabase
    .from('sessions')
    .upsert({ id, data, updated_at: new Date().toISOString() });
  if (error) console.error('Supabase push error:', error);
  return error ? null : id;
}

export async function getSession(id) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('sessions')
    .select('data')
    .eq('id', id)
    .single();
  if (error || !data) return null;
  return data.data;
}

export function subscribeSession(id, callback) {
  if (!supabase) return () => {};
  const channel = supabase
    .channel(`session-${id}`)
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'sessions',
      filter: `id=eq.${id}`
    }, (payload) => {
      callback(payload.new?.data || payload.old?.data);
    })
    .subscribe();
  return () => supabase.removeChannel(channel);
}
