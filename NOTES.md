# NOTES

## TO DO

- ~~/ (root) The initial step should have 3 fields: first name, email and password and a next button.~~
- ~~/more-info The second step should have 2 fields: a favorite color select field and an agreement checkbox. A back button allows going back to the initial step and a next button to the confirmation screen.~~
- ~~/confirmation: The third step is a read-only confirmation screen displaying the data collected in the 2 previous steps and a button to submit the form. A back button allows going back to to the previous step.~~
- ~~/success: Final page to be shown if the form is successfully submitted. A restart button resets the data and returns to the initial step.~~
- ~~/error An error page the user should be taken to if there are any server errors when submitting the form.~~
- ~~The list of colors to be displayed in the /more-info page should be built from the response to a GET request to http://localhost:3001/api/colors~~
- ~~To submit the form data, use a POST request with an application/json content type to the http://localhost:3001/api/submit endpoint.~~
- ~~Show the success / error page according to the HTTP status returned from the submit request.~~
- ~~Add a loading indicator (spinner) to all API requests in order to provide UX feedback since the mocked server will have a delayed response~~
- ~~Use react context to save form data across page~~

# Bonus

- ~~Nice UI: bootstrap, mui & google material~~
- Terms and conditions overlay
- Redirect to home after reload
- ~~Components~~
- Form validation

## Timesheet

- 11h-11h45 (45min)
- add react router, pages and formik
- 14h30-15:45 (1h15min)
  - add eslint, prettier and setup vscode to apply code formating on auto save. (I like clean code 🥰) but I had some issue for installing the latest eslint. CRA did not like that very much.
  - start creating components
  - having a snack
- 15:50-16:50 (1h)
  - Create context to store the form data
- 19:30-19:45 (15min)
  - fix issue related to context not keeping the state across pages
  - update the sate on each step and display the content in Confirmation page.
- 20:30-21:15 (45min)
  - implement submit api logic (success vs error)
  - add loading when interacting with APIs
  - reset store when user restart the process from success or error page
  - prefill the forms with the data in the store when user go back and forward the steps
- 21:30-22:40 (1h10min)
  - Make it pretty with bootstrap
  - Add progress bar at the top
  - Add pretty loading when interacting with APIs
  - Fix bug with color dropdown
