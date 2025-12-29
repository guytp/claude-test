# Understanding Program.cs and Program Execution

This guide explains what the `Program.cs` file is and how your C# console application starts running. We'll cover the basics in simple terms that are perfect for beginners.

## What is Program.cs?

`Program.cs` is the main C# source file for your console application. The `.cs` extension stands for C# (pronounced "C Sharp").

In a simple console app like this one, `Program.cs` holds all the instructions that run when you start your program. Think of it as a recipe that the computer follows step by step.

When you open `Program.cs` in your text editor, you see the actual code that controls what your program does. Every line matters and runs in order from top to bottom.

## How Your Program Starts

When you type `dotnet run` and press Enter, .NET needs to know where to begin executing your code. This starting point is called the **entry point**.

The entry point is like the front door to your program. It's where execution begins every time you run your application, and it ensures your code runs in a predictable way.

## Top-Level Statements in .NET 8

Modern .NET (like .NET 8) makes things simpler with **top-level statements**. This means you don't always need to write a `Main` method.

Instead, you can write code directly in `Program.cs` without putting it inside a class or method. The code you write at the top level runs from top to bottom when your program starts.

This simpler approach helps beginners focus on learning programming concepts without worrying about complex structures. You can write your first programs more quickly and see results immediately.

## The Hidden Main Method (Entry Point)

Even though you don't see a `Main` method in your code, the .NET compiler automatically creates one behind the scenes. This is one of the ways .NET helps make programming easier.

Here's what happens step by step:

1. You write simple code using top-level statements in `Program.cs`
2. The compiler takes your code and wraps it inside a hidden `Main` method
3. When you run `dotnet run`, the .NET runtime finds this hidden `Main` method
4. The runtime starts execution at this `Main` method (the entry point)
5. Your top-level statements run in order from top to bottom
6. When the last statement finishes, the program exits

This hidden `Main` method is the **entry point** of your program. It's where your program begins running every time you start it.

## Cross-Platform Compatibility

This `Program.cs` file works the same way on Windows, macOS, and Linux. As long as you have .NET 8 installed and can run `dotnet run` in a terminal, your program will behave identically across all platforms.

You don't need to change your code for different operating systems. .NET handles those differences for you, so you can focus on learning to program.
