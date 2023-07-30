import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";

const userHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setData(user); // Update the data state whenever the authentication state changes
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }); // Only run the effect once, when the component mounts

  return {
    data,
    setData,
  };
};

export default userHook;
