const cards = [
  {
    id: 'card-1',
    title: 'Make frontend responsive',
  },
  {
    id: 'card-2',
    title: 'Do unit testing',
  },
  {
    id: 'card-3',
    title: 'Deploy the web application',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'TODO',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'ASSIGNED',
      cards : [],
    },
    'list-3': {
      id: 'list-3',
      title: 'IN PROGRESS,',
      cards : [],
    },
    'list-4': {
      id: 'list-4',
      title: 'DONE',
      cards : [],
    },
  },
  listIds: ['list-1','list-2','list-3','list-4'],
};

export default data;
