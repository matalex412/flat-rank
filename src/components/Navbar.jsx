"use client";

import React, { useState } from "react";
import PreferenceSelector from "./PreferenceSelector";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav>
      <PreferenceSelector />
    </nav>
  );
};

export default Navbar;
