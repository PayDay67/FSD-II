from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory array to store student data
students = [
    {"id": 1, "name": "John Doe", "email": "john@example.com", "age": 20, "major": "Computer Science"},
    {"id": 2, "name": "Jane Smith", "email": "jane@example.com", "age": 21, "major": "Mathematics"},
    {"id": 3, "name": "Bob Johnson", "email": "bob@example.com", "age": 19, "major": "Physics"}
]

# Counter for generating unique student IDs
next_id = 4


# CREATE - Add a new student
@app.route('/api/students', methods=['POST'])
def create_student():
    global next_id
    
    data = request.get_json()
    
    # Validation
    if not data or not all(key in data for key in ['name', 'email', 'age', 'major']):
        return jsonify({"error": "Missing required fields: name, email, age, major"}), 400
    
    new_student = {
        "id": next_id,
        "name": data['name'],
        "email": data['email'],
        "age": data['age'],
        "major": data['major']
    }
    
    students.append(new_student)
    next_id += 1
    
    return jsonify(new_student), 201


# READ - Get all students
@app.route('/api/students', methods=['GET'])
def get_all_students():
    return jsonify(students), 200


# READ - Get a specific student by ID
@app.route('/api/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = next((s for s in students if s['id'] == student_id), None)
    
    if not student:
        return jsonify({"error": f"Student with ID {student_id} not found"}), 404
    
    return jsonify(student), 200


# UPDATE - Update a student by ID
@app.route('/api/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    student = next((s for s in students if s['id'] == student_id), None)
    
    if not student:
        return jsonify({"error": f"Student with ID {student_id} not found"}), 404
    
    data = request.get_json()
    
    # Update fields if provided
    if 'name' in data:
        student['name'] = data['name']
    if 'email' in data:
        student['email'] = data['email']
    if 'age' in data:
        student['age'] = data['age']
    if 'major' in data:
        student['major'] = data['major']
    
    return jsonify(student), 200


# DELETE - Delete a student by ID
@app.route('/api/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    global students
    
    student = next((s for s in students if s['id'] == student_id), None)
    
    if not student:
        return jsonify({"error": f"Student with ID {student_id} not found"}), 404
    
    students = [s for s in students if s['id'] != student_id]
    
    return jsonify({"message": f"Student with ID {student_id} deleted successfully"}), 200


# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "Server is running"}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
