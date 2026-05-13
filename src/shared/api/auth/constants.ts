const queryKeys = {
  all: ['users'],
  session: () => [...queryKeys.all, 'session'],
  profile: (id: string) => [...queryKeys.all, 'profile', id],
};

export { queryKeys };
