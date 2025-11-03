# Post-Login Redirect Tasks

This document outlines the steps required to implement a post-login page and redirect users to the homepage upon signout in the Yika (忆卡) Chinese Flash Card App.

```markdown
- [x] Create a new page component for the post-login destination (e.g., `app/dashboard/page.tsx`).
- [x] Update the login logic to redirect users to the post-login page after successful authentication.
- [ ] Update the signout logic to redirect users to the homepage (`/`) after signing out.
- [ ] Ensure authentication state is checked on the post-login page and redirect unauthenticated users to the login page or homepage.
- [ ] Add navigation (e.g., a button or link) to allow users to sign out from the post-login page.
- [ ] Test the login and signout flows to verify correct redirection and authentication state handling.
```

---

Refer to this checklist as you implement and verify the post-login and signout redirect features.