import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className='text-3xl font-bold underline'>bao</h1>
      <Link to='/about' className='text-xl text-blue-600 underline'>
        About
      </Link>
      <Link to='/works' className='text-xl text-blue-600 underline'>
        Works
      </Link>
      <Link to='/contact' className='text-xl text-blue-600 underline'>
        Contact
      </Link>
    </div>
  );
}
