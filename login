cURL Command:
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "venky@test.com",
  "password": "123456"
}'

Output:
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzc0ODUyMjM2fQ.cDS773tjNnJv5ZBCOw2pHyZVVcXf-SQwasTc8iM58xU"}%
