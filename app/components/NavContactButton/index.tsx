import "./styles.sass";

type NavContactButtonProps = {
  isPurple?: boolean;
}

export default function NavContactButton({isPurple = false}: NavContactButtonProps) {
  return (
    <>
      {
        <div>
          <a
            href="https://www.instagram.com/direct/t/17842540389169007"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-transparent  font-normal  py-3 px-4 border hover:border-transparent rounded-full
              ${isPurple ? "border-white text-white hover:bg-white hover:text-purple":"border-purple text-purple hover:bg-purple hover:text-white"}`} 
          >
            Contáctanos
          </a>
        </div>
      }
    </>
  );
}
