import { createSelector } from "reselect";

const selectAccount = state => state.account;

export const selectUser = createSelector(
  selectAccount,
  account => account.user
);
