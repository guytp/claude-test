# What is Program.cs?

Program.cs is the main file for your C# console application. Think of it as the instruction list that tells your computer what to do when you run your program.

## What does the .cs mean?

The `.cs` at the end is called a "file extension". It tells your computer what type of file this is.

You might have seen other file extensions before:
- `.txt` means a text file
- `.jpg` means an image file
- `.pdf` means a document

When you see `.cs`, it means "C Sharp" - this file contains C# code.

## What happens when you run your program?

When you type `dotnet run` in your terminal, here's what happens:

1. .NET looks for your Program.cs file
2. It reads the code from top to bottom
3. It runs each line in order
4. When it reaches the end, the program stops

Think of it like following a recipe. You start at the first step and work your way down until you're done.

## What are top-level statements?

In older versions of C#, you had to write a special method called `Main`:

```csharp
public static void Main(string[] args)
{
    Console.WriteLine("Hello, World!");
}
```

This Main method was the "entry point" - where your program started.

In modern .NET (like .NET 8), you can write code directly in Program.cs. This is called **top-level statements**.

Even though you don't see a Main method, the C# compiler (the tool that turns your code into a program) automatically creates one behind the scenes. All your code gets placed inside this hidden Main method.

Think of it like an invisible container that holds all your code.

### What is an entry point?

An **entry point** is simply where your program starts running. It's like the front door to your program.

When you type `dotnet run`:
1. The .NET runtime finds the hidden Main method (the entry point)
2. It runs the code inside - exactly what you wrote in Program.cs
3. It reads your code from top to bottom, running each line in order
4. When it reaches the end, the program stops

So even though you don't see the Main method, it's there working behind the scenes. This lets you focus on writing simple, clear code without extra structure.

## Step-by-step execution flow

Here's exactly what happens when you type `dotnet run` and see your greeting:

1. **dotnet run builds the project** (if needed)  
   The dotnet tool checks if your code has changed. If it has, it "builds" your project, which means it converts your C# code into a format your computer can run. Think of it like translating your instructions into a language the computer understands.

2. **The .NET runtime starts at the hidden Main method**  
   .NET looks for the entry point (the hidden Main method we talked about) and starts running your program from there.

3. **Your top-level statements run from top to bottom**  
   The runtime executes each line of code in your Program.cs file, starting from the first line and moving down.

4. **Console.WriteLine("Hello, CSharp Hello Learner!"); runs**  
   When the program reaches this line, it calls the WriteLine method, which prints your greeting to the terminal.

5. **You see the text in your terminal**  
   The words "Hello, CSharp Hello Learner!" appear in your terminal window.

6. **The program exits**  
   Because there are no more statements to run, the program finishes and you see your terminal prompt again.

## Breaking down Console.WriteLine

Let's look at the line that prints your greeting:

```csharp
Console.WriteLine("Hello, CSharp Hello Learner!");
```

### What each part means

**Console**  
A built-in .NET class that represents your terminal window. It's how your program talks to the terminal.

**WriteLine**  
A method that prints text to the terminal. The "Line" part means it moves to the next line after printing.

**"Hello, CSharp Hello Learner!"**  
A string literal - text inside double quotes. Whatever you put here appears exactly in the terminal.

**;**  
The semicolon ends the statement. It tells C# this instruction is complete.

### Before and after

**Code in Program.cs:**
```csharp
Console.WriteLine("Hello, CSharp Hello Learner!");
```

**Terminal output:**
```
Hello, CSharp Hello Learner!
```

### Try a change

Edit the text inside the quotes:

**Change to:**
```csharp
Console.WriteLine("Learning C# is fun!");
```

**See the difference:**
```
Learning C# is fun!
```

### Add more lines

You can add more Console.WriteLine statements. They print in order:

**Code:**
```csharp
Console.WriteLine("First line");
Console.WriteLine("Second line");
Console.WriteLine("Third line");
```

**Output:**
```
First line
Second line
Third line
```

### Works everywhere

This simple Program.cs file works the same way on Windows, macOS, and Linux as long as the .NET SDK is installed and you use `dotnet run` from a terminal.

## Why is Program.cs important?

In this simple project, **everything** your program does is written in this one file. When you're learning C#, having just one file makes it easier to understand what's happening.

As you learn more, you can add more lines to Program.cs to make your program do more things. Later, you'll learn how to split your code into multiple files, but for now, everything lives here.

This single file is your program's starting point - the front door where execution begins.
