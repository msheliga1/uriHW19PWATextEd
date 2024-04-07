# Progressive Web App Text Editor with IDB  
uri bootcamp HW 19 - Text Editor PWA - MJS 4.8.24    
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.  
Starter Code: https://github.com/coding-boot-camp/cautious-meme.git   

## Link to Repo, Screenshot(s) and/or Video(s)    
Link to GitHub Repo: https://github.com/msheliga1/uriHW19PWATextEd.git     
Link to Video on Google Drive: 
https://drive.google.com/file/d/1jcrSLjZJ3evW8Ss2wuIrIy4JPc4SDk_M/view 
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  

[Link to Acceptance Criteria ](#acceptance-criteria)   

## Project Goals     
Create a downloadable mutli-stored text editor app using IDB.    

========================================================   
## Technical Project Details    
========================================================    
## Github:   
    Create Repo (github, repositories => New)   
        - Dont Make this a shared repo.  
    Clone the entire starter gitHub repo  
        -- Create a new, TOTALLY blank repo in GitHub  (no readme. It will screw things very badly!)
        -- Clone the starter repo (under the hwXX directory) to your local machine
        -- Rename the starter repo if you wish.
        -- Set the remote path: git remote add <ori> <HTTPS path to remove>   
            -- Be 100% sure NOT to use the SSH link. Use the HTTPS lank!  
        -- Push the local repo to gitHub: git push ori main   
    OR ... Copy directories and sample files from prior project (or create from scratch).  
        -- No starter code. No need for copying one file at a time via command line.  
        -- Alternate: Go to Demo (root) folder, download zip, moving to local repo, unzip - likely fastest method.     
        -- Took a long time to figure out how to clone an entire repo!
    OR ... create HTML, Node, Develop, CSS and javascript, etc. from scratch, and copy sample files ... worked well.
        Branches (Optional for single programmer projects)  
        - Could do work in branches. (new branch inside gitHub)    
        - All branch names will begin with the initials of the main person working on the branch.  
        - Must update local repo after adding a branch  
        - Switch to branch: From cmd line git switch <branchname>   
        - Once changes committed, git push origin <branchname>  
            - for pushing to remote test branch: git push origin local_branch:remote_branch  
        - Issue a pull request in gitHub.  
        - Click "Pull Requests" in top menu bar (3rd from left).  
        - Click "review Required" in small font below pull request name.  
        - You may approve your own request.  
    OR .... create blank repos, copy files using Windows Drag and Drop
        - mkdir hwNN/hwNNDetailedName 
        - cd into it
        - git init
        - Use windows 10 to copy entire contents of uri repo subdirectory. ie. 18-28 mini=project (14-28 mp). 
            - Note that this is NOT a full repo, so we don't clone it.
        - In GitHub: create a TOTALLY empty new github repo
        - Copy its HTTP name
        - In git, add the remote repo using: git remote add ori CopiedGitHubHttpName (else refspec error). 
        - Had to change its name from master to main in the 'git init' directory.  
            - git branch -m <oldname> <newname> (git branch -m master main)
        - Do git add --a (should add all files), git commit -m "msg", git push ori main
            - If refspec error, be sure you changed master to main.

    Create a nice long READ.md file!!  (Modify prior projects.)   
    Determine working mp1428 folder: 
        Read the readme.  Found new code in Main. Found my code in Develop (sounds simple, but took PITA while.)
    NPM: Do "npm init --y" BEFORE "npm install" to avoide ENOENT err.
         Do "npm install" (or "nmp i")
         Tried "npm start" - css load error. 
         Tried client npm start - same error. 
         Tried Main "npm run build" - same error. 
         Lighthouse (non-PWA core ends near L1 39:45)
    Prior Project:
        Familiarized myself with api/students and api/students/:id routes. Lots and lots of data. 
        Familiarized myself with other routes and general course has [students], student has [assignments] layout. 
        Noted that routes exist for creating courses, etc. 
    Be Sure to BackUp: 
        Before beginning work, copied entire Main to MainOrig. Also saved a copy of README.md. 
    Try running new code; 
        npm i, npm run seed (had to correct insertOne to create), and npm run dev all worked. 

    Understand new models. 

    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
        - Deployed code name always msheliga1/github.io/RepoName !!  
    Make Sure it Works    
    Insert Screencastify (Chrome) Video and/or Screenshot X2 of deployment into readme file.  
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.    
        - GitIgnore to keep NPM libraries out of gitHub repo.    
    NPM - Node package manager  
    Manifest - complex service worker
    ServiceWorker - simple manifest, almost always used for cache  
    webpack -  
    IDB - Interent Database - DB on client side. 

## Acceptance Criteria   
-----------------------       
Create notes or code snippets with or without an internet connection
WHEN I open my CODE in my CODE editor => I should see a client server folder structure
WHEN I run `npm run start` from the root directory, application starts up the backend and serves the client
WHEN I run the text editor applcation from my terminal, my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins. I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application. the text editor still functions in the browser without errors
WHEN I open the text editor, IndexedDB has immediately created a database storage
WHEN I enter content and click off of the DOM window. the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it, the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button, I download my web application as an icon on my desktop
WHEN I load my web application, I should have a registered service worker using workbox
WHEN I register a service worker, static assets are pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render, I should have proper build scripts for a webpack application

## Models (Not Tables) and Data Relationships.  
------------------------------------------------  
 
 


