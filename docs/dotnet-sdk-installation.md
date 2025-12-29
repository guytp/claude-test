# Install and Verify .NET 8+ SDK (Windows, macOS, Linux)

This guide will help you install the .NET 8 SDK on your computer and verify that it works correctly. Follow the instructions for your operating system (Windows, macOS, or Linux) to get ready to build and run the CSharp Hello Learner console application.

**What you need to follow this guide:**
- About 10-15 minutes of time.
- An internet connection (for the initial download only).
- Permission to install software on your computer.

---

## 1. What is the .NET SDK and Why Do You Need It?

The **.NET SDK** (Software Development Kit) is the toolkit that lets you **build and run** C# applications on your computer.

### What's Included in the .NET SDK?

The .NET SDK includes:

- The **C# compiler** - translates your C# code into a program your computer can run.
- The **`dotnet` command-line tool** - lets you create, build, and run .NET applications from your terminal.
- **Other development tools** - everything else needed to develop .NET applications.

### Why Do You Need It?

You must install the .NET SDK **before** you can create and run the **CSharp Hello Learner** console application. Without the SDK, your computer won't understand how to compile or run C# code.

### Which Version?

The instructions in this guide focus on **.NET 8 (or later)**, which is the target for CSharp Hello Learner. .NET 8 is a Long Term Support (LTS) release, which means it will be supported and updated for several years, making it a stable choice for learning.

Once you have the .NET SDK installed, you'll be able to:
- Create new C# console applications
- Edit your code in any text editor
- Build and run your programs using simple commands
- See your code changes in action immediately

### What Tools Do You Need?

To work through the CSharp Hello Learner exercises, you only need **three things**:

1. **The .NET 8+ SDK** - which you will install using this guide.
2. **A text editor** - any basic editor will work (Notepad on Windows, TextEdit on macOS, or nano/vim on Linux). You do not need a fancy IDE.
3. **A terminal or command prompt** - the built-in terminal on your operating system is all you need.

That's it! You do **not** need to install Visual Studio, Rider, or any other large development environment. Those tools are helpful for bigger projects, but for learning C# basics, a simple text editor and the command line are enough.

Let's get started with the installation for your operating system.

---

## 2. Install .NET 8+ SDK on Windows

Follow these steps to download and install the .NET 8 SDK on a Windows computer.

### Steps to Install

1. Open a web browser (such as Edge, Chrome, or Firefox).
2. Go to the official .NET downloads page: https://dotnet.microsoft.com/download
3. Find the section for **.NET 8** (it may be labeled "Long Term Support" or "LTS").
4. Under **.NET SDK**, click the download link for **Windows x64** (this is correct for most PCs). If you know you have an ARM-based Windows device, choose **Windows Arm64** instead.
5. Wait for the installer file to download. It will have a `.exe` extension (for example, `dotnet-sdk-8.0.100-win-x64.exe`).
6. Once the download finishes, double-click the `.exe` file to start the installer.
7. If Windows displays a security prompt asking "Do you want to allow this app to make changes to your device?", click **Yes**. This is called User Account Control (UAC) and is normal for installers.
8. Read and accept the license terms when prompted.
9. Keep the default installation options unless you have a specific reason to change them.
10. Click **Install** and wait for the setup to complete. This usually takes one to two minutes.
11. When the installer finishes, click **Close** to exit.
12. **Important**: Close and re-open any Command Prompt, PowerShell, or Windows Terminal windows that were already open. This allows them to recognise the newly installed `dotnet` command.

> **Tip:** If you have problems with these steps, you can also follow the official Windows instructions at https://learn.microsoft.com/dotnet/core/install/windows

### How to Open a Terminal on Windows

You can use **Command Prompt**, **PowerShell**, or **Windows Terminal** to run `dotnet` commands. Here are the quickest ways to open each one:

**Command Prompt (cmd.exe):**
1. Press `Win + R` to open the Run dialog.
2. Type `cmd` and press **Enter**.

**PowerShell:**
1. Press `Win + X` to open the Power User menu.
2. Select **Windows PowerShell** or **PowerShell** from the list.

**Windows Terminal** (if installed):
1. Press `Win + X` to open the Power User menu.
2. Select **Terminal** from the list.

> Any of these terminals will work for the `dotnet` commands used in this guide. Choose whichever you prefer.

---

## 3. Install .NET 8+ SDK on macOS

Follow these steps to download and install the .NET 8 SDK on a Mac.

### Steps to Install

1. Open a web browser (such as Safari, Chrome, or Firefox).
2. Go to the official .NET downloads page: https://dotnet.microsoft.com/download
3. Find the section for **.NET 8** and select the **macOS** tab.
4. Choose the correct installer for your Mac:
   - **macOS x64** - for Intel-based Macs.
   - **macOS Arm64** - for Apple Silicon Macs (M1, M2, M3, M4, etc.).
   - If you are not sure which type of Mac you have, click the Apple menu () in the top-left corner of your screen and select **About This Mac**. Look for "Chip" or "Processor" to see if it says "Apple" (Arm64) or "Intel" (x64).
5. Wait for the `.pkg` installer file to download.
6. Once the download finishes, double-click the `.pkg` file to start the installer.
7. Follow the steps in the installer:
   - Read and accept the license agreement.
   - Keep the default installation options.
   - When prompted, enter your macOS password to authorise the installation. This is normal for installing system-level software.
8. Wait for the installation to complete, then close the installer window.
9. **Important**: Open a **new** Terminal window after installation. This ensures the terminal can find the newly installed `dotnet` command.

> **Tip:** If anything looks different on your Mac, you can compare with the official macOS install instructions at https://learn.microsoft.com/dotnet/core/install/macos

### How to Open a Terminal on macOS

The **Terminal** app is where you will run all `dotnet` commands. Here are two ways to open it:

**Using Spotlight (quickest):**
1. Press `Cmd + Space` to open Spotlight Search.
2. Type `Terminal` and press **Enter**.

**Using Finder:**
1. Open **Finder**.
2. Go to **Applications** → **Utilities**.
3. Double-click **Terminal**.

> The Terminal app will open a window where you can type commands. This is where you will run `dotnet --version` and other commands.

---

## 4. Install .NET 8+ SDK on Linux

On Linux, the .NET SDK is usually installed using your system's package manager (such as `apt`, `dnf`, or `zypper`) together with Microsoft's official package repository. The exact commands can vary between distributions and may change over time, so always refer to the official documentation for the most up-to-date instructions.

**Official Linux installation documentation:** https://learn.microsoft.com/dotnet/core/install/linux

You will normally need **sudo** (administrator) access to install the SDK.

### 4.1 General Approach

The overall process for most Linux distributions is:

1. Open a terminal application on your Linux desktop (for example, Terminal, GNOME Terminal, Konsole, or similar).
2. Add Microsoft's official package repository to your system. This step varies by distribution.
3. Install the .NET SDK package using your package manager.
4. Close and re-open your terminal to ensure the `dotnet` command is available.

The examples below show a typical flow for common distributions. If the commands do not work or look different on your system, follow the exact instructions for your distribution on the official documentation page linked above.

### 4.2 Debian / Ubuntu Example (apt-based)

This example shows the general process for Debian, Ubuntu, and similar distributions that use the `apt` package manager.

1. Open a terminal.
2. Update your package lists:
   ```bash
   sudo apt-get update
   ```
3. Ensure you have basic HTTPS and certificate support installed:
   ```bash
   sudo apt-get install -y wget apt-transport-https software-properties-common
   ```
4. **Add the Microsoft package repository:**
   - Open the official Linux install documentation in your browser: https://learn.microsoft.com/dotnet/core/install/linux
   - Select **Debian** or **Ubuntu** (whichever matches your system).
   - Follow the instructions there to add the Microsoft package signing key and repository.
   - **Copy and paste the exact commands from the documentation** into your terminal. These commands change over time, so always use the official source.
5. After adding the Microsoft repository, update your package lists again:
   ```bash
   sudo apt-get update
   ```
6. Install the .NET 8 SDK:
   ```bash
   sudo apt-get install -y dotnet-sdk-8.0
   ```
7. Wait for the installation to complete.
8. Close and re-open your terminal to ensure the `dotnet` command is recognised.

> **Note:** The repository setup commands (such as `wget https://packages.microsoft.com/...`) may change over time. Always copy them from the official Microsoft documentation rather than relying on examples that may become outdated.

### 4.3 Fedora / RHEL / CentOS Example (dnf or yum-based)

This example shows the general process for Fedora, Red Hat Enterprise Linux (RHEL), CentOS, and similar distributions that use `dnf` or `yum`.

1. Open a terminal.
2. **Add the Microsoft package repository:**
   - Open the official Linux install documentation in your browser: https://learn.microsoft.com/dotnet/core/install/linux
   - Select **Fedora**, **RHEL**, or **CentOS** (whichever matches your system).
   - Follow the instructions to add the Microsoft package repository. This usually involves downloading a `.repo` file to `/etc/yum.repos.d/` and importing the Microsoft GPG key.
   - **Copy and paste the exact commands from the documentation** into your terminal.
3. Once the repository is configured, install the .NET 8 SDK. On Fedora:
   ```bash
   sudo dnf install dotnet-sdk-8.0
   ```
   On older RHEL or CentOS systems, you may need to use `yum` instead:
   ```bash
   sudo yum install dotnet-sdk-8.0
   ```
4. Confirm the installation when prompted (usually by typing `y` and pressing Enter).
5. Wait for the installation to complete.
6. Close and re-open your terminal to ensure the `dotnet` command is available.

### 4.4 Other Linux Distributions

If you use a different Linux distribution (such as Arch, openSUSE, Alpine, or others), follow the official guide for your specific distribution:

https://learn.microsoft.com/dotnet/core/install/linux

The overall approach is the same:

1. Add Microsoft's official package repository (or use your distribution's provided packages if recommended).
2. Install `dotnet-sdk-8.0` (or a newer version) using your package manager.
3. Open a new terminal and run `dotnet --version` to verify the installation.

> **Tip:** If your distribution is not listed or the commands do not work, check the official documentation for alternative installation methods such as the .NET install script or manual tarball installation.

### 4.5 How to Open a Terminal on Linux

Linux provides a terminal application where you will run all `dotnet` commands. The name and location vary depending on your desktop environment, but here are the most common ways to open it:

**Using a keyboard shortcut (works on many distributions):**
- Press `Ctrl + Alt + T` to open a terminal window.

**Using the application menu:**
- Look for an application called **Terminal**, **GNOME Terminal**, **Konsole**, **xterm**, or similar in your applications menu.
- On GNOME-based desktops (such as Ubuntu), search for "Terminal" in the Activities overview.
- On KDE-based desktops, look for **Konsole** in the application menu.

> Once the terminal is open, you can type commands like `dotnet --version` to verify your installation.

---

## 5. Verify Your Installation

After installing the .NET SDK on **any** operating system, you should verify that it is installed correctly and available in your terminal. This section applies to Windows, macOS, and Linux.

### 5.1 Run `dotnet --version`

This is the primary way to check that the .NET SDK is installed and working.

1. Open a **new** terminal or command prompt:
   - **Windows**: Command Prompt, PowerShell, or Windows Terminal (see Section 2 for how to open these).
   - **macOS**: Terminal (see Section 3 for how to open it).
   - **Linux**: Your terminal application (see Section 4.5 for how to open it).

   > **Important**: Make sure you open a **new** terminal window after installing the SDK. If you use a terminal that was already open before the installation, it may not recognise the `dotnet` command.

2. Type the following command and press **Enter**:
   ```bash
   dotnet --version
   ```

3. **Expected result**: The terminal prints a single line showing a version number, for example:
   ```
   8.0.100
   ```
   The exact numbers may be slightly different (such as `8.0.101` or `8.0.200`), but the version should start with **8.** or higher.

**If you see a version number starting with `8.`, your .NET SDK is installed correctly and you are ready to use CSharp Hello Learner.**

If you see an error message instead (such as "command not found" or "'dotnet' is not recognized"), see **Section 8: Basic Troubleshooting** for help.

### 5.2 Optional: Run `dotnet --info`

For more detailed information about your .NET installation, you can run `dotnet --info`. This step is optional but can be helpful if you want to confirm exactly what is installed.

1. In the same terminal, type the following command and press **Enter**:
   ```bash
   dotnet --info
   ```

2. **Expected result**: The terminal prints a multi-line report containing detailed information about your .NET installation. This includes:
   - **.NET SDK version** - The version of the SDK you have installed.
   - **.NET runtimes** - The runtime versions available on your system.
   - **Operating system details** - Your OS name, version, and architecture (such as x64 or arm64).
   - **Installation path** - Where .NET is installed on your computer.

   Example output (shortened):
   ```
   .NET SDK:
    Version:           8.0.100
    Commit:            abcd1234

   Runtime Environment:
    OS Name:     Windows
    OS Version:  10.0.22631
    OS Platform: Windows
    RID:         win-x64
    Base Path:   C:\Program Files\dotnet\sdk\8.0.100\

   .NET SDKs installed:
     8.0.100 [C:\Program Files\dotnet\sdk]

   .NET runtimes installed:
     Microsoft.NETCore.App 8.0.0 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
   ```

   Your output will look different depending on your operating system and the specific versions installed, but the key thing is that you should see `.NET SDK` information with a version starting with `8.`.

### Success Criteria

**The key success criterion is seeing a version number that starts with `8.` when you run `dotnet --version`.**

Once you see this, you have successfully installed the .NET 8 SDK and your computer is ready for the CSharp Hello Learner exercises. You can now create, build, and run C# console applications using the `dotnet` command-line tool.

If `dotnet --version` or `dotnet --info` does not work, or if you see an older version number (such as `6.x` or `7.x`), see **Section 8: Basic Troubleshooting and Common Issues** for help.

---

## 6. Minimum Tools You Need (No Full IDE Required)

For the **CSharp Hello Learner** exercises, you only need three things:

1. **.NET 8+ SDK** - You installed this using the instructions in this guide. It provides the `dotnet` command-line tool and everything needed to build and run C# applications.

2. **A text editor** - Any basic text editor will work. Here are some options for each operating system:
   - **Windows**: Notepad (built-in), Notepad++, or Visual Studio Code.
   - **macOS**: TextEdit (built-in, use plain text mode), or Visual Studio Code.
   - **Linux**: nano, vim, gedit, Kate, or Visual Studio Code.

3. **A terminal or command prompt** - The built-in terminal on your operating system is all you need. You learned how to open this in Sections 2, 3, and 4.

### You Do NOT Need a Full IDE

You do **not** need to install a full Integrated Development Environment (IDE) such as:
- Visual Studio (the full version, not Visual Studio Code)
- JetBrains Rider
- Other large development tools

These IDEs are powerful tools that professional developers use, but they can be overwhelming for beginners. They also take longer to download, install, and learn. For the early CSharp Hello Learner exercises, a simple text editor and the command line are easier and faster to work with.

> **Tip:** If you already have an IDE installed, you can certainly use it. But if you are just starting out, stick with a basic text editor until you are comfortable with the fundamentals.

### The Basic Workflow

With just these three tools, your workflow will be:

1. **Edit** your code in a text editor (for example, open `Program.cs` and make changes).
2. **Build** your project by running `dotnet build` in the terminal.
3. **Run** your project by running `dotnet run` in the terminal.
4. **See the output** in the terminal window.
5. **Repeat** - make more changes, build, and run again.

This simple cycle is all you need to learn the basics of C# programming.

---

## 7. Offline-Friendly Usage

Once the .NET SDK is installed on your computer, most of your learning with CSharp Hello Learner can happen **offline** - without an internet connection.

### 7.1 What You Can Do Offline

With only the local SDK, a text editor, and your terminal, you can do all of the following without needing the internet:

- **Create a new console project:**
  ```bash
  dotnet new console
  ```
  This creates a new C# console application with a basic `Program.cs` file.

- **Edit your code:**
  Open `Program.cs` in your text editor and make changes. Try different console messages, add variables, or experiment with loops and conditions.

- **Build your project:**
  ```bash
  dotnet build
  ```
  This compiles your code and checks for errors.

- **Run your project:**
  ```bash
  dotnet run
  ```
  This builds (if needed) and runs your application, showing the output in the terminal.

All of these commands use only the SDK that is already installed on your machine. You can work through the CSharp Hello Learner exercises on a train, in a coffee shop without WiFi, or anywhere else without an internet connection.

### 7.2 When You Still Need the Internet

You will need an internet connection for these activities:

- **Downloading and installing the .NET SDK** - The initial installation (which you have already completed using this guide) requires downloading files from Microsoft.

- **Updating the SDK to a newer version** - If you want to install a newer version of .NET in the future, you will need to download it.

- **Reading online documentation or tutorials** - If you want to look up how something works or read additional learning materials.

- **Downloading NuGet packages** - Advanced projects sometimes use external libraries. The CSharp Hello Learner exercises do not require any external packages, so this does not apply to beginners.

> **Tip:** If you expect to be offline for a while, you can download or print the CSharp Hello Learner materials in advance so you have everything you need.

---

## 8. Basic Troubleshooting and Common Issues

This section lists common problems that beginners may encounter and provides simple steps to fix them.

### Issue 1: `dotnet` is Not Recognised / Command Not Found

**Symptom:**

- On **Windows**, you see an error like:
  ```
  'dotnet' is not recognized as an internal or external command,
  operable program or batch file.
  ```
- On **macOS** or **Linux**, you see:
  ```
  command not found: dotnet
  ```

**Possible Causes and Fixes:**

1. **The terminal was open before you installed the SDK.**
   - Close the terminal or command prompt completely.
   - Open a **new** terminal window.
   - Try running `dotnet --version` again.

2. **The installation did not complete successfully.**
   - Re-run the installer (Windows/macOS) or the installation commands (Linux).
   - Watch for any error messages during the installation process.

3. **The `dotnet` folder is not on your PATH** (macOS/Linux).
   - Close and re-open your terminal.
   - Run `which dotnet` to see if the system can find the dotnet command.
   - If nothing is printed, check the official documentation for PATH setup:
     - macOS: https://learn.microsoft.com/dotnet/core/install/macos
     - Linux: https://learn.microsoft.com/dotnet/core/install/linux

### Issue 2: `dotnet --version` Shows an Older Version (e.g. 6.x or 7.x)

**Symptom:**

You run `dotnet --version` and see an older version number like:
```
6.0.400
```
or
```
7.0.100
```

**Possible Causes and Fixes:**

1. **You have not installed .NET 8 yet.**
   - Download and install the .NET 8 SDK using this guide or from https://dotnet.microsoft.com/download

2. **You have multiple SDK versions installed, and an older one is being used.**
   - After installing .NET 8, open a **new** terminal and run `dotnet --version` again.
   - If you still see an older version, check which `dotnet` executable is being used:
     - On macOS/Linux: `which dotnet`
     - On Windows (PowerShell): `Get-Command dotnet`
   - If necessary, reinstall the .NET 8 SDK from the official site and repeat the verification.

> **Note:** It is fine to have multiple SDK versions installed side by side. For new projects, .NET typically uses the latest SDK available. If you see version 8.x or higher, you are ready to proceed.

### Issue 3: Insufficient Permissions on Linux

**Symptom:**

You see errors like `permission denied` or messages saying you are not allowed to install packages.

**Possible Causes and Fixes:**

1. **You forgot to use `sudo` for system-level commands.**
   - Make sure you are using `sudo` when running installation commands. For example:
     ```bash
     sudo apt-get install -y dotnet-sdk-8.0
     ```

2. **You are on a managed or locked-down machine.**
   - If you are using a school, work, or shared computer, you may not have permission to install software.
   - Contact your system administrator and ask them to install the .NET 8 SDK for you.

### Issue 4: Installer Fails or Stops Unexpectedly (Windows/macOS)

**Symptom:**

The installer shows an error message and does not complete, or it stops partway through without finishing.

**Possible Causes and Fixes:**

1. **Try restarting your computer and running the installer again.**
   - Sometimes a restart clears temporary issues that prevent installation.

2. **Make sure you downloaded the correct installer for your system.**
   - Windows: Choose x64 for most PCs, or Arm64 if you have an ARM-based device.
   - macOS: Choose x64 for Intel Macs, or Arm64 for Apple Silicon (M1/M2/M3/M4).

3. **Check if antivirus or security software is blocking the installer.**
   - Some security software may block installers. Temporarily allow the official Microsoft installer if it is safe to do so.

4. **Check the official troubleshooting pages:**
   - Windows: https://learn.microsoft.com/dotnet/core/install/windows
   - macOS: https://learn.microsoft.com/dotnet/core/install/macos

### Issue 5: `dotnet --info` Works but Project Commands Fail Later

**Symptom:**

Running `dotnet --info` shows your SDK is installed, but when you try to create, build, or run a project, you get errors.

**Possible Causes and Fixes:**

This issue is usually **not** related to the SDK installation itself. If `dotnet --info` works, your SDK is installed correctly.

- Check the specific error message - it will often tell you what is wrong.
- Make sure you are in the correct directory (folder) when running project commands.
- Re-read the instructions in the relevant CSharp Hello Learner exercise for guidance.

### Official Documentation Links

If you continue to have problems, refer to the official Microsoft installation and troubleshooting documentation:

- **Windows**: https://learn.microsoft.com/dotnet/core/install/windows
- **macOS**: https://learn.microsoft.com/dotnet/core/install/macos
- **Linux**: https://learn.microsoft.com/dotnet/core/install/linux

---

*This guide is part of the CSharp Hello Learner project, designed to help complete beginners learn C# programming.*
