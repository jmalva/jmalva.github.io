---
layout: project
title: Addressbook
date: 2021-06-28
end: 2021-12-20
position: Software Developer
desc: A web-based address manager that allows you to search, add, edit, and delete contacts.
permalink: /addressbook/
proj-url: https://github.com/jmalva/AddressBookManager
img: adbLogo.svg
images: [https://raw.githubusercontent.com/jmalva/AddressBookManager/main/demo/demo.png, https://raw.githubusercontent.com/jmalva/AddressBookManager/main/demo/demo-search.png,https://raw.githubusercontent.com/jmalva/AddressBookManager/main/demo/demo-edit.png]
tech: [JavaScript, NextJS, TailwindCSS, ReactJS, Express, Redis]
---

#### About:
- Designed and built an address management API (using the provided components: `input`/`card`).
- Built the front-end, using `next.js` and `Tailwind CSS` to be interactive and integrated with my server.

#### Features:
- The address book shows every user with their address as a `card`.
- As you type in the search bar, the `cards` will narrow down to ones that match.
- Clicking on the `Add Address` or `Edit` button toggles the form editor and clicking on `Save` saves/edits a new user's address.
- When you click on `Delete` the user is deleted.
- Added `clear` button to clear search bar and refresh page.
- Added pagination to make it easier to navigate your contacts. 

#### Things I would change if I had more time:
- Change the redis database to a true relational database.
- Add sort-by to view your contacts in alphabetical order.
- Add option to import or export your contacts.