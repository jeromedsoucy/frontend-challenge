# NOTES

## TO DO

- router
  -- / (root) The initial step should have 3 fields: first name, email and password and a next button.
  -- /more-info The second step should have 2 fields: a favorite color select field and an agreement checkbox. A back button allows going back to the initial step and a next button to the confirmation screen.
  -- /confirmation: The third step is a read-only confirmation screen displaying the data collected in the 2 previous steps and a button to submit the form. A back button allows going back to to the previous step.
  -- /success: Final page to be shown if the form is successfully submitted. A restart button resets the data and returns to the initial step.
  -- /error An error page the user should be taken to if there are any server errors when submitting the form.
  -- redirection if refresh
- form
  -- validation
  -- components
- context
  -- save form info in the context
- services
  -- call color api
  -- submit
- loading
- fix github ssh stuff

# Specifications

- The list of colors to be displayed in the /more-info page should be built from the response to a GET request to http://localhost:3001/api/colors
- To submit the form data, use a POST request with an application/json content type to the http://localhost:3001/api/submit endpoint. The submitted data should look like:

```
{
    "name": "",
    "email": "",
    "password": "",
    "color": "",
    "terms": false
}
```

- Show the success / error page according to the HTTP status returned from the submit request.
- Add a loading indicator (spinner) to all API requests in order to provide UX feedback since the mocked server will have a delayed response

## Timesheet

- 11h-
