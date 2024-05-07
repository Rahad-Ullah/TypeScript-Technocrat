{
    //* Constraint
    // constraint --> forces to fix some type required

    const addCourseToStudent = <T extends {
        id: number;
        name: string;
        email: string;
    }>(student: T) => {
        const course = 'Next Level Web Development'
        return {
            ...student,
            course,
        }
      }
    
      const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
      }>({
        id: 101,
        name: 'Noman',
        email: 'x@gmail.com'
      })


      const student2 = addCourseToStudent({
        id: 102,
        name: 'Tuhin',
        email: 'y@mail.com',
        emni: 'emni'
      })
    
}