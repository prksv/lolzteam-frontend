import { closeModal } from "../../features/modal/modalSlice.ts";
import { ModalOverlay, Modal as BaseModal } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { RootState } from "../../app/store.ts";
import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  id: string;
};

export function Modal({ id, children }: ModalProps) {
  const modal = useAppSelector((state: RootState) => state.modals[id]);

  const dispatch = useAppDispatch();

  return (
    <BaseModal isOpen={modal.isOpen} onClose={() => dispatch(closeModal(id))}>
      <ModalOverlay />
      {children}
    </BaseModal>
  );
}
