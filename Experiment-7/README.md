# Student CRUD API - Flask Backend

A simple Flask-based RESTful API for managing student records with in-memory data storage.

## Features

- **Create** - Add new student records
- **Read** - Retrieve all students or a specific student
- **Update** - Modify student information
- **Delete** - Remove student records
- In-memory array storage (data resets on server restart)

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Server
```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Check if server is running

### Students CRUD Operations

#### 1. Create a Student
- **Method:** `POST`
- **Endpoint:** `/api/students`
- **Headers:** `Content-Type: application/json`
- **Body:**
```json
{
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 22,
  "major": "Engineering"
}
```
- **Response:** 201 Created
```json
{
  "id": 4,
  "name": "Alice Brown",
  "email": "alice@example.com",
  "age": 22,
  "major": "Engineering"
}
```

#### 2. Get All Students
- **Method:** `GET`
- **Endpoint:** `/api/students`
- **Response:** 200 OK
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 20,
    "major": "Computer Science"
  },
  ...
]
```

#### 3. Get a Specific Student
- **Method:** `GET`
- **Endpoint:** `/api/students/1`
- **Response:** 200 OK
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20,
  "major": "Computer Science"
}
```

#### 4. Update a Student
- **Method:** `PUT`
- **Endpoint:** `/api/students/1`
- **Headers:** `Content-Type: application/json`
- **Body:** (Update any field)
```json
{
  "name": "John Updated",
  "age": 21
}
```
- **Response:** 200 OK

#### 5. Delete a Student
- **Method:** `DELETE`
- **Endpoint:** `/api/students/1`
- **Response:** 200 OK
```json
{
  "message": "Student with ID 1 deleted successfully"
}
```

## Testing with Postman

### Import Collection (Optional)
You can manually create requests or import the collection by following the steps below.

### Manual Testing Steps

1. **Open Postman**
2. **Test Health Check:**
   - Create a new request: `GET http://localhost:5000/api/health`
   - Click Send

3. **Get All Students:**
   - Create a new request: `GET http://localhost:5000/api/students`
   - Click Send

4. **Create a Student:**
   - Create a new request: `POST http://localhost:5000/api/students`
   - Go to Headers tab, add `Content-Type: application/json`
   - Go to Body tab, select "raw" and "JSON"
   - Paste the JSON data from the endpoints section above
   - Click Send

5. **Get Specific Student:**
   - Create a new request: `GET http://localhost:5000/api/students/1`
   - Click Send

6. **Update a Student:**
   - Create a new request: `PUT http://localhost:5000/api/students/1`
   - Set headers and body like the Create request
   - Click Send

7. **Delete a Student:**
   - Create a new request: `DELETE http://localhost:5000/api/students/1`
   - Click Send

## Example cURL Commands

```bash
# Health check
curl http://localhost:5000/api/health

# Get all students
curl http://localhost:5000/api/students

# Get specific student
curl http://localhost:5000/api/students/1

# Create student
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","age":22,"major":"Engineering"}'

# Update student
curl -X PUT http://localhost:5000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"age":21}'

# Delete student
curl -X DELETE http://localhost:5000/api/students/1
```

## Notes

- Data is stored in-memory only and will be reset when the server restarts
- All IDs are auto-incremented
- Validation ensures required fields are provided on creation
- Error responses include descriptive messages

## Status Codes

- `200 OK` - Successful GET/PUT/DELETE
- `201 Created` - Successful POST
- `400 Bad Request` - Missing or invalid data
- `404 Not Found` - Student ID not found

