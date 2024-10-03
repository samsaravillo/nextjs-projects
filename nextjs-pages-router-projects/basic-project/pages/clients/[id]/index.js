import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "sam", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
