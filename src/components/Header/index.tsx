import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as  Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logo.svg";
export function Header() {
    return (
        <HeaderContainer>
          <HeaderContent>
            <img src={logo} />

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewTransactionButton type="button">
                        Nova transação
                    </NewTransactionButton>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay />
                    <Dialog.Content>
                        <Dialog.Title>Nova transação</Dialog.Title>
                        <Dialog.Close/>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}