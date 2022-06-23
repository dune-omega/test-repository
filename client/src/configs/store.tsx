type initState = {
  count: number;
};

export const UserConfig = {
  foo: {
    state: {
      count: 0,
    },
    reducer: {
      increment: (_: any, moduleState: initState, actionCTX: any) => {
        actionCTX.setState({ count: moduleState.count + 1 });
      },
    },
  },
};
