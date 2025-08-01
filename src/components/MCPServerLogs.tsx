@@ .. @@
   useEffect(() => {
     if (!isLive) return;

     const interval = setInterval(() => {
+      const agents = ['Monitor Agent', 'Deploy Agent', 'Test Writer Agent', 'Code Review Agent', 'Security Agent'];
+      const actions = ['health_check', 'deploy_status', 'test_execution', 'code_analysis', 'vulnerability_scan'];
+      const messages = [
+        'All systems operational',
+        'Processing deployment pipeline',
+        'Test coverage analysis complete: 87%',
+        'Container health check passed',
+        'MCP context synchronization complete',
+        'LLM analysis completed successfully',
+        'Agent coordination successful',
+        'Security scan completed - no issues found'
+      ];
+      
       const newLog: LogEntry = {
         id: Date.now().toString(),
         timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
-        agent: ['Monitor Agent', 'Deploy Agent', 'Test Writer Agent'][Math.floor(Math.random() * 3)],
-        action: ['health_check', 'deploy_status', 'test_execution'][Math.floor(Math.random() * 3)],
+        agent: agents[Math.floor(Math.random() * agents.length)],
+        action: actions[Math.floor(Math.random() * actions.length)],
         status: ['success', 'info', 'warning'][Math.floor(Math.random() * 3)] as 'success' | 'info' | 'warning',
-        message: [
-          'All systems operational',
-          'Processing deployment pipeline',
-          'Test coverage: 85%',
-          'Container health check passed',
-          'MCP context synchronization complete'
-        ][Math.floor(Math.random() * 5)]
+        message: messages[Math.floor(Math.random() * messages.length)]
       };

       setLogs(prev => [newLog, ...prev.slice(0, 9)]);
-    }, 3000);
+    }, 2500);

     return () => clearInterval(interval);
   }, [isLive]);