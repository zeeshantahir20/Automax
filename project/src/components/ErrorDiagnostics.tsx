import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { checkDatabaseSchema, runInsertTest } from '../utils/databaseChecker';

interface ErrorDiagnosticsProps {
  visible?: boolean;
}

const ErrorDiagnostics: React.FC<ErrorDiagnosticsProps> = ({ visible = true }) => {
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking...');
  const [tablesStatus, setTablesStatus] = useState<string>('Checking...');
  const [schemaStatus, setSchemaStatus] = useState<string>('Not checked');
  const [insertStatus, setInsertStatus] = useState<string>('Not tested');
  const [authStatus, setAuthStatus] = useState<string>('Checking...');
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [issues, setIssues] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  useEffect(() => {
    const runDiagnostics = async () => {
      try {
        // 1. Test basic connection
        try {
          const { data, error } = await supabase.from('services').select('*').limit(1);
          if (error) {
            setConnectionStatus('Failed: ' + error.message);
          } else {
            setConnectionStatus(`Connected (services sample: ${data.length})`);
          }
        } catch (err: any) {
          setConnectionStatus('Connection Error: ' + (err.message || 'Unknown error'));
        }

        // 2. Check projects table
        try {
          const { data, error } = await supabase.from('projects').select('*').limit(1);
          if (error) {
            setTablesStatus('Projects table error: ' + error.message);
          } else {
            setTablesStatus(`Projects table accessible (sample: ${data.length})`);
          }
        } catch (err: any) {
          setTablesStatus('Projects table error: ' + (err.message || 'Unknown error'));
        }

        // 3. Check database schema (disabled, as information_schema is not available)
        // try {
        //   const schema = await checkDatabaseSchema('projects');
        //   setSchemaStatus(schema.exists ? 'Schema OK' : 'Schema issues detected');
        //   setIssues(schema.columns ? schema.columns : []);
        // } catch (err: any) {
        //   setSchemaStatus('Schema check error');
        //   setIssues(prev => [...prev, 'Schema check error: ' + (err.message || 'Unknown error')]);
        // }
        setSchemaStatus('Schema check disabled');

        // 4. Check authentication status
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            setAuthStatus(`Authenticated as: ${user.email}`);
            setIssues(prev => [...prev, 'Authentication OK']);
          } else {
            setAuthStatus('Not authenticated');
            setIssues(prev => [...prev, 'Authentication required for project creation']);
          }
        } catch (err: any) {
          setAuthStatus('Auth error: ' + (err.message || 'Unknown error'));
          setIssues(prev => [...prev, 'Authentication error: ' + (err.message || 'Unknown error')]);
        }
      } catch (err: any) {
        setError('Diagnostics error: ' + (err.message || 'Unknown error'));
      }
    };

    if (visible) {
      runDiagnostics();
    }
  }, [visible]);

  const handleRunInsertTest = async () => {
    setInsertStatus('Testing...');
    try {
      const result = await runInsertTest('projects', { title: 'Test', description: 'Test', imageUrl: '', category: '', client: '', completionDate: new Date().toISOString() });
      setInsertStatus(result.success ? '✅ Insert succeeded' : '❌ Insert failed');
    } catch (err: any) {
      setInsertStatus('❌ Test error: ' + (err.message || 'Unknown error'));
    }
  };

  const handleSignInTest = async () => {
    try {
      // Use test credentials - should be replaced with real admin credentials
      const { error } = await supabase.auth.signInWithPassword({
        email: 'admin@example.com',
        password: 'password123'
      });

      if (error) {
        setAuthStatus('Sign in failed: ' + error.message);
      } else {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setAuthStatus(`Authenticated as: ${user.email}`);
        } else {
          setAuthStatus('Sign in succeeded but no user found');
        }
      }
    } catch (err: any) {
      setAuthStatus('Sign in error: ' + (err.message || 'Unknown error'));
    }
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-lg shadow-lg text-xs z-50 max-w-sm"
      style={{ opacity: 0.9 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Supabase Diagnostics</h3>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
        >
          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: connectionStatus.startsWith('Connected') ? '#10B981' : '#EF4444' }}
          />
          <span>Connection: {connectionStatus}</span>
        </div>
        
        {expanded && (
          <>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: tablesStatus.includes('accessible') ? '#10B981' : '#EF4444' }}
              />
              <span>Tables: {tablesStatus}</span>
            </div>

            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: schemaStatus === 'Schema OK' ? '#10B981' : '#EF4444' }}
              />
              <span>Schema: {schemaStatus}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Authentication: {authStatus}</span>
              <button 
                onClick={handleSignInTest}
                className="ml-2 text-xs bg-yellow-600 px-2 py-1 rounded hover:bg-yellow-700"
              >
                Test Login
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span>Insert Test: {insertStatus}</span>
              <button 
                onClick={handleRunInsertTest}
                className="ml-2 text-xs bg-blue-600 px-2 py-1 rounded hover:bg-blue-700"
              >
                Run Test
              </button>
            </div>
            
            {showAdvanced && issues.length > 0 && (
              <div className="mt-2 p-2 bg-gray-700 rounded text-[10px] max-h-32 overflow-y-auto">
                <h4 className="font-bold mb-1">Issues:</h4>
                <ul className="list-disc pl-4 space-y-1">
                  {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {error && (
              <div className="mt-2 p-2 bg-red-900 rounded">
                Error: {error}
              </div>
            )}

            <div className="flex mt-2 space-x-2">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-1 px-2 rounded text-center"
              >
                {showAdvanced ? 'Hide Issues' : 'Show Issues'}
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded text-center"
              >
                Refresh
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorDiagnostics; 