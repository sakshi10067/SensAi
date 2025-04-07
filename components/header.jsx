import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
    <div>
    <SignedOut>
      <SignInButton />
      </SignedOut>
    <SignedIn>
      <UserButton />
      </SignedIn>
    </div>
    </header>
  );
};

export default Header;
