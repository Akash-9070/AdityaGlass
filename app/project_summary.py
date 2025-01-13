import os

# Directories and files to exclude
EXCLUDE_DIRS = {"env", "venv", "node_modules"}
EXCLUDE_EXTENSIONS = {".mp4", ".mp3", ".avi", ".wav"}
EXCLUDE_FILES = {"package-lock.json", "yarn.lock", "project_summary.py", "project_summary.txt"}  # Avoid including the script and summary file itself
CODE_EXTENSIONS = {".py", ".js", ".html", ".css", ".java", ".c", ".cpp", ".ts" ,".tsx"}  # Extensions to include nicely formatted

# Function to generate project summary
def generate_summary(root_folder, output_file):
    with open(output_file, "w", encoding="utf-8") as summary:
        for dirpath, dirnames, filenames in os.walk(root_folder):
            # Exclude unwanted directories
            dirnames[:] = [
                d for d in dirnames if d not in EXCLUDE_DIRS and not d.startswith(".")
            ]

            # Write directory path
            relative_dirpath = os.path.relpath(dirpath, root_folder)
            summary.write(f"\nDirectory: {relative_dirpath}\n")
            summary.write("-" * (len(relative_dirpath) + 11) + "\n")

            for filename in filenames:
                # Get file extension and exclude unwanted files
                file_ext = os.path.splitext(filename)[1]
                if file_ext in EXCLUDE_EXTENSIONS or filename in EXCLUDE_FILES:
                    continue

                # File path
                file_path = os.path.join(dirpath, filename)
                relative_file_path = os.path.relpath(file_path, root_folder)
                summary.write(f"File: {relative_file_path}\n")

                # Include file content for code files
                if file_ext in CODE_EXTENSIONS:
                    try:
                        with open(file_path, "r", encoding="utf-8") as file:
                            content = file.read()
                            summary.write(f"\n--- Content of {relative_file_path} ---\n")
                            summary.write("\n" + content + "\n")
                            summary.write(f"\n--- End of {relative_file_path} ---\n")
                    except Exception as e:
                        summary.write(f"\n--- Could not read content due to error: {e} ---\n")
                # Include a brief mention for non-code files
                elif file_ext not in EXCLUDE_EXTENSIONS:
                    summary.write(f"\n(Note: Content of {relative_file_path} not included.)\n")

if __name__ == "__main__":
    project_folder = os.getcwd()  # Use the current working directory
    output_txt = os.path.join(project_folder, "project_summary.txt")
    print(f"Generating project summary for: {project_folder}")
    generate_summary(project_folder, output_txt)
    print(f"Project summary saved to: {output_txt}")