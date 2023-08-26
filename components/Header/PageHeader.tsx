import PageNav from "./PageNav";
import { useEffect, useState } from "react";

export default function PageHeader() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  let background_color = clientWindowHeight  < 200 ? 'bg-transparent' : 'bg-white';
  return (
    <header className="w-full fixed z-50">
      <PageNav background={background_color}/>
    </header>
  )
}
