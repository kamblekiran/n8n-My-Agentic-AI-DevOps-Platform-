@@ .. @@
 import React from 'react';
-import { Bot, Activity, CheckCircle, AlertCircle, Clock } from 'lucide-react';
+import { Activity, CheckCircle, AlertCircle, Clock } from 'lucide-react';
 
 interface AgentCardProps {
   name: string;
@@ .. @@
   return (
-    <div className={`bg-gray-800 rounded-lg p-6 border ${statusStyle.border} hover:border-gray-600 transition-all duration-200 hover:transform hover:scale-105`}>
+    <div className={`bg-gray-800 rounded-lg p-6 border ${statusStyle.border} hover:border-gray-600 transition-all duration-200 hover:transform hover:scale-[1.02]`}>
       <div className="flex items-start justify-between mb-4">
         <div className="flex items-center gap-3">
           <div className={`p-2 rounded-lg ${statusStyle.bg}`}>
@@ .. @@
         {status === 'processing' && (
           <div className="mt-4">
             <div className="flex justify-between text-xs text-gray-400 mb-1">
               <span>Processing...</span>
-              <span>75%</span>
+              <span>{Math.floor(Math.random() * 30) + 60}%</span>
             </div>
             <div className="w-full bg-gray-700 rounded-full h-2">
-              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
+              <div className="bg-blue-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${Math.floor(Math.random() * 30) + 60}%` }}></div>
             </div>
           </div>
         )}