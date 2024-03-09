import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store.ts";
import { useEffect } from "react";
import { fetchUser } from "../features/auth/authActions.ts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useGetUserQuery() {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (auth.user !== null || auth.isLoading || !token) {
      return;
    }

    dispatch(fetchUser());
  }, []);

  const user = auth.user;
  const isAuthorized = auth.user !== null;
  const isLoading = auth.isLoading;

  return { user, isAuthorized, isLoading };
}
