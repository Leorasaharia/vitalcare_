import { useState, useRef, useEffect } from "react";
import { Mic, Send, Globe } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Symptom {
  name: string;
  severity?: string; // e.g., "mild", "moderate", "severe"
}

interface Condition {
  name: string;
  symptoms: string[];
  severity: "low" | "moderate" | "high";
  synonyms?: { [key: string]: string[] }; // Synonyms for symptoms
}

// Predefined symptom patterns with synonyms
const conditionPatterns: Condition[] = [
  {
    name: "Pneumonia",
    symptoms: ["fever", "cough", "shortness of breath"],
    severity: "high",
    synonyms: {
      fever: ["high temperature", "chills"],
      cough: ["coughing", "chest congestion"],
      "shortness of breath": ["difficulty breathing", "breathlessness"],
    },
  },
  {
    name: "COVID-19",
    symptoms: ["fever", "cough", "shortness of breath"],
    severity: "high",
    synonyms: {
      fever: ["high temperature", "chills"],
      cough: ["coughing", "chest congestion"],
      "shortness of breath": ["difficulty breathing", "breathlessness"],
    },
  },
  {
    name: "Influenza",
    symptoms: ["fever", "cough", "shortness of breath"],
    severity: "moderate",
    synonyms: {
      fever: ["high temperature", "chills"],
      cough: ["coughing", "chest congestion"],
      "shortness of breath": ["difficulty breathing", "breathlessness"],
    },
  },
  {
    name: "Strep Throat",
    symptoms: ["sore throat", "fever", "swollen lymph nodes"],
    severity: "moderate",
    synonyms: {
      "sore throat": ["throat pain", "throat irritation"],
      fever: ["high temperature", "chills"],
      "swollen lymph nodes": ["swollen glands", "neck swelling"],
    },
  },
  {
    name: "Viral Pharyngitis",
    symptoms: ["sore throat", "fever", "swollen lymph nodes"],
    severity: "low",
    synonyms: {
      "sore throat": ["throat pain", "throat irritation"],
      fever: ["high temperature", "chills"],
      "swollen lymph nodes": ["swollen glands", "neck swelling"],
    },
  },
  {
    name: "Common Cold",
    symptoms: ["runny nose", "congestion", "mild fever"],
    severity: "low",
    synonyms: {
      "runny nose": ["nasal discharge", "stuffy nose"],
      congestion: ["nasal congestion", "blocked nose"],
      "mild fever": ["low fever", "slight temperature"],
    },
  },
  {
    name: "Sinusitis",
    symptoms: ["runny nose", "congestion", "mild fever"],
    severity: "moderate",
    synonyms: {
      "runny nose": ["nasal discharge", "stuffy nose"],
      congestion: ["nasal congestion", "blocked nose"],
      "mild fever": ["low fever", "slight temperature"],
    },
  },
  {
    name: "Tuberculosis",
    symptoms: ["persistent cough", "night sweats", "weight loss"],
    severity: "high",
    synonyms: {
      "persistent cough": ["chronic cough", "ongoing cough"],
      "night sweats": ["sweating at night", "nocturnal sweating"],
      "weight loss": ["unexplained weight loss", "losing weight"],
    },
  },
  {
    name: "Gastroenteritis",
    symptoms: ["diarrhea", "vomiting", "abdominal pain"],
    severity: "moderate",
    synonyms: {
      diarrhea: ["loose stools", "frequent stools"],
      vomiting: ["throwing up", "nausea"],
      "abdominal pain": ["stomach pain", "cramps"],
    },
  },
  {
    name: "Food Poisoning",
    symptoms: ["diarrhea", "vomiting", "abdominal pain"],
    severity: "moderate",
    synonyms: {
      diarrhea: ["loose stools", "frequent stools"],
      vomiting: ["throwing up", "nausea"],
      "abdominal pain": ["stomach pain", "cramps"],
    },
  },
  {
    name: "Appendicitis",
    symptoms: ["fever", "severe abdominal pain", "nausea"],
    severity: "high",
    synonyms: {
      fever: ["high temperature", "chills"],
      "severe abdominal pain": ["intense stomach pain", "acute abdominal pain"],
      nausea: ["feeling sick", "vomiting"],
    },
  },
  {
    name: "Diverticulitis",
    symptoms: ["fever", "severe abdominal pain", "nausea"],
    severity: "high",
    synonyms: {
      fever: ["high temperature", "chills"],
      "severe abdominal pain": ["intense stomach pain", "acute abdominal pain"],
      nausea: ["feeling sick", "vomiting"],
    },
  },
  {
    name: "C. diff Colitis",
    symptoms: ["bloody diarrhea", "cramping"],
    severity: "high",
    synonyms: {
      "bloody diarrhea": ["blood in stool", "bloody stools"],
      cramping: ["abdominal cramps", "stomach cramps"],
    },
  },
  {
    name: "Dysentery",
    symptoms: ["bloody diarrhea", "cramping"],
    severity: "high",
    synonyms: {
      "bloody diarrhea": ["blood in stool", "bloody stools"],
      cramping: ["abdominal cramps", "stomach cramps"],
    },
  },
  {
    name: "Sepsis",
    symptoms: ["high fever", "chills", "body aches"],
    severity: "high",
    synonyms: {
      "high fever": ["severe fever", "high temperature"],
      chills: ["shivering", "feeling cold"],
      "body aches": ["muscle pain", "joint pain"],
    },
  },
  {
    name: "Mononucleosis",
    symptoms: ["fatigue", "fever", "headache"],
    severity: "moderate",
    synonyms: {
      fatigue: ["tiredness", "exhaustion"],
      fever: ["high temperature", "chills"],
      headache: ["head pain", "migraine"],
    },
  },
  {
    name: "Early HIV",
    symptoms: ["fatigue", "fever", "headache"],
    severity: "high",
    synonyms: {
      fatigue: ["tiredness", "exhaustion"],
      fever: ["high temperature", "chills"],
      headache: ["head pain", "migraine"],
    },
  },
  {
    name: "Viral Exanthems",
    symptoms: ["rash", "fever", "joint pain"],
    severity: "moderate",
    synonyms: {
      rash: ["skin rash", "red spots"],
      fever: ["high temperature", "chills"],
      "joint pain": ["joint aches", "arthralgia"],
    },
  },
  {
    name: "Lyme Disease",
    symptoms: ["rash", "fever", "joint pain"],
    severity: "moderate",
    synonyms: {
      rash: ["skin rash", "red spots"],
      fever: ["high temperature", "chills"],
      "joint pain": ["joint aches", "arthralgia"],
    },
  },
  {
    name: "Meningitis",
    symptoms: ["severe headache", "neck stiffness", "fever"],
    severity: "high",
    synonyms: {
      "severe headache": ["intense headache", "bad headache"],
      "neck stiffness": ["stiff neck", "neck pain"],
      fever: ["high temperature", "chills"],
    },
  },
  {
    name: "Encephalitis",
    symptoms: ["confusion", "fever", "altered mental state"],
    severity: "high",
    synonyms: {
      confusion: ["disorientation", "mental fog"],
      fever: ["high temperature", "chills"],
      "altered mental state": ["mental confusion", "delirium"],
    },
  },
  {
    name: "Cellulitis",
    symptoms: ["red swollen area", "fever"],
    severity: "moderate",
    synonyms: {
      "red swollen area": ["swollen red skin", "inflamed skin"],
      fever: ["high temperature", "chills"],
    },
  },
  {
    name: "Herpes Infections",
    symptoms: ["painful blisters", "burning sensation"],
    severity: "moderate",
    synonyms: {
      "painful blisters": ["blisters", "sores"],
      "burning sensation": ["burning skin", "tingling"],
    },
  },
];

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm VitalCare, your AI health assistant. Please describe your symptoms (e.g., fever, cough, sore throat) and their severity (mild, moderate, severe) if possible. You can type or use voice input in your preferred language.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages: string[] = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "Mandarin",
    "Arabic",
    "Portuguese",
    "Russian",
    "Japanese",
    "German",
    "Italian",
  ];

  // Function to analyze symptoms and generate diagnosis
  const analyzeSymptoms = (input: string): string => {
    const lowerInput = input.toLowerCase().replace(/[^a-z0-9\s]/g, ""); // Clean input
    const userSymptoms: Symptom[] = [];

    // Parse input for symptoms and severity
    conditionPatterns.forEach((condition) => {
      condition.symptoms.forEach((symptom) => {
        const synonyms = condition.synonyms?.[symptom] || [];
        const allTerms = [symptom, ...synonyms];
        const found = allTerms.some((term) => lowerInput.includes(term));
        if (found) {
          const severityMatch = lowerInput.match(/(mild|moderate|severe)/i);
          userSymptoms.push({
            name: symptom,
            severity: severityMatch ? severityMatch[1].toLowerCase() : undefined,
          });
        }
      });
    });

    if (userSymptoms.length === 0) {
      return `I couldn't identify any specific symptoms in your description. Please try describing your symptoms more clearly, such as "fever", "cough", "sore throat", or "abdominal pain". Including severity (e.g., mild, moderate, severe) can help. For example, you might say: "I have a severe fever and cough."`;
    }

    // Match symptoms to conditions
    const possibleConditions: Condition[] = [];
    conditionPatterns.forEach((condition) => {
      const matchedSymptoms = condition.symptoms.filter((symptom) =>
        userSymptoms.some((userSymptom) => userSymptom.name === symptom)
      );
      if (matchedSymptoms.length >= 1) {
        // Relaxed to 1 symptom match
        possibleConditions.push({
          ...condition,
          symptoms: matchedSymptoms, // Store only matched symptoms
        });
      }
    });

    if (possibleConditions.length === 0) {
      return `Based on your symptoms (${userSymptoms
        .map((s) => s.name)
        .join(", ")}), I couldn't match a specific condition. Please provide more details, such as additional symptoms or their duration, or consult a healthcare provider for a thorough evaluation.`;
    }

    // Sort conditions by severity (high > moderate > low)
    const severityOrder: { [key: string]: number } = { high: 3, moderate: 2, low: 1 };
    possibleConditions.sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity]);

    // Generate response
    const responseLines: string[] = [];
    const highSeverityConditions = possibleConditions.filter((c) => c.severity === "high");

    responseLines.push(
      highSeverityConditions.length > 0
        ? "⚠️ Your symptoms may indicate a serious condition requiring immediate medical attention. Possible conditions include:"
        : "Based on your symptoms, possible conditions include:"
    );

    possibleConditions.forEach((condition) => {
      responseLines.push(`- ${condition.name} (${condition.severity} severity, matched: ${condition.symptoms.join(", ")})`);
    });

    responseLines.push(
      "\nPlease consult a healthcare provider for an accurate diagnosis and appropriate treatment."
    );

    if (highSeverityConditions.length > 0) {
      responseLines.push(
        "Given the potential severity of your symptoms, I strongly recommend seeking medical care as soon as possible."
      );
    } else {
      responseLines.push(
        "A professional evaluation is recommended to confirm the diagnosis and receive proper care."
      );
    }

    return responseLines.join("\n");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputText("");

      // Generate bot response with diagnosis
      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: analyzeSymptoms(userMessage.text),
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleVoiceInput = async () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang =
        selectedLanguage === "English" ? "en-US" :
        selectedLanguage === "Hindi" ? "hi-IN" :
        selectedLanguage === "Spanish" ? "es-ES" :
        selectedLanguage === "French" ? "fr-FR" :
        selectedLanguage === "Mandarin" ? "zh-CN" :
        selectedLanguage === "Arabic" ? "ar-SA" : "en-US";

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } else {
      const botMessage: Message = {
        id: Date.now(),
        text: "Voice recognition is not supported in your browser. Please use Chrome or Edge for voice input.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-text">
            Chat with VitalCare
          </h2>
          <p className="font-exo text-lg md:text-xl text-vital-light/80 max-w-2xl mx-auto">
            Experience our AI-powered health assistant. Type your symptoms or use voice input in your preferred language.
          </p>
        </div>

        {/* Language Selector */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center space-x-2 bg-vital-dark/50 rounded-lg p-3 neon-border">
            <Globe className="w-5 h-5 text-vital-vibrant" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent text-vital-light font-exo focus:outline-none cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-vital-dark">
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-vital-dark/30 backdrop-blur-sm rounded-2xl neon-border overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-xs md:max-w-md px-4 py-3 rounded-lg font-exo
                    ${message.isUser ? "chat-message-user ml-12" : "chat-message-bot mr-12"}
                    animate-fade-in
                  `}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <p
                    className={`text-xs mt-1 opacity-60 ${
                      message.isUser ? "text-vital-dark" : "text-vital-light"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-vital-vibrant/30">
            <div className="flex items-end space-x-3">
              {/* Voice Button */}
              <button
                onClick={handleVoiceInput}
                disabled={isRecording}
                className={`
                  flex-shrink-0 p-3 rounded-full transition-all duration-300
                  ${
                    isRecording
                      ? "bg-red-500 voice-recording"
                      : "bg-gradient-to-r from-vital-vibrant to-vital-muted hover:scale-110"
                  }
                `}
                title="Voice Input"
              >
                <Mic className={`w-6 h-6 text-white ${isRecording ? "animate-pulse" : ""}`} />
              </button>

              {/* Text Input */}
              <div className="flex-1">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`Type your symptoms in ${selectedLanguage}...`}
                  className="w-full px-4 py-3 bg-vital-dark/50 border border-vital-vibrant/50 rounded-lg text-vital-light placeholder-vital-light/50 font-exo resize-none focus:outline-none focus:border-vital-vibrant focus:ring-2 focus:ring-vital-vibrant/20"
                  rows={2}
                />
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-vital-vibrant to-vital-muted hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                title="Send Message"
              >
                <Send className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Recording indicator */}
            {isRecording && (
              <div className="mt-3 text-center">
                <span className="text-red-400 font-exo text-sm animate-pulse">
                  🎤 Recording... Speak now
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-vital-light/50 font-exo max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> VitalCare provides general health information and should not replace professional medical advice. Always consult with qualified healthcare providers for medical concerns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;