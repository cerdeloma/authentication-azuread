import { 
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from '@azure/msal-react';

const SignInButton = () => {
  const { instance } = useMsal();

  console.log('####################');
  console.log('## instance ##', instance);
  console.log('####################');

  return <button onClick={() => instance.loginRedirect()}>Sign in</button>
}

const WelcomeUser = () => {
  const { accounts } = useMsal();
  const username = accounts[0]?.username;

  console.log('####################');
  console.log('## accounts ##', accounts);
  console.log('####################');
  
  return <p>Welcome, { username } </p>
}

const SignOutButton = () => {
  const { instance } = useMsal(); 

  return <button onClick={() => instance.logoutRedirect()}>logout</button>
}

export default function Home() {
  
  return (
    <>
      <AuthenticatedTemplate>
        <WelcomeUser />
        <SignOutButton />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>fazer login</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </>
  )
}
