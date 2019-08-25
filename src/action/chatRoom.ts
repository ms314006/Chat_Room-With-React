export const CREATE_USER = 'CREATE_USER';

export const createUser = (nickname: string) => ({
  type: CREATE_USER,
  payload: {
    nickname,
  },
});
