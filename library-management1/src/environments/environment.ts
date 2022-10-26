// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // booklist:" http://localhost:3000/booklist/",
  booklist:"https://localhost:44377/Book/",

  // requestlist:"http://localhost:3000/requestlist/",
  requestlist: "https://localhost:44377/api/ReqBook/",

  // issuebooks:"http://localhost:3000/issuedBooks",
  issuebooks:"https://localhost:44377/api/IssuedBook/",

  // register:"http://localhost:3000/register/",
  register:"https://localhost:44377/api/LibUser", 
  oldregister:"http://localhost:3000/register/",

  // categorylist:" http://localhost:3000/categorylist"
  categorylist:"https://localhost:44377/api/Category",

  userlist:"https://localhost:44377/api/LibUser"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
