---
title: Instructions
date: 2016-01-09 14:01 UTC
type: project
---

# Creating an entry
To create a new entry in the timeline `middleman article --blog timeline "Title of the entry"`

Open `source/timeline/DATE_TODAY.*.html.markdown`, can use `Ctrl+E`

Replace `tags:` with `type: project` or other entry type (event, award, holiday, project, competition, teaching, **education**, learning, sport, **work**)

Enter the content in Markdown format for the entry below the 2nd `---`

Save the file.

# Moving an entry 
Rename the file in source/timeline/ENTRY to have the correct date. YYYY-MM-DD

Open the new file and use the same date in the `date: ...` line at the top. Time is likely irrelvant and can be left alone.kkk

# Running the site while you are working on it
enter in the terminal `middleman -p $PORT`

visit: [https://personal-website-will-hoffmann.c9users.io/](https://personal-website-will-hoffmann.c9users.io/) in a browser new tab

# Saving changes
type `git add --all` in the terminal

then type `git commit -m "MESSSAGE ABOUT WHAT YOU CHANGED"`

then publish the site with `bash deploy.sh` in the terminal.
