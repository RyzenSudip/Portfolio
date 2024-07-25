git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repository.git
git push -u origin main








Steps:
Initialize Git in Your Project:

If you haven't already initialized Git in your project directory, open VS Code, and use the integrated terminal:
bash
Copy code
<!-- git init -->
Add Your Files to Git:

Add all your files to the staging area:
bash
Copy code
<!-- git add . -->
Commit Your Changes:

Commit the files with a descriptive message:
bash
Copy code
<!-- git commit -m "Initial commit" -->
Add Remote Repository:

Add the URL of the GitHub repository you created. Replace <repository-url> with your repository's URL:
bash
Copy code
<!-- git remote add origin <repository-url> -->
Push Your Changes to GitHub:

Push your committed changes to the main (or master) branch on GitHub. Use -u to set the upstream branch so you can simply use git push in the future:
bash
Copy code
<!-- git push -u origin main -->
Replace main with master if your repository uses the master branch as the main branch.