import ProfileButton from "@/components/buttons/profile-button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <p>
          Hey <span>👋</span>! My name is
        </p>
        <p className="text-7xl lg:text-left  text-orange-300 text-center">
          Sriram Vadlamani
        </p>
      </div>
      <div className="flex flex-row  items-center justify-evenly">
        <ProfileButton action="Download CV" path="/cv.pdf" />
        <ProfileButton
          action="Hire me"
          path="mailto:sriram.vadlamani@proton.me"
        />
      </div>
    </>
  );
}
