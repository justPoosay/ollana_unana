module.exports = {

"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/ollama/tools/findCity.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "findCity",
            description: "Get coordinates (latitude and longitude) for a city",
            parameters: {
                type: "object",
                properties: {
                    city: {
                        type: "string",
                        description: "Name of the city (e.g., 'Warsaw', 'New York')"
                    }
                },
                required: [
                    "city"
                ]
            }
        },
        execute: async ({ city })=>{
            const response = await fetch(`https://nominatim.openstreetmap.org/search.php?city=${encodeURIComponent(city)}&format=jsonv2`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (!data.length) {
                throw new Error(`No location found for city: ${city}`);
            }
            // Sort by importance and get the most relevant result
            const bestMatch = data.sort((a, b)=>b.importance - a.importance)[0];
            return {
                city,
                latitude: parseFloat(bestMatch.lat),
                longitude: parseFloat(bestMatch.lon),
                display_name: bestMatch.display_name
            };
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/getWeather.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "getCurrentWeather",
            description: "Get current weather conditions (temperature and wind speed)",
            parameters: {
                type: "object",
                properties: {
                    latitude: {
                        type: "number",
                        description: "Latitude of the location (e.g., 52.2297 for Warsaw)"
                    },
                    longitude: {
                        type: "number",
                        description: "Longitude of the location (e.g., 21.0122 for Warsaw)"
                    }
                },
                required: [
                    "latitude",
                    "longitude"
                ]
            }
        },
        execute: async ({ latitude, longitude })=>{
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return {
                ...data,
                location: {
                    latitude,
                    longitude
                }
            };
        }
    },
    {
        type: "function",
        function: {
            name: "getForecast",
            description: "Get 3-day hourly weather forecast",
            parameters: {
                type: "object",
                properties: {
                    latitude: {
                        type: "number",
                        description: "Latitude of the location (e.g., 52.2297 for Warsaw)"
                    },
                    longitude: {
                        type: "number",
                        description: "Longitude of the location (e.g., 21.0122 for Warsaw)"
                    }
                },
                required: [
                    "latitude",
                    "longitude"
                ]
            }
        },
        execute: async ({ latitude, longitude })=>{
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m&forecast_days=3`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return {
                ...data,
                location: {
                    latitude,
                    longitude
                }
            };
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/getSecret.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "getSecret",
            description: "Returns a secret string/value."
        },
        execute: async ()=>{
            return {
                value: "there is no secret!"
            };
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/getIpInfo.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "getIpInfo",
            description: "Fetches the current IP address and location information (IP, Country, City, Region, Lat, Lon, Timezone)",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        },
        execute: async ()=>{
            try {
                const response = await fetch("http://www.geoplugin.net/json.gp");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Failed to fetch IP info: ${error.message}`);
                }
                throw new Error("Failed to fetch IP info");
            }
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/examMaster.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "examMaster",
            description: "Generates a school exam based on subject, difficulty level, and number of questions.",
            parameters: {
                type: "object",
                properties: {
                    subject: {
                        type: "string",
                        description: "The school subject (e.g. Math, History, Biology)"
                    },
                    level: {
                        type: "string",
                        enum: [
                            "easy",
                            "medium",
                            "hard"
                        ],
                        description: "The difficulty level of the exam"
                    },
                    questionsCount: {
                        type: "integer",
                        minimum: 1,
                        maximum: 50,
                        description: "Number of questions in the exam"
                    }
                },
                required: [
                    "subject",
                    "level",
                    "questionsCount"
                ]
            }
        },
        execute: async ({ subject, level, questionsCount })=>{
            const exam = Array.from({
                length: questionsCount
            }, (_, i)=>({
                    question: `(${i + 1}) [${level}] Question about ${subject}?`,
                    options: [
                        "A",
                        "B",
                        "C",
                        "D"
                    ],
                    answer: "A"
                }));
            return {
                subject,
                level,
                questions: exam
            };
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/checkAnswers.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "checkAnswers",
            description: "Checks student answers and returns score + feedback.",
            parameters: {
                type: "object",
                properties: {
                    questions: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                correct: {
                                    type: "string"
                                },
                                student: {
                                    type: "string"
                                }
                            },
                            required: [
                                "correct",
                                "student"
                            ]
                        }
                    }
                },
                required: [
                    "questions"
                ]
            }
        },
        execute: async ({ questions })=>{
            const result = questions.map((q, i)=>({
                    number: i + 1,
                    correct: q.correct,
                    student: q.student,
                    isCorrect: q.correct === q.student
                }));
            const score = result.filter((r)=>r.isCorrect).length;
            return {
                score,
                total: questions.length,
                result
            };
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/generateFeedback.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const functions = [
    {
        type: "function",
        function: {
            name: "generateFeedback",
            description: "Generates textual feedback for a student's exam result.",
            parameters: {
                type: "object",
                properties: {
                    subject: {
                        type: "string"
                    },
                    score: {
                        type: "integer"
                    },
                    total: {
                        type: "integer"
                    }
                },
                required: [
                    "subject",
                    "score",
                    "total"
                ]
            }
        },
        execute: async ({ subject, score, total })=>{
            const percent = score / total * 100;
            let message = `You scored ${score}/${total} in ${subject}. `;
            if (percent >= 90) message += "Excellent work! 💪";
            else if (percent >= 70) message += "Good job! 👍";
            else if (percent >= 50) message += "You passed, but there's room to improve.";
            else message += "Let's try to study a bit more next time.";
            return {
                feedback: message
            };
        }
    }
];
const __TURBOPACK__default__export__ = functions;
}}),
"[project]/src/ollama/tools/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Import tool implementations
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$findCity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/findCity.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$getWeather$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/getWeather.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$getSecret$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/getSecret.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$getIpInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/getIpInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$examMaster$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/examMaster.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$checkAnswers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/checkAnswers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$generateFeedback$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/generateFeedback.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
// Export all tools as a single array for toolsLoader compatibility
const ollamaTools = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$findCity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$getWeather$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$getSecret$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$getIpInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$examMaster$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$checkAnswers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$generateFeedback$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
];
const __TURBOPACK__default__export__ = ollamaTools;
}}),
"[project]/src/ollama/toolsLoader.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTools": (()=>getTools)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/index.ts [app-route] (ecmascript)");
;
function getTools() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].filter((item)=>"execute" in item);
}
;
}}),
"[project]/src/ollama/toolsLoader.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$tools$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ollama/tools/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$toolsLoader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/ollama/toolsLoader.ts [app-route] (ecmascript) <locals>");
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[project]/src/services/ollama.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateResponse": (()=>generateResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$toolsLoader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/ollama/toolsLoader.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$toolsLoader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/ollama/toolsLoader.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ollama/dist/index.mjs [app-route] (ecmascript)");
;
;
const OLLAMA_HOST = process.env.OLLAMA_HOST || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen3:14b";
const TOOLS_RECURSION_LIMIT = 10;
const SYSTEM_PROMPT = `
  You are a helpful AI assistant.
  
  Ask yourself "What tools can I use?".

  Use markdown formatting for better readability.

  IMPORTANT: Do not simulate tool call, use them directly.
  Do not send full tool response, make it short and concise.

  If asked about current weather, use the getWeather tool, use the getLocation tool for longitude and latitude.
`;
// Initialize Ollama client
const ollamaClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Ollama"]({
    host: OLLAMA_HOST
});
async function handleToolCalls(toolCalls) {
    const tools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$toolsLoader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTools"])();
    const results = {};
    for (const call of toolCalls){
        const tool = tools.find((t)=>t.function.name === call.function.name);
        if (!tool) {
            results[call.function.name] = {
                error: "Tool not found"
            };
            continue;
        }
        try {
            const args = call.function.arguments;
            const result = await tool.execute(args);
            results[call.function.name] = result;
        } catch (error) {
            results[call.function.name] = {
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }
    return results;
}
async function generateResponse(message, history = [], recursionCount = 0) {
    if (recursionCount > TOOLS_RECURSION_LIMIT) {
        return {
            messages: [
                {
                    role: "assistant",
                    content: "I'm having trouble processing your request. The tool calls are taking too long."
                }
            ]
        };
    }
    try {
        const messages = [
            {
                role: "system",
                content: SYSTEM_PROMPT
            },
            ...history
        ];
        if (recursionCount === 0) {
            messages.push({
                role: "user",
                content: message
            });
        }
        const response = await ollamaClient.chat({
            model: OLLAMA_MODEL,
            messages,
            stream: false,
            tools: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ollama$2f$toolsLoader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTools"])()
        });
        // if there are no tool calls, return the response content directly
        if (!response.message?.tool_calls) {
            return {
                messages: [
                    {
                        role: "assistant",
                        content: response.message?.content || "I'm having trouble processing your request. Please try again."
                    }
                ]
            };
        }
        const toolResults = await handleToolCalls(response.message.tool_calls);
        // Add tool responses to message history
        const toolMessages = [];
        for (const result of Object.values(toolResults)){
            toolMessages.push({
                role: "tool",
                content: JSON.stringify(result)
            });
        }
        const nextResponse = await generateResponse(message, [
            ...messages,
            ...toolMessages
        ], recursionCount + 1);
        return {
            messages: [
                ...toolMessages,
                ...nextResponse.messages
            ]
        };
    } catch (error) {
        console.error("Error calling Ollama:", error);
        throw error;
    }
}
}}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ollama$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/ollama.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { message, history } = await request.json();
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Message is required"
            }, {
                status: 400
            });
        }
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$ollama$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateResponse"])(message, history);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response
        });
    } catch (error) {
        console.error("Error in chat API:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to process request"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b27f85a9._.js.map