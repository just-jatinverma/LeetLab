import { getJudge0LanguageId } from "@/lib/judge0";
import { currentUserRole } from "@/modules/auth/actions";
import { currentUser } from "@clerk/nextjs/dist/types/server";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const userRole = await currentUserRole();
    const user = await currentUser();

    if (userRole !== UserRole.ADMIN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      testCases,
      codeSnippets,
      referenceSolutions,
    } = await request.json();

    if (
      !title ||
      !description ||
      !difficulty ||
      !testCases ||
      !codeSnippets ||
      !referenceSolutions
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!Array.isArray(testCases) || testCases.length === 0) {
      return NextResponse.json(
        { error: "At least one test case is required" },
        { status: 400 },
      );
    }

    // Validate reference solutions
    if (!referenceSolutions || typeof referenceSolutions !== "object") {
      return NextResponse.json(
        {
          error:
            "Reference solutions must be provided for all supported languages",
        },
        { status: 400 },
      );
    }

    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);

      if (!languageId) {
        return NextResponse.json(
          { error: `Unsupported language: ${language}` },
          { status: 400 },
        );
      }

      const submission = testCases.map(({ input, output }) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));
    }
  } catch (dbError) {
    console.error("Database error:", dbError);
    return NextResponse.json(
      { error: "Failed to save problem to database" },
      { status: 500 },
    );
  }
}
