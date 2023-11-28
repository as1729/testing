// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="ReportingPeriods" titleTo="reportingPeriods" buttonLabel="New ReportingPeriod" buttonTo="newReportingPeriod">
        <Route path="/reporting-periods/new" page={ReportingPeriodNewReportingPeriodPage} name="newReportingPeriod" />
        <Route path="/reporting-periods/{id:Int}/edit" page={ReportingPeriodEditReportingPeriodPage} name="editReportingPeriod" />
        <Route path="/reporting-periods/{id:Int}" page={ReportingPeriodReportingPeriodPage} name="reportingPeriod" />
        <Route path="/reporting-periods" page={ReportingPeriodReportingPeriodsPage} name="reportingPeriods" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Uploads" titleTo="uploads" buttonLabel="New Upload" buttonTo="newUpload">
        <Route path="/uploads/new" page={UploadNewUploadPage} name="newUpload" />
        <Route path="/uploads/{id:Int}/edit" page={UploadEditUploadPage} name="editUpload" />
        <Route path="/uploads/{id:Int}" page={UploadUploadPage} name="upload" />
        <Route path="/uploads" page={UploadUploadsPage} name="uploads" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/hello" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
