import { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Componants/Provider/AuthProvider';
import logo from '.././../assets/others/authentication2.png';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Successfully Registered');
      })
      .then(() => {
        const userInfo = {
          name: user.name,
          email: user.email,
        };
        axiosPublic.post('/users', userInfo).then(res => {
          if (res.data.insertedId) {
            console.log('success');
          }

          navigate('/');
        });
      });
    form.reset();
  };
  ``;
  return (
    <div>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex  lg:flex md:flex lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:mb-10 font-bold">SignUp now!</h1>
            <img className="h-[600px]" src={logo} alt="" />
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name: </span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>

              <small className="text-center">
                If haven't account please{' '}
                <strong>
                  <NavLink to={'/LogIn'}>Sign In</NavLink>
                </strong>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
