import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.query.database);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      const response = ['This is the list of our students'];
      fields.forEach((field) => {
        const studentsList = students[field].join(', ');
        response.push(`Number of students in ${field}: ${students[field].length}. List: ${studentsList}`);
      });
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(req.query.database);
      const studentsList = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${studentsList}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
