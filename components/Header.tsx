import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
        {/* left side */}
        <div className="flex space-x-2 items-center">
            <Image
                src={'https://links.papareact.com/4t3'}
                height={30}
                width={30}
                alt={'logo'}
            />

            <div>
                <h1 className="font-bold">
                  <span className="text-green-500"> AI </span> Image Generator
                </h1>

                <h4 className="text-xs"> Powered by DALL-E | Chat GPT </h4>
            </div>
        </div>


        {/*  Right side*/}
        <div className="flex text-xs md:text-base divide-x items-center">
            <Link
              href={""}
              className="px-2 font-light text-right"
            >
            
            </Link>
            <Link
              href={""}
              className="px-2 font-light text-right"
            >
      
            </Link>
        </div>

    </header>
  )
}

export default Header