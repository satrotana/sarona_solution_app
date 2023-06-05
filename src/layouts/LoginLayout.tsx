// import { Outlet } from 'react-router-dom';
import Input from '../components/input';
import { useCallback, useState } from 'react';

export const LoginLayout = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == 'login' ? 'register' : 'login'
    );
  }, []);

  return (
    <>
      <div className="h-full w-full">
        <div className="relative duration-700 transition-colors bg-white lg:bg-emerald-700 w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div className="bg-white px-10 self-center mt-2 w-[450px] rounded-md">
              <div className="flex py-10 flex-wrap place-items-center items-center justify-start">
                <nav className="pr-12">
                  <img
                    src="/public/SARORA_LOGO.png"
                    alt="Logo"
                    className="w-20"
                  />
                </nav>
                <h2 className="text-emerald-700 text-4xl font-semibold uppercase text-left">
                  {variant == 'login' ? 'Sign In' : 'Create an account'}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <Input
                  id="username"
                  value={username}
                  label="Username"
                  type="text"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                />

                {variant == 'register' && (
                  <Input
                    id="email"
                    value={email}
                    label="Email"
                    type="email"
                    onChange={(ev: any) => setEmail(ev.target.value)}
                  />
                )}
                <Input
                  id="password"
                  value={password}
                  label="Password"
                  type="password"
                  onChange={(ev: any) => setPassword(ev.target.value)}
                />
              </div>
              <button className="bg-emerald-700 uppercase duration-200 transition-colors hover:bg-emerald-800 text-white py-3 rounded-md mt-10 w-full">
                {variant == 'login' ? 'Login' : 'Sign Up'}
              </button>
              <p className="text-emerald-700 my-8">
                {variant == 'login'
                  ? 'First time using SARONA?'
                  : 'Already have an account?'}
                <span
                  onClick={toggleVariant}
                  className="text-emerald-600 ml-1 hover:cursor-pointer"
                >
                  {variant == 'login' ? 'Create an account' : 'login'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Login layout</h1>
      <Outlet /> */}
    </>
  );
};
