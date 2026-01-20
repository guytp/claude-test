# Troubleshooting Guide

This guide helps you fix common problems when setting up and running the CSharp Hello Learner console app. Work through the checks in order—most issues are solved by Check 1, 2, or 3.

## How to use this guide

**Read the error message first.** Your terminal shows exactly what went wrong. Look for words like `error`, `not found`, or `does not exist`.

**Try one fix at a time.** After each change, run your command again to see if the problem is solved.

**Follow the checks in order.** Start with Check 1 and work your way down.

---

## Check 1: Is .NET SDK installed correctly?

Before running your app, you need the .NET Software Development Kit (SDK) installed on your computer.

### How to check

Open your terminal and run:

```bash
dotnet --version
```

**If you see a version number like `8.0.100` or higher**, the SDK is installed correctly. Move to Check 2.

**If you see an error**, you need to install the SDK:

#### On Windows you might see:
```
'dotnet' is not recognized as an internal or external command,
operable program or batch file.
```

#### On macOS or Linux you might see:
```
bash: dotnet: command not found
```

**What this means:** Your computer doesn't know where the `dotnet` program is, usually because it's not installed.

**How to fix:**
1. Go to the official .NET download page: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
2. Download the **.NET SDK** for your operating system (Windows, macOS, or Linux)
3. Install it following the instructions
4. **Important:** Close and reopen your terminal after installation
5. Run `dotnet --version` again to confirm it works

---

## Check 2: Am I in the right folder?

You must run `dotnet` commands from inside your project folder—the folder that contains your `.csproj` and `Program.cs` files.

### How to check where you are

#### Windows (PowerShell or Command Prompt):
```bash
cd
```
Shows your current folder path.

```bash
dir
```
Lists all files in your current folder.

#### macOS or Linux (bash or zsh):
```bash
pwd
```
Shows your current folder path ("print working directory").

```bash
ls
```
Lists all files in your current folder.

### What you should see

Make sure your current folder contains:
- `CSharpHelloLearner.csproj` (or similar)
- `Program.cs`

### What happens if you're in the wrong folder

If you run `dotnet run` from a parent folder or wrong directory, you'll see:

```
MSBUILD : error MSB1009: Project file does not exist.
```

or

```
Could not find a project to run. Ensure a project exists in C:\Users\YourName\WrongFolder,
or pass the path to the project using --project.
```

### How to fix

Navigate to the correct folder using `cd` (change directory):

```bash
cd CSharpHelloLearner
```

**Example:** If your project is in your Documents folder:

**Windows:**
```bash
cd C:\Users\YourName\Documents\CSharpHelloLearner
```

**macOS/Linux:**
```bash
cd /home/YourName/Documents/CSharpHelloLearner
```

Then run `dotnet run` again.

---

## Check 3: Is my project structure correct?

Your project needs a specific structure to run correctly.

### Expected structure

```
CSharpHelloLearner/
├── CSharpHelloLearner.csproj
└── Program.cs
```

### Common problems

#### Problem: Missing `Program.cs`

If `Program.cs` is deleted or renamed, you'll see:

```
Program.cs(1,1): error CS0116: A namespace cannot directly contain members 
such as fields or methods
```

**What this means:** The compiler can't find your main program file.

**How to fix:**
- Restore `Program.cs` from your backup or Git
- Or create a new console project and copy the simple code:

1. Create a new folder: `mkdir NewProject`
2. Create a new console app: `dotnet new console -n CSharpHelloLearner`
3. Copy your simple code into the new `Program.cs`

#### Problem: Missing or moved `.csproj` file

If the `.csproj` file is missing or in the wrong place, you'll see:

```
Program 'CSharpHelloLearner.dll' does not contain a static 'Main' method 
suitable for an entry point
```

**What this means:** The project configuration is damaged or missing.

**How to fix:**
- Make sure there's a file named `CSharpHelloLearner.csproj` in your project folder
- Restore it from backup or Git
- Or create a fresh console project (see above)

---

## Common error messages and quick fixes

### 1. Using the wrong command

**Don't do this:**
```bash
dotnet run Program.cs
```

**Also don't do this:**
```bash
./Program.cs
```

**Do this instead:**
```bash
dotnet run
```

**Why:** `dotnet run` automatically finds and runs your project when you're inside the project folder.

### 2. Missing semicolon

**Example broken code:**
```csharp
Console.WriteLine("Hello, World!")
```

**Error you'll see:**
```
Program.cs(5,20): error CS1002: ; expected
```

**How to read this error:**
- **Program.cs**: The file with the problem
- **(5,20)**: Line 5, column 20 (where the semicolon should be)
- **error CS1002**: The specific error code
- **; expected**: What you need to fix

**Fixed code:**
```csharp
Console.WriteLine("Hello, World!");
```

### 3. Variable doesn't exist

**Example broken code:**
```csharp
string greeting = "Hello";
Console.WriteLine(mesage);  // Typo: mesage instead of greeting
```

**Error you'll see:**
```
Program.cs(7,15): error CS0103: The name 'mesage' does not exist in the current context
```

**How to read this error:**
- **Program.cs**: The file
- **(7,15)**: Line 7, column 15
- **'mesage' does not exist**: You tried to use a variable that wasn't declared

**Fixed code:**
```csharp
string greeting = "Hello";
Console.WriteLine(greeting);
```

### 4. Unbalanced parentheses or braces

**Example broken code:**
```csharp
if (true {
    Console.WriteLine("Hello");
}
```

**Error you'll see:**
```
Program.cs(3,5): error CS1026: ) expected
```

**Fix:** Add the missing parenthesis:
```csharp
if (true) {
    Console.WriteLine("Hello");
}
```

---

## General tips for reading error messages

Error messages tell you exactly what went wrong and where. Here's how to understand them:

1. **Read the entire message** – Don't just look at the first line
2. **Look for keywords** – `not found`, `expected`, `does not exist`, `cannot`
3. **Find the location** – Format is usually `File.cs(line,column)`
4. **Check that line** – Open the file and go to the line number mentioned
5. **Try the fix** – The error often suggests what to do (like adding a `;`)
6. **Rerun after each change** – Test one fix at a time

### Quick troubleshooting checklist

When something goes wrong, ask yourself:

1. **Did `dotnet --version` work?** (If not, see Check 1)
2. **Am I in the correct project folder?** (Use `pwd` or `cd` and check with `ls` or `dir`)
3. **Does my folder contain `.csproj` and `Program.cs`?** (If not, see Check 3)
4. **Did I run `dotnet run` from inside the project folder?** (Without extra parameters like `Program.cs`)
5. **Did I read the error message carefully and check the line it mentions?**

If you answer "no" to any of these, fix that first and try again.

---

## When and how to ask for help

Sometimes you need help, and that's okay! Before asking others:

1. **Try at least one or two steps** from this guide
2. **Collect this information:**
   - Your operating system (Windows/macOS/Linux and version if you know it)
   - Output of `dotnet --info` or `dotnet --version`
   - The exact command you ran
   - The full error message (copy and paste it)

### Example of what to share

```
OS: macOS Monterey
Command I ran: dotnet run
Error message:
Program.cs(5,20): error CS1002: ; expected
```

### What NOT to share

**Don't share sensitive information** like:
- Your full username if it's personal (use `YourName` instead)
- Company or work details from your computer paths
- Environment variables that might contain private data

### Where to get help

- Check the tutorial or course materials that came with this project
- Ask a classmate or mentor
- Search online for the exact error message (in quotes)

Remember: Everyone gets stuck sometimes. The important thing is to try the simple fixes first and learn from each error!
