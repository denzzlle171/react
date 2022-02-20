

const baseUrl = 'https://61b61e94c95dd70017d40e50.mockapi.io/tasks'
// const baseUrl =
//   'https://crudcrud.com/api/71a4d66fd2f9472897d7f8612670522a/tasks';

export const createTask = taskData => {
   return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;utc-8',
      },
      body: JSON.stringify(taskData),
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Faild to create task');
      }
    });
}


export const fetchTasksList = () => {
  return  fetch(baseUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(tasksList => 
        tasksList.map(({ _id, ...task }) => ({
          id: _id,
          ...task,
        })),
     );
 }

export const updateTask = (taskId, TadkData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;utc-8',
    },
    body: JSON.stringify(TadkData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }
  });
}

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
       method: 'DELETE',
     }).then((response) => {
       if (!response.ok) {
         throw new Error('Failed to delete task');
       }
     });
}

