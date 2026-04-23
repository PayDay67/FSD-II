# Quick Start Guide

## Step 1: Install Flask
Open a terminal/command prompt and run:
```
pip install -r requirements.txt
```

## Step 2: Start the Server
In the same terminal, run:
```
python app.py
```

You should see:
```
* Running on http://0.0.0.0:5000
```

## Step 3: Test with Postman

### Option A: Import the Collection
1. Open Postman
2. Click "File" → "Import"
3. Select `Student_CRUD_API.postman_collection.json`
4. The collection will appear with all 6 pre-built requests

### Option B: Manual Requests
Use the endpoints listed in README.md to manually create requests in Postman.

## Sample Data
The API comes with 3 default students:
- John Doe (ID: 1) - Computer Science
- Jane Smith (ID: 2) - Mathematics  
- Bob Johnson (ID: 3) - Physics

## Testing Workflow
1. ✅ Send Health Check (GET /api/health)
2. ✅ View all students (GET /api/students)
3. ✅ Get a specific student (GET /api/students/1)
4. ✅ Create a new student (POST /api/students)
5. ✅ Update a student (PUT /api/students/1)
6. ✅ Delete a student (DELETE /api/students/1)

## Troubleshooting
- **Port 5000 in use?** Change port in app.py line 93: `port=5001`
- **Module not found error?** Make sure Flask is installed: `pip install Flask==2.3.2`
- **Connection refused?** Ensure the server is running before testing

Happy testing! 🚀
