import MessagePerson from "../../components/MesssagePerson";
import StoreProvider from "../StoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}