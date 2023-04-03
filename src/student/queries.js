const getstudents = 'SELECT * FROM students';
const getstudentsbyid = 'SELECT * FROM students WHERE id = $1'
const checkEmailExits = 'SELECT s FROM students s WHERE s.email = $1'
const addstudent = 'INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)'
const removestudent = 'DELETE FROM students WHERE id = $1'
const updatestudent = 'UPDATE students SET name = $1 WHERE id = $2'
module.exports= {
    getstudents,
    getstudentsbyid,
    checkEmailExits,
    addstudent,
    removestudent,
    updatestudent,
}