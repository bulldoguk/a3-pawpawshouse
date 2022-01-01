# Apostrophe 3  / Bulldoguk demo and test project

## Background
This project is an evolution of the Apostrophe 3 boilerplate project.  For my work, I had some specific additions that I needed to make for my customers - so I decided to document those changes and create my own boilerplate starting point.  I also used this boilerplate as a way to transfer my own site from Apostrophe 2 to Apostrophe 3 - you can see the documentation for that process at [pawpawshouse.com](https://pawpawshouse.com/converting-to-apostrop)

## Get started

Install dependencies: `npm install`

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## Making it your own

This boilerplate is designed so you can install and start running it right away. If you are starting a project that will go into production one day, there are a few things you should be sure to check:

- [ ] **Update the shortname.** The `shortname` option in `app.js` is used for the database name (unless another is given in the `@apostrophecms/db` module). You should change this to an appropriate project name before you start adding any users or content you would like to keep.
- [ ] **Update the Express.js session secret.** The secret is set to `undefined` initially in the `modules/@apostrophecms/express/index.js` file. You should update this to a unique string.
- [ ] **Decide if you want hot reloading on.** This boilerplate uses nodemon to restart the app when files are changed. In `modules/apostrophecms/asset/index.js` there is an option enabled to refresh the browser on restart. If you like this, do nothing. If you don't, remove the option or set it to `false`. The option has no effect when the app is in production.

## You really want the docs

Right now, [all the juicy info is in the A3 docs](https://a3.docs.apostrophecms.org), so head over there and start reading! This boilerplate project is a fun introduction to the UI, but you'll want to know more to really try it out.

