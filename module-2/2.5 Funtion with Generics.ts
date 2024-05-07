{
  //* Function with Generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  // Array of dynamic type with generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGeneric<boolean>(true);
  const res3 = createArrayWithGeneric<{ name: string; age: number }>({
    name: "Rahad",
    age: 21,
  });
  console.log(res3);



  // Array of dynamic type tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>('Bangladesh', 1971)
  const res20 = createArrayWithTuple<string, string>('Bangladesh', 'Asia')


  const addCourseToStudent = <T>(student: T) => {
    const course = 'Next Level Web Development'
    return {
        ...student,
        course,
    }
  }

  const student1 = addCourseToStudent<{id: number; name: string;}>({
    id: 101,
    name: 'Noman',
  })
  const student2 = addCourseToStudent<{id: number; name: string; job: string}>({
    id: 101,
    name: 'Noman',
    job: 'Fulltime'
  })
}
