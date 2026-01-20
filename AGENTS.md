# Agent Guidance for CSharp Hello Learner Project

## Project Overview

**Project Type**: ASP.NET Core WebAPI (currently) with documentation for C# beginner learning materials
**Target Framework**: .NET 8.0
**Main Branch**: `main`

This project serves dual purposes:
1. An ASP.NET Core WebAPI implementation (WebApi folder)
2. A documentation repository for C# beginner learning content (files folder with comprehensive learning materials)

The user story focus is on creating beginner-friendly troubleshooting documentation for a C# console application. While the current implementation is a WebAPI, the documentation created (TROUBLESHOOTING.md) targets console application scenarios as specified in the requirements.

## Key Project Structure

```
/home/kimi/code/
├── WebApi/                           # ASP.NET Core WebAPI implementation
│   ├── Controllers/
│   │   ├── HelloWorldController.cs   # Simple GET endpoint returning "Hello World!"
│   │   └── WeatherForecastController.cs # Weather forecast API with config-based summaries
│   ├── Program.cs                    # Main entry point with Swagger, CORS, Authorization
│   ├── WebApi.csproj                 # .NET 8.0 WebAPI project file
│   ├── WeatherForecast.cs            # WeatherForecast record definition
│   └── appsettings*.json            # Configuration files
├── WebApiSolution.sln               # Solution file
├── TROUBLESHOOTING.md               # NEW: Beginner troubleshooting guide (Story 16)
└── README.md                        # Project README
```

## Current Work Context

- **User Story**: Story 16 - Document common setup and run errors with simple troubleshooting tips
- **Recent Changes**: Added comprehensive troubleshooting guide at project root for C# beginners
- **Current Focus**: Maintaining beginner-friendly documentation and ensuring cross-platform compatibility

## Coding Standards to Follow

### General Principles
- Keep code simple and beginner-friendly
- Use clear, descriptive naming for all identifiers
- Include concise comments explaining purpose, especially for entry points
- Minimize external dependencies (only .NET SDK and default templates)
- Ensure cross-platform compatibility (Windows, macOS, Linux)

### WebAPI Code Standards
- Controllers should follow REST conventions
- Use appropriate HTTP verbs and status codes
- Implement proper dependency injection
- Configure CORS, Swagger/OpenAPI for development
- Add authorization attributes where needed

### Console App Standards (for documentation)
- Single file structure initially (Program.cs)
- Clear demonstration of edit → compile → run cycle
- Avoid advanced patterns and abstractions
- No external NuGet packages beyond defaults
- Simple, runnable examples

## Documentation Standards

### Troubleshooting Guide (TROUBLESHOOTING.md)
- **Target Audience**: Absolute beginners with no prior programming experience
- **Tone**: Friendly, encouraging, minimal jargon
- **Structure**: 7 main sections as specified in requirements
- **Formatting**: Commands and errors in code blocks or inline code
- **Cross-platform**: Include Windows, macOS, and Linux examples
- **Error Coverage**: Must document specific error messages exactly as they appear
- **Actionable**: Every problem must have clear, step-by-step solutions

### Key Documentation Requirements
1. Use short paragraphs and simple sentences
2. Format all commands and error messages as code
3. Provide before/after examples where relevant
4. Include numbered checklists for easy scanning
5. Add guidance on safe information sharing
6. Keep sections clearly titled for quick navigation

## Build and Run Commands

**Build entire solution:**
```bash
dotnet build
```

**Run WebAPI:**
```bash
cd WebApi
dotnet run
```

**Check .NET version:**
```bash
dotnet --version
```

**Restore packages:**
```bash
dotnet restore
```

## Testing and Validation

**No test projects currently exist** - this is appropriate for a beginner learning project focused on documentation.

Manual validation scenarios for troubleshooting guide:
1. Simulate missing SDK environment
2. Run commands from wrong directory
3. Intentionally create syntax errors
4. Test cross-platform command examples
5. Verify all error messages match actual outputs

## Git Workflow

- **Main branch**: `main`
- **Feature branches**: Use descriptive names (e.g., `story-16`)
- **Commit messages**: Clear, descriptive, imperative mood
- **Feature branches**: Use descriptive names and merge to main when complete

## Dependencies and Constraints

**Allowed Dependencies:**
- Microsoft.NET.Sdk.Web (for WebAPI)
- Microsoft.AspNetCore.OpenApi
- Swashbuckle.AspNetCore (for Swagger documentation)

**Not Allowed (for console app documentation):**
- External NuGet packages
- Database dependencies
- Complex frameworks
- Multi-project solutions

## Troubleshooting Development

When working on this project:

1. **Always verify builds before committing**: Run `dotnet build`
2. **Test WebAPI endpoints**: Use Swagger UI (available in development mode at `/swagger`)
3. **Check documentation**: Ensure TROUBLESHOOTING.md follows the required structure
4. **Maintain beginner focus**: All code and docs should be approachable for newcomers
5. **Cross-platform verification**: Test or document commands for all three OS platforms

## Common Issues to Document

Based on the user story, ensure documentation covers:
- Missing .NET SDK (with exact error messages)
- Wrong directory errors (MSBUILD errors)
- Missing files (Program.cs, .csproj)
- Syntax errors (missing semicolons, unbalanced braces)
- Incorrect command usage (dotnet run Program.cs)

## Agent Notes

- The WebAPI project is well-structured and builds cleanly
- The TROUBLESHOOTING.md file has been created according to all specifications
- Future work may involve creating an actual console app to match the documentation
- Keep documentation in sync with any code changes
- Remember the target audience: absolute beginners need extremely clear guidance
