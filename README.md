# CSharp Hello Learner

A simple ASP.NET Core Web API project designed as a teaching vehicle for C# beginners. This project demonstrates basic API endpoints, configuration management, and proper project structure.

## Getting Started

### Prerequisites
- .NET 8.0 SDK or higher
- A code editor (Visual Studio, VS Code, or any text editor)
- Terminal or command prompt access

### Running the Project

1. Clone or download this project
2. Open a terminal and navigate to the project folder
3. Run the following commands:

```bash
cd WebApi
dotnet run
```

4. Open your browser and navigate to `https://localhost:5001/swagger` to see the API documentation and test the endpoints

### Project Structure

```
CSharp Hello Learner/
├── WebApi/                           # Main API project
│   ├── Controllers/                  # API endpoints
│   │   ├── HelloWorldController.cs   # Simple GET endpoint
│   │   └── WeatherForecastController.cs # Weather forecast API
│   ├── Program.cs                    # Application entry point
│   ├── WebApi.csproj                 # Project configuration
│   └── appsettings.json             # App settings and configuration
├── TROUBLESHOOTING.md               # Beginner troubleshooting guide
└── WebApiSolution.sln               # Visual Studio solution file
```

## Learning Resources

This project demonstrates:
- Basic ASP.NET Core Web API structure
- RESTful API endpoints (GET methods)
- Configuration management using appsettings.json
- Dependency injection
- Swagger/OpenAPI documentation
- Cross-platform development (Windows, macOS, Linux)

## If Something Goes Wrong

**New to programming or running into errors?** Don't worry! Check out our beginner-friendly troubleshooting guide:

📖 **[Troubleshooting Guide (TROUBLESHOOTING.md)](TROUBLESHOOTING.md)

This guide helps you fix common problems step-by-step:
- Missing .NET SDK or `dotnet` command not found
- Running commands from the wrong folder  
- Missing or incorrect project files
- Basic syntax and build errors
- How to read and understand error messages
- When and how to ask for help safely

The guide uses simple language and works for Windows, macOS, and Linux.

## API Endpoints

Once the application is running, you can access:

- **GET /api/helloworld** - Returns "Hello World!"
- **GET /api/weatherforecast** - Returns a 5-day weather forecast

Both endpoints are documented in the Swagger UI at `/swagger` when running in development mode.

## Feedback and Issues

If you find problems or have suggestions, please check the troubleshooting guide first. If you still need help, gather the information listed in the "When and how to ask for help" section of TROUBLESHOOTING.md before reaching out.

## License

This project is designed for educational purposes and learning C# fundamentals.
