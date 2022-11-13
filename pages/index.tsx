import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import dynamic from "next/dynamic"


const MyAwesomeMap = dynamic(() =>import('../components/Map/Map.js'), { ssr:false });

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <MyAwesomeMap />
    </>
  );
}
