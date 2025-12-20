import { saveUser } from "@/helpers/gql/api/save-user";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function Callback() {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {

    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        await saveUser(accessToken);

      } catch (error) {
      
      }
    })();

  }, []);

  return (
    <>

    </>
  );
}
