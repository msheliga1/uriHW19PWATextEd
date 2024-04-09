# Progressive Web App Text Editor with IDB  
uri bootcamp HW 19 - Text Editor PWA - MJS 4.8.24    
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.  
Starter Code: https://github.com/coding-boot-camp/cautious-meme.git   

## Link to Repo, Screenshot(s) and/or Video(s)    
Link to GitHub Repo: https://github.com/msheliga1/uriHW19PWATextEd.git     
<!-- Link to Video on Google Drive: https://drive.google.com/file/d/1jcrSLjZJ3evW8Ss2wuIrIy4JPc4SDk_M/view --> 
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  
Link to Heroku: https://enigmatic-plains-89968-9ac209bdd007.herokuapp.com/  

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
    Added start, build, etc. to main/package-json. Enables commands to run. 
         Do "npm install" (or "nmp i")
         Tried "npm start" - css load error. 
         Tried client npm start - same error. 
         Tried Main "npm run build" - same error. 
         Lighthouse (non-PWA core ends near L1 39:45)
         Confirmed project has src and src/js files per Act03. 
         Noted src/js/index.js file in cleint. Act03 has this but no client or server. 
         Also noted client/webpack-config.js.  Act 03 has this but no client. 
         **Found** comment about adding .css stuff in this file. Looking better. 
    Put css rule and babel rule in client/webpack.config.js 
        Old css msg now gone. 
        Webpack compiles sucessfully but then just sits there. Arghhh. 
        Turned off other server but still just 
        sits there. 
        Reviewed main pj, client pj,wp. Analagous to mp. 
        Moved up a directory to main (from client).   Reran npm i, npm start.  Server claims it is coming up!!!! 
    Could not get rid of old app at localhost/3000.
        Eventually switched to Chrome and ran incognito mode. 
    Now says missing server/client/dist/index.html. 
        Ran npm build, but still missing s/c/d/index.html
        The server/client seems out of place. 
        Check mped. It does NOT have server/client, rather server/node_modules and server/routes. 
        Neither does the new project. 
        But BOTH have client/dist/index.html files. 
        Note that htmlRoutes.js BOTH access ../client/dist/index.html. 
        Confirmed this route is a symptom of the problem. When name changed to index22, error msg includes index22. 
        Feel confident problem is that something isn't loaded, not the htmlRoutes.js file.  
    Temporarily changed route, but now see index.html isnt there.  I think I may have to move this myself, or add code to 
        make it auto-generated. 
        Going to listen to move class vids as I recall this from class. 
        Saw Act03 copy index.html to dist folder.  (Better option later.)
        Copied src/index.html to dist folder. Did NOT change bottom.  Page Now Loads.  Yipee. 
        Listened to Act 5-6. Showed css and img loaders, which we already included here, but no help with index.index.js being move to dist.
        Listened to Act 7-10.  Found auto-index htmlWebpackPlugIn in Video 9.  Great. 
    Listened to Acts 11-12. HRM using npm run dev. Great but not needed for proj. 
        Noted webpack-dev-server already in client/pj
        *F(D(ing scripts dont work with #$((RFN!)).  Tried changing main text in index.html. 
            Then npm run start:dev.  Changes won't NOT only not auto-show-up. They NEVER NEVER show up. 
            Not even using Chrome, running incognito. 
            Tried NPM run start.  This builds before starting, and new text shows up in incognito AFTER hitting 
            refresh button. 
            After NPM run start tried editing file and saving.  Changes do not auto pop-up. Then tried refreshing 
            incognito. No changes. Tried new incognito window. No Changes.
            Summary: NPM run start NEVER updates until restarted. 
        => Tried adding hmr  
            - Added to webpack 2 places per Act 11. Added to src/js/index.js at bottom. 
            - New command "npm run hmr".  Used same cmds as npm run start:dev, but with --only at end. 
                    "hmr": "webpack-dev-server --only". 
            - This doesn't work. If one runs npm run build, then "npm run hmr" page updates. 
            => Saved index.html w "MJS5".  Invoked "npm run hmr". Server starts and page comes up but at localhost:8080. Noticed that Act 11 also had 8080 opened.
                Page has no service worker error. 
                - Tried going to 3000, but still getting very old page. (Cache issues.)
                - Tried going to incognito 3000.  Still has "MJS3". 
                => Seems like we MUST have an npm run build BEFORE starting server, whether hmr or not. 
                - Add console.log to src/js/index.js, but this is almost for sure already working.  Does not display in terminal. 
                - Added build to "npm run hmr" package.json script. This runs the build, displays the 8080 
                page with the same err as before. The 3000 page has been updated. 
                - Updated HMR pj dependenc to 4.1.1, since 5.0 bad in activity14.  No effect. 
        ==> NET result.  HMR is a major PITA.  After about 3 hours of videos and guessing, it's well past time to give up for now and move on.  Maybe the service-worker issues is corrected by other steps. 
    ==> Figured out how to do "empty cache and hard reload for Chrome, 3000.  This took about 4 tries watching 
            and rewatching the video.  But am thankful it works, as it prevents having to use incognito, which 
            takes longer and doesn't allow installs. 
    ==> Try adding service Worker. 
            - Added injectManifest(sericeWorker) in webpack. This causes warning: multiple calls to injectMan in hmr 8080. 
            - Per warning, got rid of --watch from "npm run start" and "webpack --watch".  This did NOT help. 
            - Added registerRoute code to src-sw.js.  This **seemed** to work. Code still compiles at least. 
            - 3000 still works.  8080 still gives err msg. 
            - TESTING: Likely in Act15. Open Dev Chrome Tools. Applicaitons: Service Worker. 
                (a) There is a source.
                (b) Status is green. 
                - Confirmed mine is working. Great. 
            - Listened to 17-20. Seems that GenerateSW makes a "service worker", while InjectManifest makes a 
            "complex service worker" better called a manifest. 
    ==> Not 100% sure what "a generated HTML file, service worker, and a manifest file" are. 
            - Almost sure a "generated HTML file" is the index.html entry inside dist.
            - Think that my InjectManifest counts as a service worker. ???? 
            = Not sure what a "manifest file" is. Perhaps src-sw.js. ????
    ==> Time for Index DB.  At least want to start this.  
            - Noted that idb already in client/pj
            - Found partially complete src/js/database.js file. 
            - Note that jate shows up in indexDB tab in page console storage tab. 
    Note: Neither Mike nor Andrew had a soln for the htmlRoutes extra ../ issue, the hmr issue, or the server:dev no build. 
    
    Now Add service worker (cache) and manifest. 

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
    webpack -  Scrunch all the code, images, etc. into one big, ES6 old javascript, file. 
        - plugins to auto-generated index.html file, service worker and manifest
    IDB - Interent Database - DB on client side. 

## Acceptance Criteria   
-----------------------       
Create notes or code snippets with or without an internet connection
WHEN I open my CODE in my CODE editor => I should see a client server folder structure
WHEN I run `npm run start` from the root directory, application starts up the backend and serves the client
WHEN I run the text editor applcation from my terminal, my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins. I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application. the text editor still functions in the browser (babel)
WHEN I open the text editor, IndexedDB has immediately created a database storage
WHEN I enter content and click off of the DOM window. the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it, the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button, I download my web application as an icon on my desktop
WHEN I load my web application, I should have a registered service worker using workbox
WHEN I register a service worker, static assets are pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render, I should have proper build scripts for a webpack application

## Models (Not Tables) and Data Relationships.  
------------------------------------------------  
 
 


