import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { authentication, db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  height: 100vw;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

function Chat({ chat, messages }) {
  const [user] = useAuthState(authentication);
  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}
export default Chat;

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);

  const messagesRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((message) => ({
      ...message,
      timestamp: message.timestamp.toDate().getTime(),
    }));

  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };
  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
