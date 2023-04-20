type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: ConstrainBoolean;
};

function Greet(props: GreetProps) {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      {isLoggedIn ? (
        <p>
          Welcome {name}!, You have {messageCount} messages.
        </p>
      ) : (
        <p>Welcome Guest!</p>
      )}
    </div>
  );
}

export default Greet;
