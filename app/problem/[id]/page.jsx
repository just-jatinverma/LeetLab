"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Editor from "@monaco-editor/react";
import Link from "next/link";
import {
  ArrowLeft,
  Code,
  FileText,
  Lightbulb,
  Loader2,
  Play,
  Send,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";

import {
  executeCode,
  getAllSubmissionByCurrentUserForProblem,
  getProblemById,
} from "@/modules/problems/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { getJudge0LanguageId } from "@/lib/judge0";

import { SubmissionHistory } from "@/modules/problems/components/submission-history";
import { SubmissionDetails } from "@/modules/problems/components/submission-details";
import { TestCaseTable } from "@/modules/problems/components/test-case-table";

/* ---------------- Helpers ---------------- */

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "EASY":
      return "bg-green-100 text-green-800 border-green-200";
    case "MEDIUM":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "HARD":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getMonacoLanguage = (language) => {
  switch (language) {
    case "JAVASCRIPT":
      return "javascript";
    case "PYTHON":
      return "python";
    case "JAVA":
      return "java";
    default:
      return "javascript";
  }
};

/* ---------------- Page ---------------- */

const ProblemIdPage = ({ params }) => {
  const { id } = params;
  const { theme } = useTheme();

  const [problem, setProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("JAVASCRIPT");
  const [code, setCode] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState([]);
  const [executionResponse, setExecutionResponse] = useState(null);

  /* ---------------- Fetch problem ---------------- */
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await getProblemById(id);
        if (res.success) {
          setProblem(res.data);
          setCode(res.data.codeSnippets?.[selectedLanguage] ?? "");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load problem");
      }
    };

    fetchProblem();
  }, [id]);

  /* ---------------- Fetch submissions ---------------- */
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await getAllSubmissionByCurrentUserForProblem(id);
        if (res.success) {
          setSubmissionHistory(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubmissions();
  }, [id]);

  /* ---------------- Language change ---------------- */
  useEffect(() => {
    if (problem?.codeSnippets?.[selectedLanguage]) {
      setCode(problem.codeSnippets[selectedLanguage]);
    }
  }, [selectedLanguage, problem]);

  /* ---------------- Run Code ---------------- */
  const handleRun = async () => {
    if (!problem) return;

    try {
      setIsRunning(true);

      const languageId = getJudge0LanguageId(selectedLanguage);

      const stdin = problem.testCases.map((tc) => tc.input);
      const expected = problem.testCases.map((tc) => tc.output);

      const res = await executeCode(
        code,
        languageId,
        stdin,
        expected,
        problem.id,
      );

      setExecutionResponse(res);

      if (res.success) {
        toast.success("Code executed successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Execution failed");
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = () => {
    toast.success("TODO: Coming Soon 🔥");
  };

  /* ---------------- Loading ---------------- */
  if (!problem) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-amber-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl p-6">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">{problem.title}</h1>
              <Badge
                className={cn(
                  "font-medium",
                  getDifficultyColor(problem.difficulty),
                )}
              >
                {problem.difficulty}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              {problem.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <ModeToggle />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT PANEL (unchanged from your original) */}

          {/* RIGHT PANEL */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Code Editor
                  </CardTitle>

                  <Select
                    value={selectedLanguage}
                    onValueChange={setSelectedLanguage}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="JAVASCRIPT">JavaScript</SelectItem>
                      <SelectItem value="PYTHON">Python</SelectItem>
                      <SelectItem value="JAVA">Java</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>

              <CardContent>
                <Editor
                  height="400px"
                  language={getMonacoLanguage(selectedLanguage)}
                  value={code}
                  onChange={(v) => setCode(v || "")}
                  theme={theme === "dark" ? "vs-dark" : "light"}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    automaticLayout: true,
                    wordWrap: "on",
                  }}
                />

                <div className="mt-4 flex gap-3">
                  <Button
                    onClick={handleRun}
                    disabled={isRunning}
                    variant="outline"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {isRunning ? "Running..." : "Run"}
                  </Button>

                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {executionResponse?.submission && (
              <>
                <SubmissionDetails submission={executionResponse.submission} />
                <TestCaseTable
                  testCases={executionResponse.submission.testCases}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemIdPage;
