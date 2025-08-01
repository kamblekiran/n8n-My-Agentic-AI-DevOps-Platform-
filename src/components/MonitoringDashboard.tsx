@@ .. @@
   const deployments = [
-    { app: 'Frontend', version: 'v2.1.4', status: 'deployed', time: '2m ago' },
-    { app: 'API Gateway', version: 'v1.8.2', status: 'deploying', time: '5m ago' },
-    { app: 'Auth Service', version: 'v3.2.1', status: 'deployed', time: '1h ago' },
-    { app: 'Database', version: 'v5.4.0', status: 'deployed', time: '3h ago' }
+    { app: 'Frontend', version: 'v2.1.4', status: 'deployed', time: '2m ago', health: 'healthy' },
+    { app: 'API Gateway', version: 'v1.8.2', status: 'deploying', time: '5m ago', health: 'deploying' },
+    { app: 'Auth Service', version: 'v3.2.1', status: 'deployed', time: '1h ago', health: 'healthy' },
+    { app: 'Database', version: 'v5.4.0', status: 'deployed', time: '3h ago', health: 'healthy' },
+    { app: 'Payment Service', version: 'v1.9.1', status: 'deployed', time: '4h ago', health: 'warning' }
   ];

   return (
@@ .. @@
       <div className="bg-gray-800 rounded-lg p-6">
         <h3 className="text-lg font-semibold text-white mb-4">Recent Deployments</h3>
         <div className="space-y-3">
           {deployments.map((deployment, index) => (
             <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
               <div className="flex items-center gap-3">
                 <div className={`w-3 h-3 rounded-full ${
                   deployment.status === 'deployed' ? 'bg-green-400' : 
                   deployment.status === 'deploying' ? 'bg-blue-400 animate-pulse' : 'bg-red-400'
                 }`}></div>
                 <div>
                   <span className="text-white font-medium">{deployment.app}</span>
                   <span className="text-gray-400 text-sm ml-2">{deployment.version}</span>
+                  <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
+                    deployment.health === 'healthy' ? 'bg-green-900 text-green-300' :
+                    deployment.health === 'warning' ? 'bg-yellow-900 text-yellow-300' :
+                    'bg-blue-900 text-blue-300'
+                  }`}>
+                    {deployment.health}
+                  </span>
                 </div>
               </div>
               <div className="text-right">
                 <div className={`text-sm font-medium ${
                   deployment.status === 'deployed' ? 'text-green-400' : 
                   deployment.status === 'deploying' ? 'text-blue-400' : 'text-red-400'
                 } capitalize`}>
                   {deployment.status}
                 </div>
                 <div className="text-xs text-gray-400">{deployment.time}</div>
               </div>
             </div>
           ))}
         </div>
       </div>