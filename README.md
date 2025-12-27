# CSharp Hello Learner

A beginner-friendly C# console application for learning programming fundamentals.

## Prerequisites

Before you can run the CSharp Hello Learner exercises, you need to install the .NET 8+ SDK on your computer.

**This project targets .NET 8 or later.** The .NET SDK includes everything you need to build and run C# applications. You don't need a full IDE—just the SDK, a text editor, and a terminal.

For detailed installation instructions for Windows, macOS, and Linux, see:
- **[Install and Verify the .NET 8+ SDK](docs/dotnet-sdk-installation.md)**

## About This Project

CSharp Hello Learner is a simple console application designed to teach complete beginners how to program in C#. It starts with basic concepts and gradually introduces more advanced topics through hands-on exercises.

The application emphasizes:
- **Simplicity**: Focus on learning without unnecessary complexity
- **Cross-platform**: Works on Windows, macOS, and Linux
- **Offline-friendly**: Most learning can happen without an internet connection once the SDK is installed
- **Progressive learning**: Start simple and build up gradually

## Next Steps

(To be added as the project develops)

---

## Development Notes

### CI Configuration

When setting up GitHub Actions or other CI systems for this project, use .NET 8:

```yaml
- name: Setup .NET
  uses: actions/setup-dotnet@v3
  with:
    dotnet-version: '8.0.x'
```

This ensures the CI environment matches the target SDK version described in the installation documentation.
