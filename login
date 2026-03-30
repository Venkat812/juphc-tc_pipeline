cURL Command:
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "venky@test.com",
  "password": "123456"
}'

Output:
{"message":"Login successful","user":{"email":"venky@test.com","name":"Venky"}
