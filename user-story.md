# User Story

## Title
View Available Items

## User Story
As a user, I want to view a list of available second-hand items so that I can choose items to buy.

## Details and Assumptions
- The user can access the system without logging in.
- The items are stored in MongoDB.
- Each item contains name, category, condition, and description.
- The API endpoint `/api/secondchance/items` returns all items.

## Acceptance Criteria
- User can access the items endpoint successfully.
- The system returns a list of items in JSON format.
- Each item contains name, category, condition, and description.
- The response status code should be 200.
- The list should display multiple items (at least 1).
