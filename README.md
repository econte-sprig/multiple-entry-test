This is a test of multiple entry points as a means of packaging the different modules of our sdk. 

Just run npm run build in the topmost directory. Then go into the test apps and npm i followed by npm run start or npm run build. You will see that the generated react apps correctly register the modules and everything works properly. In the partial test app, look at the bundle generated and you will see it leaves out the js of the mouse-logger module which was not imported.
