@@ .. @@
 const nodes: WorkflowNode[] = [
   { id: '1', name: 'Code Push', type: 'trigger', status: 'completed', icon: <GitBranch className="w-4 h-4" />, position: { x: 50, y: 200 } },
   { id: '2', name: 'Code Review Agent', type: 'agent', status: 'completed', icon: <Shield className="w-4 h-4" />, position: { x: 200, y: 120 } },
-  { id: '3', name: 'Test Writer Agent', type: 'agent', status: 'active', icon: <TestTube2 className="w-4 h-4" />, position: { x: 200, y: 280 } },
-  { id: '4', name: 'Build Agent', type: 'agent', status: 'pending', icon: <Package className="w-4 h-4" />, position: { x: 350, y: 200 } },
+  { id: '3', name: 'Test Writer Agent', type: 'agent', status: 'completed', icon: <TestTube2 className="w-4 h-4" />, position: { x: 200, y: 280 } },
+  { id: '4', name: 'Build Agent', type: 'agent', status: 'active', icon: <Package className="w-4 h-4" />, position: { x: 350, y: 200 } },
   { id: '5', name: 'Deploy Agent', type: 'agent', status: 'pending', icon: <Rocket className="w-4 h-4" />, position: { x: 500, y: 200 } },
   { id: '6', name: 'Monitor Agent', type: 'agent', status: 'pending', icon: <Monitor className="w-4 h-4" />, position: { x: 650, y: 200 } }
 ];
@@ .. @@
 export default function WorkflowCanvas() {
+  const [animationPhase, setAnimationPhase] = React.useState(0);
+
+  React.useEffect(() => {
+    const interval = setInterval(() => {
+      setAnimationPhase(prev => (prev + 1) % 4);
+    }, 3000);
+    return () => clearInterval(interval);
+  }, []);
+
   return (
     <div className="bg-gray-900 rounded-lg p-6 h-96 relative overflow-hidden">
-      <h3 className="text-lg font-semibold text-white mb-4">Agent Workflow Pipeline</h3>
+      <div className="flex items-center justify-between mb-4">
+        <h3 className="text-lg font-semibold text-white">Agent Workflow Pipeline</h3>
+        <div className="flex items-center gap-2">
+          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
+          <span className="text-sm text-gray-400">Live Pipeline</span>
+        </div>
+      </div>
       
       <div className="relative w-full h-full">
         <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
@@ .. @@
             return (
               <line
                 key={index}
                 x1={fromNode.position.x + 40}
                 y1={fromNode.position.y + 20}
                 x2={toNode.position.x}
                 y2={toNode.position.y + 20}
-                stroke="#4B5563"
+                stroke={fromNode.status === 'completed' ? "#10B981" : "#4B5563"}
                 strokeWidth="2"
+                strokeDasharray={fromNode.status === 'active' ? "5,5" : "none"}
                 markerEnd="url(#arrowhead)"
+                className={fromNode.status === 'active' ? 'animate-pulse' : ''}
               />
             );
           })}
           <defs>
             <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
               <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
             </marker>
           </defs>
         </svg>