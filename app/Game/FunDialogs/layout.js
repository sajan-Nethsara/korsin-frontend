import { FunDialogsProvider } from "../../../context/funDialog";

export default function RootLayout({ children }) {
  return (
  
        <FunDialogsProvider>{children}</FunDialogsProvider>
  );
}
