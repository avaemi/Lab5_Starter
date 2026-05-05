# Lab 5 - Starter
## Name
- Ava Emami
  

## GitHub Pages Links
- Expose: https://avaemi.github.io/Lab5_Starter/expose.html
- Explore: https://avaemi.github.io/Lab5_Starter/explore.html

## Check Your Understanding

**1. Would you use a unit test to test the "message" feature of a messaging application?**

No, a unit test isn't ideal for the "message" feature. Sending a message involves multiple components working together; the UI, the network request, the backend, and delivery to the recipient. That's better suited for integration or end-to-end testing. A unit test only verifies isolated logic, which doesn't capture whether the full flow actually works.

**2. Would you use a unit test to test the "max message length" feature of a messaging application?**

Yes, this is a perfect unit test candidate. The rule is a single, isolated piece of logic: input over 80 characters should be rejected. There are no external dependencies, it runs instantly, and a few test cases (79 chars, 80 chars, 81 chars, empty string) fully cover the behavior.