import MessagePerson from "@/components/MessagePerson";

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