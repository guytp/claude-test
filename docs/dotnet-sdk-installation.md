# Install and Verify the .NET 8+ SDK

This guide will help you install the .NET 8 SDK on your computer so you can build and run the **CSharp Hello Learner** console application.

The .NET SDK is the only tool you need to get started. You do not need a full IDE or complicated setup. Just follow the steps below for your operating system.

---

## 1. What is the .NET SDK and Why Do You Need It?

The **.NET SDK** (Software Development Kit) is the toolkit that lets you **build and run** C# applications on your computer.

It includes:
- The **C# compiler**.
- The `dotnet` **command-line tool**.
- Other tools needed to create, build, and run .NET apps.

You must install the .NET SDK **before** you can create and run the **CSharp Hello Learner** console app.

The instructions in this guide focus on **.NET 8 (or later)**, which is the target for CSharp Hello Learner.

---

## 2. Install .NET 8+ SDK on Windows

This section shows you how to download and install the .NET 8 SDK on a Windows computer.

### 2.1 Steps to Install

1. Open a web browser.
2. Go to the official .NET downloads page:
   - `https://dotnet.microsoft.com/download`
3. Find the section for **.NET 8 (Long Term Support)**.
4. Under **.NET 8 SDK**, choose the installer for **Windows x64** (most PCs) or **Windows ARM64** if you know you have an ARM-based device.
5. Download the installer file (it will have a `.exe` extension).
6. Once the download finishes, double-click the `.exe` file to start the installer.
7. If Windows asks whether to allow this app to make changes, choose **Yes**.
8. Read and accept the license terms.
9. Keep the default options unless you know you need something different.
10. Click **Install** and wait for the setup to complete.
11. Click **Close** to exit the installer.
12. Close and **re-open** any open **Command Prompt**, **PowerShell**, or **Windows Terminal** windows so they can pick up the new PATH settings.

> Tip: If you have problems with these steps, you can also follow the official Windows instructions: `https://learn.microsoft.com/dotnet/core/install/windows`.

### 2.2 How to Open a Terminal on Windows

- **Command Prompt (cmd.exe)**:
  - Press `Win + R`.
  - Type `cmd`.
  - Press **Enter**.
- **PowerShell or Windows Terminal**:
  - Press `Win + X`.
  - Choose **Windows PowerShell**, **PowerShell**, or **Terminal** from the menu.

> You can use **Command Prompt**, **PowerShell**, or **Windows Terminal** for all `dotnet` commands in this guide.

---

## 3. Install .NET 8+ SDK on macOS

This section shows you how to download and install the .NET 8 SDK on a Mac computer.

### 3.1 Steps to Install

1. Open a web browser.
2. Go to `https://dotnet.microsoft.com/download`.
3. In the **.NET 8** section, choose the **macOS** tab.
4. Decide which installer you need:
   - **macOS x64** for **Intel-based** Macs.
   - **macOS Arm64** for **Apple Silicon** Macs (M1, M2, M3, etc.).
   - You can check this in ** > About This Mac** if you are not sure.
5. Download the `.pkg` installer for your architecture.
6. Once the download finishes, double-click the `.pkg` file.
7. Follow the steps in the installer:
   - Read and accept the license.
   - Keep the default options unless you know you need something different.
   - Enter your macOS password if asked.
8. Wait for the installer to complete, then close it.
9. Open a **new** Terminal window to make sure it picks up the new PATH configuration.

> Tip: If anything looks different on your Mac, you can compare with the official macOS install instructions: `https://learn.microsoft.com/dotnet/core/install/macos`.

### 3.2 How to Open a Terminal on macOS

- Press `Cmd + Space` to open **Spotlight**.
- Type **Terminal**.
- Press **Enter**.

> You will run all `dotnet` commands for this guide inside the Terminal app.

---

## 4. Install .NET 8+ SDK on Linux

This section shows you how to install the .NET 8 SDK on Linux using your system's package manager.

### 4.1 General Guidance

On Linux, .NET is usually installed using your system package manager (for example `apt`, `dnf`, or `zypper`). The exact commands can change over time, so always check the official Microsoft documentation if something does not match your system.

Official Linux installation documentation:
- `https://learn.microsoft.com/dotnet/core/install/linux`

You will normally need **sudo** (administrator) access to install the SDK.

- Open a terminal application on your Linux desktop (e.g. **Terminal**, **Konsole**, **GNOME Terminal**, or similar).
- Use your distribution's package manager together with Microsoft's official package repository.
- The examples below show a typical flow for common distributions. If the commands do not work or look different from your system, follow the exact instructions for your distro on the official site above.

### 4.2 Debian / Ubuntu Example (apt-based)

1. Open a terminal.
2. Update your package lists:
   ```bash
   sudo apt-get update
   ```
3. Make sure you have basic HTTPS and certificate support installed (if these packages are missing, install them):
   ```bash
   sudo apt-get install -y wget apt-transport-https software-properties-common
   ```
4. In your browser, go to the official Linux install docs:
   - `https://learn.microsoft.com/dotnet/core/install/linux`
5. Choose **Debian** or **Ubuntu** and follow the steps to:
   - Add the Microsoft package signing key.
   - Add the Microsoft package repository for **.NET 8**.
   (Copy and paste the exact commands from the docs into your terminal.)
6. After adding the Microsoft repository, update package lists again:
   ```bash
   sudo apt-get update
   ```
7. Install the .NET 8 SDK:
   ```bash
   sudo apt-get install -y dotnet-sdk-8.0
   ```
8. Wait for the install to finish, then close and re-open your terminal.

> Note: The exact repository commands (for example `wget https://packages.microsoft.com/...`) may change over time. Always copy them from the official Microsoft documentation.

### 4.3 Fedora / RHEL / CentOS Example (dnf / yum-based)

1. Open a terminal.
2. In your browser, open the Linux install docs:
   - `https://learn.microsoft.com/dotnet/core/install/linux`
3. Choose **Fedora**, **RHEL**, or **CentOS** (whichever matches your system).
4. Follow the instructions there to:
   - Add the Microsoft package repository (usually by downloading a `.repo` file to `/etc/yum.repos.d/`).
   - Import the Microsoft GPG key if required.
5. Once the repository is configured, ensure your package index is up to date and install the SDK. For example on Fedora:
   ```bash
   sudo dnf install dotnet-sdk-8.0
   ```
   On some RHEL/CentOS systems you may use `yum` instead of `dnf`.
6. When the installation completes, close and re-open your terminal.

### 4.4 Other Linux Distributions

- If you use another distribution (such as Arch, openSUSE, Alpine, or others), follow the official guide:
  - `https://learn.microsoft.com/dotnet/core/install/linux`
- Select your distribution and follow the specific commands shown there.
- The overall idea is always:
  1. Add Microsoft's official package repository or use your distro's provided packages where recommended.
  2. Install `dotnet-sdk-8.0` (or newer) with your package manager.
  3. Open a new terminal and run `dotnet --version` to verify.

---

## 5. Verify Your Installation

After installing the .NET SDK on **any** operating system, you should verify that it is installed correctly and available on your PATH.

### 5.1 Run `dotnet --version`

(Verification steps and expected output will be added in the next phase)

### 5.2 Optional: Run `dotnet --info`

(Optional verification steps and example output will be added in the next phase)

---

## 6. Minimum Tools You Need (No Full IDE Required)

For the **CSharp Hello Learner** exercises, you only need three things:

1. **.NET 8+ SDK** (installed using this guide).
2. **A text editor** (any simple text editor will work).
3. **A terminal / command prompt** where you can type and run `dotnet` commands.

You **do not** need a full Integrated Development Environment (IDE) like Visual Studio or Rider to follow the early lessons.

(Additional details about the minimal tooling workflow will be added in the next phase)

---

## 7. Offline-Friendly Usage

Once the .NET SDK is installed, most of your learning with CSharp Hello Learner can happen **offline**.

### 7.1 What You Can Do Offline

(List of offline-capable commands and workflows will be added in the next phase)

### 7.2 When You Still Need the Internet

(List of operations that require internet connectivity will be added in the next phase)

---

## 8. Basic Troubleshooting and Common Issues

This section lists common problems beginners may see and simple steps to fix them.

#### Issue 1: `dotnet` is Not Recognized / Command Not Found

(Troubleshooting guidance will be added in the next phase)

#### Issue 2: `dotnet --version` Shows an Older Version (e.g. 6.x or 7.x)

(Troubleshooting guidance will be added in the next phase)

#### Issue 3: Insufficient Permissions on Linux

(Troubleshooting guidance will be added in the next phase)

#### Issue 4: Installer Fails or Stops Unexpectedly (Windows/macOS)

(Troubleshooting guidance will be added in the next phase)

#### Issue 5: `dotnet --info` Works but Project Commands Fail Later

(Troubleshooting guidance will be added in the next phase)

---

## Next Steps

After you have successfully installed and verified the .NET 8 SDK, you are ready to move on to creating and running your first CSharp Hello Learner console application.

Check the main project README for links to the next learning exercises.
