@@ .. @@
     // Simulate agent response
     setTimeout(() => {
       const agentMessage: Message = {
         id: (Date.now() + 1).toString(),
         type: 'agent',
-        content: 'I understand your request. Let me coordinate with the appropriate agents to handle this task. This may take a few moments...',
+        content: getAgentResponse(inputValue),
         timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
         agent: 'Platform Assistant'
       };
       setMessages(prev => [...prev, agentMessage]);
     }, 1000);
   };

+  const getAgentResponse = (input: string): string => {
+    const lowerInput = input.toLowerCase();
+    
+    if (lowerInput.includes('deploy')) {
+      return 'Initiating deployment pipeline. The Deploy Agent is preparing the Kubernetes manifests and coordinating with the Docker Handler. Estimated completion: 5 minutes.';
+    } else if (lowerInput.includes('test')) {
+      return 'The Test Writer Agent is generating comprehensive test suites. Current coverage analysis shows 85% coverage with 23 new test cases being created.';
+    } else if (lowerInput.includes('health') || lowerInput.includes('monitor')) {
+      return 'Monitor Agent reports all systems healthy. CPU: 45%, Memory: 62%, Response time: 145ms. No alerts detected in the last 24 hours.';
+    } else if (lowerInput.includes('rollback')) {
+      return 'Rollback Agent is analyzing the deployment history. Previous stable version identified: v2.1.3. Would you like me to proceed with the rollback?';
+    } else {
+      return 'I understand your request. Let me coordinate with the appropriate agents to handle this task. This may take a few moments...';
+    }
+  };
+
   const quickActions = [